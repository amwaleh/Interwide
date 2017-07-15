import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import {  Icon } from "semantic-ui-react";
import React from 'react';
import ReactDOM from 'react-dom';
import Steps, { Step } from 'rc-steps';

//const Icon =  ({ type }) => <i className={`rcicon rcicon-${type}`} />;
const steps = [{
  title: 'Local delivery',
  description: 'We offer local delivery within Kenya.',
  icon: "marker"
}, {
  title: 'Same Day Delivery',
  description: 'This is a premium service to deliver letter and parcels within 24 hours.',
  icon:"motorcycle"
}, {
  title: 'Overnight delivery',
  description: 'We offer overnight services within Kenya',
  icon:"moon"
}, {
  title: 'International Courier Services',
  description: 'We offer an end to end cross border delivery service including picking, dispatch clearing and forwarding and delivery.',
  icon:"plane"
}, {
  title: 'Storage and Warehousing services',
  description: 'Storage and warehousing is offered as a single service or as a package with transport services.',
  icon: "cubes"
}, 
{
  title: 'Hauling and Bulk Material handling',
  description: 'We offer hauling services for bulky materials ICS provides.',
  icon:"truck"
}, 
{
  title: 'Messengerial Services',
  description: ' Outsourced Messengerial services by provision of personnel to undertake menial jobs of filing and postage or as riders.',
  icon:"envelope"
}

].map((s, i) => {
  return (
    <Step
      key={i}
      description={s.description}
      title={s.title}
      status={s.status}
      icon={<Icon name={s.icon} />}
    />
  );
});

const Step2 = ({current}) => (
  <Steps direction="vertical" current={current} >

    {steps}
  </Steps>
);

export default Step2;