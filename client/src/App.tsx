import React, { useState } from "react"

import "./App.css"
import { Formik } from "formik"
import { Input, SubmitButton, Form } from "formik-antd"

import { AntDesignOutlined } from "@ant-design/icons"
import ChartContainer from './components/ChartContainer';



function App() : JSX.Element {
  //const url = 'https://en.wikipedia.org/wiki/FIFA_World_Player_of_the_Year';
  const [url, setUrl] = useState('');
  
  return (
    <div className="App">
      <div style={{ background: "white", padding: "20px" }}>
        <Formik
          initialValues={{}}
          onSubmit={(values: any, f) => {
            setUrl(values.url);
            f.setSubmitting(false)
          }}
        >
          <Form>
            <Input name="url" placeholder="wiki url for chart generating"/>
            <SubmitButton
              style={{ marginTop: 10 }}
              icon={<AntDesignOutlined />}
            >
              Generate Chart
            </SubmitButton>
          </Form>
        </Formik>
        <br />
        <ChartContainer url={url} />
      </div>
    </div>
  );
}

export default App;
