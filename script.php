<?php

$nom = ($_POST['nom']);
$prenom = ($_POST['prenom']);
$email = ($_POST['text1']);
$sujet = ($_POST['sujet']);
$message = ($_POST['message']);

$to = "kikicacazizi7@gmail.com";
$body = "De la part de : $nom $prenom, $email \n\nMessage: \n$message \n\nCordialement, $nom $prenom.";

// if (!empty($email) && !empty($message)) {
//   if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
//     $to = "kikicacazizi7@gmail.com";
//     $body = "De la part de : $nom $prenom, $email \n\nMessage: \n$message \n\nCordialement, $nom $prenom.";

//       if (mail($to, $sujet, $body)) {
//        echo "Message envoyé";
//       } else {
//         echo "Désolé, message non envoyé!";
//       }
//   }

//   else {
//     echo "Email invalide!";
//   }

// }

// else {
//   echo "Email et message vides!";
// }

// if (!empty($email) && !empty($message)) {
//   echo "Les champs nécessaires ont été remplis";
// } else {
//   echo "Email et message vides!";
// }

// if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
//   echo "Email valide";
// } else {
//   echo "Email non valide!";
// }

if (!empty($email) && !empty($message)) {
  if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    mail($to, $sujet, $body);
    // echo "<script>alert(\"Message envoyé\")</script>";
    echo "Message envoyé";
  } else {
    // echo "<script>alert(\"Message non envoyé\")</script>";
    echo "Message non envoyé";
  }
}

?>