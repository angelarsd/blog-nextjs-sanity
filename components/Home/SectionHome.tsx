import { ReactTyped } from 'react-typed'

const keyswords = ['Susana Dallal', 'UX Writer', 'CopyWriter', 'SEO', 'SEM']

export default function SectionHome() {
  return (
    <>
      <div className="bg-overlay"></div>
      <div className="home-center">
        <div className="home-desc-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 mt-5">
                <div className="home-title text-center">
                  <h5 className="text-white-50 sub-title mb-3 font-weight-normal">
                    UX Writer / CopyWriter / SEO / SEM
                  </h5>
                  <h1 className="display-3">
                    <span className="element text-white">
                      <ReactTyped
                        strings={keyswords}
                        typeSpeed={150} // typing speed
                        backSpeed={50}
                        backDelay={3000} // pause before backspacing
                        loop
                      />
                    </span>
                  </h1>
                  <p className="text-light mx-auto para-desc">
                    Soy Comunicadora Social especialista en comunicaciones
                    corporativas, contenido digital y user experience.
                    Actualmente me desempeño como UX Writer, porque me
                    entusiasma mucho guiar a la persona usuaria para que tenga
                    una experiencia significativa y relevante en las interfaces.
                  </p>
                  <div className="mt-4 pt-2">
                    <h5 className="text-white sub-title mb-3 font-weight-normal">
                      ¿Quieres conocer más de mi perfil?
                    </h5>
                    <a
                      href="/cv-ux-writer-copywriter-seo-html-css-leanux-scrum-susana-dallal.pdf"
                      target="_blank"
                      className="btn btn-custom btn-round text-capitalize"
                    >
                      Descarga mi Resumen Curricular
                      <i className="mdi mdi-download ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
