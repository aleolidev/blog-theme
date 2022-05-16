// TODO: Update legal information

const site_url = 'https://blog.demo'
const page_name = 'DEMO PAGE'
const owner = `OWNER`
const owner_name = 'OWNER'
const nif = '12345678-A'
const location = 'Random-Street'
const website_activity_en = 'Description of the current activity of this page.'
const website_activity_de = 'Beschreibung der aktuellen Aktivität dieser Seite.'
const website_activity_fr = 'Description de l\'activité actuelle de cette page.'
const website_activity_es = 'Descripción de la actividad actual de esta página.'
const mail = 'example@mail.com'
const hosting_link = 'https://hosting.link'
const hosting_name = 'Hosting Name'
const hosting_privacy_policy = 'https://hosting.link/privacy-policy'

const legal = {
    privacyPolicy: {
        'en-US': 'Privacy Policy',
        'en-AU': 'Privacy Policy',
        'en-GB': 'Privacy Policy',
        'en-CA': 'Privacy Policy',
        'de-DE': 'Datenschutz-Bestimmungen',
        'fr-FR': 'Politique de Confidentialité',
        'es-ES': 'Política de Privacidad'
    },
    cookiesPolicy: {
        'en-US': 'Cookies Policy',
        'en-AU': 'Cookies Policy',
        'en-GB': 'Cookies Policy',
        'en-CA': 'Cookies Policy',
        'de-DE': 'Cookie-Richtlinie',
        'fr-FR': 'Politique de Cookies',
        'es-ES': 'Política de Cookies'
    },
    legalClaim: {
        'en-US': 'Legal Claim',
        'en-AU': 'Legal Claim',
        'en-GB': 'Legal Claim',
        'en-CA': 'Legal Claim',
        'de-DE': 'Rechtlicher Hinweis',
        'fr-FR': 'Avis Juridique',
        'es-ES': 'Aviso legal'
    },
    privacyPolicyURL: {
        'en-US': 'privacy-policy',
        'en-AU': 'privacy-policy',
        'en-GB': 'privacy-policy',
        'en-CA': 'privacy-policy',
        'de-DE': 'datenschutz-bestimmungen',
        'fr-FR': 'politique-de-confidentialite',
        'es-ES': 'politica-de-privacidad'
    },
    cookiesPolicyURL: {
        'en-US': 'cookies-policy',
        'en-AU': 'cookies-policy',
        'en-GB': 'cookies-policy',
        'en-CA': 'cookies-policy',
        'de-DE': 'cookie-richtlinie',
        'fr-FR': 'politique-de-cookies',
        'es-ES': 'politica-de-cookies'
    },
    legalClaimURL: {
        'en-US': 'legal-claim',
        'en-AU': 'legal-claim',
        'en-GB': 'legal-claim',
        'en-CA': 'legal-claim',
        'de-DE': 'rechtlicher-hinweis',
        'fr-FR': 'avis-juridique',
        'es-ES': 'aviso-legal'
    }
}

