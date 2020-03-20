import React from "react";
import PropTypes from "prop-types";
import hljs from "highlight.js";

// import "highlight.js/styles/school-book.css";
import "highlight.js/styles/night-owl.css";
// import "highlight.js/styles/vs2015.css";
// import "highlight.js/styles/monokai-sublime.css";
// import "highlight.js/styles/atom-one-dark-reasonable.css";

const Debug = ({ code }) => (
  <pre>
    <code
      dangerouslySetInnerHTML={{ __html: hljs.highlightAuto(code).value }}
      className="hljs"
    />
  </pre>
);

Debug.propTypes = { code: PropTypes.string.isRequired };

export default Debug;
