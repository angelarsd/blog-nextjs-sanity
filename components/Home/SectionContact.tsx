export default function SectionContact() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section-title text-center mb-4 pb-2">
            <div className="mb-5">
              <i className="mdi mdi-headphones h1"></i>
            </div>
            <h3 className="text-white">Contáctame</h3>
            <p className="text-white-50 mx-auto mb-0 para-desc">
              Me puedes contactar por mi email personal y te estaré respondiendo
              a la brevedad
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-12 col-md-12 mt-4 pt-2">
          <div className="contact-desc text-center">
            <div>
              <i className="mdi mdi-email-outline text-custom h3"></i>
            </div>
            <div className="contact-details">
              <p className="mb-0">
                <a
                  href="mailto:susanadallals@gmail.com"
                  target="_blank"
                  className="text-white"
                >
                  susanadallals@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
