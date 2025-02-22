/*
 *  Copyright (c) 2025 Florian Nadin
 *   All rights reserved.
 *   Last modified 31/07/2022 18:11
 *
 *   Ce fichier fait partie du logiciel cédé conformément au contrat signé entre les parties.
 *
 *   Toute utilisation, modification ou distribution du code source est soumise aux conditions de la cession :
 *   - Le logiciel est fourni en l'état, sans garantie d'aucune sorte.
 *   - L'utilisation est restreinte à l'usage prévu par le cessionnaire.
 *   - Toute reproduction ou commercialisation du code sans autorisation expresse est interdite.
 *   - Le cessionnaire est tenu de préserver la confidentialité du code source.
 *
 *   Voir le fichier README.md pour plus de détails sur les conditions d'utilisation.
 *
 */

if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyBshY0ECAR3WMy4g0AtgObFVqwVzVw_vLc",
  "appId": "1:804536175480:web:60413116d583c5f001168d",
  "authDomain": "goldenmenu-d5970.firebaseapp.com",
  "databaseURL": "https://goldenmenu-d5970.firebaseio.com",
  "measurementId": "G-FJR3DB1RER",
  "messagingSenderId": "804536175480",
  "projectId": "goldenmenu-d5970",
  "storageBucket": "goldenmenu-d5970.appspot.com"
});