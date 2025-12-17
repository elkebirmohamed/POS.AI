# Architecture et Décisions Techniques

## 1. Philosophie du projet
L'application est conçue pour être **ultra-légère** et **indépendante**. Elle utilise une architecture hybride où le frontend gère l'expérience utilisateur et le paiement, tandis que la logique critique (génération de licence) est déportée sur le backend.

## 2. Flux de Données (Paiement)
1.  **Saisie** : L'utilisateur entre son `Machine ID` et son `Email`.
2.  **Stockage temporaire** : Les données sont placées en `localStorage` pour assurer la continuité de l'expérience même en cas de rechargement de page.
3.  **Transaction** : Le `Machine ID` est transmis à PayPal via le champ `custom_id`. Ce champ est crucial car il sera renvoyé par PayPal au backend lors de la confirmation.
4.  **Validation (Backend)** : Le backend reçoit la confirmation de paiement (via Webhook ou IPN), extrait le `custom_id` (Machine ID), génère la licence correspondante et l'envoie à l'email fourni.
5.  **Confirmation (Frontend)** : L'application affiche une vue de succès détaillée pour rassurer l'utilisateur.

## 3. Sécurité
*   **Isolation** : Le frontend ne contient aucune logique de génération de licence. Même si un utilisateur malveillant contourne le frontend, aucune licence n'est générée sans un paiement validé par PayPal côté serveur.
*   **Validation côté serveur** : Seul le signal provenant directement de PayPal (Webhook) déclenche la création d'une licence.
*   **Intégrité** : Le SDK PayPal est chargé dynamiquement pour garantir l'utilisation de la version la plus récente.

## 4. Stack Technique
*   **React 19** : Pour une gestion d'état moderne.
*   **Tailwind CSS** : Pour une interface responsive et élégante.
*   **Lucide React** : Pour un set d'icônes cohérent.
*   **SDK PayPal Smart Buttons** : Pour une intégration de paiement native et sécurisée.