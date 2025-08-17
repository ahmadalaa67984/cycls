import type { Language } from "./LanguageContext";

// Translation data
export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "nav.features": "Features",
    "nav.developers": "Developers",
    "nav.enterprise": "Enterprise",
    "nav.docs": "Docs",
    "nav.signIn": "Sign In",
    "nav.getStarted": "Get Started",

    // Hero Section
    "hero.title": "Go from AI Agent to AI Business. Instantly.",
    "hero.subtitle":
      "Cycls is the definitive platform for commercial AI agents. Our open-source framework and managed cloud transform your Python code into a scalable, monetizable business with a single decorator.",
    "hero.cta": "Start Building for Free",

    // Problem Section
    "problem.title":
      "The Gap Between a Brilliant Agent and a Viable Business is Immense",
    "problem.subtitle":
      "You've built a powerful AI agent. But turning it into a real, commercial product is a maze of infrastructure, frontend boilerplate, authentication, and payment integrations. This friction kills speed and innovation. Cycls is the platform designed to close that gap instantly.",
    "problem.infrastructure.title": "Infrastructure Complexity",
    "problem.infrastructure.description":
      "Servers, scaling, monitoring, and deployment headaches",
    "problem.users.title": "User Management",
    "problem.users.description":
      "Authentication, user databases, and access control",
    "problem.payments.title": "Payment Integration",
    "problem.payments.description":
      "Stripe setup, subscription management, and billing",
    "problem.solutions.title": "With Cycls",
    "problem.solutions.zero": "Zero infrastructure setup",
    "problem.solutions.users": "Built-in user management",
    "problem.solutions.payments": "Instant payment processing",
    "problem.solutions.frontend": "Pre-built frontend & API",

    // How It Works Section
    "howItWorks.title": "From Code to Customer in Three Steps",
    "howItWorks.step1.title": "Write Your Agent",
    "howItWorks.step1.description":
      "Focus on what you do best. Write your agent's logic in a simple Python function. Our guided meta-agent can even help you get started, turning ideas into code even faster.",
    "howItWorks.step2.title": "Deploy Instantly",
    "howItWorks.step2.description":
      "Add our @cycls.agent decorator to your function. Cycls packages your agent into a full-stack, serverless app with a pre-built frontend and API.",
    "howItWorks.step3.title": "Monetize Immediately",
    "howItWorks.step3.description":
      "Launch your subscription business in minutes. Cycls comes with a built-in user pool and monetization.",

    // Developers Section
    "developers.title": "A Zero-Config Dream for Builders",
    "developers.subtitle":
      "Cycls is built by developers, for developers. Our open-source core gives you ultimate flexibility, while our zero-config philosophy removes all the boilerplate. The Python SDK is all you need to learn. With perfect dev/prod parity, what you build locally is exactly what scales globally on our serverless infrastructure.",
    "developers.cta": "Read the Docs",

    // Enterprise Section
    "enterprise.title": "A Complete Commercial Engine",
    "enterprise.subtitle":
      "Cycls is more than a tool; it's an economic engine. For startups, we provide a complete business-in-a-box, handling users, payments, and infrastructure so you can focus on your product. For enterprises, our sovereign managed cloud, hosted in Dammam, offers a flexible, enterprise-ready platform to build foundational AI capabilities within the Kingdom.",
    "enterprise.cta": "Contact Sales",
    "enterprise.startup.title": "Startup Ready",
    "enterprise.startup.description": "Complete business-in-a-box solution",
    "enterprise.security.title": "Enterprise Security",
    "enterprise.security.description": "Sovereign managed cloud in Dammam",
    "enterprise.scale.title": "Global Scale",
    "enterprise.scale.description": "Built for the Kingdom and beyond",

    // CTA Section
    "cta.title": "Ready to Launch Your AI Business?",
    "cta.subtitle":
      "Join thousands of developers who are already building the future of AI commerce with Cycls.",
    "cta.cta": "Get Started for Free",

    // Footer
    "footer.description":
      "The definitive platform for commercial AI agents. Transform your Python code into a scalable, monetizable business with a single decorator.",
    "footer.getStarted": "Get Started for Free",
    "footer.product": "Product",
    "footer.company": "Company",
    "footer.about": "About",
    "footer.blog": "Blog",
    "footer.careers": "Careers",
    "footer.contact": "Contact",
    "footer.documentation": "Documentation",
    "footer.copyright": "© 2024 Cycls. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
  },

  ar: {
    // Header
    "nav.features": "الميزات",
    "nav.developers": "المطورون",
    "nav.enterprise": "المؤسسات",
    "nav.docs": "الوثائق",
    "nav.signIn": "تسجيل الدخول",
    "nav.getStarted": "ابدأ الآن",

    // Hero Section
    "hero.title":
      "انتقل من وكيل الذكاء الاصطناعي إلى عمل الذكاء الاصطناعي. فوراً.",
    "hero.subtitle":
      "سايكلس هو المنصة النهائية لوكلاء الذكاء الاصطناعي التجاريين. إطار العمل مفتوح المصدر والسحابة المدارة يحول كود Python الخاص بك إلى عمل قابل للتطوير والربح بتعليق واحد.",
    "hero.cta": "ابدأ البناء مجاناً",

    // Problem Section
    "problem.title": "الفجوة بين الوكيل المتميز والعمل القابل للحياة هائلة",
    "problem.subtitle":
      "لقد بنيت وكيل ذكاء اصطناعي قوي. لكن تحويله إلى منتج تجاري حقيقي هو متاهة من البنية التحتية والواجهة الأمامية والمصادقة وتكاملات الدفع. هذا الاحتكاك يقتل السرعة والابتكار. سايكلس هو المنصة المصممة لإغلاق هذه الفجوة فوراً.",
    "problem.infrastructure.title": "تعقيد البنية التحتية",
    "problem.infrastructure.description": "خوادم، توسيع، مراقبة، ومشاكل النشر",
    "problem.users.title": "إدارة المستخدمين",
    "problem.users.description":
      "المصادقة، قواعد بيانات المستخدمين، والتحكم في الوصول",
    "problem.payments.title": "تكامل الدفع",
    "problem.payments.description": "إعداد Stripe، إدارة الاشتراكات، والفواتير",
    "problem.solutions.title": "مع سايكلس",
    "problem.solutions.zero": "صفر إعداد بنية تحتية",
    "problem.solutions.users": "إدارة مستخدمين مدمجة",
    "problem.solutions.payments": "معالجة دفع فورية",
    "problem.solutions.frontend": "واجهة أمامية وAPI مدمجة",

    // How It Works Section
    "howItWorks.title": "من الكود إلى العميل في ثلاث خطوات",
    "howItWorks.step1.title": "اكتب وكيلك",
    "howItWorks.step1.description":
      "ركز على ما تجيده. اكتب منطق وكيلك في دالة Python بسيطة. وكيلنا الوصي الموجه يمكن أن يساعدك في البدء، وتحويل الأفكار إلى كود بشكل أسرع.",
    "howItWorks.step2.title": "انشر فوراً",
    "howItWorks.step2.description":
      "أضف تعليق @cycls.agent إلى دالتك. سايكلس يحزم وكيلك في تطبيق كامل المكدس، خادم بدون خادم مع واجهة أمامية وAPI مدمجة.",
    "howItWorks.step3.title": "اربح فوراً",
    "howItWorks.step3.description":
      "أطلق عمل الاشتراك الخاص بك في دقائق. سايكلس يأتي مع مجموعة مستخدمين مدمجة وربح.",

    // Developers Section
    "developers.title": "حلم صفر إعداد للمطورين",
    "developers.subtitle":
      "سايكلس مبني بواسطة المطورين، للمطورين. جوهرنا مفتوح المصدر يعطيك المرونة القصوى، بينما فلسفة صفر الإعداد تزيل كل القوالب الجاهزة. Python SDK هو كل ما تحتاج لتعلمه. مع التطابق المثالي للتطوير/الإنتاج، ما تبني محلياً هو بالضبط ما يتوسع عالمياً على البنية التحتية الخادم بدون خادم.",
    "developers.cta": "اقرأ الوثائق",

    // Enterprise Section
    "enterprise.title": "محرك تجاري كامل",
    "enterprise.subtitle":
      "سايكلس أكثر من أداة؛ إنه محرك اقتصادي. للشركات الناشئة، نقدم حلاً كاملاً للعمل في صندوق، نتعامل مع المستخدمين والمدفوعات والبنية التحتية حتى تتمكن من التركيز على منتجك. للمؤسسات، سحابتنا المدارة السيادية، المستضافة في الدمام، تقدم منصة مرنة وجاهزة للمؤسسات لبناء قدرات الذكاء الاصطناعي الأساسية داخل المملكة.",
    "enterprise.cta": "تواصل مع المبيعات",
    "enterprise.startup.title": "جاهز للشركات الناشئة",
    "enterprise.startup.description": "حل كامل للعمل في صندوق",
    "enterprise.security.title": "أمان المؤسسات",
    "enterprise.security.description": "سحابة مدارة سيادية في الدمام",
    "enterprise.scale.title": "نطاق عالمي",
    "enterprise.scale.description": "مبني للمملكة وما بعدها",

    // CTA Section
    "cta.title": "مستعد لإطلاق عمل الذكاء الاصطناعي الخاص بك؟",
    "cta.subtitle":
      "انضم إلى آلاف المطورين الذين يبنون بالفعل مستقبل تجارة الذكاء الاصطناعي مع سايكلس.",
    "cta.cta": "ابدأ مجاناً",

    // Footer
    "footer.description":
      "المنصة النهائية لوكلاء الذكاء الاصطناعي التجاريين. حول كود Python الخاص بك إلى عمل قابل للتطوير والربح بتعليق واحد.",
    "footer.getStarted": "ابدأ مجاناً",
    "footer.product": "المنتج",
    "footer.company": "الشركة",
    "footer.about": "حول",
    "footer.blog": "المدونة",
    "footer.careers": "الوظائف",
    "footer.contact": "اتصل بنا",
    "footer.documentation": "الوثائق",
    "footer.copyright": "© 2024 سايكلس. جميع الحقوق محفوظة.",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الخدمة",
  },

  fr: {
    // Header
    "nav.features": "Fonctionnalités",
    "nav.developers": "Développeurs",
    "nav.enterprise": "Entreprise",
    "nav.docs": "Documentation",
    "nav.signIn": "Se connecter",
    "nav.getStarted": "Commencer",

    // Hero Section
    "hero.title": "Passez de l'Agent IA à l'Entreprise IA. Instantanément.",
    "hero.subtitle":
      "Cycls est la plateforme définitive pour les agents IA commerciaux. Notre framework open-source et notre cloud géré transforment votre code Python en une entreprise évolutive et monétisable avec un seul décorateur.",
    "hero.cta": "Commencez à construire gratuitement",

    // Problem Section
    "problem.title":
      "L'écart entre un Agent Brillant et une Entreprise Viable est Immense",
    "problem.subtitle":
      "Vous avez construit un agent IA puissant. Mais le transformer en un vrai produit commercial est un labyrinthe d'infrastructure, de code frontend, d'authentification et d'intégrations de paiement. Cette friction tue la vitesse et l'innovation. Cycls est la plateforme conçue pour combler cet écart instantanément.",
    "problem.infrastructure.title": "Complexité de l'Infrastructure",
    "problem.infrastructure.description":
      "Serveurs, mise à l'échelle, surveillance et maux de tête de déploiement",
    "problem.users.title": "Gestion des Utilisateurs",
    "problem.users.description":
      "Authentification, bases de données utilisateurs et contrôle d'accès",
    "problem.payments.title": "Intégration des Paiements",
    "problem.payments.description":
      "Configuration Stripe, gestion des abonnements et facturation",
    "problem.solutions.title": "Avec Cycls",
    "problem.solutions.zero": "Zéro configuration d'infrastructure",
    "problem.solutions.users": "Gestion des utilisateurs intégrée",
    "problem.solutions.payments": "Traitement des paiements instantané",
    "problem.solutions.frontend": "Frontend et API pré-construits",

    // How It Works Section
    "howItWorks.title": "Du Code au Client en Trois Étapes",
    "howItWorks.step1.title": "Écrivez Votre Agent",
    "howItWorks.step1.description":
      "Concentrez-vous sur ce que vous faites de mieux. Écrivez la logique de votre agent dans une fonction Python simple. Notre méta-agent guidé peut même vous aider à commencer, transformant les idées en code encore plus rapidement.",
    "howItWorks.step2.title": "Déployez Instantanément",
    "howItWorks.step2.description":
      "Ajoutez notre décorateur @cycls.agent à votre fonction. Cycls empaquette votre agent dans une application full-stack sans serveur avec un frontend et une API pré-construits.",
    "howItWorks.step3.title": "Monétisez Immédiatement",
    "howItWorks.step3.description":
      "Lancez votre entreprise d'abonnement en minutes. Cycls est livré avec un pool d'utilisateurs intégré et une monétisation.",

    // Developers Section
    "developers.title": "Un Rêve Zéro-Config pour les Constructeurs",
    "developers.subtitle":
      "Cycls est construit par des développeurs, pour des développeurs. Notre cœur open-source vous donne une flexibilité ultime, tandis que notre philosophie zéro-config supprime tous les modèles. Le SDK Python est tout ce que vous devez apprendre. Avec une parité dev/prod parfaite, ce que vous construisez localement est exactement ce qui s'adapte globalement sur notre infrastructure sans serveur.",
    "developers.cta": "Lire la Documentation",

    // Enterprise Section
    "enterprise.title": "Un Moteur Commercial Complet",
    "enterprise.subtitle":
      "Cycls est plus qu'un outil ; c'est un moteur économique. Pour les startups, nous fournissons une solution complète d'entreprise-en-boîte, gérant les utilisateurs, les paiements et l'infrastructure afin que vous puissiez vous concentrer sur votre produit. Pour les entreprises, notre cloud géré souverain, hébergé à Dammam, offre une plateforme flexible et prête pour l'entreprise pour construire des capacités IA fondamentales au sein du Royaume.",
    "enterprise.cta": "Contacter les Ventes",
    "enterprise.startup.title": "Prêt pour les Startups",
    "enterprise.startup.description": "Solution complète d'entreprise-en-boîte",
    "enterprise.security.title": "Sécurité Entreprise",
    "enterprise.security.description": "Cloud géré souverain à Dammam",
    "enterprise.scale.title": "Échelle Mondiale",
    "enterprise.scale.description": "Construit pour le Royaume et au-delà",

    // CTA Section
    "cta.title": "Prêt à Lancer Votre Entreprise IA ?",
    "cta.subtitle":
      "Rejoignez des milliers de développeurs qui construisent déjà l'avenir du commerce IA avec Cycls.",
    "cta.cta": "Commencer Gratuitement",

    // Footer
    "footer.description":
      "La plateforme définitive pour les agents IA commerciaux. Transformez votre code Python en une entreprise évolutive et monétisable avec un seul décorateur.",
    "footer.getStarted": "Commencer Gratuitement",
    "footer.product": "Produit",
    "footer.company": "Entreprise",
    "footer.about": "À propos",
    "footer.blog": "Blog",
    "footer.careers": "Carrières",
    "footer.contact": "Contact",
    "footer.documentation": "Documentation",
    "footer.copyright": "© 2024 Cycls. Tous droits réservés.",
    "footer.privacy": "Politique de Confidentialité",
    "footer.terms": "Conditions de Service",
  },

  es: {
    // Header
    "nav.features": "Características",
    "nav.developers": "Desarrolladores",
    "nav.enterprise": "Empresa",
    "nav.docs": "Documentación",
    "nav.signIn": "Iniciar Sesión",
    "nav.getStarted": "Comenzar",

    // Hero Section
    "hero.title": "Ve del Agente IA al Negocio IA. Instantáneamente.",
    "hero.subtitle":
      "Cycls es la plataforma definitiva para agentes IA comerciales. Nuestro framework de código abierto y nube gestionada transforman tu código Python en un negocio escalable y monetizable con un solo decorador.",
    "hero.cta": "Comienza a Construir Gratis",

    // Problem Section
    "problem.title":
      "La Brecha Entre un Agente Brillante y un Negocio Viable es Inmensa",
    "problem.subtitle":
      "Has construido un agente IA poderoso. Pero convertirlo en un producto comercial real es un laberinto de infraestructura, código frontend, autenticación e integraciones de pago. Esta fricción mata la velocidad y la innovación. Cycls es la plataforma diseñada para cerrar esa brecha instantáneamente.",
    "problem.infrastructure.title": "Complejidad de Infraestructura",
    "problem.infrastructure.description":
      "Servidores, escalado, monitoreo y dolores de cabeza de despliegue",
    "problem.users.title": "Gestión de Usuarios",
    "problem.users.description":
      "Autenticación, bases de datos de usuarios y control de acceso",
    "problem.payments.title": "Integración de Pagos",
    "problem.payments.description":
      "Configuración de Stripe, gestión de suscripciones y facturación",
    "problem.solutions.title": "Con Cycls",
    "problem.solutions.zero": "Cero configuración de infraestructura",
    "problem.solutions.users": "Gestión de usuarios integrada",
    "problem.solutions.payments": "Procesamiento de pagos instantáneo",
    "problem.solutions.frontend": "Frontend y API pre-construidos",

    // How It Works Section
    "howItWorks.title": "Del Código al Cliente en Tres Pasos",
    "howItWorks.step1.title": "Escribe tu Agente",
    "howItWorks.step1.description":
      "Concéntrate en lo que haces mejor. Escribe la lógica de tu agente en una función Python simple. Nuestro meta-agente guiado puede incluso ayudarte a comenzar, convirtiendo ideas en código aún más rápido.",
    "howItWorks.step2.title": "Despliega Instantáneamente",
    "howItWorks.step2.description":
      "Agrega nuestro decorador @cycls.agent a tu función. Cycls empaqueta tu agente en una aplicación full-stack sin servidor con un frontend y API pre-construidos.",
    "howItWorks.step3.title": "Monetiza Inmediatamente",
    "howItWorks.step3.description":
      "Lanza tu negocio de suscripción en minutos. Cycls viene con un pool de usuarios integrado y monetización.",

    // Developers Section
    "developers.title": "Un Sueño de Cero-Config para Constructores",
    "developers.subtitle":
      "Cycls está construido por desarrolladores, para desarrolladores. Nuestro núcleo de código abierto te da flexibilidad máxima, mientras que nuestra filosofía de cero-config elimina todas las plantillas. El SDK de Python es todo lo que necesitas aprender. Con paridad perfecta dev/prod, lo que construyes localmente es exactamente lo que escala globalmente en nuestra infraestructura sin servidor.",
    "developers.cta": "Leer la Documentación",

    // Enterprise Section
    "enterprise.title": "Un Motor Comercial Completo",
    "enterprise.subtitle":
      "Cycls es más que una herramienta; es un motor económico. Para startups, proporcionamos una solución completa de negocio-en-caja, manejando usuarios, pagos e infraestructura para que puedas enfocarte en tu producto. Para empresas, nuestra nube gestionada soberana, alojada en Dammam, ofrece una plataforma flexible y lista para empresas para construir capacidades IA fundamentales dentro del Reino.",
    "enterprise.cta": "Contactar Ventas",
    "enterprise.startup.title": "Listo para Startups",
    "enterprise.startup.description": "Solución completa de negocio-en-caja",
    "enterprise.security.title": "Seguridad Empresarial",
    "enterprise.security.description": "Nube gestionada soberana en Dammam",
    "enterprise.scale.title": "Escala Global",
    "enterprise.scale.description": "Construido para el Reino y más allá",

    // CTA Section
    "cta.title": "¿Listo para Lanzar tu Negocio IA?",
    "cta.subtitle":
      "Únete a miles de desarrolladores que ya están construyendo el futuro del comercio IA con Cycls.",
    "cta.cta": "Comenzar Gratis",

    // Footer
    "footer.description":
      "La plataforma definitiva para agentes IA comerciales. Transforma tu código Python en un negocio escalable y monetizable con un solo decorador.",
    "footer.getStarted": "Comenzar Gratis",
    "footer.product": "Producto",
    "footer.company": "Empresa",
    "footer.about": "Acerca de",
    "footer.blog": "Blog",
    "footer.careers": "Carreras",
    "footer.contact": "Contacto",
    "footer.documentation": "Documentación",
    "footer.copyright": "© 2024 Cycls. Todos los derechos reservados.",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",
  },

  de: {
    // Header
    "nav.features": "Funktionen",
    "nav.developers": "Entwickler",
    "nav.enterprise": "Unternehmen",
    "nav.docs": "Dokumentation",
    "nav.signIn": "Anmelden",
    "nav.getStarted": "Loslegen",

    // Hero Section
    "hero.title": "Gehen Sie vom KI-Agenten zum KI-Geschäft. Sofort.",
    "hero.subtitle":
      "Cycls ist die definitive Plattform für kommerzielle KI-Agenten. Unser Open-Source-Framework und verwaltete Cloud verwandeln Ihren Python-Code mit einem einzigen Decorator in ein skalierbares, monetarisierbares Geschäft.",
    "hero.cta": "Kostenlos mit dem Bauen beginnen",

    // Problem Section
    "problem.title":
      "Die Kluft zwischen einem brillanten Agenten und einem lebensfähigen Geschäft ist immens",
    "problem.subtitle":
      "Sie haben einen leistungsstarken KI-Agenten gebaut. Aber ihn in ein echtes, kommerzielles Produkt zu verwandeln, ist ein Labyrinth aus Infrastruktur, Frontend-Boilerplate, Authentifizierung und Zahlungsintegrationen. Diese Reibung tötet Geschwindigkeit und Innovation. Cycls ist die Plattform, die entwickelt wurde, um diese Lücke sofort zu schließen.",
    "problem.infrastructure.title": "Infrastruktur-Komplexität",
    "problem.infrastructure.description":
      "Server, Skalierung, Überwachung und Bereitstellungsprobleme",
    "problem.users.title": "Benutzerverwaltung",
    "problem.users.description":
      "Authentifizierung, Benutzerdatenbanken und Zugriffskontrolle",
    "problem.payments.title": "Zahlungsintegration",
    "problem.payments.description":
      "Stripe-Einrichtung, Abonnementverwaltung und Abrechnung",
    "problem.solutions.title": "Mit Cycls",
    "problem.solutions.zero": "Null Infrastruktur-Einrichtung",
    "problem.solutions.users": "Integrierte Benutzerverwaltung",
    "problem.solutions.payments": "Sofortige Zahlungsverarbeitung",
    "problem.solutions.frontend": "Vorgebaute Frontend & API",

    // How It Works Section
    "howItWorks.title": "Vom Code zum Kunden in drei Schritten",
    "howItWorks.step1.title": "Schreiben Sie Ihren Agenten",
    "howItWorks.step1.description":
      "Konzentrieren Sie sich auf das, was Sie am besten können. Schreiben Sie die Logik Ihres Agenten in eine einfache Python-Funktion. Unser geführter Meta-Agent kann Ihnen sogar beim Start helfen und Ideen noch schneller in Code verwandeln.",
    "howItWorks.step2.title": "Sofort bereitstellen",
    "howItWorks.step2.description":
      "Fügen Sie unseren @cycls.agent Decorator zu Ihrer Funktion hinzu. Cycls verpackt Ihren Agenten in eine Full-Stack-Serverless-App mit einem vorgebauten Frontend und API.",
    "howItWorks.step3.title": "Sofort monetarisieren",
    "howItWorks.step3.description":
      "Starten Sie Ihr Abonnementgeschäft in Minuten. Cycls kommt mit einem integrierten Benutzerpool und Monetarisierung.",

    // Developers Section
    "developers.title": "Ein Null-Config-Traum für Entwickler",
    "developers.subtitle":
      "Cycls wird von Entwicklern für Entwickler gebaut. Unser Open-Source-Kern gibt Ihnen ultimative Flexibilität, während unsere Null-Config-Philosophie alle Boilerplates entfernt. Das Python SDK ist alles, was Sie lernen müssen. Mit perfekter Dev/Prod-Parität ist das, was Sie lokal bauen, genau das, was global auf unserer Serverless-Infrastruktur skaliert.",
    "developers.cta": "Dokumentation lesen",

    // Enterprise Section
    "enterprise.title": "Ein vollständiger kommerzieller Motor",
    "enterprise.subtitle":
      "Cycls ist mehr als ein Werkzeug; es ist ein Wirtschaftsmotor. Für Startups bieten wir eine komplette Business-in-a-Box-Lösung, die Benutzer, Zahlungen und Infrastruktur verwaltet, damit Sie sich auf Ihr Produkt konzentrieren können. Für Unternehmen bietet unsere souveräne verwaltete Cloud, gehostet in Dammam, eine flexible, unternehmensbereite Plattform, um grundlegende KI-Fähigkeiten innerhalb des Königreichs aufzubauen.",
    "enterprise.cta": "Vertrieb kontaktieren",
    "enterprise.startup.title": "Startup-bereit",
    "enterprise.startup.description": "Komplette Business-in-a-Box-Lösung",
    "enterprise.security.title": "Unternehmenssicherheit",
    "enterprise.security.description": "Souveräne verwaltete Cloud in Dammam",
    "enterprise.scale.title": "Globale Skalierung",
    "enterprise.scale.description":
      "Gebaut für das Königreich und darüber hinaus",

    // CTA Section
    "cta.title": "Bereit, Ihr KI-Geschäft zu starten?",
    "cta.subtitle":
      "Schließen Sie sich Tausenden von Entwicklern an, die bereits die Zukunft des KI-Handels mit Cycls aufbauen.",
    "cta.cta": "Kostenlos loslegen",

    // Footer
    "footer.description":
      "Die definitive Plattform für kommerzielle KI-Agenten. Verwandeln Sie Ihren Python-Code mit einem einzigen Decorator in ein skalierbares, monetarisierbares Geschäft.",
    "footer.getStarted": "Kostenlos loslegen",
    "footer.product": "Produkt",
    "footer.company": "Unternehmen",
    "footer.about": "Über uns",
    "footer.blog": "Blog",
    "footer.careers": "Karriere",
    "footer.contact": "Kontakt",
    "footer.documentation": "Dokumentation",
    "footer.copyright": "© 2024 Cycls. Alle Rechte vorbehalten.",
    "footer.privacy": "Datenschutzrichtlinie",
    "footer.terms": "Nutzungsbedingungen",
  },
};
