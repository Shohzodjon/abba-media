import React, { useState } from "react";
import "./story.css";
import flag from "../../assets/imges/flag.png";
import client from "../../assets/imges/success_img.png";
import flagBottom from "../../assets/imges/flag_bottom.png";
function Story() {
  return (
    <section className="story_section" id="blog">
      <div className="container_box m_bottom">
        <div className="d_flex story_box">
          <div className="story_left">
            <div className="flag">
              <img src={flag} alt="flag" />
            </div>
          </div>
          <div className="story_right">
            <h3>See why we are trusted the world over</h3>
            <p>
              The first rule of any technology used in a business is that
              automation applied to an efficient operation will magnify the
              efficiency.
            </p>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <div className="d_flex">
                  <h4 className="accordion-header" id="headingOne">
                    Do you provide customer support?
                  </h4>
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <i class="bi bi-plus"></i>
                  </button>
                </div>

                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde atque veritatis rem nemo placeat porro autem velit
                      omnis odio? Veniam, vel eos? Vero culpa, incidunt quisquam
                      nulla nostrum doloremque illo eveniet voluptas fugit
                      impedit quos assumenda quod dolorum fugiat id ratione
                      expedita minus. Cum aut velit dicta ullam voluptatibus
                      possimus nemo reprehenderit hic voluptatem et magnam
                      consectetur, non animi praesentium amet commodi vitae eum
                      soluta alias. Natus illo vel assumenda!
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <div className="d_flex">
                  <h4 className="accordion-header yellow" id="headingTwo">
                    How much traffic can the hosting handle?
                  </h4>
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <i class="bi bi-plus"></i>
                  </button>
                </div>

                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde atque veritatis rem nemo placeat porro autem velit
                      omnis odio? Veniam, vel eos? Vero culpa, incidunt quisquam
                      nulla nostrum doloremque illo eveniet voluptas fugit
                      impedit quos assumenda quod dolorum fugiat id ratione
                      expedita minus. Cum aut velit dicta ullam voluptatibus
                      possimus nemo reprehenderit hic voluptatem et magnam
                      consectetur, non animi praesentium amet commodi vitae eum
                      soluta alias. Natus illo vel assumenda!
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <div className="d_flex">
                  <h4 className="accordion-header" id="headingThree">
                    Do you have any questions for us?
                  </h4>

                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <i class="bi bi-plus"></i>
                  </button>
                </div>

                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde atque veritatis rem nemo placeat porro autem velit
                      omnis odio? Veniam, vel eos? Vero culpa, incidunt quisquam
                      nulla nostrum doloremque illo eveniet voluptas fugit
                      impedit quos assumenda quod dolorum fugiat id ratione
                      expedita minus. Cum aut velit dicta ullam voluptatibus
                      possimus nemo reprehenderit hic voluptatem et magnam
                      consectetur, non animi praesentium amet commodi vitae eum
                      soluta alias. Natus illo vel assumenda!
                    </p>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <div className="d_flex">
                  <h4 className="accordion-header yellow" id="headingFour">
                    What is your return policy?
                  </h4>

                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <i class="bi bi-plus"></i>
                  </button>
                </div>

                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde atque veritatis rem nemo placeat porro autem velit
                      omnis odio? Veniam, vel eos? Vero culpa, incidunt quisquam
                      nulla nostrum doloremque illo eveniet voluptas fugit
                      impedit quos assumenda quod dolorum fugiat id ratione
                      expedita minus. Cum aut velit dicta ullam voluptatibus
                      possimus nemo reprehenderit hic voluptatem et magnam
                      consectetur, non animi praesentium amet commodi vitae eum
                      soluta alias. Natus illo vel assumenda!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==============================================  BORDER =========================================  */}
      <div className="container_box ">
        <h3 className="heading_three">How our client made 10x revenue</h3>
        <div className="d_flex client_side">
          <div className="client_img">
            <img src={client} alt="client" />
            <button>more stories</button>
            <div className="client_info">
              <h4>"I learned so much, even as a professional".</h4>
              <p>
                "Ut vehicula lacus a lacus tempor, nec viverra justo
                condimentum. Integer eu urna dapibus, scelerisque nisl non,
                semper ipsum. Etiam dolor arcu, tincidunt a arcu eget."
              </p>
              <h5>Juan Huang</h5>
            </div>
          </div>
          <div className="right_client-info">
            <ul>
              <li>
                <h3>Other successful stories</h3>
              </li>
              <li>
                <h4>Amateur</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius.
                </p>
                <h5>More Information</h5>
              </li>
              <li>
                <h4>Beginner</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius.
                </p>
                <h5>More Information</h5>
              </li>
              <li>
                <h4>Professional</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius.
                </p>
                <h5>More Information</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flag_bottom">
        <img src={flagBottom} alt="flag" />
      </div>
    </section>
  );
}

export default Story;
