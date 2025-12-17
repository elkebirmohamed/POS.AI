# Feuille de Route (Roadmap) - POS.AI Activation

## 📍 Phase 1 : MVP & Flux de Paiement (Terminé)
- [x] Formulaire ultra-léger et validation des entrées.
- [x] Persistance locale des données utilisateur (LocalStorage).
- [x] Intégration du SDK PayPal avec le Client ID réel.
- [x] Gestion des erreurs de sécurité liées aux environnements de développement (Mode Simulation).
- [x] Navigation par état (SPA) pour éviter les erreurs de fichiers locaux.

## 📍 Phase 2 : Améliorations UX & Expansion (Terminé)
- [x] **Support multilingue** : Bascule dynamique Français/Anglais.
- [x] **Scanner QR Code** : Intégration de la caméra pour capturer l'ID Machine sans saisie manuelle.
- [x] **Thème Sombre / Clair** : Adaptation automatique aux préférences système et interface moderne.
- [x] **Dashboard Administrateur** : Vue analytique pour le suivi des performances et des activations.

## 🚀 Phase 3 : Automatisation & Backend (Prochaines étapes)
**Objectif :** Connecter le frontend au cycle de vie réel du paiement et de la licence via un serveur sécurisé.

### 3.1 Configuration des Webhooks PayPal
- [ ] Créer un point de terminaison (endpoint) `/api/webhooks/paypal` sécurisé.
- [ ] S'abonner à l'événement `CHECKOUT.ORDER.APPROVED` ou `PAYMENT.CAPTURE.COMPLETED`.
- [ ] Implémenter la vérification de la signature du webhook via le certificat PayPal pour éviter les fausses notifications.
- [ ] Extraire le `custom_id` (Machine ID) et l'email de l'acheteur depuis le payload PayPal.

### 3.2 Création du Micro-service Backend
- [ ] Architecture : Node.js (Express) ou Firebase Functions (Serverless).
- [ ] **Base de données** : Stockage des transactions validées pour éviter les doubles activations.
- [ ] **Logique métier** : Algorithme de génération de clé de licence lié au `Machine ID`.
- [ ] **Sécurité** : Validation que le montant payé correspond bien au prix de la licence (59,90€).

### 3.3 Intégration du Service d'Emailing
- [ ] Choisir un fournisseur fiable : **SendGrid**, **Postmark** ou **Resend**.
- [ ] Création d'un template d'email HTML "Transactionnelle" (Marque POS.AI).
- [ ] Automatisation : Envoi immédiat dès que le backend confirme la validité du paiement.
- [ ] Système de log pour vérifier que chaque client a bien reçu sa clé.

## 🔭 Phase 4 : Vision Long Terme
- [ ] Application mobile native pour les techniciens de maintenance.
- [ ] Support des paiements par Crypto-monnaies.
- [ ] Intégration d'un Chatbot IA pour le support technique d'activation.