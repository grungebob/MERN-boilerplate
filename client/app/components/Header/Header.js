import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <header>
  
    <p>robchung.com is under construction right now. <br />
       Updates coming soon. <br />
       Email me at chungrob@gmail.com in the meantime if you have questions. <br />
    </p>
    <Link to="/">Home</Link>

    <nav>
      <Link to="/helloworld">Hello World</Link>
    </nav>

    <hr />
  </header>
);

export default Header;