const privacyPolicy = {
    // ENGLISH
    'en': 
    `<p>If you are here it is because you want to know more about the obligations and rights that correspond to you as a user of this website <b>${site_url}</b> and that is very good. Our duty is to inform you and yours to be duly informed.</p>

    <p>In this Privacy Policy we will inform you with total transparency about the purpose of this website and everything that affects the data you provide us, as well as the obligations and rights that correspond to you.</p>
    
    <p>To begin with, you should know that this website adapts to current regulations in relation to data protection, which affects the personal data that you provide us with your express consent and the cookies that we use so that this website works correctly and can develop its activity.</p>
    
    <p>Specifically, this website complies with the following regulations:</p>
    
    <p>The <b>RGPD</b> (<b>Regulation (EU) 2016/679 of the European Parliament and of the Council of April 27, 2016 regarding the protection of natural persons</b>), which is the new regulation of the European Union that unifies the regulation of the processing of personal data in the different EU countries.</p>
    
    <p>The <b>OD&PL</b> (<b>Organic Law 15/1999, of December 13, Protection of Personal Data and Royal Decree 1720/2007, of December 21, the Development Regulation of the OD&PL</b>) that regulates the treatment of personal data and the obligations that those responsible for a website or a blog must assume when managing this information.</p>
    
    <p>The <b>LSIS</b> (<b>Law 34/2002, of July 11, on Services of the Information Society and Electronic Commerce</b>) that regulates economic transactions through electronic means, as is the case of this blog.</p>
    
    <h4>IDENTIFICATION DATA</h4>
    
    <p>The person in charge and owner of this website is <b>${owner} (Hereinafter ${page_name})</b></p>
    
    <ul>
        <li><b>Name</b>: ${owner_name}</li>
        <li><b>NIF</b>: ${nif}</li>
        <li><b>Registered Office</b>: ${location}</li>
        <li><b>Website activity</b>: ${website_activity_en}</li>
        <li><b>Email</b>: ${mail}</li>
    </ul>
    
    <p>The personal data that you provide us, always with your express consent, will be stored and processed for the purposes set forth and described below in this Privacy Policy, until you ask us to delete them.</p>
    
    <p>We inform you that this Privacy Policy may be modified at any time, in order to adapt it to legislative developments or changes in our activities, the one published on the web being in force at all times. Said modification will be notified to you before its application.</p>
    
    <h4>TERMS OF USE</h4>
    
    <p>You should know, for your peace of mind, that we will always request your express consent to collect your data for the corresponding purpose specified in each case, which implies that, if you grant that consent, you have read and accepted this Privacy Policy.</p>
    
    <p>At the time you access and use this website, you assume your status as a user with your corresponding rights and obligations.</p>
    
    <p>If you are over 13 years of age, you may register as a user on this website without the prior consent of your parents or guardians.</p>
    
    <p>If you are under 13 years of age, you will need the consent of your parents or guardians for the processing of your personal data.</p>
    
    <h4>REGISTRATION AND PURPOSE OF YOUR DATA</h4>

    <p>Depending on the form or section you access, we will only request the necessary data for the purposes described below. At all times, you must give your express consent when we request personal information for the following purposes:</p>

    <ul>
        <li>The specific purposes that are particularly indicated in each of the pages or sections where the registration or electronic contact form appears.</li>
        <li>In general, to attend to your requests, comments, queries or any type of request that you make as a user through any of the contact forms that we make available to you.</li>
        <li>To inform you about queries, requests, activities, products, news and/or services; via e-mail, fax, Whatsapp, Skype, telephone provided, sms and mms.</li>
        <li>To send you commercial or advertising communications through any other electronic or physical means, which makes it possible to carry out communications.</li>
    </ul>
        
    <p>These communications will always be related to our products, services, news or promotions, as well as those products or services that we may consider of interest to you and that may be offered by collaborators, companies or "partners" with whom we have promotion or commercial collaboration agreements.</p>
    
    <p>If so, we guarantee that these third parties will never have access to your personal data, with the exceptions reflected below, in any case these communications being made by <b>${page_name}, as the owner of the website.</b></p>

    <p>This website displays third party affiliate products. Specifically from <b>AMAZON</b>.</p>

    <p>This means that when you click on "Buy Now" or similar, you will be redirected to the page where the products are offered.</p>

    <p>In this case, you should know that we only provide and facilitate the links to the pages and/or platforms of these third parties where the products that we show can be purchased, in order to facilitate the search and easy acquisition of the same.</p>

    <p>These linked pages belonging to third parties have not been reviewed nor are they subject to controls, nor recommendation on our part, so in no case will <b>${page_name}</b> be considered responsible for the contents of these websites, for the responsibilities derived from their use in all the areas, nor for the measures that are adopted regarding the user's privacy, treatment of their personal data or others that may be established.</p>

    <p>For all these reasons, we recommend that you read carefully and in advance all the conditions of use, purchase conditions, privacy policies, legal notices and/or similar of these linked sites before proceeding to the acquisition of these products or use of the websites. .</p>

    <h4>ACCURACY AND TRUTHFULNESS OF THE DATA</h4>

    <p>As a user, you are solely responsible for the veracity and modification of the data you send to <b>${page_name}</b>, exonerating us from any responsibility in this regard.</p>

    <p>In other words, it is up to you to guarantee and respond in any case to the accuracy, validity and authenticity of the personal data provided, and you undertake to keep them duly updated.</p>

    <p>In accordance with what is expressed in this Privacy Policy, you agree to provide complete and correct information in the contact or subscription form.</p>
    
    <h4>CANCELLATION OF SUBSCRIPTION AND RIGHT OF REVOCATION</h4>

    <p>As the owner of the data that you have provided us, you can exercise your rights of access, rectification, cancellation and opposition at any time, by sending us an email to <b>${mail}</b> and attaching a photocopy of your identity document as valid proof.</p>

    <p>Likewise, you can unsubscribe at any time to stop receiving our newsletter or any other commercial communication, directly from the same email you have received or by sending us an email to <b>${mail}</b>.</p>

    <h4>ACCESS TO DATA BY THIRD PARTIES</h4>

    <p>In order to provide services that are strictly necessary for the operation and development of the activities of this website, we inform you that we share data with the following service providers under their corresponding privacy conditions.</p>

    <p>You can rest assured that these third parties will not be able to use said information for any other purpose that is not specifically regulated in our relations with them by virtue of the applicable regulations on the protection of personal data.</p>

    <p>This website is hosted at <b>${hosting_link}</b>, with the trademark <b>${hosting_name}</b>, which provides hosting services so you can access and browse our site. You can consult the privacy policy and other legal aspects of this company at the following link: <b>${hosting_privacy_policy}</b>.</p>

    <p>Our website uses advertising servers in order to facilitate the commercial content that you view on our pages. These advertising servers use cookies that allow them to adapt the advertising content to the demographic profiles of the users:</p>

    <h4>Google Analytics:</h4>

    <p>Google Analytics is a web analytics service provided by Google, Inc., a Delaware company whose main office is at 1600 Amphitheater Parkway, Mountain View (California), CA 94043, United States (“Google”).</p>

    <p>Google Analytics uses "cookies", which are text files placed on your computer, to help the website analyze how users use the website.</p>

    <p>The information generated by the cookie about your use of the website (including your IP address) will be directly transmitted and stored by Google. Google will use this information on our behalf for the purpose of tracking your use of the website, compiling reports on website activity and providing other services related to website activity and Internet usage.</p>

    <p>Google may transmit said information to third parties when required by law, or when said third parties process the information on behalf of Google. Google will not associate your IP address with any other data held by Google.</p>

    <p>As a user, and in exercise of your rights, you can reject the processing of data or information by rejecting the use of cookies by selecting the appropriate configuration of your browser, however, you should know that if you do so you may not be able to use the full functionality of this website.</p>

    <p>By using this website, according to the information provided in this Privacy Policy, you accept the processing of data by Google in the manner and for the purposes indicated.</p>

    <p>For more information, you can consult Google's privacy policy <b>at</b> <a rel="nofollow noopener noreferrer" target="_blank" href="https://www.google.com/intl/en/policies/privacy/">https://www.google.com/intl/en/policies/privacy/</a>.</p>

    <h4>Google Adsense:</h4>

    <p>Google, as a vendor partner, uses cookies to serve ads on this website. You can disable the use of the DART cookie through the Google ad and by accessing the privacy policy of the content network: <a rel="nofollow noopener noreferrer" target="_blank" href="https://www.google.com/intl/en/policies/privacy/">https://www.google.com/intl/en/policies/privacy/</a>.</p>

    <p>Google uses partner advertising companies to serve ads when you visit our website. These companies may use the information they obtain from your visits to this and other websites (not including your name, address, email address, or telephone number) to provide you with advertisements about products and services of interest to you.</p>

    <p>By using this website, you consent to the processing of data by Google in the manner and for the purposes indicated.</p>

    <p>If you want to know more about the use of cookies and information collection practices and acceptance or rejection procedures, see our COOKIES POLICY.</p>

    <h4>SECURITY MEASURES</h4>

    <p>As the owner of the website, <b>${page_name}</b> has adopted all the necessary technical and organizational measures to guarantee the security and integrity of the personal data that it processes, as well as to prevent its loss, alteration and/or access by unauthorized third parties.</p>

    <p>We remind you that, for more information, you can consult our <b>Legal Claim</b> and <b>Cookies Policy</b> pages.</p>`,

    //  DEUTSCH
    'de': 
    `<p>Wenn Sie hier sind, dann deshalb, weil Sie mehr über die Pflichten und Rechte erfahren möchten, die Ihnen als Benutzer dieser Website <b>${site_url}</b> zustehen, und das ist sehr gut. Unsere Pflicht ist es, Sie und die Ihren ordnungsgemäß zu informieren.</p>

    <p>In dieser Datenschutzerklärung informieren wir Sie in völliger Transparenz über den Zweck dieser Website und alles, was die von Ihnen bereitgestellten Daten betrifft, sowie die Ihnen zustehenden Pflichten und Rechte.</p>
    
    <p>Zunächst sollten Sie wissen, dass sich diese Website an die geltenden Datenschutzbestimmungen anpasst, was die personenbezogenen Daten betrifft, die Sie uns mit Ihrer ausdrücklichen Zustimmung zur Verfügung stellen, und die Cookies, die wir verwenden, damit diese Website ordnungsgemäß funktioniert und kann seine Aktivität entwickeln.</p>
    
    <p>Im Einzelnen erfüllt diese Website die folgenden Vorschriften:</p>
    
    <p>Die <b>RGPD</b> (<b>Verordnung (EU) 2016/679 des Europäischen Parlaments und des Rates vom 27. April 2016 zum Schutz natürlicher Personen</b>), die ist die neue Verordnung der Europäischen Union, die die Regelung der Verarbeitung personenbezogener Daten in den verschiedenen EU-Ländern vereinheitlicht.</p>
    
    <p>Das <b>OD&PL</b> (<b>Organisches Gesetz 15/1999 vom 13. Dezember, Schutz personenbezogener Daten und Königliches Dekret 1720/2007 vom 21. Dezember, die Entwicklungsverordnung des OD&PL</b). >), die den Umgang mit personenbezogenen Daten und die Pflichten regelt, die die Verantwortlichen einer Website oder eines Blogs bei der Verwaltung dieser Informationen übernehmen müssen.</p>
    
    <p>Das <b>LSIS</b> (<b>Gesetz 34/2002 vom 11. Juli über Dienste der Informationsgesellschaft und elektronischen Handel</b>), das wirtschaftliche Transaktionen auf elektronischem Wege regelt, wie auch das Fall dieses Blogs.</p>
    
    <h4>IDENTIFIKATIONSDATEN</h4>
    
    <p>Die verantwortliche Person und Eigentümer dieser Website ist <b>${owner} (im Folgenden ${page_name})</b></p>
    
    <ul>
        <li><b>Name</b>: ${owner_name}</li>
        <li><b>NIF</b>: ${nif}</li>
        <li><b>Eingetragener Firmensitz</b>: ${location}</li>
        <li><b>Website-Aktivität</b>: ${website_activity_de}</li>
        <li><b>E-Mail</b>: ${mail}</li>
    </ul>
    
    <p>Die personenbezogenen Daten, die Sie uns immer mit Ihrer ausdrücklichen Zustimmung zur Verfügung stellen, werden für die nachstehend in dieser Datenschutzrichtlinie dargelegten und beschriebenen Zwecke gespeichert und verarbeitet, bis Sie uns auffordern, sie zu löschen.</p>
    
    <p>Wir informieren Sie, dass diese Datenschutzrichtlinie jederzeit geändert werden kann, um sie an gesetzliche Entwicklungen oder Änderungen unserer Aktivitäten anzupassen, wobei die im Internet veröffentlichte jederzeit in Kraft ist. Diese Änderung wird Ihnen vor ihrer Anwendung mitgeteilt.</p>
    
    <h4>NUTZUNGSBEDINGUNGEN</h4>
    
    <p>Sie sollten zu Ihrer Sicherheit wissen, dass wir Sie immer um Ihre ausdrückliche Zustimmung bitten werden, Ihre Daten für den entsprechenden jeweils angegebenen Zweck zu erheben, was bedeutet, dass Sie diese gelesen und akzeptiert haben, wenn Sie diese Zustimmung erteilen Datenschutzrichtlinie.</p>
    
    <p>Zum Zeitpunkt des Zugriffs und der Nutzung dieser Website treten Sie in Ihren Status als Benutzer mit Ihren entsprechenden Rechten und Pflichten ein.</p>
    
    <p>Wenn Sie über 13 Jahre alt sind, können Sie sich ohne vorherige Zustimmung Ihrer Eltern oder Erziehungsberechtigten als Benutzer auf dieser Website registrieren.</p>
    
    <p>Wenn Sie unter 13 Jahre alt sind, benötigen Sie für die Verarbeitung Ihrer personenbezogenen Daten die Zustimmung Ihrer Eltern oder Erziehungsberechtigten.</p>
    
    <h4>REGISTRIERUNG UND ZWECK IHRER DATEN</h4>

    <p>Je nach Formular oder Abschnitt, auf den Sie zugreifen, werden wir nur die erforderlichen Daten für die unten beschriebenen Zwecke anfordern. Sie müssen jederzeit Ihre ausdrückliche Zustimmung erteilen, wenn wir personenbezogene Daten für die folgenden Zwecke anfordern:</p>

    <ul>
        <li>Die spezifischen Zwecke, die auf jeder der Seiten oder Abschnitte, auf denen das Registrierungs- oder elektronische Kontaktformular erscheint, besonders angegeben sind.</li>
        <li>Im Allgemeinen, um Ihre Anfragen, Kommentare, Fragen oder jede Art von Anfrage zu bearbeiten, die Sie als Benutzer über eines der Kontaktformulare stellen, die wir Ihnen zur Verfügung stellen.</li>
        <li>Um Sie über Anfragen, Anfragen, Aktivitäten, Produkte, Neuigkeiten und/oder Dienstleistungen zu informieren; per E-Mail, Fax, Whatsapp, Skype, Telefon vorausgesetzt, SMS und MMS.</li>
        <li>Um Ihnen kommerzielle oder werbliche Mitteilungen über andere elektronische oder physische Mittel zu senden, die die Durchführung von Mitteilungen ermöglichen.</li>
    </ul>
        
    <p>Diese Mitteilungen beziehen sich immer auf unsere Produkte, Dienstleistungen, Neuigkeiten oder Werbeaktionen sowie auf die Produkte oder Dienstleistungen, die wir für Sie als interessant erachten und die möglicherweise von Mitarbeitern, Unternehmen oder „Partnern“ angeboten werden, mit denen wir zusammenarbeiten Werbe- oder kommerzielle Kooperationsvereinbarungen haben.</p>
    
    <p>Wenn dies der Fall ist, garantieren wir, dass diese Dritten niemals Zugriff auf Ihre personenbezogenen Daten haben, mit den unten aufgeführten Ausnahmen, in jedem Fall erfolgen diese Mitteilungen durch <b>${page_name} als Eigentümer der Website. </b></p>

    <p>Diese Website zeigt Affiliate-Produkte von Drittanbietern. Speziell von <b>AMAZON</b>.</p>

    <p>Das heißt, wenn Sie auf "Jetzt kaufen" o.ä. klicken, werden Sie auf die Seite weitergeleitet, auf der die Produkte angeboten werden.</p>

    <p>In diesem Fall sollten Sie wissen, dass wir die Links zu den Seiten und/oder Plattformen dieser Drittanbieter, auf denen die von uns gezeigten Produkte gekauft werden können, nur bereitstellen und ermöglichen, um die Suche und den einfachen Erwerb der Produkte zu erleichtern gleich.</p>

    <p>Diese verlinkten Seiten, die Dritten gehören, wurden weder überprüft noch unterliegen sie Kontrollen oder Empfehlungen unsererseits, so dass <b>${page_name}</b> in keinem Fall für den Inhalt verantwortlich gemacht werden kann diese Websites, für die Verantwortlichkeiten, die sich aus ihrer Nutzung in allen Bereichen ergeben, noch für die Maßnahmen, die in Bezug auf die Privatsphäre des Benutzers, die Behandlung seiner persönlichen Daten oder andere Maßnahmen getroffen werden, die möglicherweise festgelegt werden.</p>

    <p>Aus all diesen Gründen empfehlen wir Ihnen, alle Nutzungsbedingungen, Kaufbedingungen, Datenschutzrichtlinien, rechtlichen Hinweise und/oder ähnliches dieser verlinkten Seiten sorgfältig und im Voraus zu lesen, bevor Sie diese Produkte erwerben oder verwenden die Webseiten. .</p>

    <h4>GENAUIGKEIT UND WAHRHEIT DER DATEN</h4>

    <p>Als Benutzer sind Sie allein verantwortlich für die Richtigkeit und Änderung der Daten, die Sie an <b>${page_name}</b> senden, und entbinden uns diesbezüglich von jeglicher Verantwortung.</p>

    <p>Mit anderen Worten, es liegt an Ihnen, die Genauigkeit, Gültigkeit und Authentizität der bereitgestellten personenbezogenen Daten zu garantieren und in jedem Fall darauf zu reagieren, und Sie verpflichten sich, diese ordnungsgemäß auf dem neuesten Stand zu halten.</p>

    <p>In Übereinstimmung mit dem, was in dieser Datenschutzrichtlinie zum Ausdruck kommt, stimmen Sie zu, vollständige und korrekte Informationen im Kontakt- oder Abonnementformular anzugeben.</p>
    
    <h4>ABO-KÜNDIGUNG UND WIDERRUFSRECHT</h4>

    <p>Als Eigentümer der Daten, die Sie uns zur Verfügung gestellt haben, können Sie Ihre Rechte auf Auskunft, Berichtigung, Löschung und Widerspruch jederzeit ausüben, indem Sie uns eine E-Mail an <b>${mail}</b> senden und eine Fotokopie Ihres Personalausweises als gültigen Nachweis beizufügen.</p>

    <p>Ebenso können Sie sich jederzeit abmelden, um unseren Newsletter oder andere kommerzielle Mitteilungen nicht mehr zu erhalten, direkt von derselben E-Mail, die Sie erhalten haben, oder indem Sie uns eine E-Mail an <b>${mail}</b> senden.</p>
    
    <h4>DATENZUGRIFF DURCH DRITTE</h4>

    <p>Um Dienstleistungen zu erbringen, die für den Betrieb und die Entwicklung der Aktivitäten dieser Website unbedingt erforderlich sind, informieren wir Sie, dass wir Daten mit den folgenden Dienstanbietern unter deren entsprechenden Datenschutzbedingungen teilen.</p>

    <p>Sie können sicher sein, dass diese Dritten diese Informationen nicht für andere Zwecke verwenden können, die in unseren Beziehungen zu ihnen nicht ausdrücklich durch die geltenden Vorschriften zum Schutz personenbezogener Daten geregelt sind.</p>

    <p>Diese Website wird unter <b>${hosting_link}</b> mit der Marke <b>${hosting_name}</b> gehostet, die Hosting-Dienste bereitstellt, damit Sie auf unsere Website zugreifen und diese durchsuchen können. Sie können die Datenschutzrichtlinie und andere rechtliche Aspekte dieses Unternehmens unter dem folgenden Link einsehen: <b>${hosting_privacy_policy}</b>.</p>

    <p>Unsere Website verwendet Werbeserver, um die kommerziellen Inhalte zu ermöglichen, die Sie auf unseren Seiten sehen. Diese Werbeserver verwenden Cookies, die es ihnen ermöglichen, den Werbeinhalt an die demografischen Profile der Nutzer anzupassen:</p>

    <h4>Google Analytics:</h4>

    <p>Google Analytics ist ein Webanalysedienst von Google, Inc., einem Unternehmen aus Delaware mit Hauptsitz in 1600 Amphitheatre Parkway, Mountain View (Kalifornien), CA 94043, USA („Google“).</p>

    <p>Google Analytics verwendet „Cookies“, Textdateien, die auf Ihrem Computer abgelegt werden, um die Website bei der Analyse der Nutzung der Website durch Benutzer zu unterstützen.</p>

    <p>Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) werden direkt an Google übermittelt und gespeichert. Google wird diese Informationen in unserem Auftrag verwenden, um Ihre Nutzung der Website zu verfolgen, Berichte über die Website-Aktivität zusammenzustellen und andere Dienstleistungen im Zusammenhang mit der Website-Aktivität und der Internetnutzung bereitzustellen.</p>

    <p>Google wird diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Informationen im Auftrag von Google verarbeiten. Google wird Ihre IP-Adresse nicht mit anderen Daten von Google in Verbindung bringen.</p>

    <p>Als Benutzer und in Ausübung Ihrer Rechte können Sie die Verarbeitung von Daten oder Informationen ablehnen, indem Sie die Verwendung von Cookies ablehnen, indem Sie die entsprechende Konfiguration Ihres Browsers auswählen. Sie sollten jedoch wissen, dass Sie dies in diesem Fall tun können nicht alle Funktionen dieser Website nutzen können.</p>

    <p>Durch die Nutzung dieser Website akzeptieren Sie gemäß den Informationen in dieser Datenschutzerklärung die Verarbeitung von Daten durch Google in der angegebenen Weise und zu den angegebenen Zwecken.</p>

    <p>Weitere Informationen finden Sie in der Datenschutzerklärung von Google <b>unter</b> <a rel="nofollow noopener noreferrer" target="_blank" href="https://www.google.com/intl/de/policies/privacy/">https://www.google.com/intl/de/policies/privacy/</a>.</p>

    <h4>Google Adsense:</h4>

    <p>Google verwendet als Anbieterpartner Cookies, um Anzeigen auf dieser Website zu schalten. Sie können die Verwendung des DART-Cookies über die Google-Anzeige deaktivieren und indem Sie auf die Datenschutzrichtlinie des Content-Netzwerks zugreifen: <a rel="nofollow noopener noreferrer" target="_blank" href="https://www.google.com /intl/de/policies/privacy/">https://www.google.com/intl/de/policies/privacy/</a>.</p>

    <p>Google verwendet Partner-Werbeunternehmen, um Anzeigen zu schalten, wenn Sie unsere Website besuchen. Diese Unternehmen können die Informationen, die sie aus Ihren Besuchen dieser und anderer Websites erhalten (ohne Ihren Namen, Ihre Adresse, E-Mail-Adresse oder Telefonnummer), verwenden, um Ihnen Werbung zu Produkten und Dienstleistungen bereitzustellen, die Sie interessieren.</p>

    <p>Durch die Nutzung dieser Website stimmen Sie der Verarbeitung von Daten durch Google in der angegebenen Weise und zu den angegebenen Zwecken zu.</p>

    <p>Wenn Sie mehr über die Verwendung von Cookies und Praktiken zum Sammeln von Informationen und Annahme- oder Ablehnungsverfahren erfahren möchten, lesen Sie unsere COOKIES-RICHTLINIE.</p>

    <h4>SICHERHEITSMASSNAHMEN</h4>

    <p>Als Eigentümer der Website hat <b>${page_name}</b> alle notwendigen technischen und organisatorischen Maßnahmen getroffen, um die Sicherheit und Integrität der von ihr verarbeiteten personenbezogenen Daten zu gewährleisten und deren Verhinderung zu verhindern Verlust, Veränderung und/oder Zugriff durch unbefugte Dritte.</p>

    <p>Wir erinnern Sie daran, dass Sie für weitere Informationen unsere Seiten <b>Rechtsanspruch</b> und <b>Cookie-Richtlinie</b> konsultieren können.</p>`,

    // FRANCE
    'fr': 
    `<p>Si vous êtes ici, c'est parce que vous souhaitez en savoir plus sur les obligations et les droits qui vous correspondent en tant qu'utilisateur de ce site Web <b>${site_url}</b> et c'est très bien. Notre devoir est de vous informer et les vôtres d'être dûment informés.</p>

    <p>Dans cette politique de confidentialité, nous vous informerons en toute transparence sur l'objectif de ce site Web et sur tout ce qui concerne les données que vous nous fournissez, ainsi que sur les obligations et les droits qui vous correspondent.</p>
    
    <p>Pour commencer, vous devez savoir que ce site Web s'adapte à la réglementation en vigueur en matière de protection des données, ce qui affecte les données personnelles que vous nous fournissez avec votre consentement exprès et les cookies que nous utilisons pour que ce site Web fonctionne correctement et puisse développer son activité.</p>
    
    <p>Plus précisément, ce site Web est conforme aux réglementations suivantes :</p>
    
    <p>Le <b>RGPD</b> (<b>Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques</b>), qui est le nouveau règlement de l'Union européenne qui unifie la réglementation du traitement des données personnelles dans les différents pays de l'UE.</p>
    
    <p>L'<b>OD&PL</b> (<b>Loi Organique 15/1999, du 13 décembre, Protection des Données Personnelles et Décret Royal 1720/2007, du 21 décembre, le Règlement de Développement de l'OD&PL</b >) qui réglemente le traitement des données personnelles et les obligations que les responsables d'un site Web ou d'un blog doivent assumer lors de la gestion de ces informations.</p>
    
    <p>La <b>LSIS</b> (<b>Loi 34/2002, du 11 juillet, sur les services de la société de l'information et du commerce électronique</b>) qui réglemente les transactions économiques par voie électronique, tout comme la cas de ce blog.</p>
    
    <h4>DONNEES D'IDENTIFICATION</h4>
    
    <p>La personne responsable et propriétaire de ce site Web est <b>${owner} (Ci-après ${page_name})</b></p>
    
    <ul>
        <li><b>Nom</b> : ${owner_name}</li>
        <li><b>NIF</b> : ${nif}</li>
        <li><b>Siège social</b> : ${location}</li>
        <li><b>Activité du site Web</b> : ${website_activity_fr}</li>
        <li><b>E-mail</b> : ${mail}</li>
    </ul>
    
    <p>Les données personnelles que vous nous fournissez, toujours avec votre consentement exprès, seront stockées et traitées aux fins énoncées et décrites ci-dessous dans la présente politique de confidentialité, jusqu'à ce que vous nous demandiez de les supprimer.</p>
    
    <p>Nous vous informons que cette politique de confidentialité peut être modifiée à tout moment, afin de l'adapter aux évolutions législatives ou aux changements de nos activités, celle publiée sur le web étant en vigueur à tout moment. Cette modification vous sera notifiée avant son application.</p>
    
    <h4>CONDITIONS D'UTILISATION</h4>
    
    <p>Vous devez savoir, pour votre tranquillité d'esprit, que nous vous demanderons toujours votre consentement exprès pour collecter vos données dans le but correspondant spécifié dans chaque cas, ce qui implique que, si vous accordez ce consentement, vous avez lu et accepté ce Politique de confidentialité.</p>
    
    <p>Au moment où vous accédez et utilisez ce site Web, vous assumez votre statut d'utilisateur avec vos droits et obligations correspondants.</p>
    
    <p>Si vous avez plus de 13 ans, vous pouvez vous inscrire en tant qu'utilisateur sur ce site Web sans le consentement préalable de vos parents ou tuteurs.</p>
    
    <p>Si vous avez moins de 13 ans, vous aurez besoin du consentement de vos parents ou tuteurs pour le traitement de vos données personnelles.</p>
    
    <h4>ENREGISTREMENT ET OBJET DE VOS DONNÉES</h4>

    <p>Selon le formulaire ou la section auxquels vous accédez, nous ne demanderons que les données nécessaires aux fins décrites ci-dessous. À tout moment, vous devez donner votre consentement exprès lorsque nous vous demandons des informations personnelles aux fins suivantes :</p>

    <ul>
        <li>Les finalités spécifiques qui sont particulièrement indiquées dans chacune des pages ou sections où apparaît le formulaire d'inscription ou de contact électronique.</li>
        <li>En général, pour répondre à vos demandes, commentaires, requêtes ou tout type de demande que vous faites en tant qu'utilisateur via l'un des formulaires de contact que nous mettons à votre disposition.</li>
        <li>Pour vous informer des requêtes, demandes, activités, produits, actualités et/ou services ; par e-mail, fax, Whatsapp, Skype, téléphone fourni, sms et mms.</li>
        <li>Pour vous envoyer des communications commerciales ou publicitaires par tout autre moyen électronique ou physique permettant d'effectuer des communications.</li>
    </ul>
        
    <p>Ces communications seront toujours liées à nos produits, services, actualités ou promotions, ainsi qu'aux produits ou services que nous pouvons considérer comme intéressants pour vous et qui peuvent être proposés par des collaborateurs, entreprises ou "partenaires" avec lesquels nous avoir des accords de promotion ou de collaboration commerciale.</p>
    
    <p>Si tel est le cas, nous garantissons que ces tiers n'auront jamais accès à vos données personnelles, avec les exceptions indiquées ci-dessous, dans tous les cas ces communications étant effectuées par <b>${page_name}, en tant que propriétaire du site Web. </b></p>

    <p>Ce site Web affiche des produits d'affiliation tiers. Spécifiquement de <b>AMAZON</b>.</p>

    <p>Cela signifie que lorsque vous cliquez sur "Acheter maintenant" ou similaire, vous serez redirigé vers la page où les produits sont proposés.</p>

    <p>Dans ce cas, vous devez savoir que nous fournissons et facilitons uniquement les liens vers les pages et/ou plateformes de ces tiers où les produits que nous montrons peuvent être achetés, afin de faciliter la recherche et l'acquisition facile des pareil.</p>

    <p>Ces pages liées appartenant à des tiers n'ont pas été examinées ni ne font l'objet de contrôles, ni de recommandation de notre part, donc en aucun cas <b>${page_name}</b> ne sera considéré comme responsable du contenu de ces sites Web, pour les responsabilités découlant de leur utilisation dans tous les domaines, ni pour les mesures adoptées concernant la vie privée de l'utilisateur, le traitement de ses données personnelles ou autres qui pourraient être établies.</p>

    <p>Pour toutes ces raisons, nous vous recommandons de lire attentivement et à l'avance toutes les conditions d'utilisation, conditions d'achat, politiques de confidentialité, mentions légales et/ou similaires de ces sites liés avant de procéder à l'acquisition de ces produits ou à l'utilisation de les sites Web. .</p>

    <h4>EXACTITUDE ET VÉRITÉ DES DONNÉES</h4>

    <p>En tant qu'utilisateur, vous êtes seul responsable de la véracité et de la modification des données que vous envoyez à <b>${page_name}</b>, nous exonérant de toute responsabilité à cet égard.</p>

    <p>En d'autres termes, il vous appartient de garantir et de répondre en tout état de cause de l'exactitude, de la validité et de l'authenticité des données personnelles fournies, et vous vous engagez à les tenir dûment à jour.</p>

    <p>Conformément à ce qui est exprimé dans cette politique de confidentialité, vous vous engagez à fournir des informations complètes et correctes dans le formulaire de contact ou d'inscription.</p>
    
    <h4>ANNULATION DE L'ABONNEMENT ET DROIT DE RETRACTATION</h4>

    <p>En tant que propriétaire des données que vous nous avez fournies, vous pouvez exercer vos droits d'accès, de rectification, d'annulation et d'opposition à tout moment, en nous envoyant un e-mail à <b>${mail}</b> et en joignant une photocopie de votre pièce d'identité comme justificatif valable.</p>

    <p>De même, vous pouvez vous désinscrire à tout moment pour ne plus recevoir notre newsletter ou toute autre communication commerciale, directement depuis le même e-mail que vous avez reçu ou en nous envoyant un e-mail à <b>${mail}</b>.</p>
    
    <h4>ACCÈS AUX DONNÉES PAR DES TIERS</h4>

    <p>Afin de fournir des services strictement nécessaires au fonctionnement et au développement des activités de ce site Web, nous vous informons que nous partageons des données avec les prestataires de services suivants dans leurs conditions de confidentialité correspondantes.</p>

    <p>Vous pouvez être assuré que ces tiers ne pourront pas utiliser lesdites informations à d'autres fins que celles spécifiquement réglementées dans nos relations avec eux en vertu de la réglementation applicable en matière de protection des données personnelles.</p>

    <p>Ce site Web est hébergé sur <b>${hosting_link}</b>, avec la marque <b>${hosting_name}</b>, qui fournit des services d'hébergement afin que vous puissiez accéder et naviguer sur notre site. Vous pouvez consulter la politique de confidentialité et d'autres aspects juridiques de cette société sur le lien suivant : <b>${hosting_privacy_policy}</b>.</p>

    <p>Notre site Web utilise des serveurs publicitaires afin de faciliter le contenu commercial que vous visualisez sur nos pages. Ces serveurs publicitaires utilisent des cookies qui leur permettent d'adapter le contenu publicitaire aux profils démographiques des utilisateurs :</p>

    <h4>Google Analytics :</h4>

    <p>Google Analytics est un service d'analyse Web fourni par Google, Inc., une société du Delaware dont le siège social est situé au 1600 Amphitheatre Parkway, Mountain View (Californie), CA 94043, États-Unis ("Google").</p>

    <p>Google Analytics utilise des "cookies", qui sont des fichiers texte placés sur votre ordinateur, pour aider le site Web à analyser la façon dont les utilisateurs utilisent le site Web.</p>

    <p>Les informations générées par le cookie concernant votre utilisation du site Web (y compris votre adresse IP) seront directement transmises et stockées par Google. Google utilisera ces informations en notre nom dans le but de suivre votre utilisation du site Web, de compiler des rapports sur l'activité du site Web et de fournir d'autres services liés à l'activité du site Web et à l'utilisation d'Internet.</p>

    <p>Google peut transmettre ces informations à des tiers lorsque la loi l'exige ou lorsque ces tiers traitent les informations pour le compte de Google. Google n'associera votre adresse IP à aucune autre donnée détenue par Google.</p>

    <p>En tant qu'utilisateur, et dans l'exercice de vos droits, vous pouvez vous opposer au traitement de données ou d'informations en refusant l'utilisation de cookies en sélectionnant la configuration appropriée de votre navigateur, cependant, vous devez savoir que si vous le faites, vous pouvez ne pas être en mesure d'utiliser toutes les fonctionnalités de ce site Web.</p>

    <p>En utilisant ce site Web, conformément aux informations fournies dans la présente politique de confidentialité, vous acceptez le traitement des données par Google de la manière et aux fins indiquées.</p>

    <p>Pour plus d'informations, vous pouvez consulter la politique de confidentialité de Google <b>sur</b> <a rel="nofollow noopener noreferrer" target="_blank" href="https://www.google.com/intl/fr/policies/privacy/">https://www.google.com/intl/fr/policies/privacy/</a>.</p>

    <h4>Google Adsense :</h4>

    <p>Google, en tant que fournisseur partenaire, utilise des cookies pour diffuser des annonces sur ce site Web. Vous pouvez désactiver l'utilisation du cookie DART via l'annonce Google et en accédant à la politique de confidentialité du réseau de contenu : <a rel="nofollow noopener noreferrer" target="_blank" href="https://www.google.com/intl/fr/policies/privacy/">https://www.google.com/intl/fr/policies/privacy/</a>.</p>

    <p>Google fait appel à des sociétés de publicité partenaires pour diffuser des annonces lorsque vous visitez notre site Web. Ces sociétés peuvent utiliser les informations qu'elles obtiennent lors de vos visites sur ce site Web et sur d'autres sites Web (à l'exclusion de votre nom, adresse, adresse e-mail ou numéro de téléphone) pour vous fournir des publicités sur les produits et services qui vous intéressent.</p>

    <p>En utilisant ce site Web, vous consentez au traitement de vos données par Google de la manière et aux fins indiquées.</p>

    <p>Si vous souhaitez en savoir plus sur l'utilisation des cookies et les pratiques de collecte d'informations et les procédures d'acceptation ou de refus, consultez notre POLITIQUE SUR LES COOKIES.</p>

    <h4>MESURES DE SÉCURITÉ</h4>

    <p>En tant que propriétaire du site Web, <b>${page_name}</b> a adopté toutes les mesures techniques et organisationnelles nécessaires pour garantir la sécurité et l'intégrité des données personnelles qu'il traite, ainsi que pour empêcher leur perte, altération et/ou accès par des tiers non autorisés.</p>

    <p>Nous vous rappelons que, pour plus d'informations, vous pouvez consulter nos pages <b>Réclamation légale</b> et <b>Politique de cookies</b>.</p>`,
    
    // SPAIN
    'es': 
    `<p>Si estás aquí es porque quieres saber más sobre las obligaciones y derechos que te corresponden como usuario de este sitio web <b>${site_url}</b> y eso está muy bien. Nuestro deber es informarte y el tuyo estar debidamente informado.</p>

    <p>En esta Política de Privacidad te informaremos con total transparencia sobre la finalidad de este sitio web y todo lo que afecta a los datos que nos facilitas, así como las obligaciones y derechos que te corresponden.</p>
    
    <p>Para empezar, debes saber que esta web se adapta a la normativa vigente en materia de protección de datos, que afecta a los datos personales que nos facilitas con tu expreso consentimiento y a las cookies que utilizamos para que esta web funcione correctamente y pueda desarrollar su actividad.</p>
    
    <p>En concreto, este sitio web cumple con la siguiente normativa:</p>
    
    <p>El <b>RGPD</b> (<b>Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas</b>), que el nuevo reglamento de la Unión Europea que unifica la regulación del tratamiento de datos personales en los distintos países de la UE.</p>
    
    <p>El <b>OD&PL</b> (<b>Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal y Real Decreto 1720/2007, de 21 de diciembre, Reglamento de Desarrollo del OD&PL</b) >) que regula el tratamiento de los datos personales y las obligaciones que deben asumir los responsables de un sitio web o de un blog en el manejo de esta información.</p>
    
    <p>La <b>LSIS</b> (<b>Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico</b>) que regula las transacciones económicas a través de medios electrónicos, como es la caso de este blog.</p>
    
    <h4>DATOS IDENTIFICATIVOS</h4>
    
    <p>El responsable y propietario de este sitio web es <b>${owner} (En adelante ${page_name})</b></p>
    
    <ul>
        <li><b>Nombre</b>: ${owner_name}</li>
        <li><b>NIF</b>: ${nif}</li>
        <li><b>Oficina registrada</b>: ${location}</li>
        <li><b>Actividad del sitio web</b>: ${website_activity_es}</li>
        <li><b>Correo electrónico</b>: ${mail}</li>
    </ul>
    
    <p>Los datos personales que nos proporcione, siempre con su consentimiento expreso, serán almacenados y tratados con las finalidades establecidas y descritas a continuación en esta Política de Privacidad, hasta que nos solicite su supresión.</p>
    
    <p>Le informamos que esta Política de Privacidad podrá ser modificada en cualquier momento, con el objeto de adaptarla a novedades legislativas o cambios en nuestras actividades, siendo en todo momento la vigente la publicada en la web. Dicha modificación le será notificada antes de su aplicación.</p>
    
    <h4>TÉRMINOS DE USO</h4>
    
    <p>Debes saber, para tu tranquilidad, que siempre te solicitaremos tu consentimiento expreso para recabar tus datos con la correspondiente finalidad especificada en cada caso, lo que implica que, si otorgas ese consentimiento, has leído y aceptado este Política de privacidad.</p>
    
    <p>En el momento en que accedes y utilizas este sitio web, asumes tu condición de usuario con los derechos y obligaciones que te corresponden.</p>
    
    <p>Si eres mayor de 13 años, puedes registrarte como usuario en este sitio web sin el consentimiento previo de tus padres o tutores.</p>
    
    <p>Si eres menor de 13 años, necesitarás el consentimiento de tus padres o tutores para el tratamiento de tus datos personales.</p>
    
    <h4>REGISTRO Y FINALIDAD DE SUS DATOS</h4>

    <p>Dependiendo del formulario o apartado al que acceda, únicamente le solicitaremos los datos necesarios para las finalidades descritas a continuación. En todo momento, deberá prestar su consentimiento expreso cuando le solicitemos información personal para las siguientes finalidades:</p>

    <ul>
        <li>Las finalidades específicas que se indiquen particularmente en cada una de las páginas o apartados donde aparezca el formulario de registro o contacto electrónico.</li>
        <li>En general, para atender tus solicitudes, comentarios, consultas o cualquier tipo de petición que realices como usuario a través de cualquiera de los formularios de contacto que ponemos a tu disposición.</li>
        <li>Para informarle sobre consultas, solicitudes, actividades, productos, novedades y/o servicios; vía e-mail, fax, Whatsapp, Skype, teléfono proporcionado, sms y mms.</li>
        <li>Para enviarle comunicaciones comerciales o publicitarias a través de cualquier otro medio electrónico o físico, que posibilite la realización de comunicaciones.</li>
    </ul>
        
    <p>Estas comunicaciones serán siempre relacionadas con nuestros productos, servicios, novedades o promociones, así como con aquellos productos o servicios que consideremos de su interés y que puedan ser ofrecidos por colaboradores, empresas o "partners" con los que tener acuerdos de promoción o colaboración comercial.</p>
    
    <p>En caso afirmativo, le garantizamos que estos terceros nunca tendrán acceso a sus datos personales, con las excepciones que se reflejan a continuación, siendo en todo caso estas comunicaciones realizadas por <b>${page_name}, como titular de la web. </b></p>

    <p>Este sitio web muestra productos afiliados de terceros. Concretamente de <b>AMAZON</b>.</p>

    <p>Esto significa que cuando haga clic en "Comprar ahora" o similar, será redirigido a la página donde se ofrecen los productos.</p>

    <p>En este caso, debes saber que únicamente proporcionamos y facilitamos los enlaces a las páginas y/o plataformas de estos terceros donde se pueden adquirir los productos que mostramos, con el fin de facilitar la búsqueda y fácil adquisición de los mismos. mismo.</p>

    <p>Estas páginas enlazadas pertenecientes a terceros no han sido revisadas ni están sujetas a controles, ni recomendación por nuestra parte, por lo que en ningún caso <b>${page_name}</b> será considerado responsable de los contenidos de estos sitios web, de las responsabilidades derivadas de su uso en todos los ámbitos, ni de las medidas que se adopten respecto a la privacidad del usuario, el tratamiento de sus datos personales u otras que puedan establecerse.</p>

    <p>Por todo ello, le recomendamos que lea detenidamente y con antelación todas las condiciones de uso, condiciones de compra, políticas de privacidad, avisos legales y/o similares de estos sitios enlazados antes de proceder a la adquisición de estos productos o uso de los sitios web .</p>

    <h4>EXACTITUD Y VERACIDAD DE LOS DATOS</h4>

    <p>Como usuario, eres el único responsable de la veracidad y modificación de los datos que remitas a <b>${page_name}</b> exonerándonos de cualquier responsabilidad al respecto.</p>

    <p>Es decir, te corresponde a ti garantizar y responder en cualquier caso de la exactitud, vigencia y autenticidad de los datos personales facilitados, y te comprometes a mantenerlos debidamente actualizados.</p>

    <p>De acuerdo con lo expresado en esta Política de Privacidad, usted acepta proporcionar información completa y correcta en el formulario de contacto o suscripción.</p>
    
    <h4>CANCELACIÓN DE SUSCRIPCIÓN Y DERECHO DE REVOCACIÓN</h4>

    <p>Como titular de los datos que nos has facilitado, puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición en cualquier momento, enviándonos un correo electrónico a <b>${mail}</b> y adjuntando una fotocopia de su documento de identidad como prueba válida.</p>

    <p>Asimismo, puedes darte de baja en cualquier momento para dejar de recibir nuestra newsletter o cualquier otra comunicación comercial, directamente desde el mismo correo que has recibido o enviándonos un correo a <b>${mail}</b>.</p>
    
    <h4>ACCESO A DATOS POR PARTE DE TERCEROS</h4>

    <p>Con el fin de prestar los servicios estrictamente necesarios para el funcionamiento y desarrollo de las actividades de este sitio web, le informamos que compartimos datos con los siguientes proveedores de servicios bajo sus correspondientes condiciones de privacidad.</p>

    <p>Puede estar seguro de que estos terceros no podrán utilizar dicha información para ningún otro fin que no esté específicamente regulado en nuestras relaciones con ellos en virtud de la normativa aplicable en materia de protección de datos de carácter personal.</p>

    <p>Este sitio web está alojado en <b>${hosting_link}</b>, con la marca comercial <b>${hosting_name}</b>, que proporciona servicios de alojamiento para que pueda acceder y navegar por nuestro sitio. Puede consultar la política de privacidad y otros aspectos legales de esta empresa en el siguiente enlace: <b>${hosting_privacy_policy}</b>.</p>

    <p>Nuestro sitio web utiliza servidores publicitarios para facilitar el contenido comercial que ve en nuestras páginas. Estos servidores publicitarios utilizan cookies que les permiten adaptar el contenido publicitario a los perfiles demográficos de los usuarios:</p>

    <h4>Google Analytics:</h4>

    <p>Google Analytics es un servicio de análisis web proporcionado por Google, Inc., una empresa de Delaware cuya oficina principal está en 1600 Amphitheatre Parkway, Mountain View (California), CA 94043, Estados Unidos ("Google").</p>

    <p>Google Analytics utiliza "cookies", que son archivos de texto ubicados en su computadora, para ayudar al sitio web a analizar cómo los usuarios usan el sitio web.</p>

    <p>La información que genera la cookie acerca de su uso del sitio web (incluyendo su dirección IP) será directamente transmitida y archivada por Google. Google usará esta información por cuenta nuestra con el propósito de rastrear su uso del sitio web, recopilando informes sobre la actividad del sitio web y brindando otros servicios relacionados con la actividad del sitio web y el uso de Internet.</p>

    <p>Google podrá transmitir dicha información a terceros cuando así se lo requiera la legislación, o cuando dichos terceros procesen la información por cuenta de Google. Google no asociará su dirección IP con ningún otro dato del que disponga Google.</p>

    <p>Como usuario, y en ejercicio de tus derechos, puedes rechazar el tratamiento de los datos o la información rechazando el uso de cookies mediante la selección de la configuración apropiada de tu navegador, sin embargo, debes saber que si lo haces es posible que no podrá utilizar la funcionalidad completa de este sitio web.</p>

    <p>Al utilizar este sitio web, de acuerdo con la información proporcionada en esta Política de Privacidad, aceptas el tratamiento de datos por parte de Google en la forma y para los fines indicados.</p>

    <p>Para más información, puede consultar la política de privacidad de Google <b>en</b> <a rel="nofollow noopener noreferrer" target="_blank" href="https://www.google.com/intl/es/policies/privacy/">https://www.google.com/intl/es/policies/privacy/</a>.</p>

    <h4>Google Adsense:</h4>

    <p>Google, como socio proveedor, utiliza cookies para publicar anuncios en este sitio web. Puede inhabilitar el uso de la cookie de DART a través del anuncio de Google y accediendo a la política de privacidad de la red de contenido: <a rel="nofollow noopener noreferrer" target="_blank" href="https://www.google.com/intl/es/policies/privacy/">https://www.google.com/intl/es/policies/privacy/</a>.</p>

    <p>Google utiliza empresas de publicidad asociadas para publicar anuncios cuando visita nuestro sitio web. Estas empresas pueden utilizar la información que obtienen de sus visitas a este y otros sitios web (sin incluir su nombre, dirección, dirección de correo electrónico o número de teléfono) para proporcionarle anuncios sobre productos y servicios de su interés.</p>

    <p>Al utilizar este sitio web, usted consiente el tratamiento de datos por parte de Google en la forma y para los fines indicados.</p>

    <p>Si desea saber más sobre el uso de cookies y prácticas de recopilación de información y procedimientos de aceptación o rechazo, consulte nuestra POLÍTICA DE COOKIES.</p>

    <h4>MEDIDAS DE SEGURIDAD</h4>

    <p>Como titular del sitio web, <b>${page_name}</b> ha adoptado todas las medidas de índole técnica y organizativa necesarias para garantizar la seguridad e integridad de los datos de carácter personal que trate, así como para evitar su pérdida, alteración y/o acceso por parte de terceros no autorizados.</p>

    <p>Le recordamos que, para más información, puede consultar nuestras páginas de <b>Reclamación Legal</b> y <b>Política de Cookies</b>.</p>`
}

