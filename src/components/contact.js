import React from "react";

export default () => (
  <div id="contact">
    <header>
      <h1>Contact</h1>        
    </header>
    <form>
      <div>
        <label>Name:</label>
        <input type="text" id="name" name="user_name"/>
      </div>
      <div>
        <label>E-mail:</label>
        <input type="email" id="mail" name="user_mail"/>
      </div>
      <div>
        <label>Subject:</label>
        <input type="text" id="subject" name="subject"/>
      </div>
      <div>
        <label>Message:</label>
        <textarea id="msg" name="user_message"></textarea>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    <a><i className="fas fa-arrow-up"></i></a>
  </div>
);
