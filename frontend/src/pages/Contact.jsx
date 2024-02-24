export default function Contact() {
  return (
    <div>
      <div className="image-container">
        <div className="home-bg " />

        <div className="visite">
          <div>NOUS CONTACTER</div>
        </div>
      </div>
      <div className="bk-contact">
        <div className="contact">
          <div className="mail">
            <img src="src/assets/logo/mail.png" alt="logo.mail" />
            <div>bonjour@sitevraimentsuper.fr</div>
          </div>
          <div className="phone">
            <img src="src/assets/logo/call.png" alt="logo.phone" />
            <div>01 23 45 67 89</div>
          </div>
          <div className="adresse">
            <div>Adresse</div>
            <div>Soulac </div>
          </div>
        </div>
        <div className="container-map">
          <div className="sous-title">Maps</div>
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26136.112802718748!2d-1.106908314017353!3d45.52620572614689!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4801836b8aa40617%3A0xca8593f18b933e70!2sLa%20batterie%20de%20Arros!5e0!3m2!1sfr!2sfr!4v1705962804931!5m2!1sfr!2sfr"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Carte de La batterie de Arros"
          />
        </div>
      </div>
    </div>
  );
}
