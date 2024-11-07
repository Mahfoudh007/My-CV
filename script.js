function switchLanguage(language) {
    const translations = {
        en: {
            "cv-title": "CV / Resume",
            "personal-info-title": "Personal Information",
            "education-title": "Education",
            "skills-title": "Professional Skills",
            "projects-title": "Personal Projects",
            "technical-skills-title": "Technical Skills",
            "contact-title": "Contact Information",
            "name": "Name: Mahfoudh Najeeb Mahfoudh Basaiba",
            "location": "Location: Tambov, Russia",
            "languages": "Languages: English, Arabic, Russian",
            "university": "Tambov State Technical University - Major: Oil and Gas",
            "academy": "TOP-IT Academy, Russia - Specialization: Full Stack Web Development",
            "skill-1": "Full Stack Web Development: Experience in PHP, MySQL, and AJAX",
            "skill-2": "Frontend Development: Knowledge of jQuery, Bootstrap",
            "skill-3": "Backend Development: Database management, basic SQL",
            "skill-4": "WordPress: Currently developing my skills with WordPress",
            "github": "GitHub: https://github.com/Mahfoudh007",
            "languages-skills": "Programming Languages: HTML, CSS, JS, PHP, SQL",
            "email": "Email: mahfoodh20015@gmail.com",
            "phone": "Phone: +79998016936"
        },
        ru: {
            "cv-title": "Резюме",
            "personal-info-title": "Личная информация",
            "education-title": "Образование",
            "skills-title": "Профессиональные навыки",
            "projects-title": "Личные проекты",
            "technical-skills-title": "Технические навыки",
            "contact-title": "Контактная информация",
            "name": "ФИО: Махфуд Наджиб Махфуд Басаиба",
            "location": "Место жительства: Тамбов, Россия",
            "languages": "Языки: Английский, арабский, русский",
            "university": "Тамбовский государственный технический университет - Специальность: Нефть и газ",
            "academy": "ТОП-ИТ Академия, Россия - Специализация: Full Stack Web Development",
            "skill-1": "Full Stack Web Development: Опыт работы с PHP, MySQL и AJAX",
            "skill-2": "Frontend-разработка: Знания jQuery, Bootstrap",
            "skill-3": "Backend-разработка: Управление базами данных, основы SQL",
            "skill-4": "WordPress: В настоящее время развиваю свои навыки в работе с WordPress",
            "github": "GitHub: https://github.com/Mahfoudh007",
            "languages-skills": "Языки программирования: HTML, CSS, JS, PHP, SQL",
            "email": "Электронная почта: mahfoodh20015@gmail.com",
            "phone": "Телефон: +79998016936"
        },
        ar: {
            "cv-title": "السيرة الذاتية",
            "personal-info-title": "المعلومات الشخصية",
            "education-title": "التعليم",
            "skills-title": "المهارات المهنية",
            "projects-title": "المشاريع الشخصية",
            "technical-skills-title": "المهارات التقنية",
            "contact-title": "معلومات الاتصال",
            "name": "الاسم: محفوظ نجيب",
            "location": "الموقع: تامبوف، روسيا",
            "languages": "اللغات: الإنجليزية، العربية، الروسية",
            "university": "جامعة تامبوف التقنية الحكومية - التخصص: النفط والغاز",
            "academy": "أكاديمية TOP-IT، روسيا - التخصص: Full Stack Web Development",
            "skill-1": "Full Stack Web Development: خبرة في PHP، MySQL وAJAX",
            "skill-2": "تطوير الواجهة الأمامية: معرفة بـ jQuery وBootstrap",
            "skill-3": "تطوير الواجهة الخلفية: إدارة قواعد البيانات، أساسيات SQL",
            "skill-4": "WordPress: أطور مهاراتي حاليًا في WordPress",
            "github": "GitHub: https://github.com/Mahfoudh007",
            "languages-skills": "لغات البرمجة: HTML، CSS، JS، PHP، SQL",
            "email": "البريد الإلكتروني: mahfoodh20015@gmail.com",
            "phone": "الهاتف: +79998016936"
        }
    };

    // تحديث النصوص في الصفحة بناءً على اللغة المحددة
    document.getElementById("cv-title").textContent = translations[language]["cv-title"];
    document.getElementById("personal-info-title").textContent = translations[language]["personal-info-title"];
    document.getElementById("education-title").textContent = translations[language]["education-title"];
    document.getElementById("skills-title").textContent = translations[language]["skills-title"];
    document.getElementById("projects-title").textContent = translations[language]["projects-title"];
    document.getElementById("technical-skills-title").textContent = translations[language]["technical-skills-title"];
    document.getElementById("contact-title").textContent = translations[language]["contact-title"];
    document.getElementById("name").textContent = translations[language]["name"];
    document.getElementById("location").textContent = translations[language]["location"];
    document.getElementById("languages").textContent = translations[language]["languages"];
    document.getElementById("university").textContent = translations[language]["university"];
    document.getElementById("academy").textContent = translations[language]["academy"];
    document.getElementById("skill-1").textContent = translations[language]["skill-1"];
    document.getElementById("skill-2").textContent = translations[language]["skill-2"];
    document.getElementById("skill-3").textContent = translations[language]["skill-3"];
    document.getElementById("skill-4").textContent = translations[language]["skill-4"];
    document.getElementById("github").textContent = translations[language]["github"];
    document.getElementById("languages-skills").textContent = translations[language]["languages-skills"];
    document.getElementById("email").textContent = translations[language]["email"];
    document.getElementById("phone").textContent = translations[language]["phone"];
}
