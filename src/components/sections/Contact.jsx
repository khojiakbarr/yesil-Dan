import React from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <section class="contact__form" id="contact">
      <div className="container">
        <div className="contact_title">
          <h2 data-aos="fade-up">{t("contact")}</h2>
          <h3 data-aos="fade-up" data-aos-delay="200">
            {t("contactUsText")}
          </h3>
        </div>
        <div class="contact__form-wrapper">
          <div class="contact__form-group" data-aos="fade-right">
            {/* <!-- ! visitors__form --> */}
            <form id="visitors__form">
              {/* <!-- Input name --> */}
              <label for="input_name_placeholder">
                <span data-lang="input_name_label">{t("contactName")}</span>
                <input
                  type="text"
                  id="input_name_placeholder"
                  placeholder={t("contactNameHolder")}
                  required
                />
              </label>

              {/* <!-- Input phone number --> */}
              <label for="input_phone_placeholder">
                <span data-lang="input_phone_label">{t("contactPhone")}</span>
                <input
                  type="tel"
                  id="input_phone_placeholder"
                  placeholder={t("contactPhoneHolder")}
                  required
                />
              </label>

              {/* <!--  --> */}
              <label for="input_message_placeholder">
                <span data-lang="input_message_label">
                  {t("contactMessage")}
                </span>
                <textarea
                  type="text"
                  id="input_message_placeholder"
                  placeholder={t("contactMessageHolder")}
                  rows={5}
                ></textarea>
              </label>

              <button class="contact__form-btn">
                <span data-lang="submit_button_text">{t("send")}</span>
              </button>
            </form>
            {/* <!-- ! End of visitors__form --> */}
          </div>

          <div class="map__location" data-aos="fade-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14216.126685061676!2d69.22599573302416!3d41.327263806219534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b8efc7297ff%3A0x2b25a59e558906f4!2z0JLQtdGA0YHQsNC70Yw!5e1!3m2!1sru!2s!4v1726124556814!5m2!1sru!2s"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
