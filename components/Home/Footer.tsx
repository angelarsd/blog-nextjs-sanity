export default function Footer() {
  return (
    <footer className="footer bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center mt-5 mb-5">
              <h4 className="mb-4 logo">
                <a href="#home" className="text-dark">
                  Susana Dallal
                </a>
              </h4>
              <ul className="social-icons mb-4 list-inline">
                <li className="list-inline-item">
                  <a
                    href="https://www.linkedin.com/in/susanadallal"
                    target="_blank"
                  >
                    <i className="mdi mdi-linkedin"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="mailto:susanadallals@gmail.com" target="_blank">
                    <i className="mdi mdi-email-outline"></i>
                  </a>
                </li>
              </ul>
              <p className="copyright-desc text-muted mb-0">
                © 2021 Susana Dallal
                <i className="mdi mdi-heart text-danger"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
