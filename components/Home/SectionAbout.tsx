import Image from 'next/image'
import { useState } from 'react'

export default function SectionAbout() {
  const [showTab, setShowTab] = useState('story')

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section-title text-center mb-4 pb-2">
            <div className="mb-5">
              <i className="mdi mdi-account-settings h1 text-muted"></i>
            </div>
            <h3>Acerca de mí</h3>
            <p className="text-muted mx-auto mb-0 para-desc">
              Comunicadora Social que se caracteriza por comprometerse con cada
              proyecto que se presente, exigente con la ortografía y la
              escritura online, conservando aún la admiración por la caligrafía;
              fiel creyente de la idea en que la forma como se dicen las cosas
              influye 100% en el mensaje que se quiere transmitir y cómo se
              interpreta.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-12 mt-4 pt-2">
        <div>
          <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className={`nav-link ${showTab === 'story' ? 'active' : ''}`}
                id="story-tab"
                data-toggle="tab"
                href="#story"
                role="tab"
                aria-controls="story"
                aria-selected="true"
                onClick={(e) => {
                  setShowTab('story')
                  return e.preventDefault()
                }}
              >
                Resumen
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${showTab === 'skill' ? 'active' : ''}`}
                id="skill-tab"
                data-toggle="tab"
                href="#skill"
                role="tab"
                aria-controls="skill"
                aria-selected="false"
                onClick={(e) => {
                  setShowTab('skill')
                  return e.preventDefault()
                }}
              >
                Habilidades
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${showTab === 'resume' ? 'active' : ''}`}
                id="resume-tab"
                data-toggle="tab"
                href="#resume"
                role="tab"
                aria-controls="resume"
                aria-selected="false"
                onClick={(e) => {
                  setShowTab('resume')
                  return e.preventDefault()
                }}
              >
                Experiencia / Estudios
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className={`tab-pane fade ${
                showTab === 'story' ? 'show active' : ''
              }`}
              id="story"
              role="tabpanel"
              aria-labelledby="story-tab"
            >
              <div className="text-center">
                <div className="about-img mt-5 mb-5">
                  <Image
                    src="/images/about-img.webp"
                    alt="Susana Dallal"
                    width={190}
                    height={190}
                    className="img-fluid mx-auto d-block rounded-circle"
                  />
                </div>
                <h3 className="mb-3">
                  Susana Dallal{' '}
                  <small className="text-muted">
                    {' '}
                    - UX Writer/CopyWriter & SEO/SEM
                  </small>
                </h3>
                <p className="text-muted">
                  La profesión ha evolucionado, dando paso a perfiles tan
                  increíbles y con el mismo nivel de responsabilidad como el de
                  UX Writer, donde debes contar una historia y hacer que la
                  experiencia de cada usuario en el sitio web sea única y quiera
                  regresar.
                </p>
                <p className="text-muted">
                  Valores que se destacan del perfil: trabajo en equipo,
                  responsabilidad, empatía, calidad en la atención al cliente
                  interno y externo, y buenas relaciones interpersonales, para
                  aportar positivamente a la cultura organizacional y generar
                  espacios amenos.
                </p>
                <p className="text-muted">
                  La creación de contenido web, edición de textos,
                  capacitaciones, coordinación de eventos corporativos, y
                  generación de buen clima laboral, son algunas de las
                  actividades desarrolladas durante la carrera profesional
                </p>
              </div>
            </div>
            <div
              className={`tab-pane fade ${
                showTab === 'skill' ? 'show active' : ''
              }`}
              id="skill"
              role="tabpanel"
              aria-labelledby="skill-tab"
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="skill mt-5">
                    <div>
                      <p className="text-muted text-uppercase mb-2">
                        Redacción
                      </p>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: '100%' }}>
                          <div className="progress-value text-muted">100%</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <p className="text-muted text-uppercase mb-2">LEAN UX</p>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: '90%' }}>
                          <div className="progress-value text-muted">90%</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <p className="text-muted text-uppercase mb-2">SCRUM</p>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: '90%' }}>
                          <div className="progress-value text-muted">90%</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <p className="text-muted text-uppercase mb-2">SEO/SEM</p>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: '85%' }}>
                          <div className="progress-value text-muted">85%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="skill">
                    <div className="mt-5">
                      <p className="text-muted text-uppercase mb-2">HTML5</p>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: '80%' }}>
                          <div className="progress-value text-muted">80%</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <p className="text-muted text-uppercase mb-2">CSS3</p>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: '75%' }}>
                          <div className="progress-value text-muted">75%</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <p className="text-muted text-uppercase mb-2">
                        Edicción de Video (Filmora)
                      </p>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: '70%' }}>
                          <div className="progress-value text-muted">70%</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <p className="text-muted text-uppercase mb-2">
                        Photoshop, Canvas, Illustrator...
                      </p>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: '70%' }}>
                          <div className="progress-value text-muted">70%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`tab-pane fade ${
                showTab === 'resume' ? 'show active' : ''
              }`}
              id="resume"
              role="tabpanel"
              aria-labelledby="resume-tab"
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="experiences">
                    <div className="mt-5 mb-5">
                      <h5 className="font-weight-bold text-center text-custom">
                        Experiencias Laborales
                      </h5>
                      <hr />
                    </div>
                    <div>
                      <div>
                        <h6>Analista de Formación y Soporte Senior</h6>
                        <p className="text-muted">
                          Pilot Solution, 2018 - Actualmente
                        </p>
                        <hr className="mt-4 mb-4" />
                      </div>
                      <div>
                        <h6>Data Entry SemiSenior</h6>
                        <p className="text-muted">IMS Corporate, 2018</p>
                        <hr className="mt-4 mb-4" />
                      </div>
                      <div>
                        <h6>
                          Analista de Comunicaciones y Relaciones Públicas
                          Senior
                        </h6>
                        <p className="text-muted">Empléate, 2014 - 2017</p>
                        <hr className="mt-4 mb-4" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="education">
                    <div className="mt-5 mb-5">
                      <h5 className="font-weight-bold text-center text-custom">
                        Estudios Realizados
                      </h5>
                      <hr />
                    </div>
                    <div>
                      <div>
                        <h6>Licenciada en Comunicación Social</h6>
                        <p className="text-muted">
                          Universidad Santa María, 2013
                        </p>
                        <hr className="mt-4 mb-4" />
                      </div>
                      <div>
                        <h6>
                          Diplomado de Desarrollo Gerencial en Comunicación
                        </h6>
                        <p className="text-muted">CIAP - UCAB, 2015</p>
                        <hr className="mt-4 mb-4" />
                      </div>
                      <div>
                        <h6>Scrum Foundation Professional Certificate</h6>
                        <p className="text-muted">CertiProf, 2020</p>
                        <hr className="mt-4 mb-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
