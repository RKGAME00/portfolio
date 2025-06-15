<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Récupération et nettoyage des données
    $nom = htmlspecialchars(trim($_POST['nom']));
    $email = htmlspecialchars(trim($_POST['email']));
    $sujet = htmlspecialchars(trim($_POST['sujet']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validation simple
    $erreurs = array();

    if (empty($nom)) {
        $erreurs[] = "Le nom est requis.";
    }

    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $erreurs[] = "Un email valide est requis.";
    }

    if (empty($sujet)) {
        $erreurs[] = "Le sujet est requis.";
    }

    if (empty($message)) {
        $erreurs[] = "Le message est requis.";
    }

    // Si pas d'erreurs, traiter le formulaire
    if (empty($erreurs)) {
        // Configuration email
        $destinataire = "celeste.koloussa@etu.univ-nantes.fr"; // Email de Céleste
        $sujet_email = "Portfolio - " . $sujet;

        // Contenu de l'email
        $contenu = "
        Nouveau message depuis votre portfolio:
        
        Nom: $nom
        Email: $email
        Sujet: $sujet
        
        Message:
        $message
        
        ---
        Email envoyé depuis le formulaire de contact du portfolio
        ";

        // Headers
        $headers = array();
        $headers[] = "From: " . $nom . " <" . $email . ">";
        $headers[] = "Reply-To: " . $email;
        $headers[] = "Content-Type: text/plain; charset=UTF-8";

        // Tentative d'envoi
        if (mail($destinataire, $sujet_email, $contenu, implode("\r\n", $headers))) {
            $succes = "Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.";
        } else {
            $erreur_envoi = "Une erreur s'est produite lors de l'envoi. Veuillez réessayer.";
        }

        // Alternative: Sauvegarder dans un fichier (pour test)
        $fichier_messages = 'messages.txt';
        $contenu_fichier = date('Y-m-d H:i:s') . " - " . $nom . " (" . $email . "): " . $message . "\n";
        file_put_contents($fichier_messages, $contenu_fichier, FILE_APPEND | LOCK_EX);
    }
}
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <style>
        .message {
            padding: 1rem;
            margin: 1rem 0;
            border-radius: 8px;
            text-align: center;
        }

        .succes {
            background: #22c55e;
            color: white;
        }

        .erreur {
            background: #ef4444;
            color: white;
        }

        .retour {
            display: inline-block;
            margin-top: 2rem;
            padding: 1rem 2rem;
            background: var(--primary-color);
            color: white;
            text-decoration: none;
            border-radius: 8px;
            transition: all 0.3s ease;
        }

        .retour:hover {
            transform: translateY(-2px);
        }
    </style>
</head>

<body>
    <div class="container" style="padding-top: 100px; min-height: 100vh; display: flex; align-items: center; justify-content: center;">
        <div style="text-align: center; max-width: 600px;">
            <?php if (isset($succes)): ?>
                <div class="message succes">
                    <h2>✅ Message envoyé !</h2>
                    <p><?php echo $succes; ?></p>
                </div>
            <?php elseif (isset($erreur_envoi)): ?>
                <div class="message erreur">
                    <h2>❌ Erreur</h2>
                    <p><?php echo $erreur_envoi; ?></p>
                </div>
            <?php elseif (!empty($erreurs)): ?>
                <div class="message erreur">
                    <h2>❌ Erreurs détectées</h2>
                    <ul style="text-align: left; margin-top: 1rem;">
                        <?php foreach ($erreurs as $erreur): ?>
                            <li><?php echo $erreur; ?></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            <?php endif; ?>

            <a href="index.html" class="retour">← Retour au portfolio</a>
        </div>
    </div>
</body>

</html>