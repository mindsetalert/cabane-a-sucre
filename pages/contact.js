import { useState } from "react";
import { useLanguage } from "../lib/LanguageContext";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <span className={styles.pageIcon}>✉️</span>
        <h1 className={styles.pageTitle}>{t.contact.title}</h1>
        <p className={styles.pageSubtitle}>{t.contact.subtitle}</p>
      </div>

      <div className={styles.layout}>
        <div className={styles.formWrapper}>
          {sent ? (
            <div className={styles.success}>
              <span>✅</span>
              <p>{t.lang === "fr" ? "Message envoyé! On vous recontacte bientôt." : "Message sent! We'll get back to you soon."}</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <label className={styles.label}>
                {t.contact.name}
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className={styles.label}>
                {t.contact.email}
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className={styles.label}>
                {t.contact.phone}
                <input
                  className={styles.input}
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </label>
              <label className={styles.label}>
                {t.contact.message}
                <textarea
                  className={styles.textarea}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </label>
              <button className={styles.submit} type="submit">
                {t.contact.send}
              </button>
            </form>
          )}
        </div>

        <div className={styles.info}>
          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>{t.contact.address_title}</h3>
            <p>935-C Chemin Deschêne</p>
            <p>L'Ange-Gardien, QC J8L 4B6</p>
            <p>Canada</p>
          </div>

          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>{t.contact.hours_title}</h3>
            {t.contact.hours.map((h, i) => (
              <p key={i}>{h}</p>
            ))}
          </div>

          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>📞</h3>
            <p>+1 (819) 743-5003</p>
            <p>leighpigeon@hotmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
