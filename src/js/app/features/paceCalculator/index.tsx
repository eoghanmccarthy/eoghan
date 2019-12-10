import React, { Fragment, useState } from "react";
import { Formik, Form,Field } from 'formik';

const PaceCalculator: React.FunctionComponent<{}> = () => {

  return (
    <div>
      <h1>My Form</h1>
      <Formik
        initialValues={{
          timeHr: '',
          timeMin: '',
          timeSec: '',
          distanceVal: '',
          distanceMetric: 'km',
          paceHr: '',
          paceMin: '',
          paceSec: '',
          paceMetric: 'km',
        }}
        onSubmit={(values, actions) => {

        }}
        children={({ dirty, isSubmitting }) => (
          <Form>
            <Field type="text" name="timeHr" />
            <Field type="text" name="timeMin" />
            <Field type="text" name="timeSec" />
            <Field type="text" name="distanceVal" />
            <Field as="select" name="distanceMetric">
              <option value="km">Kilometres</option>
              <option value="mi">Miles</option>
            </Field>
            <Field type="text" name="paceHr" />
            <Field type="text" name="paceMin" />
            <Field type="text" name="paceSec" />
            <Field as="select" name="paceMetric">
              <option value="km">Kilometres</option>
              <option value="mi">Miles</option>
            </Field>
          </Form>
        )}
      />
  </div>
  );
};

export default PaceCalculator;
