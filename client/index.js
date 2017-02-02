import { app, html } from 'hyperapp';

app({
  model: 'World',
  update: {
    add: model => `${model}!`,
  },
  view: (model, msg) => html`
    <div>
      <h1>Hello ${model}</h1>
      <button onclick=${msg.add}>add</button>
    </div>
  `,
});