const cookiesPolicy = {
    //  ENGLISH
    'en': 
    `<p>If you want to know more about the use of cookies by this website <b>${site_url}</b>, you are in the right place. Next, we are going to explain what exactly cookies are; what kind of cookies we use and why; and how you can exercise your right to configure your browser and reject the use of any of them.</p>

    <p>Of course, you should know that if you decide not to use some cookies, this website may not work perfectly, affecting your user experience.</p>
    
    <h4>WHAT IS A COOKIE</h4>
    
    <p>A cookie is a file that is downloaded to your computer when you access certain web pages or blogs.</p>
    
    <p>Cookies allow that page, among other things, to store and retrieve information about your browsing habits or your equipment, and depending on the information they contain and the way you use your equipment, they can be used to recognize you.</p>
    
    <p>The user's browser stores cookies on the hard drive only during the current session, occupying minimal memory space and not harming the computer. Cookies do not contain any kind of specific personal information, and most of them are deleted from the hard drive at the end of the browser session (so-called session cookies).</p>
    
    <p>Most browsers accept cookies as standard and, regardless of them, allow or prevent temporary or stored cookies in the security settings.</p>
    
    <p>Cookies are associated with the browser, not the person, so they do not usually store sensitive information about you such as credit cards or bank details, photographs or personal information, etc. The data they store is technical, statistical, personal preferences, personalization of content, etc.</p>
    
    <h4>ACCEPTANCE OF COOKIES: CURRENT REGULATIONS</h4>
    
    <p>By accessing this website, and in accordance with current regulations on data protection, we inform you of the use of cookies, giving you the option of expressly accepting them and accessing more information through this Cookies Policy.</p>
    
    <p>You should know that, in the case of continuing browsing, you will be giving your consent for the use of these cookies. But, at any time, you can change your mind and block its use through your browser.</p>
    
    <p>For your complete peace of mind, this website complies with the provisions of current regulations regarding the use of cookies and your personal data:</p>
    
    <p>The LSSI-CE regulation (<b>Law of the information society and electronic commerce</b>)</p>
    
    <p>The <b>RGPD</b> (<b>Regulation (EU) 2016/679 of the European Parliament and of the Council of April 27, 2016 regarding the protection of natural persons</b>), which unifies the regulation of the processing of personal data in the EU countries.</p>
    
    <p>This Cookies Policy could be modified at any time to adapt to new regulations or changes in our activities, the one that is published on the web at any time being in force.</p>
    
    <h4>TYPES OF COOKIES</h4>
    
    <p>In order to offer you a better user experience, obtain analytical data, store and retrieve information about your browsing habits or that of your equipment and develop its activity, this website <b>${site_url}</b> uses its own and third-party cookies.</p>
    
    <p><b>What types of cookies does this website use?</b></p>
    
    <ul>
        <li><b>Technical cookies</b>: These are those that allow the user to navigate through a web page, platform or application and use the different options or services that exist in it, such as, for example, controlling traffic and data communication, identifying the session, access restricted access parts, remember the elements that make up an order, carry out the purchase process of an order, make the request for registration or participation in an event, use security elements during navigation, store content for dissemination videos or sound or share content through social networks.</li>
        <li><b>Personalization cookies</b>: These are those that allow the user to access the service with some predefined general characteristics based on a series of criteria in the user's terminal, such as the language, the type of browser through which the user accesses the service. , the regional configuration from where you access the service, etc.</li>
        <li><b>Analysis cookies</b>: These are those that, well treated by us or by third parties, allow us to quantify the number of users and thus carry out the measurement and statistical analysis of the use made by users of the service offered. For this, your browsing on our website is analyzed in order to improve the offer of products or services that we offer you.</li>
        <li><b>Advertising cookies</b>: These are those that, well treated by us or by third parties, allow us to manage in the most efficient way possible the offer of the advertising spaces that are on the web page, adapting the content of the advertisement to the content of the requested service or to the your use of our website. For this we can analyze your Internet browsing habits and we can show you advertising related to your browsing profile.</li>
        <li><b>Behavioral advertising cookies</b>: These are those that allow the management, in the most efficient way possible, of the advertising spaces that, where appropriate, the editor has included in a web page, application or platform from which the requested service is provided. These cookies store information on the behavior of users obtained through continuous observation of their browsing habits, which allows the development of a specific profile to display advertising based on it.</li>
        <li><b>Third-party cookies</b>: This website <b>${site_url}</b> may use third-party services that, on behalf of Google, will collect information for statistical purposes, use of the site by the user and for the provision of other services related to the activity of the website and other Internet services.</li>
    </ul>

    <p>In particular, this website uses Google Analytics, a web analytics service provided by Google, Inc. domiciled in the United States with headquarters at 1600 Amphitheater Parkway, Mountain View, California 94043. To provide these services, Google uses cookies that collect information, including the user's IP address, which will be transmitted, processed and stored by Google in the terms set out on the Google.com website. This includes the possible transmission of said information to third parties for reasons of legal requirement or when said third parties process the information on behalf of Google.</p>
    
    <h4>MANAGE AND REJECT THE USE OF COOKIES</h4>
    
    <p>At any time, you can adapt your browser settings to manage, reject the use of cookies and be notified before they are downloaded.</p>
    
    <p>You can also adapt the settings so that the browser rejects all cookies, or only third-party cookies. And you can also delete any of the cookies that are already on your computer.</p>
    
    <p>For this, you must bear in mind that you will have to separately adapt the configuration of each browser and equipment that you use since, as we have previously mentioned, cookies are associated with the browser, not with the person.</p>
    
    <p><b>Google Chrome</b> <a rel="nofollow noopener noreferrer" target="_blank" href="https://support.google.com/chrome/answer/95647?hl=es-419">https://support.google.com/chrome/answer/95647?hl=es-419</a></p>
    
    <p><b>Internet Explorer</b> <a rel="nofollow noopener noreferrer" target="_blank" href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies#ie=ie-10">https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies#ie=ie-10</a></p>
    
    <p><b>Mozilla Firefox</b> <a rel="nofollow noopener noreferrer" target="_blank" href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectlocale=es&redirectslug=ificar-y-deshabilitar-cookies-que-los-sitios-we">https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectlocale=es&redirectslug=ificar-y-deshabilitar-cookies-que-los-sitios-we</a></p>
    
    <p><b>Apple Safari</b> <a rel="nofollow noopener noreferrer" target="_blank" href="https://support.apple.com/es-es/HT201265">https://support.apple.com/es-es/HT201265</a></p>
    
    <p>If you have any questions about this Cookies Policy, you can contact us by sending an email to <b>${mail}</b>.</p>`,

    // DEUTSCH
    'de': 
    `<p>Wenn Sie mehr über die Verwendung von Cookies durch diese Website <b>${site_url}</b> erfahren möchten, sind Sie hier richtig. Als nächstes werden wir erklären, was genau Cookies sind; welche Art von Cookies wir verwenden und warum; und wie Sie Ihr Recht ausüben können, Ihren Browser zu konfigurieren und deren Verwendung abzulehnen.</p>

    <p>Sie sollten natürlich wissen, dass diese Website möglicherweise nicht einwandfrei funktioniert, wenn Sie sich entscheiden, einige Cookies nicht zu verwenden, was Ihre Benutzererfahrung beeinträchtigen kann.</p>
    
    <h4>WAS IST EIN COOKIE</h4>
    
    <p>Ein Cookie ist eine Datei, die auf Ihren Computer heruntergeladen wird, wenn Sie auf bestimmte Webseiten oder Blogs zugreifen.</p>
    
    <p>Cookies ermöglichen es dieser Seite unter anderem, Informationen über Ihre Surfgewohnheiten oder Ihr Gerät zu speichern und abzurufen, und abhängig von den darin enthaltenen Informationen und der Art und Weise, wie Sie Ihr Gerät verwenden, können sie verwendet werden, um Sie zu erkennen.</p>
    
    <p>Der Browser des Benutzers speichert Cookies nur während der aktuellen Sitzung auf der Festplatte, belegt nur minimalen Speicherplatz und schadet dem Computer nicht. Cookies enthalten keine personenspezifischen Informationen und werden größtenteils am Ende der Browser-Sitzung wieder von der Festplatte gelöscht (sog. Sitzungs-Cookies).</p>
    
    <p>Die meisten Browser akzeptieren Cookies standardmäßig und erlauben oder verhindern unabhängig davon temporäre oder gespeicherte Cookies in den Sicherheitseinstellungen.</p>
    
    <p>Cookies sind mit dem Browser verbunden, nicht mit der Person, daher speichern sie normalerweise keine sensiblen Informationen über Sie, wie Kreditkarten- oder Bankdaten, Fotos oder persönliche Informationen usw. Die Daten, die sie speichern, sind technische, statistische und persönliche Präferenzen , Personalisierung von Inhalten usw.</p>
    
    <h4>AKZEPTANZ VON COOKIES: AKTUELLE VORSCHRIFTEN</h4>
    
    <p>Durch den Zugriff auf diese Website und in Übereinstimmung mit den geltenden Datenschutzbestimmungen informieren wir Sie über die Verwendung von Cookies, geben Ihnen die Möglichkeit, diese ausdrücklich zu akzeptieren und über diese Cookie-Richtlinie auf weitere Informationen zuzugreifen.</p>
    
    <p>Sie sollten wissen, dass Sie bei fortgesetztem Surfen Ihre Zustimmung zur Verwendung dieser Cookies geben. Sie können jedoch jederzeit Ihre Meinung ändern und die Verwendung über Ihren Browser blockieren.</p>
    
    <p>Für Ihre absolute Sicherheit erfüllt diese Website die Bestimmungen der geltenden Vorschriften in Bezug auf die Verwendung von Cookies und Ihrer persönlichen Daten:</p>
    
    <p>Die LSSI-CE-Verordnung (<b>Gesetz der Informationsgesellschaft und des elektronischen Geschäftsverkehrs</b>)</p>
    
    <p>Die <b>RGPD</b> (<b>Verordnung (EU) 2016/679 des Europäischen Parlaments und des Rates vom 27. April 2016 zum Schutz natürlicher Personen</b>), die vereinheitlicht die Verordnung über die Verarbeitung personenbezogener Daten in den EU-Ländern.</p>
    
    <p>Diese Cookie-Richtlinie kann jederzeit geändert werden, um sie an neue Vorschriften oder Änderungen unserer Aktivitäten anzupassen, wobei diejenige, die zu jedem Zeitpunkt im Internet veröffentlicht wird, in Kraft ist.</p>
    
    <h4>ARTEN VON COOKIES</h4>
    
    <p>Um Ihnen eine bessere Benutzererfahrung zu bieten, Analysedaten zu erhalten, Informationen über Ihre Surfgewohnheiten oder die Ihrer Geräte zu speichern und abzurufen und ihre Aktivität zu entwickeln, verwendet diese Website <b>${site_url}</b> ihre eigene Cookies und Cookies von Drittanbietern.</p>
    
    <p><b>Welche Arten von Cookies verwendet diese Website?</b></p>
    
    <ul>
        <li><b>Technische Cookies</b>: Dies sind diejenigen, die es dem Benutzer ermöglichen, durch eine Webseite, Plattform oder Anwendung zu navigieren und die verschiedenen Optionen oder Dienste zu nutzen, die darin vorhanden sind, wie beispielsweise die Steuerung des Datenverkehrs und Datenkommunikation, Identifizierung der Sitzung, Zugriff auf Teile mit eingeschränktem Zugriff, Merken der Elemente, aus denen eine Bestellung besteht, Ausführen des Kaufvorgangs einer Bestellung, Stellen der Anfrage zur Registrierung oder Teilnahme an einer Veranstaltung, Verwenden von Sicherheitselementen während der Navigation, Speichern von Inhalten zur Verbreitung von Videos oder Ton oder zum Teilen von Inhalten über soziale Netzwerke.</li>
        <li><b>Personalisierungs-Cookies</b>: Dies sind diejenigen, die es dem Benutzer ermöglichen, auf den Dienst mit einigen vordefinierten allgemeinen Merkmalen zuzugreifen, die auf einer Reihe von Kriterien im Endgerät des Benutzers basieren, wie z. B. der Sprache, dem Browsertyp die der Benutzer auf den Dienst zugreift. , die regionale Konfiguration, von der aus Sie auf den Dienst zugreifen usw.</li>
        <li><b>Analyse-Cookies</b>: Dies sind Cookies, die uns, wenn sie von uns oder Dritten verarbeitet werden, ermöglichen, die Anzahl der Benutzer zu quantifizieren und somit die Messung und statistische Analyse der Nutzung durch die Benutzer durchzuführen der angebotenen Dienstleistung. Dazu wird Ihr Surfen auf unserer Website analysiert, um das Angebot an Produkten oder Dienstleistungen, die wir Ihnen anbieten, zu verbessern.</li>
        <li><b>Werbe-Cookies</b>: Dies sind diejenigen, die uns, wenn sie von uns oder Dritten gut behandelt werden, ermöglichen, das Angebot der Werbeflächen auf der Webseite so effizient wie möglich zu verwalten, Anpassung des Inhalts der Anzeige an den Inhalt des angeforderten Dienstes oder an Ihre Nutzung unserer Website. Für das Dadurch können wir Ihre Surfgewohnheiten im Internet analysieren und Ihnen Werbung zeigen, die sich auf Ihr Surfprofil bezieht.</li>
        <li><b>Verhaltensbezogene Werbe-Cookies</b>: Dies sind Cookies, die eine möglichst effiziente Verwaltung der Werbeflächen ermöglichen, die der Herausgeber gegebenenfalls in eine Webseite, Anwendung oder Plattform eingefügt hat von der die angeforderte Dienstleistung erbracht wird. Diese Cookies speichern Informationen über das Verhalten der Benutzer, die durch kontinuierliche Beobachtung ihrer Surfgewohnheiten gewonnen werden, was die Entwicklung eines spezifischen Profils ermöglicht, um darauf basierende Werbung anzuzeigen.</li>
        <li><b>Cookies von Drittanbietern</b>: Diese Website <b>${site_url}</b> verwendet möglicherweise Dienste von Drittanbietern, die im Auftrag von Google Informationen zu statistischen Zwecken sammeln, verwenden der Website durch den Benutzer und für die Bereitstellung anderer Dienstleistungen im Zusammenhang mit der Aktivität der Website und anderer Internetdienste.</li>
    </ul>

    <p>Insbesondere verwendet diese Website Google Analytics, einen Webanalysedienst von Google, Inc. mit Sitz in den Vereinigten Staaten und Hauptsitz in 1600 Amphitheatre Parkway, Mountain View, California 94043. Um diese Dienste bereitzustellen, verwendet Google sammelnde Cookies Informationen, einschließlich der IP-Adresse des Nutzers, die von Google gemäß den auf der Website Google.com beschriebenen Bedingungen übermittelt, verarbeitet und gespeichert werden. Dies gilt auch für die mögliche Übermittlung dieser Informationen an Dritte aufgrund gesetzlicher Vorschriften oder wenn Dritte die Informationen im Auftrag von Google verarbeiten.</p>
    
    <h4>VERWALTEN UND ABLEHNEN SIE DIE VERWENDUNG VON COOKIES</h4>
    
    <p>Sie können Ihre Browsereinstellungen jederzeit anpassen, um die Verwendung von Cookies zu verwalten, abzulehnen und benachrichtigt zu werden, bevor sie heruntergeladen werden.</p>
    
    <p>Sie können die Einstellungen auch so anpassen, dass der Browser alle Cookies oder nur Cookies von Drittanbietern ablehnt. Und Sie können auch alle Cookies löschen, die sich bereits auf Ihrem Computer befinden.</p>
    
    <p>Dabei müssen Sie bedenken, dass Sie die Konfiguration jedes verwendeten Browsers und Gerätes separat anpassen müssen, da Cookies, wie bereits erwähnt, dem Browser und nicht der Person zugeordnet werden.</p>
    
    <p><b>Google Chrome</b> <a rel="nofollow noopener noreferrer" target="_blank" href="https://support.google.com/chrome/answer/95647?hl=es-419 ">https://support.google.com/chrome/answer/95647?hl=es-419</a></p>
    
    <p><b>Internet Explorer</b> <a rel="nofollow noopener noreferrer" target="_blank" href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies#ie=ie-10">https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies#ie=ie- 10</a></p>
    
    <p><b>Mozilla Firefox</b> <a rel="nofollow noopener noreferrer" target="_blank" href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectlocale=es&redirectslug=ificar-y-deshabilitar-cookies-que-los-sitios-we">https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectlocale=es&redirectslug=ificar-y-deshabilitar-cookies-que-los-sitios-we</a></p>
    
    <p><b>Apple Safari</b> <a rel="nofollow noopener noreferrer" target="_blank" href="https://support.apple.com/es-es/HT201265">https://support.apple.com/es-es/HT201265</a></p>
    
    <p>Wenn Sie Fragen zu dieser Cookie-Richtlinie haben, können Sie uns kontaktieren, indem Sie eine E-Mail an <b>${mail}</b>.</p>`,

    // FRANCE
    'fr': 
    `<p>Si vous souhaitez en savoir plus sur l'utilisation des cookies par ce site Web <b>${site_url}</b>, vous êtes au bon endroit. Ensuite, nous allons expliquer ce que sont exactement les cookies ; quel type de cookies nous utilisons et pourquoi ; et comment vous pouvez exercer votre droit de configurer votre navigateur et refuser l'utilisation de l'un d'eux.</p>

    <p>Bien sûr, vous devez savoir que si vous décidez de ne pas utiliser certains cookies, ce site Web peut ne pas fonctionner parfaitement, ce qui affectera votre expérience utilisateur.</p>
    
    <h4>QU'EST-CE QU'UN COOKIE</h4>
    
    <p>Un cookie est un fichier qui est téléchargé sur votre ordinateur lorsque vous accédez à certaines pages Web ou blogs.</p>
    
    <p>Les cookies permettent, entre autres, à cette page de stocker et de récupérer des informations sur vos habitudes de navigation ou votre équipement, et selon les informations qu'ils contiennent et la façon dont vous utilisez votre équipement, ils peuvent être utilisés pour vous reconnaître.</p>
    
    <p>Le navigateur de l'utilisateur stocke les cookies sur le disque dur uniquement pendant la session en cours, occupant un espace mémoire minimal et n'endommageant pas l'ordinateur. Les cookies ne contiennent aucun type d'informations personnelles spécifiques, et la plupart d'entre eux sont supprimés du disque dur à la fin de la session du navigateur (appelés cookies de session).</p>
    
    <p>La plupart des navigateurs acceptent les cookies par défaut et, quels qu'ils soient, autorisent ou empêchent les cookies temporaires ou stockés dans les paramètres de sécurité.</p>
    
    <p>Les cookies sont associés au navigateur, pas à la personne, ils ne stockent donc généralement pas d'informations sensibles vous concernant telles que des cartes de crédit ou des coordonnées bancaires, des photographies ou des informations personnelles, etc. Les données qu'ils stockent sont techniques, statistiques, préférences personnelles , personnalisation du contenu, etc.</p>
    
    <h4>ACCEPTATION DES COOKIES : RÉGLEMENTATION EN VIGUEUR</h4>
    
    <p>En accédant à ce site Web, et conformément à la réglementation en vigueur sur la protection des données, nous vous informons de l'utilisation de cookies, vous donnant la possibilité de les accepter expressément et d'accéder à plus d'informations via cette politique de cookies.</p>
    
    <p>Vous devez savoir qu'en cas de poursuite de la navigation, vous donnez votre consentement à l'utilisation de ces cookies. Mais, à tout moment, vous pouvez changer d'avis et bloquer son utilisation via votre navigateur.</p>
    
    <p>Pour votre entière tranquillité d'esprit, ce site respecte les dispositions de la réglementation en vigueur concernant l'utilisation des cookies et de vos données personnelles :</p>
    
    <p>Le règlement LSSI-CE (<b>Loi de la société de l'information et du commerce électronique</b>)</p>
    
    <p>Le <b>RGPD</b> (<b>Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques</b>), qui unifie la réglementation du traitement des données personnelles dans les pays de l'UE.</p>
    
    <p>Cette politique de cookies peut être modifiée à tout moment pour s'adapter aux nouvelles réglementations ou aux changements de nos activités, celle qui est publiée sur le web à tout moment étant en vigueur.</p>
    
    <h4>TYPES DE COOKIES</h4>
    
    <p>Afin de vous offrir une meilleure expérience utilisateur, d'obtenir des données analytiques, de stocker et de récupérer des informations sur vos habitudes de navigation ou celle de votre équipement et de développer son activité, ce site <b>${site_url}</b> utilise son cookies propres et tiers.</p>
    
    <p><b>Quels types de cookies ce site Web utilise-t-il ?</b></p>
    
    <ul>
        <li><b>Cookies techniques</b> : ce sont ceux qui permettent à l'utilisateur de naviguer sur une page Web, une plate-forme ou une application et d'utiliser les différentes options ou services qui y existent, comme, par exemple, le contrôle du trafic et communication de données, identifier la session, accéder aux parties à accès restreint, mémoriser les éléments qui composent une commande, effectuer le processus d'achat d'une commande, effectuer la demande d'inscription ou de participation à un événement, utiliser des éléments de sécurité lors de la navigation, stocker du contenu pour diffuser des vidéos ou du son ou partager du contenu via les réseaux sociaux.</li>
        <li><b>Cookies de personnalisation</b> : ce sont ceux qui permettent à l'utilisateur d'accéder au service avec certaines caractéristiques générales prédéfinies en fonction d'une série de critères dans le terminal de l'utilisateur, tels que la langue, le type de navigateur via auquel l'utilisateur accède au service. , la configuration régionale à partir de laquelle vous accédez au service, etc.</li>
        <li><b>Cookies d'analyse</b> : ce sont ceux qui, bien traités par nous ou par des tiers, nous permettent de quantifier le nombre d'utilisateurs et ainsi d'effectuer la mesure et l'analyse statistique de l'utilisation faite par les utilisateurs du service offert. Pour cela, votre navigation sur notre site est analysée afin d'améliorer l'offre de produits ou services que nous vous proposons.</li>
        <li><b>Cookies publicitaires</b> : ce sont ceux qui, bien traités par nous ou par des tiers, nous permettent de gérer de la manière la plus efficace possible l'offre des espaces publicitaires qui se trouvent sur la page web, adapter le contenu de la publicité au contenu du service demandé ou à votre utilisation de notre site Web. Pour e est-ce que nous pouvons analyser vos habitudes de navigation sur Internet et nous pouvons vous montrer des publicités liées à votre profil de navigation.</li>
        <li><b>Cookies publicitaires comportementaux</b> : ce sont ceux qui permettent la gestion, de la manière la plus efficace possible, des espaces publicitaires que, le cas échéant, l'éditeur a inclus dans une page Web, une application ou une plateforme à partir duquel le service demandé est fourni. Ces cookies stockent des informations sur le comportement des utilisateurs obtenues grâce à l'observation continue de leurs habitudes de navigation, ce qui permet le développement d'un profil spécifique pour afficher des publicités basées sur celui-ci.</li>
        <li><b>Cookies tiers</b> : ce site Web <b>${site_url}</b> peut utiliser des services tiers qui, au nom de Google, collecteront des informations à des fins statistiques, utiliseront le site par l'utilisateur et pour la fourniture d'autres services liés à l'activité du site et d'autres services Internet.</li>
    </ul>

    <p>En particulier, ce site Web utilise Google Analytics, un service d'analyse Web fourni par Google, Inc. domicilié aux États-Unis et dont le siège social est situé au 1600 Amphitheatre Parkway, Mountain View, Californie 94043. Pour fournir ces services, Google utilise des cookies qui collectent informations, y compris l'adresse IP de l'utilisateur, qui seront transmises, traitées et stockées par Google dans les conditions énoncées sur le site Google.com. Cela inclut la transmission éventuelle desdites informations à des tiers pour des raisons d'obligation légale ou lorsque lesdits tiers traitent les informations pour le compte de Google.</p>
    
    <h4>GÉRER ET REFUSER L'UTILISATION DES COOKIES</h4>
    
    <p>A tout moment, vous pouvez adapter les paramètres de votre navigateur pour gérer, refuser l'utilisation des cookies et être averti avant leur téléchargement.</p>
    
    <p>Vous pouvez également adapter les paramètres afin que le navigateur rejette tous les cookies, ou uniquement les cookies tiers. Et vous pouvez également supprimer tous les cookies qui sont déjà sur votre ordinateur.</p>
    
    <p>Pour cela, vous devez garder à l'esprit que vous devrez adapter séparément la configuration de chaque navigateur et équipement que vous utilisez puisque, comme nous l'avons mentionné précédemment, les cookies sont associés au navigateur et non à la personne.</p>
    
    <p><b>Google Chrome</b> <a rel="nofollow noopener noreferrer" target="_blank" href="https://support.google.com/chrome/answer/95647?hl=es-419 ">https://support.google.com/chrome/answer/95647?hl=es-419</a></p>
    
    <p><b>Internet Explorer</b> <a rel="nofollow noopener noreferrer" target="_blank" href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies#ie=ie-10">https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies#ie=ie-10</a></p>
    
    <p><b>Mozilla Firefox</b> <a rel="nofollow noopener noreferrer" target="_blank" href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectlocale=es&redirectslug=ificar-y-deshabilitar-cookies-que-los-sitios-we">https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectlocale=es&redirectslug=ificar-y-deshabilitar-cookies-que-los-sitios-we</a></p>
    
    <p><b>Apple Safari</b> <a rel="nofollow noopener noreferrer" target="_blank" href="https://support.apple.com/es-es/HT201265">https://support.apple.com/es-es/HT201265</a></p>
    
    <p>Si vous avez des questions sur cette politique de cookies, vous pouvez nous contacter en envoyant un e-mail à <b>${mail}</b>.</p>`,

    // SPAIN
    'es': 
    `<p>Si quieres saber más sobre el uso de cookies por parte de este sitio web <b>${site_url}</b>, estás en el lugar correcto. A continuación, vamos a explicar qué son exactamente las cookies; qué tipo de cookies usamos y por qué; y cómo puede ejercer su derecho a configurar su navegador y rechazar el uso de cualquiera de ellas.</p>

    <p>Por supuesto, debes saber que si decides no utilizar algunas cookies, es posible que este sitio web no funcione a la perfección, afectando a tu experiencia de usuario.</p>
    
    <h4>QUÉ ES UNA COOKIE</h4>
    
    <p>Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web o blogs.</p>
    
    <p>Las cookies permiten que esa página, entre otras cosas, almacene y recupere información sobre sus hábitos de navegación o su equipo, y dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden usarse para reconocerlo.</p>
    
    <p>El navegador del usuario almacena cookies en el disco duro solo durante la sesión actual, ocupando un espacio mínimo de memoria y no dañando la computadora. Las cookies no contienen ningún tipo de información personal específica, y la mayoría de ellas se eliminan del disco duro al final de la sesión del navegador (las llamadas cookies de sesión).</p>
    
    <p>La mayoría de los navegadores aceptan como estándar a las cookies y, con independencia de las mismas, permiten o impiden en los ajustes de seguridad las cookies temporales o memorizadas.</p>
    
    <p>Las cookies se asocian con el navegador, no con la persona, por lo que no suelen almacenar información sensible sobre ti como tarjetas de crédito o datos bancarios, fotografías o información personal, etc. Los datos que almacenan son de carácter técnico, estadístico, preferencias personales , personalización de contenidos, etc.</p>
    
    <h4>ACEPTACIÓN DE COOKIES: NORMATIVA VIGENTE</h4>
    
    <p>Al acceder a este sitio web, y de acuerdo con la normativa vigente en protección de datos, le informamos del uso de cookies, dándole la opción de aceptarlas expresamente y acceder a más información a través de esta Política de Cookies.</p>
    
    <p>Debes saber que, en el caso de continuar navegando, estarás prestando tu consentimiento para el uso de estas cookies. Pero, en cualquier momento, puede cambiar de opinión y bloquear su uso a través de su navegador.</p>
    
    <p>Para su total tranquilidad, este sitio web cumple con lo establecido en la normativa vigente en relación con el uso de cookies y sus datos personales:</p>
    
    <p>El reglamento LSSI-CE (<b>Ley de la sociedad de la información y de comercio electrónico</b>)</p>
    
    <p>El <b>RGPD</b> (<b>Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas</b>), que unifica la regulación del tratamiento de datos personales en los países de la UE.</p>
    
    <p>Esta Política de Cookies podrá modificarse en cualquier momento para adaptarse a novedades normativas o cambios en nuestras actividades, siendo vigente la que se encuentre publicada en la web en cada momento.</p>
    
    <h4>TIPOS DE COOKIES</h4>
    
    <p>Con el fin de ofrecerte una mejor experiencia de usuario, obtener datos analíticos, almacenar y recuperar información sobre tus hábitos de navegación o la de tu equipo y desarrollar su actividad, este sitio web <b>${site_url}</b> utiliza sus Cookies propias y de terceros.</p>
    
    <p><b>¿Qué tipos de cookies utiliza este sitio web?</b></p>
    
    <ul>
        <li><b>Cookies técnicas</b>: Son aquéllas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existen como, por ejemplo, controlar el tráfico. y comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, recordar los elementos que integran un pedido, realizar el proceso de compra de un pedido, realizar la solicitud de inscripción o participación en un evento, utilizar elementos de seguridad durante la navegación, almacenar contenidos para difundir videos o sonido o compartir contenidos a través de las redes sociales.</li>
        <li><b>Cookies de personalización</b>: Son aquéllas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo serian el idioma, el tipo de navegador a través que el usuario accede al servicio. , la configuración regional desde donde accede al servicio, etc.</li>
        <li><b>Cookies de análisis</b>: Son aquéllas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios. del servicio ofrecido. Para ello se analiza su navegación en nuestra página web con el fin de mejorar la oferta de productos o servicios que le ofrecemos.</li>
        <li><b>Cookies publicitarias</b>: Son aquéllas que bien tratadas por nosotros o por terceros, nos permiten gestionar de la forma más eficaz posible la oferta de los espacios publicitarios que hay en la página web, adaptar el contenido del anuncio al contenido del servicio solicitado o al uso que haga de nuestro sitio web. Para esto podemos analizar sus hábitos de navegación en Internet y podemos mostrarle publicidad relacionada con su perfil de navegación.</li>
        <li><b>Cookies de publicidad comportamental</b>: Son aquéllas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma. desde el que se presta el servicio solicitado. Estas cookies almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del mismo.</li>
        <li><b>Cookies de terceros</b>: este sitio web <b>${site_url}</b> puede utilizar servicios de terceros que, por cuenta de Google, recopilarán información con fines estadísticos, uso de del sitio por parte del usuario y para la prestación de otros servicios relacionados con la actividad del sitio web y otros servicios de Internet.</li>
    </ul>

    <p>En particular, este sitio web utiliza Google Analytics, un servicio analítico de web prestado por Google, Inc. con domicilio en Estados Unidos con sede en 1600 Amphitheatre Parkway, Mountain View, California 94043. Para prestar estos servicios, Google utiliza cookies que recopilan información, incluida la dirección IP del usuario, que será transmitida, tratada y almacenada por Google en los términos expuestos en el sitio web Google.com. Esto incluye la posible transmisión de dicha información a terceros por exigencias legales o cuando dichos terceros procesen la información por cuenta de Google.</p>
    
    <h4>GESTIONAR Y RECHAZAR EL USO DE COOKIES</h4>
    
    <p>En cualquier momento, puedes adaptar la configuración de tu navegador para gestionar, rechazar el uso de cookies y ser avisado antes de que se descarguen.</p>
    
    <p>También puede adaptar la configuración para que el navegador rechace todas las cookies, o solo las cookies de terceros. Y también puede eliminar cualquiera de las cookies que ya están en su computadora.</p>
    
    <p>Para ello, debes tener en cuenta que tendrás que adaptar por separado la configuración de cada navegador y equipo que utilices ya que, como hemos comentado anteriormente, las cookies se asocian al navegador, no a la persona.</p>
    
    <p><b>Google Chrome</b> <a rel="nofollow noopener noreferrer" target="_blank" href="https://support.google.com/chrome/answer/95647?hl=es-419">https://support.google.com/chrome/answer/95647?hl=es-419</a></p>
    
    <p><b>Internet Explorer</b> <a rel="nofollow noopener noreferrer" target="_blank" href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-eliminar-gestionar-cookies#ie=ie-10">https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-eliminar-gestionar-cookies#ie=ie-10</a></p>
    
    <p><b>Mozilla Firefox</b> <a rel="nofollow noopener noreferrer" target="_blank" href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectlocale=es&redirectslug=ificar-y-deshabilitar-cookies-que-los-sitios-we">https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectlocale=es&redirectslug=ificar-y-deshabilitar-cookies-que-los-sitios-we</a></p>
    
    <p><b>Apple Safari</b> <a rel="nofollow noopener noreferrer" target="_blank" href="https://support.apple.com/es-es/HT201265">https://support.apple.com/es-es/HT201265</a></p>
    
    <p>Si tiene alguna duda sobre esta Política de Cookies, puede ponerse en contacto con nosotros enviándonos un correo electrónico a <b>${mail}</b>.</p>`
}

