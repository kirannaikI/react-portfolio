import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/kirannaikI/react-portfolio/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork kirannaikI/react-portfolio on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/kirannaikI/react-portfolio"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star kirannaikI/react-portfolio on GitHub"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
