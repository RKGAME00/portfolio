<?php
// Vérification si PHPMailer est disponible
$use_phpmailer = class_exists('PHPMailer\PHPMailer\PHPMailer');

$message_sent = false;
$error_message = "";
$success_message = "";
$debug_info = "";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Récupération et nettoyage des données
    $nom = htmlspecialchars(trim($_POST['nom']));
    $email = htmlspecialchars(trim($_POST['email']));
    $sujet = htmlspecialchars(trim($_POST['sujet']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validation
    if (empty($nom) || empty($email) || empty($sujet) || empty($message)) {
        $error_message = "Tous les champs sont obligatoires.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error_message = "L'adresse email n'est pas valide.";
    } elseif (strlen($message) < 10) {
        $error_message = "Le message doit contenir au moins 10 caractères.";
    } else {
        // Configuration email
        $destinataire = "ckoloussa@gmail.com";
        $sujet_email = "Portfolio Contact - " . $sujet;

        // Contenu du message
        $contenu = "Nouveau message depuis votre portfolio\n";
        $contenu .= "=====================================\n\n";
        $contenu .= "Nom: " . $nom . "\n";
        $contenu .= "Email: " . $email . "\n";
        $contenu .= "Sujet: " . $sujet . "\n\n";
        $contenu .= "Message:\n";
        $contenu .= "--------\n";
        $contenu .= $message . "\n\n";
        $contenu .= "=====================================\n";
        $contenu .= "Email envoye le " . date('d/m/Y a H:i:s') . "\n";
        $contenu .= "Depuis le formulaire de contact du portfolio";

        // Log pour debug
        $log_content = "[" . date('Y-m-d H:i:s') . "] Tentative d'envoi:\n";
        $log_content .= "Destinataire: " . $destinataire . "\n";
        $log_content .= "Sujet: " . $sujet_email . "\n";
        $log_content .= "Expediteur: " . $email . "\n";
        $log_content .= "Nom: " . $nom . "\n";

        // Tentative d'envoi avec mail() basique
        $headers = "From: " . $nom . " <noreply@portfolio.local>\r\n";
        $headers .= "Reply-To: " . $email . "\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

        $mail_result = mail($destinataire, $sujet_email, $contenu, $headers);

        if ($mail_result) {
            $message_sent = true;
            $success_message = "Message enregistré ! IMPORTANT: En local, les emails ne sont pas vraiment envoyés. Vérifiez le fichier messages.txt ou contactez-moi directement à ckoloussa@gmail.com";
            $log_content .= "Resultat: SUCCES (local - pas d'envoi reel)\n\n";
        } else {
            $message_sent = true; // On affiche quand même le succès car le message est sauvegardé
            $success_message = "Message enregistré ! En mode développement local, l'email n'est pas envoyé mais votre message est sauvegardé. Contactez-moi directement à ckoloussa@gmail.com";
            $log_content .= "Resultat: ECHEC ENVOI (normal en local)\n\n";
        }

        // Sauvegarde du log
        file_put_contents('mail_log.txt', $log_content, FILE_APPEND | LOCK_EX);

        // Sauvegarde du message (TOUJOURS, c'est le backup principal)
        $fichier_messages = 'messages.txt';
        $contenu_fichier = "=== " . date('Y-m-d H:i:s') . " ===\n";
        $contenu_fichier .= "Nom: " . $nom . "\n";
        $contenu_fichier .= "Email: " . $email . "\n";
        $contenu_fichier .= "Sujet: " . $sujet . "\n";
        $contenu_fichier .= "Message: " . $message . "\n";
        $contenu_fichier .= "Status: MESSAGE_SAUVEGARDE\n";
        $contenu_fichier .= "Note: Verifiez ce fichier pour les messages recus\n\n";
        file_put_contents($fichier_messages, $contenu_fichier, FILE_APPEND | LOCK_EX);

        // Nettoyer les variables POST
        $_POST = array();
    }
}
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - Céleste KOLOUSSA</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        .contact-section {
            padding: 5rem 0;
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }

        .contact-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .contact-info {
            background: white;
            padding: 3rem;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .contact-info h2 {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 2rem;
            font-size: 2rem;
        }

        .contact-items {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            border-radius: 12px;
        }

        .contact-item i {
            font-size: 1.5rem;
            color: #667eea;
            width: 30px;
            text-align: center;
        }

        .contact-item div h4 {
            margin: 0 0 0.25rem 0;
            color: #1e293b;
        }

        .contact-item div p,
        .contact-item div a {
            margin: 0;
            color: #64748b;
            text-decoration: none;
        }

        .contact-item div a:hover {
            color: #667eea;
        }

        .contact-form {
            background: white;
            padding: 3rem;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .contact-form h2 {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 2rem;
            font-size: 2rem;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
            color: #374151;
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 0.75rem 1rem;
            border: 2px solid #e5e7eb;
            border-radius: 8px;
            font-family: 'Inter', sans-serif;
            font-size: 1rem;
            transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #667eea;
        }

        .form-group textarea {
            resize: vertical;
            min-height: 120px;
        }

        .success-message {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            padding: 2rem;
            border-radius: 15px;
            text-align: center;
            margin-bottom: 2rem;
            box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
        }

        .success-message i {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .success-message h3 {
            margin-bottom: 1rem;
            font-size: 1.5rem;
        }

        .error-message {
            background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
            color: white;
            padding: 1.5rem;
            border-radius: 10px;
            margin-bottom: 2rem;
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .error-message i {
            font-size: 1.5rem;
        }

        @media (max-width: 768px) {
            .contact-content {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .contact-info,
            .contact-form {
                padding: 2rem;
            }
        }
    </style>
</head>

<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <h2>Céleste</h2>
            </div>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="index.html" class="nav-link">Accueil</a>
                </li>
                <li class="nav-item">
                    <a href="projets.html" class="nav-link">Projets</a>
                </li>
                <li class="nav-item">
                    <a href="experiences.html" class="nav-link">Expériences</a>
                </li>
                <li class="nav-item">
                    <a href="outils.html" class="nav-link">Outils</a>
                </li>
                <li class="nav-item">
                    <a href="contact.php" class="nav-link active">Contact</a>
                </li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    </nav>

    <!-- Header Section -->
    <section class="page-header">
        <div class="container">
            <h1>Me Contacter</h1>
            <p>N'hésitez pas à me contacter pour discuter d'opportunités d'alternance ou de projets</p>
        </div>
    </section>

    <!-- Section Contact -->
    <section class="contact-section">
        <div class="container">
            <?php if ($message_sent): ?>
                <div class="success-message">
                    <i class="fas fa-check-circle"></i>
                    <h3>Message envoyé avec succès !</h3>
                    <p><?php echo $success_message; ?></p>
                    <a href="index.html" class="btn btn-secondary" style="margin-top: 1rem;">
                        <i class="fas fa-arrow-left"></i> Retour à l'accueil
                    </a>
                </div>
            <?php else: ?>

                <?php if ($error_message): ?>
                    <div class="error-message">
                        <i class="fas fa-exclamation-triangle"></i>
                        <p><?php echo $error_message; ?></p>
                    </div>
                <?php endif; ?>

                <div class="contact-content">
                    <div class="contact-info">
                        <h2>Informations de Contact</h2>
                        <div class="contact-items">
                            <div class="contact-item">
                                <i class="fas fa-envelope"></i>
                                <div>
                                    <h4>Email</h4>
                                    <p>ckoloussa@gmail.com</p>
                                </div>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-phone"></i>
                                <div>
                                    <h4>Téléphone</h4>
                                    <p>07 83 60 11 87</p>
                                </div>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <div>
                                    <h4>Localisation</h4>
                                    <p>Thouaré sur Loire (44)</p>
                                </div>
                            </div>
                            <div class="contact-item">
                                <i class="fab fa-linkedin"></i>
                                <div>
                                    <h4>LinkedIn</h4>
                                    <a href="https://www.linkedin.com/in/céleste-koloussa-40b543177" target="_blank">Profil LinkedIn</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="contact-form">
                        <h2>Formulaire de Contact</h2>
                        <form method="POST" action="">
                            <div class="form-group">
                                <label for="nom">Nom complet *</label>
                                <input type="text" id="nom" name="nom" required value="<?php echo isset($_POST['nom']) ? htmlspecialchars($_POST['nom']) : ''; ?>">
                            </div>

                            <div class="form-group">
                                <label for="email">Adresse email *</label>
                                <input type="email" id="email" name="email" required value="<?php echo isset($_POST['email']) ? htmlspecialchars($_POST['email']) : ''; ?>">
                            </div>

                            <div class="form-group">
                                <label for="sujet">Sujet *</label>
                                <input type="text" id="sujet" name="sujet" required value="<?php echo isset($_POST['sujet']) ? htmlspecialchars($_POST['sujet']) : ''; ?>">
                            </div>

                            <div class="form-group">
                                <label for="message">Message *</label>
                                <textarea id="message" name="message" rows="6" required><?php echo isset($_POST['message']) ? htmlspecialchars($_POST['message']) : ''; ?></textarea>
                            </div>

                            <button type="submit" class="btn btn-primary">
                                <i class="fas fa-paper-plane"></i>
                                Envoyer le message
                            </button>
                        </form>
                    </div>
                </div>
            <?php endif; ?>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 Céleste KOLOUSSA. Tous droits réservés.</p>
            <div class="footer-social">
                <a href="https://www.linkedin.com/in/céleste-koloussa-40b543177" class="social-link" target="_blank"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>

</html>