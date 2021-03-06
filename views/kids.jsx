var React = require('react');
var Kid = require('./kid.jsx');

var kids = require('../styles/kids');
var layout = require('../styles/layout');
var section = require('../styles/section');

var Kids = React.createClass({
  render() {
    return (
      <section className={kids.block.className}>
        <div className={kids.content.className}>
          <h2 className={kids.header.className}>river kids</h2>
          <div className={kids.innerContent.className}>
            <p>We value children because God values children. We lead with passion and have been trained and equipped to share God’s love in a captivating way.</p>
            <div className={kids.quote.className}>
              <p>Teaching children to embrace God’s love and hear His voice.</p>
            </div>
            {/*<p><i>We can think of no greater way to love and support you than to love your children.</i></p>
            <p>At River Kids we seek to…</p>
            <ul>
              <li className={kids.list.className}>Train up a generation who knows their Father</li>
              <li className={kids.list.className}>Instill a love for King Jesus</li>
              <li className={kids.list.className}>Teach our kids how to hear from Holy Spirit</li>
              <li className={kids.list.className}>Empower a generation to walk in the freedom and life of the Kingdom</li>
              <li className={kids.list.className}>Create a safe place where love rules and church is fun!</li>
            </ul>
            */}
            <div className={kids.list.className}>
              {this.props.kids.map(k => <Kid key={k.name} data={k} />)}
            </div>
          </div>
        </div>
        <div className={kids.image.className}></div>
      </section>
    );
  }
});

module.exports = Kids;

