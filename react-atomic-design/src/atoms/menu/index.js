/* @flow */
import * as React from 'react'

import styles from './style.css'


type Props = {
  type: string
}

const Menu = (props: Props): React.Element<*> => {
 
  return (
    <div class="header-menu__menu-wrapper">
          <div class="discover-menu__menu">
              <div class="discover-menu__container">
                  <div class="discover-menu__header">
                      <h3 class="discover-menu__headline">Explore by category</h3> 
                      <ul class="discover-menu__header-links">
                          <li class="discover-menu__header-links-item">
                              <a href="/en/nc/recently_added_books" class="discover-menu__header-link">See recently added titles</a>
                          </li> 
                          <li class="discover-menu__header-links-item">
                              <a href="/en/nc/books" class="discover-menu__header-link">See popular titles</a>
                          </li>
                      </ul>
                  </div>
                  <ul class="discover-menu__categories">
                      <li class="discover-menu__category">
                          <a href="/en/nc/categories/entrepreneurship-and-small-business-en" class="discover-menu__category-link">
                              <svg viewBox="0 0 24 24" class="discover-menu__sprite sprite-vue sprite-vue--category sprite-vue--entrepreneurship-and-small-business">
                                  <use xlinkhref="#category/entrepreneurship-and-small-business"></use>
                              </svg>
                              <span class="discover-menu__label">Entrepreneurship</span>
                          </a>
                      </li>
                      <li class="discover-menu__category">
                          <a href="/en/nc/categories/politics-and-society-en" class="discover-menu__category-link">
                              <svg viewBox="0 0 24 24" class="discover-menu__sprite sprite-vue sprite-vue--category sprite-vue--politics-and-society">
                                  <use xlinkhref="#category/politics-and-society"></use>
                              </svg>
                              <span class="discover-menu__label">Politics</span>
                          </a>
                      </li>
                      <li class="discover-menu__category">
                          <a href="/en/nc/categories/marketing-and-sales-en" class="discover-menu__category-link">
                              <svg viewBox="0 0 24 24" class="discover-menu__sprite sprite-vue sprite-vue--category sprite-vue--marketing-and-sales">
                                  <use xlinkhref="#category/marketing-and-sales"></use>
                              </svg>
                              <span class="discover-menu__label">Marketing &amp; Sales</span>
                          </a>
                      </li>
                      <li class="discover-menu__category">
                          <a href="/en/nc/categories/science-en" class="discover-menu__category-link">
                              <svg viewBox="0 0 24 24" class="discover-menu__sprite sprite-vue sprite-vue--category sprite-vue--science">
                                  <use xlinkhref="#category/science"></use>
                              </svg>
                              <span class="discover-menu__label">Science</span>
                          </a>
                      </li>
                      <li class="discover-menu__category">
                          <a href="/en/nc/categories/health-and-fitness-en" class="discover-menu__category-link">
                              <svg viewBox="0 0 24 24" class="discover-menu__sprite sprite-vue sprite-vue--category sprite-vue--health-and-fitness">
                                  <use xlinkhref="#category/health-and-fitness"></use>
                              </svg>
                              <span class="discover-menu__label">Health &amp; Nutrition</span>
                          </a>
                      </li>
                      <li class="discover-menu__category">
                          <a href="/en/nc/categories/personal-growth-and-self-improvement-en" class="discover-menu__category-link">
                              <svg viewBox="0 0 24 24" class="discover-menu__sprite sprite-vue sprite-vue--category sprite-vue--personal-growth-and-self-improvement">
                                  <use xlinkhref="#category/personal-growth-and-self-improvement"></use>
                              </svg>
                              <span class="discover-menu__label">Personal Development</span>
                          </a>
                      </li>
                      <li class="discover-menu__category">
                          <a href="/en/nc/categories/economics-en" class="discover-menu__category-link">
                              <svg viewBox="0 0 24 24" class="discover-menu__sprite sprite-vue sprite-vue--category sprite-vue--economics">
                                  <use xlinkhref="#category/economics"></use>
                              </svg>
                              <span class="discover-menu__label">Economics</span>
                          </a>
                      </li>
                      <li class="discover-menu__category">
                          <a href="/en/nc/categories/biography-and-history-en" class="discover-menu__category-link">
                              <svg viewBox="0 0 24 24" class="discover-menu__sprite sprite-vue sprite-vue--category sprite-vue--biography-and-history">
                                  <use xlinkhref="#category/biography-and-history"></use>
                              </svg>
                              <span class="discover-menu__label">History</span>
                          </a>
                      </li>
                      <li class="discover-menu__category">
                          <a href="/en/nc/categories/communication-and-social-skills-en" class="discover-menu__category-link">
                              <svg viewBox="0 0 24 24" class="discover-menu__sprite sprite-vue sprite-vue--category sprite-vue--communication-and-social-skills">
                                  <use xlinkhref="#category/communication-and-social-skills"></use>
                              </svg>
                              <span class="discover-menu__label">Communication Skills</span>
                          </a>
                      </li>
                      <li class="discover-menu__category">
                          <a href="/en/nc/categories/corporate-culture-en" class="discover-menu__category-link">
                              <svg viewBox="0 0 24 24" class="discover-menu__sprite sprite-vue sprite-vue--category sprite-vue--corporate-culture">
                                  <use xlinkhref="#category/corporate-culture"></use>
                              </svg>
                              <span class="discover-menu__label">Corporate Culture</span>
                          </a>
                      </li>
                      <li class="discover-menu__category">
                          <a href="/en/nc/categories/management-and-leadership-en" class="discover-menu__category-link">
                              <svg viewBox="0 0 24 24" class="discover-menu__sprite sprite-vue sprite-vue--category sprite-vue--management-and-leadership">
                                  <use xlinkhref="#category/management-and-leadership"></use>
                              </svg>
                              <span class="discover-menu__label">Management &amp; Leadership</span>
                          </a>
                      </li>
                      <li class="discover-menu__category">
                          <a href="/en/nc/categories/motivation-and-inspiration-en" class="discover-menu__category-link">
                              <svg viewBox="0 0 24 24" class="discover-menu__sprite sprite-vue sprite-vue--category sprite-vue--motivation-and-inspiration">
                                  <use xlinkhref="#category/motivation-and-inspiration"></use>
                              </svg>
                              <span class="discover-menu__label">Motivation &amp; Inspiration</span>
                          </a>
                      </li>
                      <li class="discover-menu__category">
                          <a href="/en/nc/categories/money-and-investments-en" class="discover-menu__category-link">
                              <svg viewBox="0 0 24 24" class="discover-menu__sprite sprite-vue sprite-vue--category sprite-vue--money-and-investments">
                                  <use xlinkhref="#category/money-and-investments"></use>
                              </svg>
                              <span class="discover-menu__label">Money &amp; Investments</span>
                          </a>
                      </li>
                      <li class="discover-menu__category">
                          <a href="/en/nc/categories/psychology-en" class="discover-menu__category-link">
                              <svg viewBox="0 0 24 24" class="discover-menu__sprite sprite-vue sprite-vue--category sprite-vue--psychology">
                                  <use xlinkhref="#category/psychology"></use>
                              </svg>
                              <span class="discover-menu__label">Psychology</span>
                          </a>
                      </li>
                      <li class="discover-menu__category">
                          <a href="/en/nc/categories/productivity-and-time-management-en" class="discover-menu__category-link">
                              <svg viewBox="0 0 24 24" class="discover-menu__sprite sprite-vue sprite-vue--category sprite-vue--productivity-and-time-management">
                                  <use xlinkhref="#category/productivity-and-time-management"></use>
                              </svg>
                              <span class="discover-menu__label">Productivity</span>
                          </a>
                      </li>
                      <li class="discover-menu__category">
                          <a href="/en/nc/categories/relationships-and-parenting-en" class="discover-menu__category-link">
                              <svg viewBox="0 0 24 24" class="discover-menu__sprite sprite-vue sprite-vue--category sprite-vue--relationships-and-parenting">
                                  <use xlinkhref="#category/relationships-and-parenting"></use>
                              </svg>
                              <span class="discover-menu__label">Sex &amp; Relationships</span>
                          </a>
                      </li>
                      <li class="discover-menu__category">
                          <a href="/en/nc/categories/technology-and-the-future-en" class="discover-menu__category-link">
                              <svg viewBox="0 0 24 24" class="discover-menu__sprite sprite-vue sprite-vue--category sprite-vue--technology-and-the-future">
                                  <use xlinkhref="#category/technology-and-the-future"></use>
                              </svg>
                              <span class="discover-menu__label">Technology &amp; the Future</span>
                          </a>
                      </li>
                      <li class="discover-menu__category">
                          <a href="/en/nc/categories/mindfulness-and-happiness-en" class="discover-menu__category-link">
                              <svg viewBox="0 0 24 24" class="discover-menu__sprite sprite-vue sprite-vue--category sprite-vue--mindfulness-and-happiness">
                                  <use xlinkhref="#category/mindfulness-and-happiness"></use>
                              </svg>
                              <span class="discover-menu__label">Mindfulness &amp; Happiness</span>
                          </a>
                      </li>
                      <li class="discover-menu__category">
                          <a href="/en/nc/categories/parenting-en" class="discover-menu__category-link">
                              <svg viewBox="0 0 24 26" class="discover-menu__sprite sprite-vue sprite-vue--category sprite-vue--parenting">
                                  <use xlinkhref="#category/parenting"></use>
                              </svg>
                              <span class="discover-menu__label">Parenting</span>
                          </a>
                      </li>
                      <li class="discover-menu__category">
                          <a href="/en/nc/categories/society-and-culture-en" class="discover-menu__category-link">
                              <svg viewBox="0 0 24 24" class="discover-menu__sprite sprite-vue sprite-vue--category sprite-vue--society-and-culture">
                                  <use xlinkhref="#category/society-and-culture"></use>
                              </svg>
                              <span class="discover-menu__label">Society &amp; Culture</span>
                          </a>
                      </li>
                      <li class="discover-menu__category">
                          <a href="/en/nc/categories/nature-and-environment-en" class="discover-menu__category-link">
                              <svg viewBox="0 0 25 25" class="discover-menu__sprite sprite-vue sprite-vue--category sprite-vue--nature-and-environment">
                                  <use xlinkhref="#category/nature-and-environment"></use>
                              </svg>
                              <span class="discover-menu__label">Nature &amp; the Environment</span>
                          </a>
                      </li>
                      <li class="discover-menu__category">
                          <a href="/en/nc/categories/biography-and-memoir-en" class="discover-menu__category-link">
                              <svg viewBox="0 0 24 24" class="discover-menu__sprite sprite-vue sprite-vue--category sprite-vue--biography-and-memoir">
                                  <use xlinkhref="#category/biography-and-memoir"></use>
                              </svg>
                              <span class="discover-menu__label">Biography &amp; Memoir</span>
                          </a>
                      </li>
                      <li class="discover-menu__category">
                          <a href="/en/nc/categories/career-and-success-en" class="discover-menu__category-link">
                              <svg viewBox="0 0 24 24" class="discover-menu__sprite sprite-vue sprite-vue--category sprite-vue--career-and-success">
                                  <use xlinkhref="#category/career-and-success"></use>
                              </svg>
                              <span class="discover-menu__label">Career &amp; Success</span>
                          </a>
                      </li>
                      <li class="discover-menu__category">
                          <a href="/en/nc/categories/education-en" class="discover-menu__category-link">
                              <svg viewBox="0 0 24 24" class="discover-menu__sprite sprite-vue sprite-vue--category sprite-vue--education">
                                  <use xlinkhref="#category/education"></use>
                              </svg>
                              <span class="discover-menu__label">Education</span>
                          </a>
                      </li>
                      <li class="discover-menu__category">
                          <a href="/en/nc/categories/religion-and-spirituality-en" class="discover-menu__category-link">
                              <svg viewBox="0 0 24 24" class="discover-menu__sprite sprite-vue sprite-vue--category sprite-vue--religion-and-spirituality">
                                  <use xlinkhref="#category/religion-and-spirituality"></use>
                              </svg>
                              <span class="discover-menu__label">Religion &amp; Spirituality</span>
                          </a>
                      </li>
                      <li class="discover-menu__category">
                          <a href="/en/nc/categories/creativity-en" class="discover-menu__category-link">
                              <svg viewBox="0 0 24 24" class="discover-menu__sprite sprite-vue sprite-vue--category sprite-vue--creativity">
                                  <use xlinkhref="#category/creativity"></use>
                              </svg>
                              <span class="discover-menu__label">Creativity</span>
                          </a>
                      </li>
                      <li class="discover-menu__category">
                          <a href="/en/nc/categories/philosophy-en" class="discover-menu__category-link">
                              <svg viewBox="0 0 24 24" class="discover-menu__sprite sprite-vue sprite-vue--category sprite-vue--philosophy">
                                  <use xlinkhref="#category/philosophy"></use>
                              </svg>
                              <span class="discover-menu__label">Philosophy</span>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  )
}

Menu.defaultProps = {
  type: ''
}

export default Menu;
