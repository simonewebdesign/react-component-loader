export default {
  type: 'app',
  label: 'My App',
  components: [
    {
      type: 'Foo',
      label: "This is Foo",
      components: [{
        type: 'Bar',
        label: 'This is Bar',
        components: [{
          type: 'Baz',
          label: 'This is Baz',
          components: []
        }]
      }]
    }
  ]
};
