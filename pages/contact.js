import Head from "next/head";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../lib/LanguageContext";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_rzfwqlk",
        "template_sszxf0l",
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
        },
        "A_PDyN3NEmOvfX5JF"
      );
      setSent(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Erreur lors de l'envoi. Veuillez réessayer ou nous appeler au (819) 743-5003.");
    }
    setLoading(false);
  };

  return (
    <div className={styles.page}>
      <Head>
        <title>Contactez-nous — Le Spot à Sucre Érablière</title>
        <meta name="description" content="Contactez Le Spot à Sucre pour acheter du sirop d'érable pur ou de l'équipement d'érablière. Téléphone : (819) 743-5003. L'Ange-Gardien, Outaouais." />
        <meta property="og:title" content="Contactez-nous — Le Spot à Sucre" />
        <meta property="og:url" content="https://erablierelespotasucre.com/contact" />
        <link rel="canonical" href="https://erablierelespotasucre.com/contact" />
      </Head>
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
              <button className={styles.submit} type="submit" disabled={loading}>
                {loading ? "Envoi en cours..." : t.contact.send}
              </button>
            </form>
          )}
        </div>

        <div className={styles.info}>
          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>{t.contact.address_title}</h3>
            <p>621 Avenue de L'Ange-Gardien</p>
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
            <p>erabliere.lespotasucre@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