const legalClaim = {
    // ENGLISH
    'en': 
    `<p>This Legal Notice is intended to inform you of your rights and obligations as a user of this website. Here you will find all the information you need about this website, its activity, the personal data it collects and its purpose, as well as the rules of use that regulate the use of this website.</p>

    <p>The moment you access this website <b>${site_url}</b>, you assume the status of user, so the content of this Legal Notice affects you directly. Therefore, it is important that you read it to dispel any doubts you may have and be aware of the conditions you are accepting. </p>
    
    <p>To begin with, you should know that this website complies with current regulations on data protection, with the aim of providing you with the guarantees, security and transparency that, as a user, correspond to you when using this website. website.</p>
    
    <p>The <b>GDPR</b> (<b>Regulation (EU) 2016/679 of the European Parliament and of the Council of April 27, 2016 on the protection of natural persons</b>), which is the new regulation of the European Union that unifies the regulation of the treatment of personal data in the different countries of the EU.</p>
    
    <p>The <b>LOPD</b> (<b>Organic Law 15/1999, of December 13, on the Protection of Personal Data and Royal Decree 1720/2007, of December 21, the Development Regulation of the LOPD</b>) that regulates the processing of personal data and the obligations that those responsible for a website or blog must assume when managing this information.</p>
    
    <p>The <b>LSSI</b> (<b>Law 34/2002, of July 11, on Services of the Information Society and Electronic Commerce</b>), which regulates economic transactions through electronic means , as is the case with this blog.</p>
    
    <h4>IDENTIFICATION DATA</h4>
    
    <p>The person in charge and owner of this website is <b>${owner} (hereinafter ${page_name})</b></p>
    
    <ul>
        <li><b>Name</b>: ${owner_name}</li>
        <li><b>NIF</b>: ${nif}</li>
        <li><b>Registered Office</b>: ${location}</li>
        <li><b>Website Activity</b>: ${website_activity_en}</li>
        <li><b>Email address</b>: ${mail}</li>
    </ul>
    
    <p>The personal data you provide us, always with your express consent, will be stored and processed for the purposes established and described below in this Privacy Policy, until you request its deletion.</p>
    
    <h4>RULES OF ACCESS TO THE WEBSITE</h4>
    
    <p>As a user of our website, you also have a series of obligations:</p>
    
    <p>You may not use this website to carry out activities contrary to law, morality, public order and, in general, to make use of it in accordance with the conditions established in this Legal Notice.</p>
    
    <p>You may not carry out advertising or commercial exploitation activities by sending messages using a false identity.</p>
    
    <p>You will be solely responsible for the veracity and accuracy of the content you enter on this website and the personal data you provide us with for the purposes set forth in our Privacy Policy.</p>
    
    <p>You will also be solely responsible for carrying out any type of illegal action, harmful to rights, harmful and/or harmful on third-party sites to which we may refer you from this website for the development of our activity.</p>
    
    <p>As the person in charge of the website, <b>${page_name}</b> may interrupt the service of the page that is being used by the user and immediately terminate the relationship if it detects a use of the website or any of the services offered therein that may be considered contrary to what is expressed in this Legal Notice.</p>
    
    <h4>INTELLECTUAL AND INDUSTRIAL PROPERTY</h4>
    
    <p>The entirety of this website (text, images, trademarks, graphics, logos, buttons, software files, color combinations, as well as the structure, selection, arrangement and presentation of its contents) is protected by the laws in force on Intellectual and Industrial Property, its reproduction, distribution, public communication and transformation being prohibited, except for personal and private use.</p>
    
    <p>As the owner of this website, <b>${page_name}</b> does not guarantee that the contents are accurate or error-free or that the free use thereof by users does not infringe the rights of third parties. The good or bad use of this page and its contents is the responsibility of the user.</p>
    
    <p>Likewise, the total or partial reproduction, retransmission, copying, transfer or redistribution of the information contained on the page, whatever its purpose and the means used for it, without prior authorization from is prohibited <b>${page_name}</b>.</p>
    
    <h4>LINKS OR LINKS</h4>
    
    <p>This website includes links to third party sites. The pages belonging to these third parties have not been reviewed or are subject to control by us, so <b>${page_name}</b> cannot be held responsible for the contents of these websites, nor for the measures that are adopted regarding your privacy or the processing of your personal data or others that may arise.</p>
    
    <p>For all these reasons, we recommend that you carefully read the conditions of use, privacy policy, legal notices and/or similar of these sites.</p>
    
    <h4>AMAZON AFFILIATION LINKS</h4>
    
    <p>This website, according to its purpose, uses Amazon affiliate links.</p>
    
    <p>This means that you will find links to Amazon products that you can access directly from our website but that, in your case, the purchase will be made by Amazon, under its own conditions at that time.</p>
    
    <h4>LIMITATION OF LIABILITY</h4>
    
    <p>In exercising your right as owner of this website, we inform you that <b>${page_name}</b> is not responsible in any case for the following:</p>
    
    <p>The quality of the service, the speed of access, the correct operation or the availability or continuity of operation of the page.</p>
    
    <p>The existence of viruses, malware, malicious or harmful programs in the content.</p>
    
    <p>Illegal, negligent, fraudulent use or use contrary to this Legal Notice.</p>
    
    <p>The lack of legality, quality, reliability, usefulness and availability of the services provided by third parties and made available to users on this website.</p>
    
    <p>Of the damages that could come from the illegal or improper use of this blog.</p>
    
    <h4>PRIVACY AND DATA PROTECTION POLICY</h4>
    
    <p>This website complies with current regulations on data protection, which means that, as a user, you must give your express consent before providing us with personal data through the different forms made available in the sections of our website. page.</p>
    
    <p>To do this, for the sake of transparency and the exercise of your right, our duty is to inform you about the personal data that we collect, store and process and for what purposes, having the possibility of freely revoking your consent at any time.</p>
    
    <p>All this information can be found in our <b>PRIVACY POLICY</b>.</p>
    
    <h4>COOKIE POLICY</h4>
    
    <p>As we inform you as soon as you access our website, this site uses its own and third-party cookies in order to provide you with the best user experience and develop our activity.</p>
    
    <p>At any time, you will have the option to configure your browser to reject the use of these cookies that, in some case, will affect your user experience.</p>
    
    <p>To access complete information on the use of cookies on this website, their purpose and their rejection, you can consult our <b>COOKIES POLICY</b>.</p>
    
    <h4>APPLICABLE LEGISLATION AND COMPETENT JURISDICTION</h4>
    
    <p>This Legal Notice is subject to current Spanish legislation.</p>
    
    <p>If necessary, before any type of legal dispute, <b>${page_name}</b> and the user, expressly waiving any other jurisdiction, will submit to the Courts and Tribunals of the User's domicile for any dispute that may arise.</p>
    
    <p>In the event that the user is domiciled outside of Spain, <b>${page_name}</b> and the user will submit, expressly waiving any other jurisdiction, to the courts and tribunals of Barcelona (Spain).</p>
    
    <p>If you have any questions about this Legal Notice, you can send us an email to <b>${mail}</b>.</p>`,

    // DEUTSCH
    'de': 
    `<p>Dieser rechtliche Hinweis soll Sie über Ihre Rechte und Pflichten als Benutzer dieser Website informieren. Hier finden Sie alle Informationen, die Sie über diese Website, ihre Aktivitäten, die von ihr gesammelten personenbezogenen Daten und ihren Zweck benötigen, sowie die Nutzungsregeln, die die Nutzung dieser Website regeln.</p>

    <p>In dem Moment, in dem Sie auf diese Website <b>${site_url}</b> zugreifen, nehmen Sie den Status eines Benutzers an, sodass der Inhalt dieses rechtlichen Hinweises Sie direkt betrifft. Daher ist es wichtig, dass Sie es lesen, um eventuelle Zweifel auszuräumen und sich der Bedingungen bewusst zu sein, die Sie akzeptieren. </p>
    
    <p>Zunächst sollten Sie wissen, dass diese Website den geltenden Datenschutzbestimmungen entspricht, mit dem Ziel, Ihnen die Garantien, Sicherheit und Transparenz zu bieten, die Ihnen als Benutzer bei der Nutzung dieser Website entsprechen. </p>
    
    <p>Die <b>DSGVO</b> (<b>Verordnung (EU) 2016/679 des Europäischen Parlaments und des Rates vom 27. April 2016 zum Schutz natürlicher Personen</b>), die ist die neue Verordnung der Europäischen Union, die die Regelung der Behandlung personenbezogener Daten in den verschiedenen Ländern der EU vereinheitlicht.</p>
    
    <p>Das <b>LOPD</b> (<b>Organisches Gesetz 15/1999 vom 13. Dezember über den Schutz personenbezogener Daten und Königliches Dekret 1720/2007 vom 21. Dezember, die Entwicklungsverordnung des LOPD</b>), die die Verarbeitung personenbezogener Daten und die Pflichten regelt, die die Verantwortlichen einer Website oder eines Blogs bei der Verwaltung dieser Informationen übernehmen müssen.</p>
    
    <p>Das <b>LSSI</b> (<b>Gesetz 34/2002 vom 11. Juli über Dienste der Informationsgesellschaft und den elektronischen Handel</b>), das wirtschaftliche Transaktionen auf elektronischem Weg regelt, so wie es ist bei diesem Blog der Fall.</p>
    
    <h4>IDENTIFIKATIONSDATEN</h4>
    
    <p>Verantwortlicher und Eigentümer dieser Website ist <b>${owner} (im Folgenden ${page_name})</b></p>
    
    <ul>
        <li><b>Name</b>: ${owner_name}</li>
        <li><b>NIF</b>: ${nif}</li>
        <li><b>Eingetragener Firmensitz</b>: ${location}</li>
        <li><b>Website-Aktivität</b>: ${website_activity_de}</li>
        <li><b>E-Mail-Adresse</b>: ${mail}</li>
    </ul>
    
    <p>Die personenbezogenen Daten, die Sie uns immer mit Ihrer ausdrücklichen Zustimmung zur Verfügung stellen, werden für die unten in dieser Datenschutzrichtlinie festgelegten und beschriebenen Zwecke gespeichert und verarbeitet, bis Sie deren Löschung verlangen.</p>
    
    <h4>REGELN FÜR DEN ZUGANG ZUR WEBSITE</h4>
    
    <p>Als Benutzer unserer Website haben Sie auch eine Reihe von Verpflichtungen:</p>
    
    <p>Sie dürfen diese Website nicht verwenden, um gegen das Gesetz, die guten Sitten und die öffentliche Ordnung verstoßende Aktivitäten auszuführen und sie im Allgemeinen gemäß den in diesem rechtlichen Hinweis festgelegten Bedingungen zu nutzen.</p>
    
    <p>Sie dürfen keine Werbe- oder kommerziellen Nutzungsaktivitäten durchführen, indem Sie Nachrichten unter falscher Identität senden.</p>
    
    <p>Sie sind allein verantwortlich für die Richtigkeit und Genauigkeit der Inhalte, die Sie auf dieser Website eingeben, und der personenbezogenen Daten, die Sie uns für die in unserer Datenschutzrichtlinie dargelegten Zwecke zur Verfügung stellen.</p>
    
    <p>Sie sind auch allein verantwortlich für die Durchführung jeglicher Art von rechtswidrigen, rechtswidrigen, schädlichen und/oder schädlichen Handlungen auf Websites Dritter, auf die wir Sie von dieser Website für die Entwicklung unserer Aktivitäten verweisen können.</p>
    
    <p>Als Verantwortlicher der Website kann <b>${page_name}</b> den Dienst der Seite, die vom Benutzer verwendet wird, unterbrechen und die Beziehung sofort beenden, wenn er eine Nutzung der Website feststellt oder irgendwelche der darin angebotenen Dienstleistungen, die als im Widerspruch zu den Angaben in diesem rechtlichen Hinweis erachtet werden können.</p>
    
    <h4>GEISTIGES UND INDUSTRIELLES EIGENTUM</h4>
    
    <p>Die Gesamtheit dieser Website (Text, Bilder, Marken, Grafiken, Logos, Schaltflächen, Softwaredateien, Farbkombinationen sowie die Struktur, Auswahl, Anordnung und Darstellung ihrer Inhalte) ist durch die geltenden Gesetze geschützt Geistiges und gewerbliches Eigentum, dessen Vervielfältigung, Verbreitung, öffentliche Kommunikation und Umwandlung verboten ist, außer für den persönlichen und privaten Gebrauch.</p>
    
    <p>Als Eigentümer dieser Website garantiert <b>${page_name}</b> nicht, dass die Inhalte richtig oder fehlerfrei sind oder dass die kostenlose Nutzung durch Benutzer nicht die Rechte Dritter verletzt. Die gute oder schlechte Nutzung dieser Seite und ihrer Inhalte liegt in der Verantwortung des Benutzers.</p>
    
    <p>Ebenso ist die vollständige oder teilweise Reproduktion, Weiterleitung, Vervielfältigung, Übertragung oder Neuverteilung der auf der Seite enthaltenen Informationen, unabhängig von ihrem Zweck und den dafür verwendeten Mitteln, ohne vorherige Genehmigung von <b>verboten. ${page_name}</b>.</p>
    
    <h4>LINKS ODER LINKS</h4>
    
    <p>Diese Website enthält Links zu Websites Dritter. Die Seiten dieser Drittparteien wurden von uns weder überprüft noch unterliegen sie unserer Kontrolle, daher kann <b>${page_name}</b> weder für den Inhalt dieser Websites noch für die diesbezüglich getroffenen Maßnahmen verantwortlich gemacht werden Ihre Privatsphäre oder die Behandlung Ihrer persönlichen Daten oder anderer Daten, die anfallen können.</p>
    
    <p>Aus all diesen Gründen empfehlen wir Ihnen, die Nutzungsbedingungen, Datenschutzrichtlinien, rechtlichen Hinweise und/oder ähnliches dieser Websites sorgfältig zu lesen.</p>
    
    <h4>LINKS ZUR PARTNERSCHAFT VON AMAZON</h4>
    
    <p>Diese Website verwendet bestimmungsgemäß Amazon-Affiliate-Links.</p>
    
    <p>Das bedeutet, dass Sie Links zu Amazon-Produkten finden, auf die Sie direkt von unserer Website aus zugreifen können, aber dass in Ihrem Fall der Kauf von Amazon zu seinen eigenen Bedingungen zu diesem Zeitpunkt durchgeführt wird.</p>
    
    <h4>HAFTUNGSBESCHRÄNKUNG</h4>
    
    <p>Bei der Ausübung Ihres Rechts als Eigentümer dieser Website informieren wir Sie, dass <b>${page_name}</b> in keinem Fall für Folgendes verantwortlich ist:</p>
    
    <p>Die Qualität des Dienstes, die Zugriffsgeschwindigkeit, der korrekte Betrieb oder die Verfügbarkeit oder Kontinuität des Betriebs der Seite.</p>
    
    <p>Das Vorhandensein von Viren, Malware, bösartigen oder schädlichen Programmen im Inhalt.</p>
    
    <p>Illegale, fahrlässige, betrügerische Nutzung oder Nutzung entgegen diesem rechtlichen Hinweis.</p>
    
    <p>Der Mangel an Rechtmäßigkeit, Qualität, Zuverlässigkeit, Nützlichkeit und Verfügbarkeit der Dienste, die von Dritten bereitgestellt und den Benutzern auf dieser Website zur Verfügung gestellt werden.</p>
    
    <p>Für Schäden, die durch die illegale oder missbräuchliche Nutzung dieses Blogs entstehen könnten.</p>
    
    <h4>DATENSCHUTZ- UND DATENSCHUTZERKLÄRUNG</h4>
    
    <p>Diese Website entspricht den geltenden Datenschutzbestimmungen, was bedeutet, dass Sie als Benutzer Ihre ausdrückliche Zustimmung geben müssen, bevor Sie uns personenbezogene Daten über die verschiedenen Formulare in den Bereichen unserer Website zur Verfügung stellen. Seite.</p> p>
    
    <p>Um dies zu tun, ist es aus Gründen der Transparenz und der Ausübung Ihres Rechts unsere Pflicht, Sie darüber zu informieren, welche personenbezogenen Daten wir erheben, speichern und verarbeiten und zu welchen Zwecken, wobei Sie die Möglichkeit haben, Ihre Einwilligung frei zu widerrufen jederzeit.</p>
    
    <p>Alle diese Informationen finden Sie in unserer <b>DATENSCHUTZERKLÄRUNG</b>.</p>
    
    <h4>Cookie-Richtlinie</h4>
    
    <p>Wie wir Sie informieren, sobald Sie auf unsere Website zugreifen, verwendet diese Website eigene Cookies und Cookies von Drittanbietern, um Ihnen die beste Benutzererfahrung zu bieten und unsere Aktivitäten zu entwickeln.</p>
    
    <p>Sie haben jederzeit die Möglichkeit, Ihren Browser so zu konfigurieren, dass er die Verwendung dieser Cookies ablehnt, was in einigen Fällen Ihre Benutzererfahrung beeinträchtigen kann.</p>
    
    <p>Um vollständige Informationen über die Verwendung von Cookies auf dieser Website, ihren Zweck und ihre Ablehnung zu erhalten, können Sie unsere <b>COOKIES-RICHTLINIE</b> konsultieren.</p>
    
    <h4>ANWENDBARES RECHT UND ZUSTÄNDIGE GERICHTSBARKEIT</h4>
    
    <p>Dieser rechtliche Hinweis unterliegt der aktuellen spanischen Gesetzgebung.</p>
    
    <p>Falls erforderlich, werden <b>${page_name}</b> und der Nutzer vor jeglicher Art von Rechtsstreitigkeiten, unter ausdrücklichem Verzicht auf jede andere Gerichtsbarkeit, die Gerichte und Gerichtshöfe des Wohnsitzes des Nutzers für alle möglichen Streitigkeiten einreichen entstehen.</p>
    
    <p>Für den Fall, dass der Nutzer seinen Wohnsitz außerhalb Spaniens hat, unterwerfen sich <b>${page_name}</b> und der Nutzer unter ausdrücklichem Verzicht auf eine andere Gerichtsbarkeit den Gerichten von Barcelona (Spanien).</p>
    
    <p>Wenn Sie Fragen zu diesem rechtlichen Hinweis haben, können Sie uns eine E-Mail an <b>${mail}</b>.</p>`,

    // FRANCE
    'fr': 
    `<p>Ces mentions légales sont destinées à vous informer de vos droits et obligations en tant qu'utilisateur de ce site Web. Vous trouverez ici toutes les informations dont vous avez besoin sur ce site Web, son activité, les données personnelles qu'il collecte et son objectif, ainsi que les règles d'utilisation qui régissent l'utilisation de ce site Web.</p>

    <p>Dès que vous accédez à ce site Web <b>${site_url}</b>, vous assumez le statut d'utilisateur, de sorte que le contenu de cet avis juridique vous concerne directement. Par conséquent, il est important que vous le lisiez pour dissiper tout doute que vous pourriez avoir et prendre connaissance des conditions que vous acceptez. </p>
    
    <p>Pour commencer, vous devez savoir que ce site Internet est conforme à la réglementation en vigueur sur la protection des données, dans le but de vous apporter les garanties, la sécurité et la transparence qui, en tant qu'utilisateur, vous correspondent lors de l'utilisation de ce site Internet. </p>
    
    <p>Le <b>RGPD</b> (<b>Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques</b>), qui est le nouveau règlement de l'Union européenne qui unifie la réglementation du traitement des données personnelles dans les différents pays de l'UE.</p>
    
    <p>La <b>LOPD</b> (<b>Loi Organique 15/1999, du 13 décembre, sur la Protection des Données Personnelles et Décret Royal 1720/2007, du 21 décembre, le Règlement de Développement de la LOPD</b>) qui réglemente le traitement des données personnelles et les obligations que les responsables d'un site Web ou d'un blog doivent assumer lors de la gestion de ces informations.</p>
    
    <p>La <b>LSSI</b> (<b>Loi 34/2002, du 11 juillet, sur les services de la société de l'information et du commerce électronique</b>), qui réglemente les transactions économiques par voie électronique , tel quel le cas avec ce blog.</p>
    
    <h4>DONNEES D'IDENTIFICATION</h4>
    
    <p>La personne responsable et propriétaire de ce site Web est <b>${owner} (ci-après ${page_name})</b></p>
    
    <ul>
        <li><b>Nom</b> : ${owner_name}</li>
        <li><b>NIF</b> : ${nif}</li>
        <li><b>Siège social</b> : ${location}</li>
        <li><b>Activité du site Web</b> : ${website_activity_fr}</li>
        <li><b>Adresse e-mail</b> : ${mail}</li>
    </ul>
    
    <p>Les données personnelles que vous nous fournissez, toujours avec votre consentement exprès, seront stockées et traitées aux fins établies et décrites ci-dessous dans la présente politique de confidentialité, jusqu'à ce que vous demandiez leur suppression.</p>
    
    <h4>REGLES D'ACCES AU SITE WEB</h4>
    
    <p>En tant qu'utilisateur de notre site Web, vous avez également une série d'obligations :</p>
    
    <p>Vous ne pouvez pas utiliser ce site Web pour mener des activités contraires à la loi, aux bonnes mœurs, à l'ordre public et, en général, pour en faire un usage conformément aux conditions établies dans les présentes mentions légales.</p>
    
    <p>Vous ne pouvez pas mener d'activités publicitaires ou d'exploitation commerciale en envoyant des messages sous une fausse identité.</p>
    
    <p>Vous serez seul responsable de la véracité et de l'exactitude du contenu que vous entrez sur ce site Web et des données personnelles que vous nous fournissez aux fins énoncées dans notre politique de confidentialité.</p>
    
    <p>Vous serez également seul responsable de la réalisation de tout type d'action illégale, préjudiciable aux droits, préjudiciable et/ou préjudiciable sur les sites tiers vers lesquels nous pourrons vous renvoyer depuis ce site pour le développement de notre activité.</p>
    
    <p>En tant que responsable du site Web, <b>${page_name}</b> peut interrompre le service de la page en cours d'utilisation par l'utilisateur et mettre fin immédiatement à la relation s'il détecte une utilisation du site Web ou l'un des services qui y sont proposés qui peut être considéré comme contraire à ce qui est exprimé dans les présentes mentions légales.</p>
    
    <h4>PROPRIÉTÉ INTELLECTUELLE ET INDUSTRIELLE</h4>
    
    <p>L'intégralité de ce site Web (textes, images, marques, graphismes, logos, boutons, fichiers logiciels, combinaisons de couleurs, ainsi que la structure, la sélection, l'agencement et la présentation de son contenu) est protégée par les lois en vigueur sur Propriété Intellectuelle et Industrielle, sa reproduction, sa distribution, sa communication publique et sa transformation étant interdites, sauf pour un usage personnel et privé.</p>
    
    <p>En tant que propriétaire de ce site Web, <b>${page_name}</b> ne garantit pas que le contenu est exact ou sans erreur ou que l'utilisation gratuite de celui-ci par les utilisateurs ne porte pas atteinte aux droits de tiers. Le bon ou le mauvais usage de cette page et de son contenu relève de la responsabilité de l'utilisateur.</p>
    
    <p>De même, la reproduction totale ou partielle, la retransmission, la copie, le transfert ou la redistribution des informations contenues sur la page, quels que soient leur objet et les moyens utilisés, sans autorisation préalable de est interdite <b>${page_name}</b>.</p>
    
    <h4>LIENS OU LIENS</h4>
    
    <p>Ce site Web contient des liens vers des sites tiers. Les pages appartenant à ces tiers n'ont pas été examinées ou sont soumises à un contrôle de notre part, donc <b>${page_name}</b> ne peut être tenu responsable du contenu de ces sites Web, ni des mesures qui sont adoptées concernant votre vie privée ou le traitement de vos données personnelles ou autres qui pourraient survenir.</p>
    
    <p>Pour toutes ces raisons, nous vous recommandons de lire attentivement les conditions d'utilisation, la politique de confidentialité, les mentions légales et/ou similaires de ces sites.</p>
    
    <h4>LIENS D'AFFILIATION AMAZONE</h4>
    
    <p>Ce site Web, conformément à son objectif, utilise des liens d'affiliation Amazon.</p>
    
    <p>Cela signifie que vous trouverez des liens vers des produits Amazon auxquels vous pouvez accéder directement depuis notre site Web mais que, dans votre cas, l'achat sera effectué par Amazon, selon ses propres conditions à ce moment-là.</p>
    
    <h4>LIMITATION DE RESPONSABILITÉ</h4>
    
    <p>Dans l'exercice de votre droit en tant que propriétaire de ce site Web, nous vous informons que <b>${page_name}</b> n'est en aucun cas responsable de ce qui suit :</p>
    
    <p>La qualité du service, la rapidité d'accès, le bon fonctionnement ou encore la disponibilité ou la continuité de fonctionnement de la page.</p>
    
    <p>L'existence de virus, de logiciels malveillants, de programmes malveillants ou nuisibles dans le contenu.</p>
    
    <p>Utilisation illégale, négligente, frauduleuse ou contraire aux présentes mentions légales.</p>
    
    <p>Le manque de légalité, de qualité, de fiabilité, d'utilité et de disponibilité des services fournis par des tiers et mis à la disposition des utilisateurs sur ce site.</p>
    
    <p>Des dommages qui pourraient provenir de l'utilisation illégale ou inappropriée de ce blog.</p>
    
    <h4>POLITIQUE DE CONFIDENTIALITÉ ET DE PROTECTION DES DONNÉES</h4>
    
    <p>Ce site Web est conforme à la réglementation en vigueur sur la protection des données, ce qui signifie qu'en tant qu'utilisateur, vous devez donner votre consentement exprès avant de nous fournir des données personnelles via les différents formulaires mis à disposition dans les sections de notre page.</p>
    
    <p>Pour ce faire, dans un souci de transparence et d'exercice de votre droit, notre devoir est de vous informer sur les données personnelles que nous collectons, stockons et traitons et à quelles fins, en ayant la possibilité de révoquer librement votre consentement à à tout moment.</p>
    
    <p>Toutes ces informations peuvent être trouvées dans notre <b>POLITIQUE DE CONFIDENTIALITÉ</b>.</p>
    
    <h4>POLITIQUE EN MATIÈRE DE COOKIES</h4>
    
    <p>Comme nous vous informons dès que vous accédez à notre site Web, ce site utilise ses propres cookies et ceux de tiers afin de vous offrir la meilleure expérience utilisateur et de développer notre activité.</p>
    
    <p>A tout moment, vous aurez la possibilité de configurer votre navigateur pour refuser l'utilisation de ces cookies qui, dans certains cas, affecteront votre expérience utilisateur.</p>
    
    <p>Pour accéder à des informations complètes sur l'utilisation des cookies sur ce site, leur finalité et leur refus, vous pouvez consulter notre <b>POLITIQUE COOKIES</b>.</p>
    
    <h4>LÉGISLATION APPLICABLE ET JURIDICTION COMPÉTENTE</h4>
    
    <p>Ces mentions légales sont soumises à la législation espagnole en vigueur.</p>
    
    <p>Si nécessaire, avant tout type de litige, <b>${page_name}</b> et l'utilisateur, renonçant expressément à toute autre juridiction, se soumettront aux Cours et Tribunaux du domicile de l'Utilisateur pour tout litige pouvant surgir.</p>
    
    <p>Dans le cas où l'utilisateur est domicilié en dehors de l'Espagne, <b>${page_name}</b> et l'utilisateur se soumettra, renonçant expressément à toute autre juridiction, aux cours et tribunaux de Barcelone (Espagne).</p>
    
    <p>Si vous avez des questions concernant cet avis juridique, vous pouvez nous envoyer un e-mail à <b>${mail}</b>.</p>`,
    
    // SPAIN
    'es': 
    `<p>Este Aviso Legal tiene el objetivo de informarte de tus derechos y obligaciones como usuario de este sitio web. Aquí encontrarás toda la información que necesitas sobre este sitio web, su actividad, los datos personales que recaba y su finalidad, así como las normas de uso que regulan el uso de esta web.</p>

    <p>En el momento en que accedas a este sitio web <b>${site_url}</b>, asumes la condición de usuario, por lo que el contenido de este Aviso Legal te afecta directamente. Por eso, es importante que lo leas para disipar cualquier duda que puedas tener y tener conocimiento de causa sobre las condiciones que estás aceptando.  </p>
    
    <p>Para empezar, debes saber que este sitio web cumple con las normativas vigentes en materia de protección de datos, con el objetivo de aportarte las garantías, la seguridad y la transparencia que, como usuario te corresponden, a la hora de utilizar esta web.</p>
    
    <p>El <b>RGPD</b> (<b>Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas</b>) que es la nueva normativa de la Unión Europea que unifica la regulación del tratamiento de los datos personales en los distintos países de la UE.</p>
    
    <p>La <b>LOPD</b> (<b>Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal y Real Decreto 1720/2007, de 21 de diciembre, el Reglamento de desarrollo de la LOPD</b>) que regula el tratamiento de los datos personales y las obligaciones que debemos asumir los responsables de una web o un blog a la hora de gestionar esta información.</p>
    
    <p>La <b>LSSI</b> (<b>Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico</b>) que regula las transacciones económicas mediante medios electrónicos, como es el caso de este blog.</p>
    
    <h4>DATOS DE IDENTIFICACIÓN</h4>
    
    <p>El responsable y propietario de este sitio web es <b>${owner} (En adelante ${page_name})</b></p>
    
    <ul>
        <li><b>Nombre</b>: ${owner_name}</li>
        <li><b>NIF</b>: ${nif}</li>
        <li><b>Oficina registrada</b>: ${location}</li>
        <li><b>Actividad del sitio web</b>: ${website_activity_es}</li>
        <li><b>Correo electrónico</b>: ${mail}</li>
    </ul>
    
    <p>Los datos personales que nos proporcione, siempre con su consentimiento expreso, serán almacenados y tratados con las finalidades establecidas y descritas a continuación en esta Política de Privacidad, hasta que nos solicite su supresión.</p>
    
    <h4>NORMAS DE ACCESO AL SITIO WEB</h4>
    
    <p>Como usuario de nuestra web, también tienes una serie de obligaciones:</p>
    
    <p>No podrás utilizar este sitio web para la realización de actividades contrarias a las leyes, a la moral, al orden público y, en general, a hacer un uso conforme a las condiciones establecidas en el presente Aviso Legal.</p>
    
    <p>No podrás realizar actividades publicitarias o de explotación comercial remitiendo mensajes que utilicen una identidad falsa.</p>
    
    <p>Tú serás el único responsable de la veracidad y exactitud de los contenidos que introduzcas en esta web y de los datos personales que nos facilites con las finalidades previstas en nuestra Política de Privacidad.</p>
    
    <p>También serás el único responsable de la realización de cualquier tipo de actuación ilícita, lesiva de derechos, nociva y/o perjudicial en los sitios de terceros a los que te podamos derivar desde este sitio web para el desarrollo de nuestra actividad.</p>
    
    <p>Como responsable del sitio web, <b>${page_name}</b> podrá interrumpir el servicio de la página que esté siendo utilizado por el usuario y resolver de modo inmediato la relación si detecta un uso de la web o de cualquiera de los servicios que en la mismo se ofertan que pueda considerarse contrario a lo expresado en el presente Aviso Legal.</p>
    
    <h4>PROPIEDAD INTELECTUAL E INDUSTRIAL</h4>
    
    <p>La totalidad de este sitio web (texto, imágenes, marcas, gráficos, logotipos, botones, archivos de software, combinaciones de colores, así como la estructura, selección, ordenación y presentación de sus contenidos) se encuentra protegida por las leyes vigente sobre Propiedad Intelectual e Industrial, quedando prohibida su reproducción, distribución, comunicación pública y transformación, salvo para uso personal y privado.</p>
    
    <p>Como titular de este sitio web, <b>${page_name}</b> no garantiza que los contenidos sean precisos o libres de error o que el libre uso de los mismos por parte de los usuarios no infrinja los derechos de terceras partes. El buen o mal uso de esta página y de sus contenidos es responsabilidad del usuario.</p>
    
    <p>Asimismo, queda prohibida la reproducción, retransmisión, copia, cesión o redifusión, total o parcial, de la información contenida en la página, cualquiera que fuera su finalidad y el medio utilizado para ello, sin autorización previa de <b>${page_name}</b>.</p>
    
    <h4>ENLACES O LINKS</h4>
    
    <p>Este sitio web incluye enlaces o links a sitios de terceros. Las páginas pertenecientes a estos terceros no han sido revisadas ni son objeto de controles por nuestra parte, por lo que <b>${page_name}</b> no podrá ser considerado responsable de los contenidos de estos sitios web, ni de las medidas que se adopten relativas a su privacidad o al tratamiento de sus datos de carácter personal u otros que pudieran derivarse.</p>
    
    <p>Por todo ello, te recomendamos la lectura detenida de las condiciones de uso, política de privacidad, avisos legales y/o similares de estos sitios.</p>
    
    <h4>ENLACES DE AFILIACIÓN DE AMAZON</h4>
    
    <p>Este sitio web, de acuerdo a su finalidad, utiliza enlaces de afiliado de Amazon.</p>
    
    <p>Esto quiere decir que encontrarás enlaces de productos de Amazon a los que podrás acceder directamente desde nuestro sitio web pero que, en su caso, la compra la realizarás en Amazon, bajo sus propias condiciones en ese momento.</p>
    
    <h4>LIMITACIÓN DE RESPONSABILIDAD</h4>
    
    <p>En ejercicio de su derecho como titular de esta web, te informamos de que <b>${page_name}</b> no se hace responsable en ningún caso de lo siguiente:</p>
    
    <p>La calidad del servicio, la velocidad de acceso, el correcto funcionamiento ni la disponibilidad ni continuidad de funcionamiento de la página.</p>
    
    <p>La existencia de virus, malware, programas maliciosos o dañinos en los contenidos.</p>
    
    <p>El uso ilícito, negligente, fraudulento o contrario a este Aviso Legal.</p>
    
    <p>La falta de licitud, calidad, fiabilidad, utilidad y disponibilidad de los servicios prestados por terceros y puestos a disposición de los usuarios en este sitio web.</p>
    
    <p>De los daños que pudieran provenir del uso ilegal o indebido de este blog.</p>
    
    <h4>POLITICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS</h4>
    
    <p>Este sitio web cumple con la normativa vigente en materia de protección de datos, lo que implica que, como usuario, deberás dar tu consentimiento expreso antes de facilitarnos datos personales a través de los diferentes formularios puestos a disposición en las secciones de nuestra página.</p>
    
    <p>Para ello, en aras de la transparencia y el ejercicio de tu derecho, nuestro deber es informarte sobre los datos personales que recabamos, almacenamos y tratamos y con qué finalidades, teniendo en cualquier momento la posibilidad de revocar libremente tu consentimiento.</p>
    
    <p>Toda esta información la podrás encontrar en nuestra <b>POLÍTICA DE PRIVACIDAD</b>.</p>
    
    <h4>POLÍTICA DE COOKIES</h4>
    
    <p>Tal y como te informamos nada más acceder a nuestra web, este sitio utiliza cookies propias y de terceros con el objetivo de proporcionarte la mejor experiencia de usuario y desarrollar nuestra actividad.</p>
    
    <p>En cualquier momento, tendrás la opción de configurar tu navegador para desestimar el uso de estas cookies que, en algún caso, afectarán a tu experiencia de usuario.</p>
    
    <p>Para acceder a la información completa sobre el uso de cookies en este sitio web, su finalidad y su desestimación, puedes consultar nuestra <b>POLÍTICA DE COOKIES</b>.</p>
    
    <h4>LEGISLACIÓN APLICABLE Y JURISDICCIÓN COMPETENTE</h4>
    
    <p>El presente Aviso Legal se encuentra sometido a la legislación española vigente.</p>
    
    <p>En caso necesario, ante cualquier tipo de controversia de carácter legal, <b>${page_name}</b> y el usuario, con renuncia expresa a cualquier otro fuero, se someterán a los Juzgados y Tribunales del domicilio del Usuario para cualquier controversia que pudiera derivarse.</p>
    
    <p>En el caso de que el usuario tenga su domicilio fuera de España, <b>${page_name}</b> y el usuario se someterán, con renuncia expresa a cualquier otro fuero, a los juzgados y tribunales de Barcelona (España).</p>
    
    <p>Si tienes cualquier duda sobre este Aviso Legal, puedes enviarnos un correo electrónico a <b>${mail}</b>.</p>`
}

module.exports = { legal, privacyPolicy, cookiesPolicy, legalClaim }