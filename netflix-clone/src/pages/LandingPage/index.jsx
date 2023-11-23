import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div class="header">
        <nav>
          <img src="img/logo.png" alt="Netflix-logo" class="logo" />
          <div>
            <button class="language-btn">
              English <img src="img/down-icon.png" alt="down arrow" />
            </button>

            <Link to="/browse-movies">
              <button>Sign In</button>
            </Link>
          </div>
        </nav>
        <div class="header-content">
          <h1>Unlimited movies, TV shows and more</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <p>
            Ready to watch? Enter your email to create or restart yoour
            membership.
          </p>
          <form class="email-signup">
            <input type="email" placeholder="Email address" required />
            <Link to="/browse-movies">
              <button type="submit">
                Get Started{" "}
                <div
                  aria-hidden="true"
                  class="default-ltr-cache-17uj5h e1ax5wel0"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-mirrorinrtl="true"
                    class="default-ltr-cache-4z3qvp e1svuwfo1"
                    data-name="ChevronRight"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </Link>
          </form>
        </div>
      </div>

      <div class="whole-features">
        <div class="features">
          <div class="row">
            <div class="text-col">
              <h2>Enjoy on your TV.</h2>
              <p>
                Watch on smart TVs, PlayStation, Xbox,Chromecast,Apple
                TV,Blu-ray players and more.
              </p>
            </div>
            <div class="img-col">
              <img src="img/feature-1.png" alt="feature-1" />
              <video
                class="vid1"
                data-uia="nmhp-card-animation-asset-video"
                autoplay=""
                playsinline=""
                muted=""
                loop=""
              >
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="img-col">
              <img src="img/feature-2.png" alt="feature-1" />
            </div>
            <div class="text-col">
              <h2>Download your shows to watch offline</h2>
              <p>
                Download your shows to watch offline Save your favorites easily
                and always have something to watch.
              </p>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="text-col">
              <h2>Watch everywhere</h2>
              <p>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            </div>
            <div class="img-col">
              <img src="img/feature-3.png" alt="feature-1" />
              <video
                class="vid2"
                data-uia="nmhp-card-animation-asset-video"
                autoplay=""
                playsinline=""
                muted=""
                loop=""
              >
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="img-col">
              <img src="img/feature-4.png" alt="feature-1" />
            </div>
            <div class="text-col">
              <h2>Create profiles for kids</h2>
              <p>
                Send kids on adventures with their favorite characters
                <br />
                in a space made just for them—free with your
                <br />
                membership.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="faq">
        <h2>Frequently Asked Questions</h2>
        <ul class="accordion">
          <li>
            <input type="radio" name="accordion" id="first" />
            <label for="first">What is Netflix?</label>
            <div class="content">
              <p>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries, and more
                on thousands of internet-connected devices. You can watch as
                much as you want, whenever you want without a single commercial
                – all for one low monthly price. There's always something new to
                discover and new TV shows and movies are added every week!
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="seconde" />
            <label for="seconde">How much does Netflix cost?</label>
            <div class="content">
              <p>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from USD3.99 to USD9.99 a month. No extra costs, no contracts.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="third" />
            <label for="third">Where can I watch?</label>
            <div class="content">
              <p>
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles. You can also download
                your favorite shows with the iOS, Android, or Windows 10 app.
                Use downloads to watch while you're on the go and without an
                internet connection. Take Netflix with you anywhere.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="fourth" />
            <label for="fourth">How do I cancel?</label>
            <div class="content">
              <p>
                Netflix is flexible. There are no pesky contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="fifth" />
            <label for="fifth">What can I watch on Netflix?</label>
            <div class="content">
              <p>
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more . Watch as much as you want, anytime you want.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="sixth" />
            <label for="sixth">Is Netflix good for kids?</label>
            <div class="content">
              <p>
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and movies in their own space. Kids profiles come with
                PIN-protected parental controls that let you restrict the
                maturity rating of content kids can watch and block specific
                titles you don’t want kids to see.
              </p>
            </div>
          </li>
        </ul>
        <small>
          Ready to watch? Enter your email to create or restart yoour
          membership.
        </small>
        <form class="email-signup">
          <input type="email" placeholder="Email address" required />
          <button class="accordion-btn" type="submit">
            Get Started{" "}
            <div aria-hidden="true" class="default-ltr-cache-17uj5h e1ax5wel0">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-mirrorinrtl="true"
                class="default-ltr-cache-4z3qvp e1svuwfo1"
                data-name="ChevronRight"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
        </form>
      </div>
      <hr />
      <div class="footer">
        <a class="Questions" href="#">
          Questions? Contact Us.
        </a>

        <div class="row">
          <div class="col">
            <a href="#">FAQ</a>
            <a href="#">Inverstor Relations</a>
            <a href="#">Privacy</a>
            <a href="#">speed Test</a>
          </div>
          <div class="col">
            <a href="#">Help Center</a>
            <a href="#">Jobs</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Legal Notices </a>
          </div>
          <div class="col">
            <a href="#">Account</a>
            <a href="#">Ways to Watch</a>
            <a href="#">Corporated Information</a>
            <a href="#">Only on Netflix</a>
          </div>
          <div class="col">
            <a href="#">Media Center</a>
            <a href="#">Terms of Use</a>
            <a href="#">Contact US</a>
          </div>
          <button class="language-btn">
            English <img src="img/down-icon.png" alt="down arrow" />
          </button>
        </div>
        <p class="copyright">Netflix Lebanon</p>
      </div>
    </div>
  );
};

export default LandingPage;
