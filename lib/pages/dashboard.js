const MainTemplate = require('../templates/main');
const generalDescription = require('../utils/general-description');
const groupPostsByTags = require('../utils/group-posts-by-tags');

function Dashboard(posts = []) {
  const groups = groupPostsByTags(posts);
  return `
    <section>
      <p>
        I am a part of a self-refining digestive system, currently encompassing the entirety of planet Tellus. 
      </p>
    </section>
    <section>
      <h2>Posts</h2>
      <side>
        ${groups
          .map(
            group => `
          <h3>${group.name}</h3>
          <ul class="post-list">
            ${group.posts
              .map(
                post => `
              <a href="blog/${post.fields.slug}.html">
                <li>
                  <h4>${post.fields.title}</h4>
                  <p>${post.fields.description}</p>
                </li>
              </a>
            `
              )
              .join('')}
          </ul>
        `
          )
          .join('')}
      </side>
    </section>
  `;
}

const render = content =>
  MainTemplate({
    title: 'AUTOFAGIST',
    content: Dashboard(content.posts),
    description: generalDescription,
  });

module.exports = render;
