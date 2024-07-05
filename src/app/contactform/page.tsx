"use client"

import Form from "@/components/contactform/Form";
import styles from '@styles/contactform.module.css'
import { Nunito } from "next/font/google";
import { useState } from "react";
import { defaultStyles, JsonView } from "react-json-view-lite";
import { State } from "../../../typedefs/contactform";
import 'react-json-view-lite/dist/index.css';
import Banner from "@/components/contactform/Banner";
import { StyleProps } from "react-json-view-lite/dist/DataRenderer";
const nun = Nunito({ subsets: ['latin-ext'] })

const ContactForm = () => {

  const [formResult, setFormResult] = useState<State|null>(null)

  return ( 
    <section id={styles.contactform_box} className={nun.className}>
      <Banner/>
      <Form setFormResult={setFormResult}/>
      <div id={styles.output_box}>
        <h3 id={styles.output_title}>Output:</h3>
        { 
          formResult !== null ? 
          <JsonView data={formResult} style={props}></JsonView> : 
          <p id={styles.output_fallback}>
            Complete the form to see the data in JSON format 💙
          </p>
        }
      </div>
    </section>
  );
}

const props: StyleProps = {
  ...defaultStyles,
  container: styles.json_box,
  stringValue: styles.json_value,
  label: styles.json_property,
  noQuotesForStringValues: true,
} 
 
export default ContactForm;