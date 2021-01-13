export const entityMock = {
  metadata: {
    namespace: 'default',
    annotations: {
      'backstage.io/managed-by-location':
        'url:https://github.com/mcalus3/sample-service/blob/master/backstage5.yaml',
      'github.com/project-slug': 'mcalus3/backstage',
    },
    name: 'sample-service',
    description:
      'A service for testing Backstage functionality. For example, we can trigger errors\non the sample-service, these are sent to Sentry, then we can view them in the \nBackstage plugin for Sentry.\n',
    uid: 'afe5ef5a-9ee4-4685-901c-b1fe0e0a2ba5',
    etag: 'MTNiM2VlZmUtNzVhNC00YjM1LTg3YmItZTFhMTgxOWY0M2Fk',
    generation: 1,
  },
  apiVersion: 'backstage.io/v1alpha1',
  kind: 'Component',
  spec: {
    type: 'service',
    owner: 'david@roadie.io',
    lifecycle: 'experimental',
  },
  relations: [
    {
      target: { kind: 'group', namespace: 'default', name: 'david@roadie.io' },
      type: 'ownedBy',
    },
  ],
};

// https://api.github.com/repos/mcalus3/backstage/actions/runs?per_page=4&page=1
export const runsResponseMock = {
  total_count: 6,
  workflow_runs: [
    {
      id: 481776149,
      name: 'Nightly Snapshot Release',
      node_id: 'MDExOldvcmtmbG93UnVuNDgxNzc2MTQ5',
      head_branch: 'master',
      head_sha: '34f6182e4820e0b83d562212c84d91da9dfa1a6e',
      run_number: 2,
      event: 'schedule',
      status: 'completed',
      conclusion: 'failure',
      workflow_id: 4864696,
      check_suite_id: 1818549194,
      check_suite_node_id: 'MDEwOkNoZWNrU3VpdGUxODE4NTQ5MTk0',
      url:
        'https://api.github.com/repos/mcalus3/backstage/actions/runs/481776149',
      html_url: 'https://github.com/mcalus3/backstage/actions/runs/481776149',
      pull_requests: [],
      created_at: '2021-01-13T02:55:21Z',
      updated_at: '2021-01-13T03:00:53Z',
      jobs_url:
        'https://api.github.com/repos/mcalus3/backstage/actions/runs/481776149/jobs',
      logs_url:
        'https://api.github.com/repos/mcalus3/backstage/actions/runs/481776149/logs',
      check_suite_url:
        'https://api.github.com/repos/mcalus3/backstage/check-suites/1818549194',
      artifacts_url:
        'https://api.github.com/repos/mcalus3/backstage/actions/runs/481776149/artifacts',
      cancel_url:
        'https://api.github.com/repos/mcalus3/backstage/actions/runs/481776149/cancel',
      rerun_url:
        'https://api.github.com/repos/mcalus3/backstage/actions/runs/481776149/rerun',
      workflow_url:
        'https://api.github.com/repos/mcalus3/backstage/actions/workflows/4864696',
      head_commit: {
        id: '34f6182e4820e0b83d562212c84d91da9dfa1a6e',
        tree_id: '9c38153980217c3bf3864dfbb663cf357510f129',
        message: 'Fix ingress and baseUrls',
        timestamp: '2020-10-12T07:24:29Z',
        author: {
          name: 'Martina Iglesias Fernandez',
          email: 'martina@roadie.io',
        },
        committer: {
          name: 'Martina Iglesias Fernandez',
          email: 'martina@roadie.io',
        },
      },
      repository: {
        id: 309442789,
        node_id: 'MDEwOlJlcG9zaXRvcnkzMDk0NDI3ODk=',
        name: 'backstage',
        full_name: 'mcalus3/backstage',
        private: false,
        owner: {
          login: 'mcalus3',
          id: 24685983,
          node_id: 'MDQ6VXNlcjI0Njg1OTgz',
          avatar_url: 'https://avatars0.githubusercontent.com/u/24685983?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/mcalus3',
          html_url: 'https://github.com/mcalus3',
          followers_url: 'https://api.github.com/users/mcalus3/followers',
          following_url:
            'https://api.github.com/users/mcalus3/following{/other_user}',
          gists_url: 'https://api.github.com/users/mcalus3/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/mcalus3/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/mcalus3/subscriptions',
          organizations_url: 'https://api.github.com/users/mcalus3/orgs',
          repos_url: 'https://api.github.com/users/mcalus3/repos',
          events_url: 'https://api.github.com/users/mcalus3/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/mcalus3/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/mcalus3/backstage',
        description:
          'Backstage is an open platform for building developer portals',
        fork: true,
        url: 'https://api.github.com/repos/mcalus3/backstage',
        forks_url: 'https://api.github.com/repos/mcalus3/backstage/forks',
        keys_url:
          'https://api.github.com/repos/mcalus3/backstage/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/mcalus3/backstage/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/mcalus3/backstage/teams',
        hooks_url: 'https://api.github.com/repos/mcalus3/backstage/hooks',
        issue_events_url:
          'https://api.github.com/repos/mcalus3/backstage/issues/events{/number}',
        events_url: 'https://api.github.com/repos/mcalus3/backstage/events',
        assignees_url:
          'https://api.github.com/repos/mcalus3/backstage/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/mcalus3/backstage/branches{/branch}',
        tags_url: 'https://api.github.com/repos/mcalus3/backstage/tags',
        blobs_url:
          'https://api.github.com/repos/mcalus3/backstage/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/mcalus3/backstage/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/mcalus3/backstage/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/mcalus3/backstage/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/mcalus3/backstage/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/mcalus3/backstage/languages',
        stargazers_url:
          'https://api.github.com/repos/mcalus3/backstage/stargazers',
        contributors_url:
          'https://api.github.com/repos/mcalus3/backstage/contributors',
        subscribers_url:
          'https://api.github.com/repos/mcalus3/backstage/subscribers',
        subscription_url:
          'https://api.github.com/repos/mcalus3/backstage/subscription',
        commits_url:
          'https://api.github.com/repos/mcalus3/backstage/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/mcalus3/backstage/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/mcalus3/backstage/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/mcalus3/backstage/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/mcalus3/backstage/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/mcalus3/backstage/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/mcalus3/backstage/merges',
        archive_url:
          'https://api.github.com/repos/mcalus3/backstage/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/mcalus3/backstage/downloads',
        issues_url:
          'https://api.github.com/repos/mcalus3/backstage/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/mcalus3/backstage/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/mcalus3/backstage/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/mcalus3/backstage/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/mcalus3/backstage/labels{/name}',
        releases_url:
          'https://api.github.com/repos/mcalus3/backstage/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/mcalus3/backstage/deployments',
      },
      head_repository: {
        id: 309442789,
        node_id: 'MDEwOlJlcG9zaXRvcnkzMDk0NDI3ODk=',
        name: 'backstage',
        full_name: 'mcalus3/backstage',
        private: false,
        owner: {
          login: 'mcalus3',
          id: 24685983,
          node_id: 'MDQ6VXNlcjI0Njg1OTgz',
          avatar_url: 'https://avatars0.githubusercontent.com/u/24685983?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/mcalus3',
          html_url: 'https://github.com/mcalus3',
          followers_url: 'https://api.github.com/users/mcalus3/followers',
          following_url:
            'https://api.github.com/users/mcalus3/following{/other_user}',
          gists_url: 'https://api.github.com/users/mcalus3/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/mcalus3/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/mcalus3/subscriptions',
          organizations_url: 'https://api.github.com/users/mcalus3/orgs',
          repos_url: 'https://api.github.com/users/mcalus3/repos',
          events_url: 'https://api.github.com/users/mcalus3/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/mcalus3/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/mcalus3/backstage',
        description:
          'Backstage is an open platform for building developer portals',
        fork: true,
        url: 'https://api.github.com/repos/mcalus3/backstage',
        forks_url: 'https://api.github.com/repos/mcalus3/backstage/forks',
        keys_url:
          'https://api.github.com/repos/mcalus3/backstage/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/mcalus3/backstage/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/mcalus3/backstage/teams',
        hooks_url: 'https://api.github.com/repos/mcalus3/backstage/hooks',
        issue_events_url:
          'https://api.github.com/repos/mcalus3/backstage/issues/events{/number}',
        events_url: 'https://api.github.com/repos/mcalus3/backstage/events',
        assignees_url:
          'https://api.github.com/repos/mcalus3/backstage/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/mcalus3/backstage/branches{/branch}',
        tags_url: 'https://api.github.com/repos/mcalus3/backstage/tags',
        blobs_url:
          'https://api.github.com/repos/mcalus3/backstage/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/mcalus3/backstage/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/mcalus3/backstage/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/mcalus3/backstage/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/mcalus3/backstage/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/mcalus3/backstage/languages',
        stargazers_url:
          'https://api.github.com/repos/mcalus3/backstage/stargazers',
        contributors_url:
          'https://api.github.com/repos/mcalus3/backstage/contributors',
        subscribers_url:
          'https://api.github.com/repos/mcalus3/backstage/subscribers',
        subscription_url:
          'https://api.github.com/repos/mcalus3/backstage/subscription',
        commits_url:
          'https://api.github.com/repos/mcalus3/backstage/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/mcalus3/backstage/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/mcalus3/backstage/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/mcalus3/backstage/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/mcalus3/backstage/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/mcalus3/backstage/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/mcalus3/backstage/merges',
        archive_url:
          'https://api.github.com/repos/mcalus3/backstage/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/mcalus3/backstage/downloads',
        issues_url:
          'https://api.github.com/repos/mcalus3/backstage/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/mcalus3/backstage/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/mcalus3/backstage/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/mcalus3/backstage/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/mcalus3/backstage/labels{/name}',
        releases_url:
          'https://api.github.com/repos/mcalus3/backstage/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/mcalus3/backstage/deployments',
      },
    },
    {
      id: 479222677,
      name: 'Nightly Snapshot Release',
      node_id: 'MDExOldvcmtmbG93UnVuNDc5MjIyNjc3',
      head_branch: 'master',
      head_sha: '34f6182e4820e0b83d562212c84d91da9dfa1a6e',
      run_number: 1,
      event: 'schedule',
      status: 'completed',
      conclusion: 'failure',
      workflow_id: 4864696,
      check_suite_id: 1811103522,
      check_suite_node_id: 'MDEwOkNoZWNrU3VpdGUxODExMTAzNTIy',
      url:
        'https://api.github.com/repos/mcalus3/backstage/actions/runs/479222677',
      html_url: 'https://github.com/mcalus3/backstage/actions/runs/479222677',
      pull_requests: [],
      created_at: '2021-01-12T02:53:20Z',
      updated_at: '2021-01-12T02:58:46Z',
      jobs_url:
        'https://api.github.com/repos/mcalus3/backstage/actions/runs/479222677/jobs',
      logs_url:
        'https://api.github.com/repos/mcalus3/backstage/actions/runs/479222677/logs',
      check_suite_url:
        'https://api.github.com/repos/mcalus3/backstage/check-suites/1811103522',
      artifacts_url:
        'https://api.github.com/repos/mcalus3/backstage/actions/runs/479222677/artifacts',
      cancel_url:
        'https://api.github.com/repos/mcalus3/backstage/actions/runs/479222677/cancel',
      rerun_url:
        'https://api.github.com/repos/mcalus3/backstage/actions/runs/479222677/rerun',
      workflow_url:
        'https://api.github.com/repos/mcalus3/backstage/actions/workflows/4864696',
      head_commit: {
        id: '34f6182e4820e0b83d562212c84d91da9dfa1a6e',
        tree_id: '9c38153980217c3bf3864dfbb663cf357510f129',
        message: 'Fix ingress and baseUrls',
        timestamp: '2020-10-12T07:24:29Z',
        author: {
          name: 'Martina Iglesias Fernandez',
          email: 'martina@roadie.io',
        },
        committer: {
          name: 'Martina Iglesias Fernandez',
          email: 'martina@roadie.io',
        },
      },
      repository: {
        id: 309442789,
        node_id: 'MDEwOlJlcG9zaXRvcnkzMDk0NDI3ODk=',
        name: 'backstage',
        full_name: 'mcalus3/backstage',
        private: false,
        owner: {
          login: 'mcalus3',
          id: 24685983,
          node_id: 'MDQ6VXNlcjI0Njg1OTgz',
          avatar_url: 'https://avatars0.githubusercontent.com/u/24685983?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/mcalus3',
          html_url: 'https://github.com/mcalus3',
          followers_url: 'https://api.github.com/users/mcalus3/followers',
          following_url:
            'https://api.github.com/users/mcalus3/following{/other_user}',
          gists_url: 'https://api.github.com/users/mcalus3/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/mcalus3/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/mcalus3/subscriptions',
          organizations_url: 'https://api.github.com/users/mcalus3/orgs',
          repos_url: 'https://api.github.com/users/mcalus3/repos',
          events_url: 'https://api.github.com/users/mcalus3/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/mcalus3/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/mcalus3/backstage',
        description:
          'Backstage is an open platform for building developer portals',
        fork: true,
        url: 'https://api.github.com/repos/mcalus3/backstage',
        forks_url: 'https://api.github.com/repos/mcalus3/backstage/forks',
        keys_url:
          'https://api.github.com/repos/mcalus3/backstage/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/mcalus3/backstage/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/mcalus3/backstage/teams',
        hooks_url: 'https://api.github.com/repos/mcalus3/backstage/hooks',
        issue_events_url:
          'https://api.github.com/repos/mcalus3/backstage/issues/events{/number}',
        events_url: 'https://api.github.com/repos/mcalus3/backstage/events',
        assignees_url:
          'https://api.github.com/repos/mcalus3/backstage/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/mcalus3/backstage/branches{/branch}',
        tags_url: 'https://api.github.com/repos/mcalus3/backstage/tags',
        blobs_url:
          'https://api.github.com/repos/mcalus3/backstage/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/mcalus3/backstage/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/mcalus3/backstage/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/mcalus3/backstage/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/mcalus3/backstage/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/mcalus3/backstage/languages',
        stargazers_url:
          'https://api.github.com/repos/mcalus3/backstage/stargazers',
        contributors_url:
          'https://api.github.com/repos/mcalus3/backstage/contributors',
        subscribers_url:
          'https://api.github.com/repos/mcalus3/backstage/subscribers',
        subscription_url:
          'https://api.github.com/repos/mcalus3/backstage/subscription',
        commits_url:
          'https://api.github.com/repos/mcalus3/backstage/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/mcalus3/backstage/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/mcalus3/backstage/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/mcalus3/backstage/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/mcalus3/backstage/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/mcalus3/backstage/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/mcalus3/backstage/merges',
        archive_url:
          'https://api.github.com/repos/mcalus3/backstage/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/mcalus3/backstage/downloads',
        issues_url:
          'https://api.github.com/repos/mcalus3/backstage/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/mcalus3/backstage/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/mcalus3/backstage/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/mcalus3/backstage/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/mcalus3/backstage/labels{/name}',
        releases_url:
          'https://api.github.com/repos/mcalus3/backstage/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/mcalus3/backstage/deployments',
      },
      head_repository: {
        id: 309442789,
        node_id: 'MDEwOlJlcG9zaXRvcnkzMDk0NDI3ODk=',
        name: 'backstage',
        full_name: 'mcalus3/backstage',
        private: false,
        owner: {
          login: 'mcalus3',
          id: 24685983,
          node_id: 'MDQ6VXNlcjI0Njg1OTgz',
          avatar_url: 'https://avatars0.githubusercontent.com/u/24685983?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/mcalus3',
          html_url: 'https://github.com/mcalus3',
          followers_url: 'https://api.github.com/users/mcalus3/followers',
          following_url:
            'https://api.github.com/users/mcalus3/following{/other_user}',
          gists_url: 'https://api.github.com/users/mcalus3/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/mcalus3/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/mcalus3/subscriptions',
          organizations_url: 'https://api.github.com/users/mcalus3/orgs',
          repos_url: 'https://api.github.com/users/mcalus3/repos',
          events_url: 'https://api.github.com/users/mcalus3/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/mcalus3/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/mcalus3/backstage',
        description:
          'Backstage is an open platform for building developer portals',
        fork: true,
        url: 'https://api.github.com/repos/mcalus3/backstage',
        forks_url: 'https://api.github.com/repos/mcalus3/backstage/forks',
        keys_url:
          'https://api.github.com/repos/mcalus3/backstage/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/mcalus3/backstage/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/mcalus3/backstage/teams',
        hooks_url: 'https://api.github.com/repos/mcalus3/backstage/hooks',
        issue_events_url:
          'https://api.github.com/repos/mcalus3/backstage/issues/events{/number}',
        events_url: 'https://api.github.com/repos/mcalus3/backstage/events',
        assignees_url:
          'https://api.github.com/repos/mcalus3/backstage/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/mcalus3/backstage/branches{/branch}',
        tags_url: 'https://api.github.com/repos/mcalus3/backstage/tags',
        blobs_url:
          'https://api.github.com/repos/mcalus3/backstage/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/mcalus3/backstage/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/mcalus3/backstage/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/mcalus3/backstage/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/mcalus3/backstage/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/mcalus3/backstage/languages',
        stargazers_url:
          'https://api.github.com/repos/mcalus3/backstage/stargazers',
        contributors_url:
          'https://api.github.com/repos/mcalus3/backstage/contributors',
        subscribers_url:
          'https://api.github.com/repos/mcalus3/backstage/subscribers',
        subscription_url:
          'https://api.github.com/repos/mcalus3/backstage/subscription',
        commits_url:
          'https://api.github.com/repos/mcalus3/backstage/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/mcalus3/backstage/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/mcalus3/backstage/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/mcalus3/backstage/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/mcalus3/backstage/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/mcalus3/backstage/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/mcalus3/backstage/merges',
        archive_url:
          'https://api.github.com/repos/mcalus3/backstage/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/mcalus3/backstage/downloads',
        issues_url:
          'https://api.github.com/repos/mcalus3/backstage/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/mcalus3/backstage/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/mcalus3/backstage/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/mcalus3/backstage/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/mcalus3/backstage/labels{/name}',
        releases_url:
          'https://api.github.com/repos/mcalus3/backstage/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/mcalus3/backstage/deployments',
      },
    },
    {
      id: 477581528,
      name: 'Changeset',
      node_id: 'MDExOldvcmtmbG93UnVuNDc3NTgxNTI4',
      head_branch: 'master',
      head_sha: '34f6182e4820e0b83d562212c84d91da9dfa1a6e',
      run_number: 1,
      event: 'push',
      status: 'completed',
      conclusion: 'success',
      workflow_id: 4847612,
      check_suite_id: 1806415517,
      check_suite_node_id: 'MDEwOkNoZWNrU3VpdGUxODA2NDE1NTE3',
      url:
        'https://api.github.com/repos/mcalus3/backstage/actions/runs/477581528',
      html_url: 'https://github.com/mcalus3/backstage/actions/runs/477581528',
      pull_requests: [],
      created_at: '2021-01-11T13:04:34Z',
      updated_at: '2021-01-11T13:08:53Z',
      jobs_url:
        'https://api.github.com/repos/mcalus3/backstage/actions/runs/477581528/jobs',
      logs_url:
        'https://api.github.com/repos/mcalus3/backstage/actions/runs/477581528/logs',
      check_suite_url:
        'https://api.github.com/repos/mcalus3/backstage/check-suites/1806415517',
      artifacts_url:
        'https://api.github.com/repos/mcalus3/backstage/actions/runs/477581528/artifacts',
      cancel_url:
        'https://api.github.com/repos/mcalus3/backstage/actions/runs/477581528/cancel',
      rerun_url:
        'https://api.github.com/repos/mcalus3/backstage/actions/runs/477581528/rerun',
      workflow_url:
        'https://api.github.com/repos/mcalus3/backstage/actions/workflows/4847612',
      head_commit: {
        id: '34f6182e4820e0b83d562212c84d91da9dfa1a6e',
        tree_id: '9c38153980217c3bf3864dfbb663cf357510f129',
        message: 'Fix ingress and baseUrls',
        timestamp: '2020-10-12T07:24:29Z',
        author: {
          name: 'Martina Iglesias Fernandez',
          email: 'martina@roadie.io',
        },
        committer: {
          name: 'Martina Iglesias Fernandez',
          email: 'martina@roadie.io',
        },
      },
      repository: {
        id: 309442789,
        node_id: 'MDEwOlJlcG9zaXRvcnkzMDk0NDI3ODk=',
        name: 'backstage',
        full_name: 'mcalus3/backstage',
        private: false,
        owner: {
          login: 'mcalus3',
          id: 24685983,
          node_id: 'MDQ6VXNlcjI0Njg1OTgz',
          avatar_url: 'https://avatars0.githubusercontent.com/u/24685983?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/mcalus3',
          html_url: 'https://github.com/mcalus3',
          followers_url: 'https://api.github.com/users/mcalus3/followers',
          following_url:
            'https://api.github.com/users/mcalus3/following{/other_user}',
          gists_url: 'https://api.github.com/users/mcalus3/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/mcalus3/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/mcalus3/subscriptions',
          organizations_url: 'https://api.github.com/users/mcalus3/orgs',
          repos_url: 'https://api.github.com/users/mcalus3/repos',
          events_url: 'https://api.github.com/users/mcalus3/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/mcalus3/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/mcalus3/backstage',
        description:
          'Backstage is an open platform for building developer portals',
        fork: true,
        url: 'https://api.github.com/repos/mcalus3/backstage',
        forks_url: 'https://api.github.com/repos/mcalus3/backstage/forks',
        keys_url:
          'https://api.github.com/repos/mcalus3/backstage/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/mcalus3/backstage/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/mcalus3/backstage/teams',
        hooks_url: 'https://api.github.com/repos/mcalus3/backstage/hooks',
        issue_events_url:
          'https://api.github.com/repos/mcalus3/backstage/issues/events{/number}',
        events_url: 'https://api.github.com/repos/mcalus3/backstage/events',
        assignees_url:
          'https://api.github.com/repos/mcalus3/backstage/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/mcalus3/backstage/branches{/branch}',
        tags_url: 'https://api.github.com/repos/mcalus3/backstage/tags',
        blobs_url:
          'https://api.github.com/repos/mcalus3/backstage/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/mcalus3/backstage/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/mcalus3/backstage/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/mcalus3/backstage/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/mcalus3/backstage/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/mcalus3/backstage/languages',
        stargazers_url:
          'https://api.github.com/repos/mcalus3/backstage/stargazers',
        contributors_url:
          'https://api.github.com/repos/mcalus3/backstage/contributors',
        subscribers_url:
          'https://api.github.com/repos/mcalus3/backstage/subscribers',
        subscription_url:
          'https://api.github.com/repos/mcalus3/backstage/subscription',
        commits_url:
          'https://api.github.com/repos/mcalus3/backstage/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/mcalus3/backstage/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/mcalus3/backstage/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/mcalus3/backstage/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/mcalus3/backstage/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/mcalus3/backstage/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/mcalus3/backstage/merges',
        archive_url:
          'https://api.github.com/repos/mcalus3/backstage/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/mcalus3/backstage/downloads',
        issues_url:
          'https://api.github.com/repos/mcalus3/backstage/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/mcalus3/backstage/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/mcalus3/backstage/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/mcalus3/backstage/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/mcalus3/backstage/labels{/name}',
        releases_url:
          'https://api.github.com/repos/mcalus3/backstage/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/mcalus3/backstage/deployments',
      },
      head_repository: {
        id: 309442789,
        node_id: 'MDEwOlJlcG9zaXRvcnkzMDk0NDI3ODk=',
        name: 'backstage',
        full_name: 'mcalus3/backstage',
        private: false,
        owner: {
          login: 'mcalus3',
          id: 24685983,
          node_id: 'MDQ6VXNlcjI0Njg1OTgz',
          avatar_url: 'https://avatars0.githubusercontent.com/u/24685983?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/mcalus3',
          html_url: 'https://github.com/mcalus3',
          followers_url: 'https://api.github.com/users/mcalus3/followers',
          following_url:
            'https://api.github.com/users/mcalus3/following{/other_user}',
          gists_url: 'https://api.github.com/users/mcalus3/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/mcalus3/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/mcalus3/subscriptions',
          organizations_url: 'https://api.github.com/users/mcalus3/orgs',
          repos_url: 'https://api.github.com/users/mcalus3/repos',
          events_url: 'https://api.github.com/users/mcalus3/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/mcalus3/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/mcalus3/backstage',
        description:
          'Backstage is an open platform for building developer portals',
        fork: true,
        url: 'https://api.github.com/repos/mcalus3/backstage',
        forks_url: 'https://api.github.com/repos/mcalus3/backstage/forks',
        keys_url:
          'https://api.github.com/repos/mcalus3/backstage/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/mcalus3/backstage/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/mcalus3/backstage/teams',
        hooks_url: 'https://api.github.com/repos/mcalus3/backstage/hooks',
        issue_events_url:
          'https://api.github.com/repos/mcalus3/backstage/issues/events{/number}',
        events_url: 'https://api.github.com/repos/mcalus3/backstage/events',
        assignees_url:
          'https://api.github.com/repos/mcalus3/backstage/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/mcalus3/backstage/branches{/branch}',
        tags_url: 'https://api.github.com/repos/mcalus3/backstage/tags',
        blobs_url:
          'https://api.github.com/repos/mcalus3/backstage/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/mcalus3/backstage/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/mcalus3/backstage/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/mcalus3/backstage/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/mcalus3/backstage/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/mcalus3/backstage/languages',
        stargazers_url:
          'https://api.github.com/repos/mcalus3/backstage/stargazers',
        contributors_url:
          'https://api.github.com/repos/mcalus3/backstage/contributors',
        subscribers_url:
          'https://api.github.com/repos/mcalus3/backstage/subscribers',
        subscription_url:
          'https://api.github.com/repos/mcalus3/backstage/subscription',
        commits_url:
          'https://api.github.com/repos/mcalus3/backstage/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/mcalus3/backstage/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/mcalus3/backstage/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/mcalus3/backstage/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/mcalus3/backstage/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/mcalus3/backstage/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/mcalus3/backstage/merges',
        archive_url:
          'https://api.github.com/repos/mcalus3/backstage/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/mcalus3/backstage/downloads',
        issues_url:
          'https://api.github.com/repos/mcalus3/backstage/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/mcalus3/backstage/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/mcalus3/backstage/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/mcalus3/backstage/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/mcalus3/backstage/labels{/name}',
        releases_url:
          'https://api.github.com/repos/mcalus3/backstage/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/mcalus3/backstage/deployments',
      },
    },
    {
      id: 477581526,
      name: 'CodeQL',
      node_id: 'MDExOldvcmtmbG93UnVuNDc3NTgxNTI2',
      head_branch: 'master',
      head_sha: '34f6182e4820e0b83d562212c84d91da9dfa1a6e',
      run_number: 1,
      event: 'push',
      status: 'completed',
      conclusion: 'success',
      workflow_id: 4847611,
      check_suite_id: 1806415513,
      check_suite_node_id: 'MDEwOkNoZWNrU3VpdGUxODA2NDE1NTEz',
      url:
        'https://api.github.com/repos/mcalus3/backstage/actions/runs/477581526',
      html_url: 'https://github.com/mcalus3/backstage/actions/runs/477581526',
      pull_requests: [],
      created_at: '2021-01-11T13:04:34Z',
      updated_at: '2021-01-11T13:09:17Z',
      jobs_url:
        'https://api.github.com/repos/mcalus3/backstage/actions/runs/477581526/jobs',
      logs_url:
        'https://api.github.com/repos/mcalus3/backstage/actions/runs/477581526/logs',
      check_suite_url:
        'https://api.github.com/repos/mcalus3/backstage/check-suites/1806415513',
      artifacts_url:
        'https://api.github.com/repos/mcalus3/backstage/actions/runs/477581526/artifacts',
      cancel_url:
        'https://api.github.com/repos/mcalus3/backstage/actions/runs/477581526/cancel',
      rerun_url:
        'https://api.github.com/repos/mcalus3/backstage/actions/runs/477581526/rerun',
      workflow_url:
        'https://api.github.com/repos/mcalus3/backstage/actions/workflows/4847611',
      head_commit: {
        id: '34f6182e4820e0b83d562212c84d91da9dfa1a6e',
        tree_id: '9c38153980217c3bf3864dfbb663cf357510f129',
        message: 'Fix ingress and baseUrls',
        timestamp: '2020-10-12T07:24:29Z',
        author: {
          name: 'Martina Iglesias Fernandez',
          email: 'martina@roadie.io',
        },
        committer: {
          name: 'Martina Iglesias Fernandez',
          email: 'martina@roadie.io',
        },
      },
      repository: {
        id: 309442789,
        node_id: 'MDEwOlJlcG9zaXRvcnkzMDk0NDI3ODk=',
        name: 'backstage',
        full_name: 'mcalus3/backstage',
        private: false,
        owner: {
          login: 'mcalus3',
          id: 24685983,
          node_id: 'MDQ6VXNlcjI0Njg1OTgz',
          avatar_url: 'https://avatars0.githubusercontent.com/u/24685983?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/mcalus3',
          html_url: 'https://github.com/mcalus3',
          followers_url: 'https://api.github.com/users/mcalus3/followers',
          following_url:
            'https://api.github.com/users/mcalus3/following{/other_user}',
          gists_url: 'https://api.github.com/users/mcalus3/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/mcalus3/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/mcalus3/subscriptions',
          organizations_url: 'https://api.github.com/users/mcalus3/orgs',
          repos_url: 'https://api.github.com/users/mcalus3/repos',
          events_url: 'https://api.github.com/users/mcalus3/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/mcalus3/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/mcalus3/backstage',
        description:
          'Backstage is an open platform for building developer portals',
        fork: true,
        url: 'https://api.github.com/repos/mcalus3/backstage',
        forks_url: 'https://api.github.com/repos/mcalus3/backstage/forks',
        keys_url:
          'https://api.github.com/repos/mcalus3/backstage/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/mcalus3/backstage/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/mcalus3/backstage/teams',
        hooks_url: 'https://api.github.com/repos/mcalus3/backstage/hooks',
        issue_events_url:
          'https://api.github.com/repos/mcalus3/backstage/issues/events{/number}',
        events_url: 'https://api.github.com/repos/mcalus3/backstage/events',
        assignees_url:
          'https://api.github.com/repos/mcalus3/backstage/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/mcalus3/backstage/branches{/branch}',
        tags_url: 'https://api.github.com/repos/mcalus3/backstage/tags',
        blobs_url:
          'https://api.github.com/repos/mcalus3/backstage/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/mcalus3/backstage/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/mcalus3/backstage/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/mcalus3/backstage/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/mcalus3/backstage/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/mcalus3/backstage/languages',
        stargazers_url:
          'https://api.github.com/repos/mcalus3/backstage/stargazers',
        contributors_url:
          'https://api.github.com/repos/mcalus3/backstage/contributors',
        subscribers_url:
          'https://api.github.com/repos/mcalus3/backstage/subscribers',
        subscription_url:
          'https://api.github.com/repos/mcalus3/backstage/subscription',
        commits_url:
          'https://api.github.com/repos/mcalus3/backstage/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/mcalus3/backstage/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/mcalus3/backstage/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/mcalus3/backstage/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/mcalus3/backstage/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/mcalus3/backstage/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/mcalus3/backstage/merges',
        archive_url:
          'https://api.github.com/repos/mcalus3/backstage/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/mcalus3/backstage/downloads',
        issues_url:
          'https://api.github.com/repos/mcalus3/backstage/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/mcalus3/backstage/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/mcalus3/backstage/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/mcalus3/backstage/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/mcalus3/backstage/labels{/name}',
        releases_url:
          'https://api.github.com/repos/mcalus3/backstage/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/mcalus3/backstage/deployments',
      },
      head_repository: {
        id: 309442789,
        node_id: 'MDEwOlJlcG9zaXRvcnkzMDk0NDI3ODk=',
        name: 'backstage',
        full_name: 'mcalus3/backstage',
        private: false,
        owner: {
          login: 'mcalus3',
          id: 24685983,
          node_id: 'MDQ6VXNlcjI0Njg1OTgz',
          avatar_url: 'https://avatars0.githubusercontent.com/u/24685983?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/mcalus3',
          html_url: 'https://github.com/mcalus3',
          followers_url: 'https://api.github.com/users/mcalus3/followers',
          following_url:
            'https://api.github.com/users/mcalus3/following{/other_user}',
          gists_url: 'https://api.github.com/users/mcalus3/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/mcalus3/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/mcalus3/subscriptions',
          organizations_url: 'https://api.github.com/users/mcalus3/orgs',
          repos_url: 'https://api.github.com/users/mcalus3/repos',
          events_url: 'https://api.github.com/users/mcalus3/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/mcalus3/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/mcalus3/backstage',
        description:
          'Backstage is an open platform for building developer portals',
        fork: true,
        url: 'https://api.github.com/repos/mcalus3/backstage',
        forks_url: 'https://api.github.com/repos/mcalus3/backstage/forks',
        keys_url:
          'https://api.github.com/repos/mcalus3/backstage/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/mcalus3/backstage/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/mcalus3/backstage/teams',
        hooks_url: 'https://api.github.com/repos/mcalus3/backstage/hooks',
        issue_events_url:
          'https://api.github.com/repos/mcalus3/backstage/issues/events{/number}',
        events_url: 'https://api.github.com/repos/mcalus3/backstage/events',
        assignees_url:
          'https://api.github.com/repos/mcalus3/backstage/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/mcalus3/backstage/branches{/branch}',
        tags_url: 'https://api.github.com/repos/mcalus3/backstage/tags',
        blobs_url:
          'https://api.github.com/repos/mcalus3/backstage/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/mcalus3/backstage/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/mcalus3/backstage/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/mcalus3/backstage/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/mcalus3/backstage/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/mcalus3/backstage/languages',
        stargazers_url:
          'https://api.github.com/repos/mcalus3/backstage/stargazers',
        contributors_url:
          'https://api.github.com/repos/mcalus3/backstage/contributors',
        subscribers_url:
          'https://api.github.com/repos/mcalus3/backstage/subscribers',
        subscription_url:
          'https://api.github.com/repos/mcalus3/backstage/subscription',
        commits_url:
          'https://api.github.com/repos/mcalus3/backstage/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/mcalus3/backstage/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/mcalus3/backstage/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/mcalus3/backstage/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/mcalus3/backstage/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/mcalus3/backstage/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/mcalus3/backstage/merges',
        archive_url:
          'https://api.github.com/repos/mcalus3/backstage/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/mcalus3/backstage/downloads',
        issues_url:
          'https://api.github.com/repos/mcalus3/backstage/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/mcalus3/backstage/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/mcalus3/backstage/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/mcalus3/backstage/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/mcalus3/backstage/labels{/name}',
        releases_url:
          'https://api.github.com/repos/mcalus3/backstage/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/mcalus3/backstage/deployments',
      },
    },
  ],
};

// https://api.github.com/repos/mcalus3/backstage/languages
export const languagesResponseMock = {
  TypeScript: 3442051,
  JavaScript: 154385,
  CSS: 20745,
  Handlebars: 20319,
  Smarty: 10561,
  HTML: 8303,
  Python: 5602,
  Dockerfile: 5332,
  Shell: 3415,
  Java: 1480,
};

// https://api.github.com/repos/mcalus3/backstage/contents/LICENSE
export const licenseResponseMock = {
  name: 'LICENSE',
  path: 'LICENSE',
  sha: '224306fe452a6a16f252e4b47ced06c7e971a417',
  size: 10833,
  url:
    'https://api.github.com/repos/mcalus3/backstage/contents/LICENSE?ref=master',
  html_url: 'https://github.com/mcalus3/backstage/blob/master/LICENSE',
  git_url:
    'https://api.github.com/repos/mcalus3/backstage/git/blobs/224306fe452a6a16f252e4b47ced06c7e971a417',
  download_url:
    'https://raw.githubusercontent.com/mcalus3/backstage/master/LICENSE',
  type: 'file',
  content:
    'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBhY2hlIExpY2Vuc2UK\nICAgICAgICAgICAgICAgICAgICAgICAgVmVyc2lvbiAyLjAsIEphbnVhcnkg\nMjAwNAogICAgICAgICAgICAgICAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5v\ncmcvbGljZW5zZXMvCgpURVJNUyBBTkQgQ09ORElUSU9OUyBGT1IgVVNFLCBS\nRVBST0RVQ1RJT04sIEFORCBESVNUUklCVVRJT04KCjEuIERlZmluaXRpb25z\nLgoKICAgIkxpY2Vuc2UiIHNoYWxsIG1lYW4gdGhlIHRlcm1zIGFuZCBjb25k\naXRpb25zIGZvciB1c2UsIHJlcHJvZHVjdGlvbiwKICAgYW5kIGRpc3RyaWJ1\ndGlvbiBhcyBkZWZpbmVkIGJ5IFNlY3Rpb25zIDEgdGhyb3VnaCA5IG9mIHRo\naXMgZG9jdW1lbnQuCgogICAiTGljZW5zb3IiIHNoYWxsIG1lYW4gdGhlIGNv\ncHlyaWdodCBvd25lciBvciBlbnRpdHkgYXV0aG9yaXplZCBieQogICB0aGUg\nY29weXJpZ2h0IG93bmVyIHRoYXQgaXMgZ3JhbnRpbmcgdGhlIExpY2Vuc2Uu\nCgogICAiTGVnYWwgRW50aXR5IiBzaGFsbCBtZWFuIHRoZSB1bmlvbiBvZiB0\naGUgYWN0aW5nIGVudGl0eSBhbmQgYWxsCiAgIG90aGVyIGVudGl0aWVzIHRo\nYXQgY29udHJvbCwgYXJlIGNvbnRyb2xsZWQgYnksIG9yIGFyZSB1bmRlciBj\nb21tb24KICAgY29udHJvbCB3aXRoIHRoYXQgZW50aXR5LiBGb3IgdGhlIHB1\ncnBvc2VzIG9mIHRoaXMgZGVmaW5pdGlvbiwKICAgImNvbnRyb2wiIG1lYW5z\nIChpKSB0aGUgcG93ZXIsIGRpcmVjdCBvciBpbmRpcmVjdCwgdG8gY2F1c2Ug\ndGhlCiAgIGRpcmVjdGlvbiBvciBtYW5hZ2VtZW50IG9mIHN1Y2ggZW50aXR5\nLCB3aGV0aGVyIGJ5IGNvbnRyYWN0IG9yCiAgIG90aGVyd2lzZSwgb3IgKGlp\nKSBvd25lcnNoaXAgb2YgZmlmdHkgcGVyY2VudCAoNTAlKSBvciBtb3JlIG9m\nIHRoZQogICBvdXRzdGFuZGluZyBzaGFyZXMsIG9yIChpaWkpIGJlbmVmaWNp\nYWwgb3duZXJzaGlwIG9mIHN1Y2ggZW50aXR5LgoKICAgIllvdSIgKG9yICJZ\nb3VyIikgc2hhbGwgbWVhbiBhbiBpbmRpdmlkdWFsIG9yIExlZ2FsIEVudGl0\neQogICBleGVyY2lzaW5nIHBlcm1pc3Npb25zIGdyYW50ZWQgYnkgdGhpcyBM\naWNlbnNlLgoKICAgIlNvdXJjZSIgZm9ybSBzaGFsbCBtZWFuIHRoZSBwcmVm\nZXJyZWQgZm9ybSBmb3IgbWFraW5nIG1vZGlmaWNhdGlvbnMsCiAgIGluY2x1\nZGluZyBidXQgbm90IGxpbWl0ZWQgdG8gc29mdHdhcmUgc291cmNlIGNvZGUs\nIGRvY3VtZW50YXRpb24KICAgc291cmNlLCBhbmQgY29uZmlndXJhdGlvbiBm\naWxlcy4KCiAgICJPYmplY3QiIGZvcm0gc2hhbGwgbWVhbiBhbnkgZm9ybSBy\nZXN1bHRpbmcgZnJvbSBtZWNoYW5pY2FsCiAgIHRyYW5zZm9ybWF0aW9uIG9y\nIHRyYW5zbGF0aW9uIG9mIGEgU291cmNlIGZvcm0sIGluY2x1ZGluZyBidXQK\nICAgbm90IGxpbWl0ZWQgdG8gY29tcGlsZWQgb2JqZWN0IGNvZGUsIGdlbmVy\nYXRlZCBkb2N1bWVudGF0aW9uLAogICBhbmQgY29udmVyc2lvbnMgdG8gb3Ro\nZXIgbWVkaWEgdHlwZXMuCgogICAiV29yayIgc2hhbGwgbWVhbiB0aGUgd29y\nayBvZiBhdXRob3JzaGlwLCB3aGV0aGVyIGluIFNvdXJjZSBvcgogICBPYmpl\nY3QgZm9ybSwgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIExpY2Vuc2UsIGFz\nIGluZGljYXRlZCBieSBhCiAgIGNvcHlyaWdodCBub3RpY2UgdGhhdCBpcyBp\nbmNsdWRlZCBpbiBvciBhdHRhY2hlZCB0byB0aGUgd29yawogICAoYW4gZXhh\nbXBsZSBpcyBwcm92aWRlZCBpbiB0aGUgQXBwZW5kaXggYmVsb3cpLgoKICAg\nIkRlcml2YXRpdmUgV29ya3MiIHNoYWxsIG1lYW4gYW55IHdvcmssIHdoZXRo\nZXIgaW4gU291cmNlIG9yIE9iamVjdAogICBmb3JtLCB0aGF0IGlzIGJhc2Vk\nIG9uIChvciBkZXJpdmVkIGZyb20pIHRoZSBXb3JrIGFuZCBmb3Igd2hpY2gg\ndGhlCiAgIGVkaXRvcmlhbCByZXZpc2lvbnMsIGFubm90YXRpb25zLCBlbGFi\nb3JhdGlvbnMsIG9yIG90aGVyIG1vZGlmaWNhdGlvbnMKICAgcmVwcmVzZW50\nLCBhcyBhIHdob2xlLCBhbiBvcmlnaW5hbCB3b3JrIG9mIGF1dGhvcnNoaXAu\nIEZvciB0aGUgcHVycG9zZXMKICAgb2YgdGhpcyBMaWNlbnNlLCBEZXJpdmF0\naXZlIFdvcmtzIHNoYWxsIG5vdCBpbmNsdWRlIHdvcmtzIHRoYXQgcmVtYWlu\nCiAgIHNlcGFyYWJsZSBmcm9tLCBvciBtZXJlbHkgbGluayAob3IgYmluZCBi\neSBuYW1lKSB0byB0aGUgaW50ZXJmYWNlcyBvZiwKICAgdGhlIFdvcmsgYW5k\nIERlcml2YXRpdmUgV29ya3MgdGhlcmVvZi4KCiAgICJDb250cmlidXRpb24i\nIHNoYWxsIG1lYW4gYW55IHdvcmsgb2YgYXV0aG9yc2hpcCwgaW5jbHVkaW5n\nCiAgIHRoZSBvcmlnaW5hbCB2ZXJzaW9uIG9mIHRoZSBXb3JrIGFuZCBhbnkg\nbW9kaWZpY2F0aW9ucyBvciBhZGRpdGlvbnMKICAgdG8gdGhhdCBXb3JrIG9y\nIERlcml2YXRpdmUgV29ya3MgdGhlcmVvZiwgdGhhdCBpcyBpbnRlbnRpb25h\nbGx5CiAgIHN1Ym1pdHRlZCB0byBMaWNlbnNvciBmb3IgaW5jbHVzaW9uIGlu\nIHRoZSBXb3JrIGJ5IHRoZSBjb3B5cmlnaHQgb3duZXIKICAgb3IgYnkgYW4g\naW5kaXZpZHVhbCBvciBMZWdhbCBFbnRpdHkgYXV0aG9yaXplZCB0byBzdWJt\naXQgb24gYmVoYWxmIG9mCiAgIHRoZSBjb3B5cmlnaHQgb3duZXIuIEZvciB0\naGUgcHVycG9zZXMgb2YgdGhpcyBkZWZpbml0aW9uLCAic3VibWl0dGVkIgog\nICBtZWFucyBhbnkgZm9ybSBvZiBlbGVjdHJvbmljLCB2ZXJiYWwsIG9yIHdy\naXR0ZW4gY29tbXVuaWNhdGlvbiBzZW50CiAgIHRvIHRoZSBMaWNlbnNvciBv\nciBpdHMgcmVwcmVzZW50YXRpdmVzLCBpbmNsdWRpbmcgYnV0IG5vdCBsaW1p\ndGVkIHRvCiAgIGNvbW11bmljYXRpb24gb24gZWxlY3Ryb25pYyBtYWlsaW5n\nIGxpc3RzLCBzb3VyY2UgY29kZSBjb250cm9sIHN5c3RlbXMsCiAgIGFuZCBp\nc3N1ZSB0cmFja2luZyBzeXN0ZW1zIHRoYXQgYXJlIG1hbmFnZWQgYnksIG9y\nIG9uIGJlaGFsZiBvZiwgdGhlCiAgIExpY2Vuc29yIGZvciB0aGUgcHVycG9z\nZSBvZiBkaXNjdXNzaW5nIGFuZCBpbXByb3ZpbmcgdGhlIFdvcmssIGJ1dAog\nICBleGNsdWRpbmcgY29tbXVuaWNhdGlvbiB0aGF0IGlzIGNvbnNwaWN1b3Vz\nbHkgbWFya2VkIG9yIG90aGVyd2lzZQogICBkZXNpZ25hdGVkIGluIHdyaXRp\nbmcgYnkgdGhlIGNvcHlyaWdodCBvd25lciBhcyAiTm90IGEgQ29udHJpYnV0\naW9uLiIKCiAgICJDb250cmlidXRvciIgc2hhbGwgbWVhbiBMaWNlbnNvciBh\nbmQgYW55IGluZGl2aWR1YWwgb3IgTGVnYWwgRW50aXR5CiAgIG9uIGJlaGFs\nZiBvZiB3aG9tIGEgQ29udHJpYnV0aW9uIGhhcyBiZWVuIHJlY2VpdmVkIGJ5\nIExpY2Vuc29yIGFuZAogICBzdWJzZXF1ZW50bHkgaW5jb3Jwb3JhdGVkIHdp\ndGhpbiB0aGUgV29yay4KCjIuIEdyYW50IG9mIENvcHlyaWdodCBMaWNlbnNl\nLiBTdWJqZWN0IHRvIHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZgogICB0\naGlzIExpY2Vuc2UsIGVhY2ggQ29udHJpYnV0b3IgaGVyZWJ5IGdyYW50cyB0\nbyBZb3UgYSBwZXJwZXR1YWwsCiAgIHdvcmxkd2lkZSwgbm9uLWV4Y2x1c2l2\nZSwgbm8tY2hhcmdlLCByb3lhbHR5LWZyZWUsIGlycmV2b2NhYmxlCiAgIGNv\ncHlyaWdodCBsaWNlbnNlIHRvIHJlcHJvZHVjZSwgcHJlcGFyZSBEZXJpdmF0\naXZlIFdvcmtzIG9mLAogICBwdWJsaWNseSBkaXNwbGF5LCBwdWJsaWNseSBw\nZXJmb3JtLCBzdWJsaWNlbnNlLCBhbmQgZGlzdHJpYnV0ZSB0aGUKICAgV29y\nayBhbmQgc3VjaCBEZXJpdmF0aXZlIFdvcmtzIGluIFNvdXJjZSBvciBPYmpl\nY3QgZm9ybS4KCjMuIEdyYW50IG9mIFBhdGVudCBMaWNlbnNlLiBTdWJqZWN0\nIHRvIHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZgogICB0aGlzIExpY2Vu\nc2UsIGVhY2ggQ29udHJpYnV0b3IgaGVyZWJ5IGdyYW50cyB0byBZb3UgYSBw\nZXJwZXR1YWwsCiAgIHdvcmxkd2lkZSwgbm9uLWV4Y2x1c2l2ZSwgbm8tY2hh\ncmdlLCByb3lhbHR5LWZyZWUsIGlycmV2b2NhYmxlCiAgIChleGNlcHQgYXMg\nc3RhdGVkIGluIHRoaXMgc2VjdGlvbikgcGF0ZW50IGxpY2Vuc2UgdG8gbWFr\nZSwgaGF2ZSBtYWRlLAogICB1c2UsIG9mZmVyIHRvIHNlbGwsIHNlbGwsIGlt\ncG9ydCwgYW5kIG90aGVyd2lzZSB0cmFuc2ZlciB0aGUgV29yaywKICAgd2hl\ncmUgc3VjaCBsaWNlbnNlIGFwcGxpZXMgb25seSB0byB0aG9zZSBwYXRlbnQg\nY2xhaW1zIGxpY2Vuc2FibGUKICAgYnkgc3VjaCBDb250cmlidXRvciB0aGF0\nIGFyZSBuZWNlc3NhcmlseSBpbmZyaW5nZWQgYnkgdGhlaXIKICAgQ29udHJp\nYnV0aW9uKHMpIGFsb25lIG9yIGJ5IGNvbWJpbmF0aW9uIG9mIHRoZWlyIENv\nbnRyaWJ1dGlvbihzKQogICB3aXRoIHRoZSBXb3JrIHRvIHdoaWNoIHN1Y2gg\nQ29udHJpYnV0aW9uKHMpIHdhcyBzdWJtaXR0ZWQuIElmIFlvdQogICBpbnN0\naXR1dGUgcGF0ZW50IGxpdGlnYXRpb24gYWdhaW5zdCBhbnkgZW50aXR5IChp\nbmNsdWRpbmcgYQogICBjcm9zcy1jbGFpbSBvciBjb3VudGVyY2xhaW0gaW4g\nYSBsYXdzdWl0KSBhbGxlZ2luZyB0aGF0IHRoZSBXb3JrCiAgIG9yIGEgQ29u\ndHJpYnV0aW9uIGluY29ycG9yYXRlZCB3aXRoaW4gdGhlIFdvcmsgY29uc3Rp\ndHV0ZXMgZGlyZWN0CiAgIG9yIGNvbnRyaWJ1dG9yeSBwYXRlbnQgaW5mcmlu\nZ2VtZW50LCB0aGVuIGFueSBwYXRlbnQgbGljZW5zZXMKICAgZ3JhbnRlZCB0\nbyBZb3UgdW5kZXIgdGhpcyBMaWNlbnNlIGZvciB0aGF0IFdvcmsgc2hhbGwg\ndGVybWluYXRlCiAgIGFzIG9mIHRoZSBkYXRlIHN1Y2ggbGl0aWdhdGlvbiBp\ncyBmaWxlZC4KCjQuIFJlZGlzdHJpYnV0aW9uLiBZb3UgbWF5IHJlcHJvZHVj\nZSBhbmQgZGlzdHJpYnV0ZSBjb3BpZXMgb2YgdGhlCiAgIFdvcmsgb3IgRGVy\naXZhdGl2ZSBXb3JrcyB0aGVyZW9mIGluIGFueSBtZWRpdW0sIHdpdGggb3Ig\nd2l0aG91dAogICBtb2RpZmljYXRpb25zLCBhbmQgaW4gU291cmNlIG9yIE9i\namVjdCBmb3JtLCBwcm92aWRlZCB0aGF0IFlvdQogICBtZWV0IHRoZSBmb2xs\nb3dpbmcgY29uZGl0aW9uczoKCiAgIChhKSBZb3UgbXVzdCBnaXZlIGFueSBv\ndGhlciByZWNpcGllbnRzIG9mIHRoZSBXb3JrIG9yCiAgICAgICBEZXJpdmF0\naXZlIFdvcmtzIGEgY29weSBvZiB0aGlzIExpY2Vuc2U7IGFuZAoKICAgKGIp\nIFlvdSBtdXN0IGNhdXNlIGFueSBtb2RpZmllZCBmaWxlcyB0byBjYXJyeSBw\ncm9taW5lbnQgbm90aWNlcwogICAgICAgc3RhdGluZyB0aGF0IFlvdSBjaGFu\nZ2VkIHRoZSBmaWxlczsgYW5kCgogICAoYykgWW91IG11c3QgcmV0YWluLCBp\nbiB0aGUgU291cmNlIGZvcm0gb2YgYW55IERlcml2YXRpdmUgV29ya3MKICAg\nICAgIHRoYXQgWW91IGRpc3RyaWJ1dGUsIGFsbCBjb3B5cmlnaHQsIHBhdGVu\ndCwgdHJhZGVtYXJrLCBhbmQKICAgICAgIGF0dHJpYnV0aW9uIG5vdGljZXMg\nZnJvbSB0aGUgU291cmNlIGZvcm0gb2YgdGhlIFdvcmssCiAgICAgICBleGNs\ndWRpbmcgdGhvc2Ugbm90aWNlcyB0aGF0IGRvIG5vdCBwZXJ0YWluIHRvIGFu\neSBwYXJ0IG9mCiAgICAgICB0aGUgRGVyaXZhdGl2ZSBXb3JrczsgYW5kCgog\nICAoZCkgSWYgdGhlIFdvcmsgaW5jbHVkZXMgYSAiTk9USUNFIiB0ZXh0IGZp\nbGUgYXMgcGFydCBvZiBpdHMKICAgICAgIGRpc3RyaWJ1dGlvbiwgdGhlbiBh\nbnkgRGVyaXZhdGl2ZSBXb3JrcyB0aGF0IFlvdSBkaXN0cmlidXRlIG11c3QK\nICAgICAgIGluY2x1ZGUgYSByZWFkYWJsZSBjb3B5IG9mIHRoZSBhdHRyaWJ1\ndGlvbiBub3RpY2VzIGNvbnRhaW5lZAogICAgICAgd2l0aGluIHN1Y2ggTk9U\nSUNFIGZpbGUsIGV4Y2x1ZGluZyB0aG9zZSBub3RpY2VzIHRoYXQgZG8gbm90\nCiAgICAgICBwZXJ0YWluIHRvIGFueSBwYXJ0IG9mIHRoZSBEZXJpdmF0aXZl\nIFdvcmtzLCBpbiBhdCBsZWFzdCBvbmUKICAgICAgIG9mIHRoZSBmb2xsb3dp\nbmcgcGxhY2VzOiB3aXRoaW4gYSBOT1RJQ0UgdGV4dCBmaWxlIGRpc3RyaWJ1\ndGVkCiAgICAgICBhcyBwYXJ0IG9mIHRoZSBEZXJpdmF0aXZlIFdvcmtzOyB3\naXRoaW4gdGhlIFNvdXJjZSBmb3JtIG9yCiAgICAgICBkb2N1bWVudGF0aW9u\nLCBpZiBwcm92aWRlZCBhbG9uZyB3aXRoIHRoZSBEZXJpdmF0aXZlIFdvcmtz\nOyBvciwKICAgICAgIHdpdGhpbiBhIGRpc3BsYXkgZ2VuZXJhdGVkIGJ5IHRo\nZSBEZXJpdmF0aXZlIFdvcmtzLCBpZiBhbmQKICAgICAgIHdoZXJldmVyIHN1\nY2ggdGhpcmQtcGFydHkgbm90aWNlcyBub3JtYWxseSBhcHBlYXIuIFRoZSBj\nb250ZW50cwogICAgICAgb2YgdGhlIE5PVElDRSBmaWxlIGFyZSBmb3IgaW5m\nb3JtYXRpb25hbCBwdXJwb3NlcyBvbmx5IGFuZAogICAgICAgZG8gbm90IG1v\nZGlmeSB0aGUgTGljZW5zZS4gWW91IG1heSBhZGQgWW91ciBvd24gYXR0cmli\ndXRpb24KICAgICAgIG5vdGljZXMgd2l0aGluIERlcml2YXRpdmUgV29ya3Mg\ndGhhdCBZb3UgZGlzdHJpYnV0ZSwgYWxvbmdzaWRlCiAgICAgICBvciBhcyBh\nbiBhZGRlbmR1bSB0byB0aGUgTk9USUNFIHRleHQgZnJvbSB0aGUgV29yaywg\ncHJvdmlkZWQKICAgICAgIHRoYXQgc3VjaCBhZGRpdGlvbmFsIGF0dHJpYnV0\naW9uIG5vdGljZXMgY2Fubm90IGJlIGNvbnN0cnVlZAogICAgICAgYXMgbW9k\naWZ5aW5nIHRoZSBMaWNlbnNlLgoKICAgWW91IG1heSBhZGQgWW91ciBvd24g\nY29weXJpZ2h0IHN0YXRlbWVudCB0byBZb3VyIG1vZGlmaWNhdGlvbnMgYW5k\nCiAgIG1heSBwcm92aWRlIGFkZGl0aW9uYWwgb3IgZGlmZmVyZW50IGxpY2Vu\nc2UgdGVybXMgYW5kIGNvbmRpdGlvbnMKICAgZm9yIHVzZSwgcmVwcm9kdWN0\naW9uLCBvciBkaXN0cmlidXRpb24gb2YgWW91ciBtb2RpZmljYXRpb25zLCBv\ncgogICBmb3IgYW55IHN1Y2ggRGVyaXZhdGl2ZSBXb3JrcyBhcyBhIHdob2xl\nLCBwcm92aWRlZCBZb3VyIHVzZSwKICAgcmVwcm9kdWN0aW9uLCBhbmQgZGlz\ndHJpYnV0aW9uIG9mIHRoZSBXb3JrIG90aGVyd2lzZSBjb21wbGllcyB3aXRo\nCiAgIHRoZSBjb25kaXRpb25zIHN0YXRlZCBpbiB0aGlzIExpY2Vuc2UuCgo1\nLiBTdWJtaXNzaW9uIG9mIENvbnRyaWJ1dGlvbnMuIFVubGVzcyBZb3UgZXhw\nbGljaXRseSBzdGF0ZSBvdGhlcndpc2UsCiAgIGFueSBDb250cmlidXRpb24g\naW50ZW50aW9uYWxseSBzdWJtaXR0ZWQgZm9yIGluY2x1c2lvbiBpbiB0aGUg\nV29yawogICBieSBZb3UgdG8gdGhlIExpY2Vuc29yIHNoYWxsIGJlIHVuZGVy\nIHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZgogICB0aGlzIExpY2Vuc2Us\nIHdpdGhvdXQgYW55IGFkZGl0aW9uYWwgdGVybXMgb3IgY29uZGl0aW9ucy4K\nICAgTm90d2l0aHN0YW5kaW5nIHRoZSBhYm92ZSwgbm90aGluZyBoZXJlaW4g\nc2hhbGwgc3VwZXJzZWRlIG9yIG1vZGlmeQogICB0aGUgdGVybXMgb2YgYW55\nIHNlcGFyYXRlIGxpY2Vuc2UgYWdyZWVtZW50IHlvdSBtYXkgaGF2ZSBleGVj\ndXRlZAogICB3aXRoIExpY2Vuc29yIHJlZ2FyZGluZyBzdWNoIENvbnRyaWJ1\ndGlvbnMuCgo2LiBUcmFkZW1hcmtzLiBUaGlzIExpY2Vuc2UgZG9lcyBub3Qg\nZ3JhbnQgcGVybWlzc2lvbiB0byB1c2UgdGhlIHRyYWRlCiAgIG5hbWVzLCB0\ncmFkZW1hcmtzLCBzZXJ2aWNlIG1hcmtzLCBvciBwcm9kdWN0IG5hbWVzIG9m\nIHRoZSBMaWNlbnNvciwKICAgZXhjZXB0IGFzIHJlcXVpcmVkIGZvciByZWFz\nb25hYmxlIGFuZCBjdXN0b21hcnkgdXNlIGluIGRlc2NyaWJpbmcgdGhlCiAg\nIG9yaWdpbiBvZiB0aGUgV29yayBhbmQgcmVwcm9kdWNpbmcgdGhlIGNvbnRl\nbnQgb2YgdGhlIE5PVElDRSBmaWxlLgoKNy4gRGlzY2xhaW1lciBvZiBXYXJy\nYW50eS4gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yCiAg\nIGFncmVlZCB0byBpbiB3cml0aW5nLCBMaWNlbnNvciBwcm92aWRlcyB0aGUg\nV29yayAoYW5kIGVhY2gKICAgQ29udHJpYnV0b3IgcHJvdmlkZXMgaXRzIENv\nbnRyaWJ1dGlvbnMpIG9uIGFuICJBUyBJUyIgQkFTSVMsCiAgIFdJVEhPVVQg\nV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIg\nZXhwcmVzcyBvcgogICBpbXBsaWVkLCBpbmNsdWRpbmcsIHdpdGhvdXQgbGlt\naXRhdGlvbiwgYW55IHdhcnJhbnRpZXMgb3IgY29uZGl0aW9ucwogICBvZiBU\nSVRMRSwgTk9OLUlORlJJTkdFTUVOVCwgTUVSQ0hBTlRBQklMSVRZLCBvciBG\nSVRORVNTIEZPUiBBCiAgIFBBUlRJQ1VMQVIgUFVSUE9TRS4gWW91IGFyZSBz\nb2xlbHkgcmVzcG9uc2libGUgZm9yIGRldGVybWluaW5nIHRoZQogICBhcHBy\nb3ByaWF0ZW5lc3Mgb2YgdXNpbmcgb3IgcmVkaXN0cmlidXRpbmcgdGhlIFdv\ncmsgYW5kIGFzc3VtZSBhbnkKICAgcmlza3MgYXNzb2NpYXRlZCB3aXRoIFlv\ndXIgZXhlcmNpc2Ugb2YgcGVybWlzc2lvbnMgdW5kZXIgdGhpcyBMaWNlbnNl\nLgoKOC4gTGltaXRhdGlvbiBvZiBMaWFiaWxpdHkuIEluIG5vIGV2ZW50IGFu\nZCB1bmRlciBubyBsZWdhbCB0aGVvcnksCiAgIHdoZXRoZXIgaW4gdG9ydCAo\naW5jbHVkaW5nIG5lZ2xpZ2VuY2UpLCBjb250cmFjdCwgb3Igb3RoZXJ3aXNl\nLAogICB1bmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgKHN1Y2gg\nYXMgZGVsaWJlcmF0ZSBhbmQgZ3Jvc3NseQogICBuZWdsaWdlbnQgYWN0cykg\nb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNoYWxsIGFueSBDb250cmlidXRv\nciBiZQogICBsaWFibGUgdG8gWW91IGZvciBkYW1hZ2VzLCBpbmNsdWRpbmcg\nYW55IGRpcmVjdCwgaW5kaXJlY3QsIHNwZWNpYWwsCiAgIGluY2lkZW50YWws\nIG9yIGNvbnNlcXVlbnRpYWwgZGFtYWdlcyBvZiBhbnkgY2hhcmFjdGVyIGFy\naXNpbmcgYXMgYQogICByZXN1bHQgb2YgdGhpcyBMaWNlbnNlIG9yIG91dCBv\nZiB0aGUgdXNlIG9yIGluYWJpbGl0eSB0byB1c2UgdGhlCiAgIFdvcmsgKGlu\nY2x1ZGluZyBidXQgbm90IGxpbWl0ZWQgdG8gZGFtYWdlcyBmb3IgbG9zcyBv\nZiBnb29kd2lsbCwKICAgd29yayBzdG9wcGFnZSwgY29tcHV0ZXIgZmFpbHVy\nZSBvciBtYWxmdW5jdGlvbiwgb3IgYW55IGFuZCBhbGwKICAgb3RoZXIgY29t\nbWVyY2lhbCBkYW1hZ2VzIG9yIGxvc3NlcyksIGV2ZW4gaWYgc3VjaCBDb250\ncmlidXRvcgogICBoYXMgYmVlbiBhZHZpc2VkIG9mIHRoZSBwb3NzaWJpbGl0\neSBvZiBzdWNoIGRhbWFnZXMuCgo5LiBBY2NlcHRpbmcgV2FycmFudHkgb3Ig\nQWRkaXRpb25hbCBMaWFiaWxpdHkuIFdoaWxlIHJlZGlzdHJpYnV0aW5nCiAg\nIHRoZSBXb3JrIG9yIERlcml2YXRpdmUgV29ya3MgdGhlcmVvZiwgWW91IG1h\neSBjaG9vc2UgdG8gb2ZmZXIsCiAgIGFuZCBjaGFyZ2UgYSBmZWUgZm9yLCBh\nY2NlcHRhbmNlIG9mIHN1cHBvcnQsIHdhcnJhbnR5LCBpbmRlbW5pdHksCiAg\nIG9yIG90aGVyIGxpYWJpbGl0eSBvYmxpZ2F0aW9ucyBhbmQvb3IgcmlnaHRz\nIGNvbnNpc3RlbnQgd2l0aCB0aGlzCiAgIExpY2Vuc2UuIEhvd2V2ZXIsIGlu\nIGFjY2VwdGluZyBzdWNoIG9ibGlnYXRpb25zLCBZb3UgbWF5IGFjdCBvbmx5\nCiAgIG9uIFlvdXIgb3duIGJlaGFsZiBhbmQgb24gWW91ciBzb2xlIHJlc3Bv\nbnNpYmlsaXR5LCBub3Qgb24gYmVoYWxmCiAgIG9mIGFueSBvdGhlciBDb250\ncmlidXRvciwgYW5kIG9ubHkgaWYgWW91IGFncmVlIHRvIGluZGVtbmlmeSwK\nICAgZGVmZW5kLCBhbmQgaG9sZCBlYWNoIENvbnRyaWJ1dG9yIGhhcm1sZXNz\nIGZvciBhbnkgbGlhYmlsaXR5CiAgIGluY3VycmVkIGJ5LCBvciBjbGFpbXMg\nYXNzZXJ0ZWQgYWdhaW5zdCwgc3VjaCBDb250cmlidXRvciBieSByZWFzb24K\nICAgb2YgeW91ciBhY2NlcHRpbmcgYW55IHN1Y2ggd2FycmFudHkgb3IgYWRk\naXRpb25hbCBsaWFiaWxpdHkuCgpFTkQgT0YgVEVSTVMgQU5EIENPTkRJVElP\nTlMKCkFQUEVORElYOiBIb3cgdG8gYXBwbHkgdGhlIEFwYWNoZSBMaWNlbnNl\nIHRvIHlvdXIgd29yay4KCiAgIFRvIGFwcGx5IHRoZSBBcGFjaGUgTGljZW5z\nZSB0byB5b3VyIHdvcmssIGF0dGFjaCB0aGUgZm9sbG93aW5nCiAgIGJvaWxl\ncnBsYXRlIG5vdGljZSwgd2l0aCB0aGUgZmllbGRzIGVuY2xvc2VkIGJ5IGJy\nYWNrZXRzICJbXSIKICAgcmVwbGFjZWQgd2l0aCB5b3VyIG93biBpZGVudGlm\neWluZyBpbmZvcm1hdGlvbi4gKERvbid0IGluY2x1ZGUKICAgdGhlIGJyYWNr\nZXRzISkgIFRoZSB0ZXh0IHNob3VsZCBiZSBlbmNsb3NlZCBpbiB0aGUgYXBw\ncm9wcmlhdGUKICAgY29tbWVudCBzeW50YXggZm9yIHRoZSBmaWxlIGZvcm1h\ndC4gV2UgYWxzbyByZWNvbW1lbmQgdGhhdCBhCiAgIGZpbGUgb3IgY2xhc3Mg\nbmFtZSBhbmQgZGVzY3JpcHRpb24gb2YgcHVycG9zZSBiZSBpbmNsdWRlZCBv\nbiB0aGUKICAgc2FtZSAicHJpbnRlZCBwYWdlIiBhcyB0aGUgY29weXJpZ2h0\nIG5vdGljZSBmb3IgZWFzaWVyCiAgIGlkZW50aWZpY2F0aW9uIHdpdGhpbiB0\naGlyZC1wYXJ0eSBhcmNoaXZlcy4KCkNvcHlyaWdodCAyMDIwIFNwb3RpZnkg\nQUIKCkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lv\nbiAyLjAgKHRoZSAiTGljZW5zZSIpOwp5b3UgbWF5IG5vdCB1c2UgdGhpcyBm\naWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuCllv\ndSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdAoKICAgIGh0\ndHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMAoKVW5s\nZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBp\nbiB3cml0aW5nLCBzb2Z0d2FyZQpkaXN0cmlidXRlZCB1bmRlciB0aGUgTGlj\nZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLApXSVRI\nT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0\naGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4KU2VlIHRoZSBMaWNlbnNlIGZvciB0\naGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFu\nZApsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4K\n',
  encoding: 'base64',
  _links: {
    self:
      'https://api.github.com/repos/mcalus3/backstage/contents/LICENSE?ref=master',
    git:
      'https://api.github.com/repos/mcalus3/backstage/git/blobs/224306fe452a6a16f252e4b47ced06c7e971a417',
    html: 'https://github.com/mcalus3/backstage/blob/master/LICENSE',
  },
};

// https://api.github.com/repos/mcalus3/backstage/releases
export const releasesResponseMock = [
  {
    url: 'https://api.github.com/repos/backstage/backstage/releases/36186199',
    assets_url:
      'https://api.github.com/repos/backstage/backstage/releases/36186199/assets',
    upload_url:
      'https://uploads.github.com/repos/backstage/backstage/releases/36186199/assets{?name,label}',
    html_url:
      'https://github.com/backstage/backstage/releases/tag/release-2021-01-09',
    id: 36186199,
    author: {
      login: 'backstage-service',
      id: 74306126,
      node_id: 'MDQ6VXNlcjc0MzA2MTI2',
      avatar_url: 'https://avatars2.githubusercontent.com/u/74306126?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/backstage-service',
      html_url: 'https://github.com/backstage-service',
      followers_url: 'https://api.github.com/users/backstage-service/followers',
      following_url:
        'https://api.github.com/users/backstage-service/following{/other_user}',
      gists_url:
        'https://api.github.com/users/backstage-service/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/backstage-service/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/backstage-service/subscriptions',
      organizations_url: 'https://api.github.com/users/backstage-service/orgs',
      repos_url: 'https://api.github.com/users/backstage-service/repos',
      events_url:
        'https://api.github.com/users/backstage-service/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/backstage-service/received_events',
      type: 'User',
      site_admin: false,
    },
    node_id: 'MDc6UmVsZWFzZTM2MTg2MTk5',
    tag_name: 'release-2021-01-09',
    target_commitish: 'master',
    name: 'release-2021-01-09',
    draft: false,
    prerelease: false,
    created_at: '2021-01-09T23:28:36Z',
    published_at: '2021-01-09T23:28:37Z',
    assets: [],
    tarball_url:
      'https://api.github.com/repos/backstage/backstage/tarball/release-2021-01-09',
    zipball_url:
      'https://api.github.com/repos/backstage/backstage/zipball/release-2021-01-09',
    body:
      '## @backstage/create-app@0.3.4\r\n\r\n### Patch Changes\r\n\r\n-   643dcec7c: noop release for create-app to force re-deploy\r\n-   bd9c671: Bumping the version for create-app so that we can use the latest versions of internal packages and rebuild the version which is passed to the package.json',
  },
  {
    url: 'https://api.github.com/repos/backstage/backstage/releases/36167401',
    assets_url:
      'https://api.github.com/repos/backstage/backstage/releases/36167401/assets',
    upload_url:
      'https://uploads.github.com/repos/backstage/backstage/releases/36167401/assets{?name,label}',
    html_url:
      'https://github.com/backstage/backstage/releases/tag/release-2021-01-08',
    id: 36167401,
    author: {
      login: 'backstage-service',
      id: 74306126,
      node_id: 'MDQ6VXNlcjc0MzA2MTI2',
      avatar_url: 'https://avatars2.githubusercontent.com/u/74306126?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/backstage-service',
      html_url: 'https://github.com/backstage-service',
      followers_url: 'https://api.github.com/users/backstage-service/followers',
      following_url:
        'https://api.github.com/users/backstage-service/following{/other_user}',
      gists_url:
        'https://api.github.com/users/backstage-service/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/backstage-service/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/backstage-service/subscriptions',
      organizations_url: 'https://api.github.com/users/backstage-service/orgs',
      repos_url: 'https://api.github.com/users/backstage-service/repos',
      events_url:
        'https://api.github.com/users/backstage-service/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/backstage-service/received_events',
      type: 'User',
      site_admin: false,
    },
    node_id: 'MDc6UmVsZWFzZTM2MTY3NDAx',
    tag_name: 'release-2021-01-08',
    target_commitish: 'master',
    name: 'release-2021-01-08',
    draft: false,
    prerelease: false,
    created_at: '2021-01-08T23:55:29Z',
    published_at: '2021-01-08T23:55:31Z',
    assets: [],
    tarball_url:
      'https://api.github.com/repos/backstage/backstage/tarball/release-2021-01-08',
    zipball_url:
      'https://api.github.com/repos/backstage/backstage/zipball/release-2021-01-08',
    body:
      '## @backstage/plugin-scaffolder-backend@0.4.0\r\n\r\n### Minor Changes\r\n\r\n-   5eb8c9b9e: Fix gitlab scaffolder publisher\r\n\r\n### Patch Changes\r\n\r\n-   7e3451700: bug(scaffolder): Ignore the .git folder when adding dot-files to the index\r\n\r\n ## @backstage/plugin-cost-insights@0.5.6\r\n\r\n### Patch Changes\r\n\r\n-   9e9504ce4: Minor wording change in UI\r\n\r\n ## @backstage/plugin-graphiql@0.2.4\r\n\r\n### Patch Changes\r\n\r\n-   21f6be0f6: Patch release to force a release for the `esm.js` extension change for dynamically loading chunks\r\n\r\n ## example-backend@0.2.10\r\n\r\n### Patch Changes\r\n\r\n-   Updated dependencies [5eb8c9b9e]\r\n-   Updated dependencies [7e3451700]\r\n    -   @backstage/plugin-scaffolder-backend@0.4.0\r\n',
  },
  {
    url: 'https://api.github.com/repos/backstage/backstage/releases/36094975',
    assets_url:
      'https://api.github.com/repos/backstage/backstage/releases/36094975/assets',
    upload_url:
      'https://uploads.github.com/repos/backstage/backstage/releases/36094975/assets{?name,label}',
    html_url:
      'https://github.com/backstage/backstage/releases/tag/release-2021-01-07',
    id: 36094975,
    author: {
      login: 'backstage-service',
      id: 74306126,
      node_id: 'MDQ6VXNlcjc0MzA2MTI2',
      avatar_url: 'https://avatars2.githubusercontent.com/u/74306126?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/backstage-service',
      html_url: 'https://github.com/backstage-service',
      followers_url: 'https://api.github.com/users/backstage-service/followers',
      following_url:
        'https://api.github.com/users/backstage-service/following{/other_user}',
      gists_url:
        'https://api.github.com/users/backstage-service/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/backstage-service/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/backstage-service/subscriptions',
      organizations_url: 'https://api.github.com/users/backstage-service/orgs',
      repos_url: 'https://api.github.com/users/backstage-service/repos',
      events_url:
        'https://api.github.com/users/backstage-service/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/backstage-service/received_events',
      type: 'User',
      site_admin: false,
    },
    node_id: 'MDc6UmVsZWFzZTM2MDk0OTc1',
    tag_name: 'release-2021-01-07',
    target_commitish: 'master',
    name: 'release-2021-01-07',
    draft: false,
    prerelease: false,
    created_at: '2021-01-07T17:34:17Z',
    published_at: '2021-01-07T13:51:18Z',
    assets: [],
    tarball_url:
      'https://api.github.com/repos/backstage/backstage/tarball/release-2021-01-07',
    zipball_url:
      'https://api.github.com/repos/backstage/backstage/zipball/release-2021-01-07',
    body:
      '## @backstage/backend-common@0.4.2\r\n\r\n### Patch Changes\r\n\r\n-   5ecd50f8a: Fix HTTPS certificate generation and add new config switch, enabling it simply by setting `backend.https = true`. Also introduces caching of generated certificates in order to avoid having to add a browser override every time the backend is restarted.\r\n-   00042e73c: Moving the Git actions to isomorphic-git instead of the node binding version of nodegit\r\n-   0829ff126: Tweaked development log formatter to include extra fields at the end of each log line\r\n-   036a84373: Provide support for on-prem azure devops\r\n-   Updated dependencies [ad5c56fd9]\r\n-   Updated dependencies [036a84373]\r\n    -   @backstage/config-loader@0.4.1\r\n    -   @backstage/integration@0.1.5\r\n\r\n ## @backstage/cli@0.4.5\r\n\r\n### Patch Changes\r\n\r\n-   37a7d26c4: Use consistent file extensions for JS output when building packages.\r\n-   818d45e94: Fix detection of external package child directories\r\n-   0588be01f: Add `backend:bundle` command for bundling a backend package with dependencies into a deployment archive.\r\n-   b8abdda57: Add color to output from `versions:bump` in order to make it easier to spot changes. Also highlight possible breaking changes and link to changelogs.\r\n-   Updated dependencies [ad5c56fd9]\r\n    -   @backstage/config-loader@0.4.1\r\n\r\n ## @backstage/config-loader@0.4.1\r\n\r\n### Patch Changes\r\n\r\n-   ad5c56fd9: Deprecate `$data` and replace it with `$include` which allows for any type of json value to be read from external files. In addition, `$include` can be used without a path, which causes the value at the root of the file to be loaded.\r\n\r\n    Most usages of `$data` can be directly replaced with `$include`, except if the referenced value is not a string, in which case the value needs to be changed. For example:\r\n\r\n    ```yaml\r\n    # app-config.yaml\r\n    foo:\r\n      $data: foo.yaml#myValue # replacing with $include will turn the value into a number\r\n      $data: bar.yaml#myValue # replacing with $include is safe\r\n\r\n    # foo.yaml\r\n    myValue: 0xf00\r\n\r\n    # bar.yaml\r\n    myValue: bar\r\n    ```\r\n\r\n ## @backstage/core-api@0.2.9\r\n\r\n### Patch Changes\r\n\r\n-   ab0892358: Remove test dependencies from production package list\r\n\r\n ## @backstage/create-app@0.3.2\r\n\r\n### Patch Changes\r\n\r\n-   c2b52d9c5: Replace `register-component` plugin with new `catalog-import` plugin\r\n\r\n-   fc6839f13: Bump `sqlite3` to v5.\r\n\r\n    To apply this change to an existing app, change the version of `sqlite3` in the `dependencies` of `packages/backend/package.json`:\r\n\r\n    ```diff\r\n         "pg": "^8.3.0",\r\n    -    "sqlite3": "^4.2.0",\r\n    +    "sqlite3": "^5.0.0",\r\n         "winston": "^3.2.1"\r\n    ```\r\n\r\n    Note that the `sqlite3` dependency may not be preset if you chose to use PostgreSQL when creating the app.\r\n\r\n-   8d68e4cdc: Removed the Circle CI sidebar item, since the target page does not exist.\r\n\r\n    To apply this change to an existing app, remove `"CircleCI"` sidebar item from `packages/app/src/sidebar.tsx`, and the `BuildIcon` import if it is unused.\r\n\r\n-   1773a5182: Removed lighthouse plugin from the default set up plugins, as it requires a separate Backend to function.\r\n\r\n    To apply this change to an existing app, remove the following:\r\n\r\n    1.  The `lighthouse` block from `app-config.yaml`.\r\n    2.  The `@backstage/plugin-lighthouse` dependency from `packages/app/package.json`.\r\n    3.  The `@backstage/plugin-lighthouse` re-export from `packages/app/src/plugins.ts`.\r\n    4.  The Lighthouse sidebar item from `packages/app/src/sidebar.tsx`, and the `RuleIcon` import if it is unused.\r\n\r\n ## @backstage/integration@0.1.5\r\n\r\n### Patch Changes\r\n\r\n-   036a84373: Provide support for on-prem azure devops\r\n\r\n ## @backstage/techdocs-common@0.3.2\r\n\r\n### Patch Changes\r\n\r\n-   7ec525481: 1. Added option to use AWS S3 as a choice to store the static generated files for TechDocs.\r\n-   f8ba88ded: Fix for `integration.github.apiBaseUrl` configuration not properly overriding apiBaseUrl used by techdocs\r\n-   00042e73c: Moving the Git actions to isomorphic-git instead of the node binding version of nodegit\r\n-   Updated dependencies [5ecd50f8a]\r\n-   Updated dependencies [00042e73c]\r\n-   Updated dependencies [0829ff126]\r\n-   Updated dependencies [036a84373]\r\n    -   @backstage/backend-common@0.4.2\r\n    -   @backstage/integration@0.1.5\r\n\r\n ## @backstage/plugin-auth-backend@0.2.9\r\n\r\n### Patch Changes\r\n\r\n-   0289a059c: Add support for the majority of the Core configurations for Passport-SAML.\r\n\r\n    These configuration keys are supported:\r\n\r\n    -   entryPoint\r\n    -   issuer\r\n    -   cert\r\n    -   privateKey\r\n    -   decryptionPvk\r\n    -   signatureAlgorithm\r\n    -   digestAlgorithm\r\n\r\n    As part of this change, there is also a fix to the redirection behaviour when doing load balancing and HTTPS termination - the application\'s baseUrl is used to generate the callback URL. For properly configured Backstage installations, no changes are necessary, and the baseUrl is respected.\r\n\r\n-   Updated dependencies [5ecd50f8a]\r\n\r\n-   Updated dependencies [00042e73c]\r\n\r\n-   Updated dependencies [0829ff126]\r\n\r\n-   Updated dependencies [036a84373]\r\n    -   @backstage/backend-common@0.4.2\r\n\r\n ## @backstage/plugin-catalog@0.2.10\r\n\r\n### Patch Changes\r\n\r\n-   9c09a364f: Remove the unused dependency to `@backstage/plugin-techdocs`.\r\n-   Updated dependencies [8e083f41f]\r\n-   Updated dependencies [947d3c269]\r\n    -   @backstage/plugin-scaffolder@0.3.6\r\n\r\n ## @backstage/plugin-catalog-backend@0.5.2\r\n\r\n### Patch Changes\r\n\r\n-   99be3057c: Fixed a bug where the catalog would read back all entities when adding a location that already exists.\r\n-   49d2016a4: Change `location_update_log` columns from `nvarchar(255)` to `text`\r\n-   73e75ea0a: Add processor for ingesting AWS accounts from AWS Organizations\r\n-   071711d70: Remove `sqlite3` as a dependency. You may need to add `sqlite3` as a dependency of your backend if you were relying on this indirect dependency.\r\n-   Updated dependencies [5ecd50f8a]\r\n-   Updated dependencies [00042e73c]\r\n-   Updated dependencies [0829ff126]\r\n-   Updated dependencies [036a84373]\r\n    -   @backstage/backend-common@0.4.2\r\n\r\n ## @backstage/plugin-catalog-import@0.3.3\r\n\r\n### Patch Changes\r\n\r\n-   edb7d0775: Create "url" type location when registering using the catalog-import plugin.\r\n-   Updated dependencies [99be3057c]\r\n-   Updated dependencies [49d2016a4]\r\n-   Updated dependencies [9c09a364f]\r\n-   Updated dependencies [73e75ea0a]\r\n-   Updated dependencies [036a84373]\r\n-   Updated dependencies [071711d70]\r\n    -   @backstage/plugin-catalog-backend@0.5.2\r\n    -   @backstage/plugin-catalog@0.2.10\r\n    -   @backstage/integration@0.1.5\r\n\r\n ## @backstage/plugin-cost-insights@0.5.5\r\n\r\n### Patch Changes\r\n\r\n-   ab0892358: Remove test dependencies from production package list\r\n\r\n ## @backstage/plugin-pagerduty@0.2.5\r\n\r\n### Patch Changes\r\n\r\n-   b7a124883: Optimize empty state image size.\r\n\r\n ## @backstage/plugin-rollbar-backend@0.1.6\r\n\r\n### Patch Changes\r\n\r\n-   dde4ab398: Bump `axios` from `^0.20.0` to `^0.21.1`.\r\n-   Updated dependencies [5ecd50f8a]\r\n-   Updated dependencies [00042e73c]\r\n-   Updated dependencies [0829ff126]\r\n-   Updated dependencies [036a84373]\r\n    -   @backstage/backend-common@0.4.2\r\n\r\n ## @backstage/plugin-scaffolder@0.3.6\r\n\r\n### Patch Changes\r\n\r\n-   8e083f41f: Bug fix: User can retry creating a new component if an error occurs, without having to reload the page.\r\n-   947d3c269: You can now maximize the logs into full-screen by clicking the button under each step of the job\r\n-   Updated dependencies [9c09a364f]\r\n    -   @backstage/plugin-catalog@0.2.10\r\n\r\n ## @backstage/plugin-scaffolder-backend@0.3.7\r\n\r\n### Patch Changes\r\n\r\n-   37a5244ef: Add scaffolding support for Bitbucket Cloud and Server.\r\n-   00042e73c: Moving the Git actions to isomorphic-git instead of the node binding version of nodegit\r\n-   9efbc5585: Add config schema for Bitbucket scaffolder\r\n-   Updated dependencies [5ecd50f8a]\r\n-   Updated dependencies [00042e73c]\r\n-   Updated dependencies [0829ff126]\r\n-   Updated dependencies [036a84373]\r\n    -   @backstage/backend-common@0.4.2\r\n    -   @backstage/integration@0.1.5\r\n\r\n ## @backstage/plugin-search@0.2.5\r\n\r\n### Patch Changes\r\n\r\n-   01707438b: Fix Material-UI warning for search filtering\r\n-   Updated dependencies [9c09a364f]\r\n    -   @backstage/plugin-catalog@0.2.10\r\n\r\n ## @backstage/plugin-sentry@0.3.2\r\n\r\n### Patch Changes\r\n\r\n-   88da267cc: Port to new composability API by exporting new `EntitySentryContent` and `EntitySentryCard` component extensions.\r\n-   Updated dependencies [9c09a364f]\r\n    -   @backstage/plugin-catalog@0.2.10\r\n\r\n ## @backstage/plugin-tech-radar@0.3.2\r\n\r\n### Patch Changes\r\n\r\n-   ab0892358: Remove test dependencies from production package list\r\n-   bc909178d: Updated example data in `README`.\r\n\r\n ## @backstage/plugin-techdocs-backend@0.5.2\r\n\r\n### Patch Changes\r\n\r\n-   7ec525481: 1. Added option to use AWS S3 as a choice to store the static generated files for TechDocs.\r\n-   Updated dependencies [7ec525481]\r\n-   Updated dependencies [5ecd50f8a]\r\n-   Updated dependencies [f8ba88ded]\r\n-   Updated dependencies [00042e73c]\r\n-   Updated dependencies [0829ff126]\r\n-   Updated dependencies [036a84373]\r\n    -   @backstage/techdocs-common@0.3.2\r\n    -   @backstage/backend-common@0.4.2\r\n\r\n ## example-app@0.2.9\r\n\r\n### Patch Changes\r\n\r\n-   Updated dependencies [ab0892358]\r\n-   Updated dependencies [37a7d26c4]\r\n-   Updated dependencies [8e083f41f]\r\n-   Updated dependencies [88da267cc]\r\n-   Updated dependencies [9c09a364f]\r\n-   Updated dependencies [01707438b]\r\n-   Updated dependencies [edb7d0775]\r\n-   Updated dependencies [818d45e94]\r\n-   Updated dependencies [0588be01f]\r\n-   Updated dependencies [b8abdda57]\r\n-   Updated dependencies [b7a124883]\r\n-   Updated dependencies [bc909178d]\r\n-   Updated dependencies [947d3c269]\r\n    -   @backstage/plugin-cost-insights@0.5.5\r\n    -   @backstage/plugin-tech-radar@0.3.2\r\n    -   @backstage/cli@0.4.5\r\n    -   @backstage/plugin-scaffolder@0.3.6\r\n    -   @backstage/plugin-sentry@0.3.2\r\n    -   @backstage/plugin-catalog@0.2.10\r\n    -   @backstage/plugin-search@0.2.5\r\n    -   @backstage/plugin-catalog-import@0.3.3\r\n    -   @backstage/plugin-pagerduty@0.2.5\r\n',
  },
  {
    url: 'https://api.github.com/repos/backstage/backstage/releases/35818957',
    assets_url:
      'https://api.github.com/repos/backstage/backstage/releases/35818957/assets',
    upload_url:
      'https://uploads.github.com/repos/backstage/backstage/releases/35818957/assets{?name,label}',
    html_url: 'https://github.com/backstage/backstage/releases/tag/v0.4.3',
    id: 35818957,
    author: {
      login: 'Rugvip',
      id: 4984472,
      node_id: 'MDQ6VXNlcjQ5ODQ0NzI=',
      avatar_url: 'https://avatars2.githubusercontent.com/u/4984472?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Rugvip',
      html_url: 'https://github.com/Rugvip',
      followers_url: 'https://api.github.com/users/Rugvip/followers',
      following_url:
        'https://api.github.com/users/Rugvip/following{/other_user}',
      gists_url: 'https://api.github.com/users/Rugvip/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/Rugvip/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Rugvip/subscriptions',
      organizations_url: 'https://api.github.com/users/Rugvip/orgs',
      repos_url: 'https://api.github.com/users/Rugvip/repos',
      events_url: 'https://api.github.com/users/Rugvip/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Rugvip/received_events',
      type: 'User',
      site_admin: false,
    },
    node_id: 'MDc6UmVsZWFzZTM1ODE4OTU3',
    tag_name: 'v0.4.3',
    target_commitish: 'master',
    name: 'v0.4.3',
    draft: false,
    prerelease: false,
    created_at: '2020-12-29T11:46:41Z',
    published_at: '2020-12-29T18:57:10Z',
    assets: [],
    tarball_url:
      'https://api.github.com/repos/backstage/backstage/tarball/v0.4.3',
    zipball_url:
      'https://api.github.com/repos/backstage/backstage/zipball/v0.4.3',
    body:
      '## @backstage/cli@0.4.4\r\n\r\n### Patch Changes\r\n\r\n-   d45efbc9b: Fix typo in .app.listen.port config schema\r\n\r\n ## @backstage/core@0.4.3\r\n\r\n### Patch Changes\r\n\r\n-   a08c32ced: Add `FlatRoutes` component to replace the top-level `Routes` component from `react-router` within apps, removing the need for manually appending `/*` to paths or sorting routes.\r\n-   Updated dependencies [a08c32ced]\r\n-   Updated dependencies [86c3c652a]\r\n-   Updated dependencies [27f2af935]\r\n    -   @backstage/core-api@0.2.8\r\n\r\n ## @backstage/core-api@0.2.8\r\n\r\n### Patch Changes\r\n\r\n-   a08c32ced: Add `FlatRoutes` component to replace the top-level `Routes` component from `react-router` within apps, removing the need for manually appending `/*` to paths or sorting routes.\r\n-   86c3c652a: Deprecate `RouteRef` path parameter and member, and remove deprecated `routeRef.createSubRouteRef`.\r\n-   27f2af935: Delay auth loginPopup close to avoid race condition with callers of authFlowHelpers.\r\n\r\n ## @backstage/create-app@0.3.1\r\n\r\n### Patch Changes\r\n\r\n-   4e0e3b1bf: Add missing `yarn clean` for app.\r\n\r\n    For users with existing Backstage installations, add the following under the `scripts` section in `packages/app/package.json`, after the "lint" entry:\r\n\r\n    ```json\r\n    "clean": "backstage-cli clean",\r\n    ```\r\n\r\n    This will add the missing `yarn clean` for the generated frontend.\r\n\r\n-   352a6581f: Added `"start-backend"` script to root `package.json`.\r\n\r\n    To apply this change to an existing app, add the following script to the root `package.json`:\r\n\r\n    ```json\r\n    "start-backend": "yarn workspace backend start"\r\n    ```\r\n\r\n ## @backstage/dev-utils@0.1.7\r\n\r\n### Patch Changes\r\n\r\n-   696b8ce74: Add new `addPage` method for use with extensions, as well as an `EntityGridItem` to easily create different test cases for entity overview cards.\r\n-   Updated dependencies [a08c32ced]\r\n-   Updated dependencies [7e0b8cac5]\r\n-   Updated dependencies [87c0c53c2]\r\n    -   @backstage/core@0.4.3\r\n    -   @backstage/plugin-catalog@0.2.9\r\n\r\n ## @backstage/techdocs-common@0.3.1\r\n\r\n### Patch Changes\r\n\r\n-   8804e8981: Using @backstage/integration package for GitHub/GitLab/Azure tokens and request options.\r\n\r\n    Most probably you do not have to make any changes in the app because of this change.\r\n    However, if you are using the `DirectoryPreparer` or `CommonGitPreparer` exported by\r\n    `@backstage/techdocs-common` package, you now need to add pass in a `config` (from `@backstage/config`)\r\n    instance as argument.\r\n\r\n        <!-- Before -->\r\n            const directoryPreparer = new DirectoryPreparer(logger);\r\n            const commonGitPreparer = new CommonGitPreparer(logger);\r\n        <!-- Now -->\r\n            const directoryPreparer = new DirectoryPreparer(config, logger);\r\n            const commonGitPreparer = new CommonGitPreparer(config, logger);\r\n\r\n ## @backstage/plugin-api-docs@0.4.2\r\n\r\n### Patch Changes\r\n\r\n-   9161531b2: Link register API to catalog-import plugin\r\n-   Updated dependencies [a08c32ced]\r\n-   Updated dependencies [7e0b8cac5]\r\n-   Updated dependencies [87c0c53c2]\r\n    -   @backstage/core@0.4.3\r\n    -   @backstage/plugin-catalog@0.2.9\r\n\r\n ## @backstage/plugin-auth-backend@0.2.8\r\n\r\n### Patch Changes\r\n\r\n-   cc046682e: fix bug in token expiration date\r\n\r\n ## @backstage/plugin-catalog@0.2.9\r\n\r\n### Patch Changes\r\n\r\n-   7e0b8cac5: Add `CatalogIndexPage` and `CatalogEntityPage`, two new extensions that replace the existing `Router` component.\r\n\r\n    Add `EntityLayout` to replace `EntityPageLayout`, using children instead of an element property, and allowing for collection of all `RouteRef` mount points used within tabs.\r\n\r\n    Add `EntitySwitch` to be used to select components based on entity data, along with accompanying `isKind`, `isNamespace`, and `isComponentType` filters.\r\n\r\n-   87c0c53c2: Add new `EntityProvider` component, which can be used to provide an entity for the `useEntity` hook.\r\n\r\n-   Updated dependencies [a08c32ced]\r\n\r\n-   Updated dependencies [359f9d2d8]\r\n    -   @backstage/core@0.4.3\r\n    -   @backstage/plugin-techdocs@0.5.2\r\n\r\n ## @backstage/plugin-cost-insights@0.5.4\r\n\r\n### Patch Changes\r\n\r\n-   3fca9adb9: Fix links in sample instructions\r\n-   Updated dependencies [a08c32ced]\r\n    -   @backstage/core@0.4.3\r\n\r\n ## @backstage/plugin-fossa@0.1.1\r\n\r\n### Patch Changes\r\n\r\n-   7afdfef98: Bump dependency versions of @backstage/core, cli and test-utils\r\n-   Updated dependencies [a08c32ced]\r\n    -   @backstage/core@0.4.3\r\n\r\n ## @backstage/plugin-register-component@0.2.6\r\n\r\n### Patch Changes\r\n\r\n-   1517876fd: Register component plugin is deprecated in favor of @backstage/plugin-catalog-import\r\n-   Updated dependencies [a08c32ced]\r\n-   Updated dependencies [7e0b8cac5]\r\n-   Updated dependencies [87c0c53c2]\r\n    -   @backstage/core@0.4.3\r\n    -   @backstage/plugin-catalog@0.2.9\r\n\r\n ## @backstage/plugin-techdocs@0.5.2\r\n\r\n### Patch Changes\r\n\r\n-   359f9d2d8: Added configuration schema for the commonly used properties of techdocs and techdocs-backend plugins\r\n-   Updated dependencies [a08c32ced]\r\n-   Updated dependencies [7e0b8cac5]\r\n-   Updated dependencies [8804e8981]\r\n-   Updated dependencies [87c0c53c2]\r\n-   Updated dependencies [86c3c652a]\r\n-   Updated dependencies [27f2af935]\r\n    -   @backstage/core-api@0.2.8\r\n    -   @backstage/core@0.4.3\r\n    -   @backstage/plugin-catalog@0.2.9\r\n    -   @backstage/techdocs-common@0.3.1\r\n\r\n ## @backstage/plugin-techdocs-backend@0.5.1\r\n\r\n### Patch Changes\r\n\r\n-   8804e8981: Using @backstage/integration package for GitHub/GitLab/Azure tokens and request options.\r\n\r\n    Most probably you do not have to make any changes in the app because of this change.\r\n    However, if you are using the `DirectoryPreparer` or `CommonGitPreparer` exported by\r\n    `@backstage/techdocs-common` package, you now need to add pass in a `config` (from `@backstage/config`)\r\n    instance as argument.\r\n\r\n        <!-- Before -->\r\n            const directoryPreparer = new DirectoryPreparer(logger);\r\n            const commonGitPreparer = new CommonGitPreparer(logger);\r\n        <!-- Now -->\r\n            const directoryPreparer = new DirectoryPreparer(config, logger);\r\n            const commonGitPreparer = new CommonGitPreparer(config, logger);\r\n\r\n-   359f9d2d8: Added configuration schema for the commonly used properties of techdocs and techdocs-backend plugins\r\n\r\n-   Updated dependencies [8804e8981]\r\n    -   @backstage/techdocs-common@0.3.1\r\n',
  },
  {
    url: 'https://api.github.com/repos/backstage/backstage/releases/35801498',
    assets_url:
      'https://api.github.com/repos/backstage/backstage/releases/35801498/assets',
    upload_url:
      'https://uploads.github.com/repos/backstage/backstage/releases/35801498/assets{?name,label}',
    html_url: 'https://github.com/backstage/backstage/releases/tag/v0.1.1',
    id: 35801498,
    author: {
      login: 'Rugvip',
      id: 4984472,
      node_id: 'MDQ6VXNlcjQ5ODQ0NzI=',
      avatar_url: 'https://avatars2.githubusercontent.com/u/4984472?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Rugvip',
      html_url: 'https://github.com/Rugvip',
      followers_url: 'https://api.github.com/users/Rugvip/followers',
      following_url:
        'https://api.github.com/users/Rugvip/following{/other_user}',
      gists_url: 'https://api.github.com/users/Rugvip/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/Rugvip/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Rugvip/subscriptions',
      organizations_url: 'https://api.github.com/users/Rugvip/orgs',
      repos_url: 'https://api.github.com/users/Rugvip/repos',
      events_url: 'https://api.github.com/users/Rugvip/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Rugvip/received_events',
      type: 'User',
      site_admin: false,
    },
    node_id: 'MDc6UmVsZWFzZTM1ODAxNDk4',
    tag_name: 'v0.1.1',
    target_commitish: 'master',
    name: 'Transition to using Changesets',
    draft: false,
    prerelease: false,
    created_at: '2020-11-03T12:48:49Z',
    published_at: '2020-12-29T11:40:25Z',
    assets: [],
    tarball_url:
      'https://api.github.com/repos/backstage/backstage/tarball/v0.1.1',
    zipball_url:
      'https://api.github.com/repos/backstage/backstage/zipball/v0.1.1',
    body:
      'This release marks the transition from lerna versioning to [changesets](https://github.com/atlassian/changesets), as well as from fixed alpha prereleases to decoupled version `0.x` semver versioning. From this release until version `1.0`, minor version bumps indicate a breaking change to a package.\r\n\r\nThis release does not contain any changes on top of the last prerelease.',
  },
  {
    url: 'https://api.github.com/repos/backstage/backstage/releases/35801346',
    assets_url:
      'https://api.github.com/repos/backstage/backstage/releases/35801346/assets',
    upload_url:
      'https://uploads.github.com/repos/backstage/backstage/releases/35801346/assets{?name,label}',
    html_url: 'https://github.com/backstage/backstage/releases/tag/v0.4.2',
    id: 35801346,
    author: {
      login: 'Rugvip',
      id: 4984472,
      node_id: 'MDQ6VXNlcjQ5ODQ0NzI=',
      avatar_url: 'https://avatars2.githubusercontent.com/u/4984472?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Rugvip',
      html_url: 'https://github.com/Rugvip',
      followers_url: 'https://api.github.com/users/Rugvip/followers',
      following_url:
        'https://api.github.com/users/Rugvip/following{/other_user}',
      gists_url: 'https://api.github.com/users/Rugvip/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/Rugvip/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Rugvip/subscriptions',
      organizations_url: 'https://api.github.com/users/Rugvip/orgs',
      repos_url: 'https://api.github.com/users/Rugvip/repos',
      events_url: 'https://api.github.com/users/Rugvip/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Rugvip/received_events',
      type: 'User',
      site_admin: false,
    },
    node_id: 'MDc6UmVsZWFzZTM1ODAxMzQ2',
    tag_name: 'v0.4.2',
    target_commitish: 'master',
    name: 'v0.4.2',
    draft: false,
    prerelease: false,
    created_at: '2020-12-22T14:23:57Z',
    published_at: '2020-12-29T11:33:46Z',
    assets: [],
    tarball_url:
      'https://api.github.com/repos/backstage/backstage/tarball/v0.4.2',
    zipball_url:
      'https://api.github.com/repos/backstage/backstage/zipball/v0.4.2',
    body:
      "## @backstage/create-app@0.3.0\n\n### Minor Changes\n\n-   0101c7a16: Add search plugin to default template for CLI created apps\n\n### Patch Changes\n\n-   a8573e53b: techdocs-backend: Simplified file, removing individual preparers and generators.\n    techdocs-backend: UrlReader is now available to use in preparers.\n\n    In your Backstage app, `packages/backend/plugins/techdocs.ts` file has now been simplified,\n    to remove registering individual preparers and generators.\n\n    Please update the file when upgrading the version of `@backstage/plugin-techdocs-backend` package.\n\n    ```typescript\n    const preparers = await Preparers.fromConfig(config, {\n      logger,\n      reader,\n    });\n\n    const generators = await Generators.fromConfig(config, {\n      logger,\n    });\n\n    const publisher = await Publisher.fromConfig(config, {\n      logger,\n      discovery,\n    });\n    ```\n\n    You should be able to remove unnecessary imports, and just do\n\n    ```typescript\n    import {\n      createRouter,\n      Preparers,\n      Generators,\n      Publisher,\n    } from '@backstage/plugin-techdocs-backend';\n    ```\n\n ## @backstage/techdocs-common@0.3.0\n\n### Minor Changes\n\n-   a8573e53b: techdocs-backend: Simplified file, removing individual preparers and generators.\n    techdocs-backend: UrlReader is now available to use in preparers.\n\n    In your Backstage app, `packages/backend/plugins/techdocs.ts` file has now been simplified,\n    to remove registering individual preparers and generators.\n\n    Please update the file when upgrading the version of `@backstage/plugin-techdocs-backend` package.\n\n    ```typescript\n    const preparers = await Preparers.fromConfig(config, {\n      logger,\n      reader,\n    });\n\n    const generators = await Generators.fromConfig(config, {\n      logger,\n    });\n\n    const publisher = await Publisher.fromConfig(config, {\n      logger,\n      discovery,\n    });\n    ```\n\n    You should be able to remove unnecessary imports, and just do\n\n    ```typescript\n    import {\n      createRouter,\n      Preparers,\n      Generators,\n      Publisher,\n    } from '@backstage/plugin-techdocs-backend';\n    ```\n\n ## @backstage/plugin-techdocs-backend@0.5.0\n\n### Minor Changes\n\n-   a8573e53b: techdocs-backend: Simplified file, removing individual preparers and generators.\n    techdocs-backend: UrlReader is now available to use in preparers.\n\n    In your Backstage app, `packages/backend/plugins/techdocs.ts` file has now been simplified,\n    to remove registering individual preparers and generators.\n\n    Please update the file when upgrading the version of `@backstage/plugin-techdocs-backend` package.\n\n    ```typescript\n    const preparers = await Preparers.fromConfig(config, {\n      logger,\n      reader,\n    });\n\n    const generators = await Generators.fromConfig(config, {\n      logger,\n    });\n\n    const publisher = await Publisher.fromConfig(config, {\n      logger,\n      discovery,\n    });\n    ```\n\n    You should be able to remove unnecessary imports, and just do\n\n    ```typescript\n    import {\n      createRouter,\n      Preparers,\n      Generators,\n      Publisher,\n    } from '@backstage/plugin-techdocs-backend';\n    ```\n\n### Patch Changes\n\n-   Updated dependencies [a8573e53b]\n    -   @backstage/techdocs-common@0.3.0\n\n ## @backstage/cli@0.4.3\n\n### Patch Changes\n\n-   19554f6d6: Added Github Actions for Create React App, and allow better imports of files inside a module when they're exposed using `files` in `package.json`\n-   7d72f9b09: Fix for `app.listen.host` configuration not properly overriding listening host.\n\n ## @backstage/core@0.4.2\n\n### Patch Changes\n\n-   1dc445e89: Update to use new plugin extension API\n-   342270e4d: Create AboutCard in core and use it in pagerduty and catalog plugin\n-   Updated dependencies [d681db2b5]\n-   Updated dependencies [1dc445e89]\n    -   @backstage/core-api@0.2.7\n\n ## @backstage/core-api@0.2.7\n\n### Patch Changes\n\n-   d681db2b5: Fix for GitHub and SAML auth not properly updating session state when already logged in.\n-   1dc445e89: Introduce new plugin extension API\n-   Updated dependencies [1dc445e89]\n    -   @backstage/test-utils@0.1.6\n\n ## @backstage/test-utils@0.1.6\n\n### Patch Changes\n\n-   1dc445e89: Update to use new plugin extension API\n-   Updated dependencies [d681db2b5]\n-   Updated dependencies [1dc445e89]\n    -   @backstage/core-api@0.2.7\n\n ## @backstage/plugin-catalog@0.2.8\n\n### Patch Changes\n\n-   342270e4d: Create AboutCard in core and use it in pagerduty and catalog plugin\n-   Updated dependencies [19554f6d6]\n-   Updated dependencies [1dc445e89]\n-   Updated dependencies [342270e4d]\n    -   @backstage/plugin-scaffolder@0.3.5\n    -   @backstage/core@0.4.2\n    -   @backstage/plugin-techdocs@0.5.1\n\n ## @backstage/plugin-catalog-backend@0.5.1\n\n### Patch Changes\n\n-   5de26b9a6: Start warning about usage of deprecated location types, such as `github`\n-   30d6c78fb: Added configuration schema for the commonly used properties\n-   5084e5039: Updated the config schema\n\n ## @backstage/plugin-github-actions@0.2.6\n\n### Patch Changes\n\n-   19554f6d6: Added Github Actions for Create React App, and allow better imports of files inside a module when they're exposed using `files` in `package.json`\n-   Updated dependencies [d681db2b5]\n-   Updated dependencies [1dc445e89]\n-   Updated dependencies [342270e4d]\n-   Updated dependencies [1dc445e89]\n    -   @backstage/core-api@0.2.7\n    -   @backstage/core@0.4.2\n    -   @backstage/plugin-catalog@0.2.8\n\n ## @backstage/plugin-graphiql@0.2.3\n\n### Patch Changes\n\n-   1dc445e89: Update to use new plugin extension API\n-   Updated dependencies [1dc445e89]\n-   Updated dependencies [342270e4d]\n    -   @backstage/core@0.4.2\n\n ## @backstage/plugin-pagerduty@0.2.4\n\n### Patch Changes\n\n-   342270e4d: Create AboutCard in core and use it in pagerduty and catalog plugin\n-   Updated dependencies [1dc445e89]\n-   Updated dependencies [342270e4d]\n    -   @backstage/core@0.4.2\n\n ## @backstage/plugin-scaffolder@0.3.5\n\n### Patch Changes\n\n-   19554f6d6: Added Github Actions for Create React App, and allow better imports of files inside a module when they're exposed using `files` in `package.json`\n-   Updated dependencies [1dc445e89]\n-   Updated dependencies [342270e4d]\n    -   @backstage/core@0.4.2\n    -   @backstage/plugin-catalog@0.2.8\n\n ## @backstage/plugin-scaffolder-backend@0.3.6\n\n### Patch Changes\n\n-   19554f6d6: Added Github Actions for Create React App, and allow better imports of files inside a module when they're exposed using `files` in `package.json`\n-   33a82a713: GitLab preparer uses the right token (primarily the same one as the publisher, falling back to the integrations token)\n-   aed8f7f12: Clearer error message when preparer or publisher type can't be determined.\n\n ## @backstage/plugin-techdocs@0.5.1\n\n### Patch Changes\n\n-   Updated dependencies [d681db2b5]\n-   Updated dependencies [1dc445e89]\n-   Updated dependencies [342270e4d]\n-   Updated dependencies [1dc445e89]\n-   Updated dependencies [a8573e53b]\n    -   @backstage/core-api@0.2.7\n    -   @backstage/core@0.4.2\n    -   @backstage/test-utils@0.1.6\n    -   @backstage/plugin-catalog@0.2.8\n    -   @backstage/techdocs-common@0.3.0\n\n ## example-app@0.2.8\n\n### Patch Changes\n\n-   Updated dependencies [19554f6d6]\n-   Updated dependencies [1dc445e89]\n-   Updated dependencies [342270e4d]\n-   Updated dependencies [7d72f9b09]\n    -   @backstage/cli@0.4.3\n    -   @backstage/plugin-github-actions@0.2.6\n    -   @backstage/plugin-scaffolder@0.3.5\n    -   @backstage/core@0.4.2\n    -   @backstage/test-utils@0.1.6\n    -   @backstage/plugin-graphiql@0.2.3\n    -   @backstage/plugin-catalog@0.2.8\n    -   @backstage/plugin-pagerduty@0.2.4\n    -   @backstage/plugin-techdocs@0.5.1\n\n ## example-backend@0.2.8\n\n### Patch Changes\n\n-   7cfcd58ee: use node 14 for backend Dockerfile\n-   Updated dependencies [19554f6d6]\n-   Updated dependencies [33a82a713]\n-   Updated dependencies [5de26b9a6]\n-   Updated dependencies [30d6c78fb]\n-   Updated dependencies [5084e5039]\n-   Updated dependencies [a8573e53b]\n-   Updated dependencies [aed8f7f12]\n    -   @backstage/plugin-scaffolder-backend@0.3.6\n    -   @backstage/plugin-catalog-backend@0.5.1\n    -   @backstage/plugin-techdocs-backend@0.5.0\n    -   example-app@0.2.8\n",
  },
  {
    url: 'https://api.github.com/repos/backstage/backstage/releases/35801342',
    assets_url:
      'https://api.github.com/repos/backstage/backstage/releases/35801342/assets',
    upload_url:
      'https://uploads.github.com/repos/backstage/backstage/releases/35801342/assets{?name,label}',
    html_url: 'https://github.com/backstage/backstage/releases/tag/v0.4.1',
    id: 35801342,
    author: {
      login: 'Rugvip',
      id: 4984472,
      node_id: 'MDQ6VXNlcjQ5ODQ0NzI=',
      avatar_url: 'https://avatars2.githubusercontent.com/u/4984472?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Rugvip',
      html_url: 'https://github.com/Rugvip',
      followers_url: 'https://api.github.com/users/Rugvip/followers',
      following_url:
        'https://api.github.com/users/Rugvip/following{/other_user}',
      gists_url: 'https://api.github.com/users/Rugvip/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/Rugvip/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Rugvip/subscriptions',
      organizations_url: 'https://api.github.com/users/Rugvip/orgs',
      repos_url: 'https://api.github.com/users/Rugvip/repos',
      events_url: 'https://api.github.com/users/Rugvip/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Rugvip/received_events',
      type: 'User',
      site_admin: false,
    },
    node_id: 'MDc6UmVsZWFzZTM1ODAxMzQy',
    tag_name: 'v0.4.1',
    target_commitish: 'master',
    name: 'v0.4.1',
    draft: false,
    prerelease: false,
    created_at: '2020-12-17T11:49:21Z',
    published_at: '2020-12-29T11:33:42Z',
    assets: [],
    tarball_url:
      'https://api.github.com/repos/backstage/backstage/tarball/v0.4.1',
    zipball_url:
      'https://api.github.com/repos/backstage/backstage/zipball/v0.4.1',
    body:
      "## @backstage/catalog-model@0.6.0\n\n### Minor Changes\n\n-   ac3560b42: Remove `implementsApis` from `Component` entities. Deprecation happened in [#3449](https://github.com/backstage/backstage/pull/3449).\n    Use `providesApis` instead.\n\n### Patch Changes\n\n-   c911061b7: Introduce a `profile` section for group entities that can optional include a\n    `displayName`, `email` and `picture`.\n-   0e6298f7e: Ignore relations when comparing entities. This stops the refresh loop from rewriting entities over and over.\n\n ## @backstage/techdocs-common@0.2.0\n\n### Minor Changes\n\n-   dae4f3983: _Breaking changes_\n\n    1.  Added option to use Google Cloud Storage as a choice to store the static generated files for TechDocs.\n        It can be configured using `techdocs.publisher.type` option in `app-config.yaml`.\n        Step-by-step guide to configure GCS is available here <https://backstage.io/docs/features/techdocs/using-cloud-storage>\n        Set `techdocs.publisher.type` to `'local'` if you want to continue using local filesystem to store TechDocs files.\n\n    2.  `techdocs.builder` is now required and can be set to `'local'` or `'external'`. (Set it to `'local'` for now, since CI/CD build\n        workflow for TechDocs will be available soon (in few weeks)).\n        If builder is set to 'local' and you open a TechDocs page, `techdocs-backend` will try to generate the docs, publish to storage and\n        show the generated docs afterwords.\n        If builder is set to `'external'`, `techdocs-backend` will only fetch the docs and will NOT try to generate and publish. In this case of `'external'`,\n        we assume that docs are being built in the CI/CD pipeline of the repository.\n        TechDocs will not assume a default value for `techdocs.builder`. It is better to explicitly define it in the `app-config.yaml`.\n\n    3.  When configuring TechDocs in your backend, there is a difference in how a new publisher is created.\n\n        ---  const publisher = new LocalPublish(logger, discovery);\n        +++  const publisher = Publisher.fromConfig(config, logger, discovery);\n\n    Based on the config `techdocs.publisher.type`, the publisher could be either Local publisher or Google Cloud Storage publisher.\n\n    4.  `techdocs.storageUrl` is now a required config. Should be `http://localhost:7000/api/techdocs/static/docs` in most setups.\n\n    5.  Parts of `@backstage/plugin-techdocs-backend` have been moved to a new package `@backstage/techdocs-common` to generate docs. Also to publish docs\n        to-and-fro between TechDocs and a storage (either local or external). However, a Backstage app does NOT need to import the `techdocs-common` package -\n        app should only import `@backstage/plugin-techdocs` and `@backstage/plugin-techdocs-backend`.\n\n    _Patch changes_\n\n    1.  See all of TechDocs config options and its documentation <https://backstage.io/docs/features/techdocs/configuration>\n\n    2.  Logic about serving static files and metadata retrieval have been abstracted away from the router in `techdocs-backend` to the instance of publisher.\n\n    3.  Removed Material UI Spinner from TechDocs header. Spinners cause unnecessary UX distraction.\n        Case 1 (when docs are built and are to be served): Spinners appear for a split second before the name of site shows up. This unnecessarily distracts eyes because spinners increase the size of the Header. A dot (.) would do fine. Definitely more can be done.\n        Case 2 (when docs are being generated): There is already a linear progress bar (which is recommended in Storybook).\n\n### Patch Changes\n\n-   Updated dependencies [c911061b7]\n-   Updated dependencies [1d1c2860f]\n-   Updated dependencies [0e6298f7e]\n-   Updated dependencies [4eafdec4a]\n-   Updated dependencies [ac3560b42]\n    -   @backstage/catalog-model@0.6.0\n    -   @backstage/backend-common@0.4.1\n\n ## @backstage/plugin-catalog-backend@0.5.0\n\n### Minor Changes\n\n-   6b37c95bf: Write relations directly as part of batch add / update of entities.\n\n    Slight change of the `CommonDatabase` contract:\n\n    ## `addEntity` removed\n\n    This method was unused by the core, and rendered unnecessary when `addEntities`\n    exists.\n\n    If you were a user of `addEntity`, please call `addEntities` instead, with an\n    array of one element.\n\n    ## `DbEntityRequest` has a new field `relations`\n\n    This is the structure that is passed to `addEntities` and `updateEntity`. It\n    used to be the case that you needed to call `setRelations` separately, but now\n    this instead happens directly when you call `addEntities` or `updateEntity`.\n\n    If you were using `addEntities` or `updateEntity` directly, please adapt your\n    code to add the `relations` array to each request. If you were calling\n    `setRelations` separately next to these methods, you no longer need to do so,\n    after adding the relations to the `DbEntityRequest`s.\n\n-   ac3560b42: Remove `implementsApis` from `Component` entities. Deprecation happened in [#3449](https://github.com/backstage/backstage/pull/3449).\n    Use `providesApis` instead.\n\n### Patch Changes\n\n-   c6eeefa35: Add support for Github Enterprise in GitHubOrgReaderProcessor so you can properly ingest users of a GHE organization.\n-   fb386b760: Break the refresh loop into several smaller transactions\n-   7c3ffc0cd: Support `profile` of groups including `displayName`, `email`, and `picture` in\n    `LdapOrgReaderProcessor`. The source fields for them can be configured in the\n    `ldapOrg` provider.\n-   e7496dc3e: Break out GithubOrgReaderProcessor config into its own file for consistency with the other org processors.\n-   8dd0a906d: Support `profile` of groups including `displayName` and `picture` in\n    `GithubOrgReaderProcessor`. Fixes the import of `description` for groups.\n-   8c31c681c: Batch the writing of statuses after refreshes. This reduced the runtime on sqlite from 16s to 0.2s, and on pg from 60s to 1s on my machine, for the huge LDAP set.\n-   7b98e7fee: Add index to foreign key columns. Postgres (and others) do not do this on the \"source\" side of a foreign key relation, which was what led to the slowness on large datasets. The full LDAP dataset ingestion now takes two minutes, which is not optimal yet but still a huge improvement over before when it basically never finished :)\n-   0097057ed: Support `profile` of groups including `displayName` and `email` in\n    `MicrosoftGraphOrgReaderProcessor`. Importing `picture` doesn't work yet, as\n    the Microsoft Graph API does not expose them correctly.\n-   Updated dependencies [c911061b7]\n-   Updated dependencies [1d1c2860f]\n-   Updated dependencies [0e6298f7e]\n-   Updated dependencies [4eafdec4a]\n-   Updated dependencies [ac3560b42]\n    -   @backstage/catalog-model@0.6.0\n    -   @backstage/backend-common@0.4.1\n\n ## @backstage/plugin-techdocs@0.5.0\n\n### Minor Changes\n\n-   dae4f3983: _Breaking changes_\n\n    1.  Added option to use Google Cloud Storage as a choice to store the static generated files for TechDocs.\n        It can be configured using `techdocs.publisher.type` option in `app-config.yaml`.\n        Step-by-step guide to configure GCS is available here <https://backstage.io/docs/features/techdocs/using-cloud-storage>\n        Set `techdocs.publisher.type` to `'local'` if you want to continue using local filesystem to store TechDocs files.\n\n    2.  `techdocs.builder` is now required and can be set to `'local'` or `'external'`. (Set it to `'local'` for now, since CI/CD build\n        workflow for TechDocs will be available soon (in few weeks)).\n        If builder is set to 'local' and you open a TechDocs page, `techdocs-backend` will try to generate the docs, publish to storage and\n        show the generated docs afterwords.\n        If builder is set to `'external'`, `techdocs-backend` will only fetch the docs and will NOT try to generate and publish. In this case of `'external'`,\n        we assume that docs are being built in the CI/CD pipeline of the repository.\n        TechDocs will not assume a default value for `techdocs.builder`. It is better to explicitly define it in the `app-config.yaml`.\n\n    3.  When configuring TechDocs in your backend, there is a difference in how a new publisher is created.\n\n        ---  const publisher = new LocalPublish(logger, discovery);\n        +++  const publisher = Publisher.fromConfig(config, logger, discovery);\n\n    Based on the config `techdocs.publisher.type`, the publisher could be either Local publisher or Google Cloud Storage publisher.\n\n    4.  `techdocs.storageUrl` is now a required config. Should be `http://localhost:7000/api/techdocs/static/docs` in most setups.\n\n    5.  Parts of `@backstage/plugin-techdocs-backend` have been moved to a new package `@backstage/techdocs-common` to generate docs. Also to publish docs\n        to-and-fro between TechDocs and a storage (either local or external). However, a Backstage app does NOT need to import the `techdocs-common` package -\n        app should only import `@backstage/plugin-techdocs` and `@backstage/plugin-techdocs-backend`.\n\n    _Patch changes_\n\n    1.  See all of TechDocs config options and its documentation <https://backstage.io/docs/features/techdocs/configuration>\n\n    2.  Logic about serving static files and metadata retrieval have been abstracted away from the router in `techdocs-backend` to the instance of publisher.\n\n    3.  Removed Material UI Spinner from TechDocs header. Spinners cause unnecessary UX distraction.\n        Case 1 (when docs are built and are to be served): Spinners appear for a split second before the name of site shows up. This unnecessarily distracts eyes because spinners increase the size of the Header. A dot (.) would do fine. Definitely more can be done.\n        Case 2 (when docs are being generated): There is already a linear progress bar (which is recommended in Storybook).\n\n### Patch Changes\n\n-   Updated dependencies [c911061b7]\n-   Updated dependencies [dae4f3983]\n-   Updated dependencies [8ef71ed32]\n-   Updated dependencies [0e6298f7e]\n-   Updated dependencies [7dd2ef7d1]\n-   Updated dependencies [ac3560b42]\n    -   @backstage/catalog-model@0.6.0\n    -   @backstage/techdocs-common@0.2.0\n    -   @backstage/core@0.4.1\n    -   @backstage/core-api@0.2.6\n    -   @backstage/plugin-catalog@0.2.7\n\n ## @backstage/plugin-techdocs-backend@0.4.0\n\n### Minor Changes\n\n-   dae4f3983: _Breaking changes_\n\n    1.  Added option to use Google Cloud Storage as a choice to store the static generated files for TechDocs.\n        It can be configured using `techdocs.publisher.type` option in `app-config.yaml`.\n        Step-by-step guide to configure GCS is available here <https://backstage.io/docs/features/techdocs/using-cloud-storage>\n        Set `techdocs.publisher.type` to `'local'` if you want to continue using local filesystem to store TechDocs files.\n\n    2.  `techdocs.builder` is now required and can be set to `'local'` or `'external'`. (Set it to `'local'` for now, since CI/CD build\n        workflow for TechDocs will be available soon (in few weeks)).\n        If builder is set to 'local' and you open a TechDocs page, `techdocs-backend` will try to generate the docs, publish to storage and\n        show the generated docs afterwords.\n        If builder is set to `'external'`, `techdocs-backend` will only fetch the docs and will NOT try to generate and publish. In this case of `'external'`,\n        we assume that docs are being built in the CI/CD pipeline of the repository.\n        TechDocs will not assume a default value for `techdocs.builder`. It is better to explicitly define it in the `app-config.yaml`.\n\n    3.  When configuring TechDocs in your backend, there is a difference in how a new publisher is created.\n\n        ---  const publisher = new LocalPublish(logger, discovery);\n        +++  const publisher = Publisher.fromConfig(config, logger, discovery);\n\n    Based on the config `techdocs.publisher.type`, the publisher could be either Local publisher or Google Cloud Storage publisher.\n\n    4.  `techdocs.storageUrl` is now a required config. Should be `http://localhost:7000/api/techdocs/static/docs` in most setups.\n\n    5.  Parts of `@backstage/plugin-techdocs-backend` have been moved to a new package `@backstage/techdocs-common` to generate docs. Also to publish docs\n        to-and-fro between TechDocs and a storage (either local or external). However, a Backstage app does NOT need to import the `techdocs-common` package -\n        app should only import `@backstage/plugin-techdocs` and `@backstage/plugin-techdocs-backend`.\n\n    _Patch changes_\n\n    1.  See all of TechDocs config options and its documentation <https://backstage.io/docs/features/techdocs/configuration>\n\n    2.  Logic about serving static files and metadata retrieval have been abstracted away from the router in `techdocs-backend` to the instance of publisher.\n\n    3.  Removed Material UI Spinner from TechDocs header. Spinners cause unnecessary UX distraction.\n        Case 1 (when docs are built and are to be served): Spinners appear for a split second before the name of site shows up. This unnecessarily distracts eyes because spinners increase the size of the Header. A dot (.) would do fine. Definitely more can be done.\n        Case 2 (when docs are being generated): There is already a linear progress bar (which is recommended in Storybook).\n\n### Patch Changes\n\n-   Updated dependencies [c911061b7]\n-   Updated dependencies [dae4f3983]\n-   Updated dependencies [1d1c2860f]\n-   Updated dependencies [0e6298f7e]\n-   Updated dependencies [4eafdec4a]\n-   Updated dependencies [ac3560b42]\n    -   @backstage/catalog-model@0.6.0\n    -   @backstage/techdocs-common@0.2.0\n    -   @backstage/backend-common@0.4.1\n\n ## @backstage/backend-common@0.4.1\n\n### Patch Changes\n\n-   1d1c2860f: Implement readTree on BitBucketUrlReader and getBitbucketDownloadUrl\n-   4eafdec4a: Introduce readTree method for GitLab URL Reader\n-   Updated dependencies [1d1c2860f]\n-   Updated dependencies [4eafdec4a]\n-   Updated dependencies [178e09323]\n    -   @backstage/integration@0.1.4\n\n ## @backstage/catalog-client@0.3.4\n\n### Patch Changes\n\n-   Updated dependencies [c911061b7]\n-   Updated dependencies [0e6298f7e]\n-   Updated dependencies [ac3560b42]\n    -   @backstage/catalog-model@0.6.0\n\n ## @backstage/cli@0.4.2\n\n### Patch Changes\n\n-   c36a01b4c: Re-enable symlink resolution during bundling, and switch to using a resolve plugin for external linked packages.\n\n ## @backstage/core@0.4.1\n\n### Patch Changes\n\n-   8ef71ed32: Add a `<Avatar>` component to `@backstage/core`.\n-   Updated dependencies [7dd2ef7d1]\n    -   @backstage/core-api@0.2.6\n\n ## @backstage/core-api@0.2.6\n\n### Patch Changes\n\n-   7dd2ef7d1: Use auth provider ID to create unique session storage keys for GitHub and SAML Auth.\n\n ## @backstage/create-app@0.2.5\n\n### Patch Changes\n\n-   2783ec018: In the techdocs-backend plugin (`packages/backend/src/plugins/techdocs.ts`), create a publisher using\n\n          const publisher = Publisher.fromConfig(config, logger, discovery);\n\n    instead of\n\n          const publisher = new LocalPublish(logger, discovery);\n\n    An instance of `publisher` can either be a local filesystem publisher or a Google Cloud Storage publisher.\n\n    Read more about the configs here <https://backstage.io/docs/features/techdocs/configuration>\n    (You will also have to update `techdocs.storage.type` to `local` or `googleGcs`. And `techdocs.builder` to either `local` or `external`.)\n\n ## @backstage/integration@0.1.4\n\n### Patch Changes\n\n-   1d1c2860f: Implement readTree on BitBucketUrlReader and getBitbucketDownloadUrl\n-   4eafdec4a: Introduce readTree method for GitLab URL Reader\n-   178e09323: Validate that integration config contains a valid host\n\n ## @backstage/plugin-api-docs@0.4.1\n\n### Patch Changes\n\n-   Updated dependencies [c911061b7]\n-   Updated dependencies [8ef71ed32]\n-   Updated dependencies [0e6298f7e]\n-   Updated dependencies [ac3560b42]\n    -   @backstage/catalog-model@0.6.0\n    -   @backstage/core@0.4.1\n    -   @backstage/plugin-catalog@0.2.7\n\n ## @backstage/plugin-auth-backend@0.2.7\n\n### Patch Changes\n\n-   7b15cc271: Added configuration schema for the commonly used properties\n-   Updated dependencies [c911061b7]\n-   Updated dependencies [1d1c2860f]\n-   Updated dependencies [0e6298f7e]\n-   Updated dependencies [4eafdec4a]\n-   Updated dependencies [ac3560b42]\n    -   @backstage/catalog-model@0.6.0\n    -   @backstage/backend-common@0.4.1\n    -   @backstage/catalog-client@0.3.4\n\n ## @backstage/plugin-catalog@0.2.7\n\n### Patch Changes\n\n-   Updated dependencies [c911061b7]\n-   Updated dependencies [dae4f3983]\n-   Updated dependencies [8ef71ed32]\n-   Updated dependencies [0e6298f7e]\n-   Updated dependencies [ac3560b42]\n    -   @backstage/catalog-model@0.6.0\n    -   @backstage/plugin-techdocs@0.5.0\n    -   @backstage/core@0.4.1\n    -   @backstage/catalog-client@0.3.4\n    -   @backstage/plugin-scaffolder@0.3.4\n\n ## @backstage/plugin-catalog-graphql@0.2.5\n\n### Patch Changes\n\n-   Updated dependencies [c911061b7]\n-   Updated dependencies [1d1c2860f]\n-   Updated dependencies [0e6298f7e]\n-   Updated dependencies [4eafdec4a]\n-   Updated dependencies [ac3560b42]\n    -   @backstage/catalog-model@0.6.0\n    -   @backstage/backend-common@0.4.1\n\n ## @backstage/plugin-catalog-import@0.3.2\n\n### Patch Changes\n\n-   f3e75508d: Add description to Pull Request when registering a new component\n-   Updated dependencies [c6eeefa35]\n-   Updated dependencies [fb386b760]\n-   Updated dependencies [c911061b7]\n-   Updated dependencies [7c3ffc0cd]\n-   Updated dependencies [e7496dc3e]\n-   Updated dependencies [8ef71ed32]\n-   Updated dependencies [1d1c2860f]\n-   Updated dependencies [0e6298f7e]\n-   Updated dependencies [8dd0a906d]\n-   Updated dependencies [4eafdec4a]\n-   Updated dependencies [6b37c95bf]\n-   Updated dependencies [8c31c681c]\n-   Updated dependencies [7b98e7fee]\n-   Updated dependencies [178e09323]\n-   Updated dependencies [ac3560b42]\n-   Updated dependencies [0097057ed]\n    -   @backstage/plugin-catalog-backend@0.5.0\n    -   @backstage/catalog-model@0.6.0\n    -   @backstage/core@0.4.1\n    -   @backstage/integration@0.1.4\n    -   @backstage/plugin-catalog@0.2.7\n\n ## @backstage/plugin-circleci@0.2.5\n\n### Patch Changes\n\n-   Updated dependencies [c911061b7]\n-   Updated dependencies [8ef71ed32]\n-   Updated dependencies [0e6298f7e]\n-   Updated dependencies [ac3560b42]\n    -   @backstage/catalog-model@0.6.0\n    -   @backstage/core@0.4.1\n    -   @backstage/plugin-catalog@0.2.7\n\n ## @backstage/plugin-cloudbuild@0.2.5\n\n### Patch Changes\n\n-   Updated dependencies [c911061b7]\n-   Updated dependencies [8ef71ed32]\n-   Updated dependencies [0e6298f7e]\n-   Updated dependencies [ac3560b42]\n    -   @backstage/catalog-model@0.6.0\n    -   @backstage/core@0.4.1\n    -   @backstage/plugin-catalog@0.2.7\n\n ## @backstage/plugin-cost-insights@0.5.2\n\n### Patch Changes\n\n-   48c305e69: pin all projects selection to the top of menu list\n-   Updated dependencies [8ef71ed32]\n    -   @backstage/core@0.4.1\n\n ## @backstage/plugin-github-actions@0.2.5\n\n### Patch Changes\n\n-   Updated dependencies [c911061b7]\n-   Updated dependencies [8ef71ed32]\n-   Updated dependencies [0e6298f7e]\n-   Updated dependencies [7dd2ef7d1]\n-   Updated dependencies [ac3560b42]\n    -   @backstage/catalog-model@0.6.0\n    -   @backstage/core@0.4.1\n    -   @backstage/core-api@0.2.6\n    -   @backstage/plugin-catalog@0.2.7\n\n ## @backstage/plugin-jenkins@0.3.4\n\n### Patch Changes\n\n-   Updated dependencies [c911061b7]\n-   Updated dependencies [8ef71ed32]\n-   Updated dependencies [0e6298f7e]\n-   Updated dependencies [ac3560b42]\n    -   @backstage/catalog-model@0.6.0\n    -   @backstage/core@0.4.1\n    -   @backstage/plugin-catalog@0.2.7\n\n ## @backstage/plugin-kubernetes@0.3.3\n\n### Patch Changes\n\n-   Updated dependencies [c911061b7]\n-   Updated dependencies [8ef71ed32]\n-   Updated dependencies [0e6298f7e]\n-   Updated dependencies [ac3560b42]\n    -   @backstage/catalog-model@0.6.0\n    -   @backstage/core@0.4.1\n    -   @backstage/plugin-kubernetes-backend@0.2.3\n\n ## @backstage/plugin-kubernetes-backend@0.2.3\n\n### Patch Changes\n\n-   Updated dependencies [c911061b7]\n-   Updated dependencies [1d1c2860f]\n-   Updated dependencies [0e6298f7e]\n-   Updated dependencies [4eafdec4a]\n-   Updated dependencies [ac3560b42]\n    -   @backstage/catalog-model@0.6.0\n    -   @backstage/backend-common@0.4.1\n\n ## @backstage/plugin-lighthouse@0.2.6\n\n### Patch Changes\n\n-   Updated dependencies [c911061b7]\n-   Updated dependencies [8ef71ed32]\n-   Updated dependencies [0e6298f7e]\n-   Updated dependencies [7dd2ef7d1]\n-   Updated dependencies [ac3560b42]\n    -   @backstage/catalog-model@0.6.0\n    -   @backstage/core@0.4.1\n    -   @backstage/core-api@0.2.6\n    -   @backstage/plugin-catalog@0.2.7\n\n ## @backstage/plugin-org@0.3.2\n\n### Patch Changes\n\n-   c0fac6163: Wrap entity cards on smaller screens\n\n-   ab805860a: Ensure a name is always displayed for user entities in the org plugin. This can happen when there is no profile\n    displayName provided (e.g. a GitHub user that has not added a name to their profile)\n\n-   8ef71ed32: Add a `<Avatar>` component to `@backstage/core`.\n\n-   c5297baeb: Display the new `profile` fields (`displayName`, `email`, and `picture`) for\n    groups on the `GroupProfileCard`.\n\n    This also resolves some cases where `profile` fields are missing for users or\n    groups and for example falls back to displaying the entity name. Adds additional test data to the ACME Corp dataset.\n\n-   Updated dependencies [c911061b7]\n\n-   Updated dependencies [8ef71ed32]\n\n-   Updated dependencies [0e6298f7e]\n\n-   Updated dependencies [ac3560b42]\n    -   @backstage/catalog-model@0.6.0\n    -   @backstage/core@0.4.1\n    -   @backstage/plugin-catalog@0.2.7\n\n ## @backstage/plugin-pagerduty@0.2.3\n\n### Patch Changes\n\n-   3b50f833d: Supporting Timezones\n-   Updated dependencies [c911061b7]\n-   Updated dependencies [8ef71ed32]\n-   Updated dependencies [0e6298f7e]\n-   Updated dependencies [ac3560b42]\n    -   @backstage/catalog-model@0.6.0\n    -   @backstage/core@0.4.1\n\n ## @backstage/plugin-register-component@0.2.5\n\n### Patch Changes\n\n-   Updated dependencies [c911061b7]\n-   Updated dependencies [8ef71ed32]\n-   Updated dependencies [0e6298f7e]\n-   Updated dependencies [ac3560b42]\n    -   @backstage/catalog-model@0.6.0\n    -   @backstage/core@0.4.1\n    -   @backstage/plugin-catalog@0.2.7\n\n ## @backstage/plugin-rollbar@0.2.7\n\n### Patch Changes\n\n-   Updated dependencies [c911061b7]\n-   Updated dependencies [8ef71ed32]\n-   Updated dependencies [0e6298f7e]\n-   Updated dependencies [ac3560b42]\n    -   @backstage/catalog-model@0.6.0\n    -   @backstage/core@0.4.1\n    -   @backstage/plugin-catalog@0.2.7\n\n ## @backstage/plugin-scaffolder@0.3.4\n\n### Patch Changes\n\n-   Updated dependencies [c911061b7]\n-   Updated dependencies [8ef71ed32]\n-   Updated dependencies [0e6298f7e]\n-   Updated dependencies [ac3560b42]\n    -   @backstage/catalog-model@0.6.0\n    -   @backstage/core@0.4.1\n    -   @backstage/plugin-catalog@0.2.7\n\n ## @backstage/plugin-scaffolder-backend@0.3.5\n\n### Patch Changes\n\n-   94c65a9d4: Added configuration schema for the commonly used properties\n-   Updated dependencies [c911061b7]\n-   Updated dependencies [1d1c2860f]\n-   Updated dependencies [0e6298f7e]\n-   Updated dependencies [4eafdec4a]\n-   Updated dependencies [ac3560b42]\n    -   @backstage/catalog-model@0.6.0\n    -   @backstage/backend-common@0.4.1\n\n ## @backstage/plugin-search@0.2.4\n\n### Patch Changes\n\n-   Updated dependencies [c911061b7]\n-   Updated dependencies [8ef71ed32]\n-   Updated dependencies [0e6298f7e]\n-   Updated dependencies [ac3560b42]\n    -   @backstage/catalog-model@0.6.0\n    -   @backstage/core@0.4.1\n    -   @backstage/plugin-catalog@0.2.7\n\n ## @backstage/plugin-sentry@0.3.1\n\n### Patch Changes\n\n-   962d1ad66: Added configuration schema for the commonly used properties\n-   Updated dependencies [c911061b7]\n-   Updated dependencies [8ef71ed32]\n-   Updated dependencies [0e6298f7e]\n-   Updated dependencies [ac3560b42]\n    -   @backstage/catalog-model@0.6.0\n    -   @backstage/core@0.4.1\n\n ## @backstage/plugin-sonarqube@0.1.7\n\n### Patch Changes\n\n-   Updated dependencies [c911061b7]\n-   Updated dependencies [8ef71ed32]\n-   Updated dependencies [0e6298f7e]\n-   Updated dependencies [ac3560b42]\n    -   @backstage/catalog-model@0.6.0\n    -   @backstage/core@0.4.1\n\n ## example-app@0.2.7\n\n### Patch Changes\n\n-   Updated dependencies [c0fac6163]\n-   Updated dependencies [48c305e69]\n-   Updated dependencies [c911061b7]\n-   Updated dependencies [ab805860a]\n-   Updated dependencies [dae4f3983]\n-   Updated dependencies [8ef71ed32]\n-   Updated dependencies [0e6298f7e]\n-   Updated dependencies [f3e75508d]\n-   Updated dependencies [3b50f833d]\n-   Updated dependencies [c36a01b4c]\n-   Updated dependencies [c5297baeb]\n-   Updated dependencies [ac3560b42]\n-   Updated dependencies [962d1ad66]\n    -   @backstage/plugin-org@0.3.2\n    -   @backstage/plugin-cost-insights@0.5.2\n    -   @backstage/catalog-model@0.6.0\n    -   @backstage/plugin-techdocs@0.5.0\n    -   @backstage/core@0.4.1\n    -   @backstage/plugin-catalog-import@0.3.2\n    -   @backstage/plugin-pagerduty@0.2.3\n    -   @backstage/cli@0.4.2\n    -   @backstage/plugin-sentry@0.3.1\n    -   @backstage/plugin-api-docs@0.4.1\n    -   @backstage/plugin-catalog@0.2.7\n    -   @backstage/plugin-circleci@0.2.5\n    -   @backstage/plugin-cloudbuild@0.2.5\n    -   @backstage/plugin-github-actions@0.2.5\n    -   @backstage/plugin-jenkins@0.3.4\n    -   @backstage/plugin-kubernetes@0.3.3\n    -   @backstage/plugin-lighthouse@0.2.6\n    -   @backstage/plugin-register-component@0.2.5\n    -   @backstage/plugin-rollbar@0.2.7\n    -   @backstage/plugin-scaffolder@0.3.4\n    -   @backstage/plugin-search@0.2.4\n\n ## example-backend@0.2.7\n\n### Patch Changes\n\n-   Updated dependencies [c6eeefa35]\n-   Updated dependencies [fb386b760]\n-   Updated dependencies [c911061b7]\n-   Updated dependencies [7c3ffc0cd]\n-   Updated dependencies [dae4f3983]\n-   Updated dependencies [7b15cc271]\n-   Updated dependencies [e7496dc3e]\n-   Updated dependencies [1d1c2860f]\n-   Updated dependencies [0e6298f7e]\n-   Updated dependencies [8dd0a906d]\n-   Updated dependencies [4eafdec4a]\n-   Updated dependencies [6b37c95bf]\n-   Updated dependencies [8c31c681c]\n-   Updated dependencies [7b98e7fee]\n-   Updated dependencies [ac3560b42]\n-   Updated dependencies [94c65a9d4]\n-   Updated dependencies [0097057ed]\n    -   @backstage/plugin-catalog-backend@0.5.0\n    -   @backstage/catalog-model@0.6.0\n    -   @backstage/plugin-techdocs-backend@0.4.0\n    -   @backstage/plugin-auth-backend@0.2.7\n    -   @backstage/backend-common@0.4.1\n    -   @backstage/plugin-scaffolder-backend@0.3.5\n    -   example-app@0.2.7\n    -   @backstage/plugin-kubernetes-backend@0.2.3\n",
  },
  {
    url: 'https://api.github.com/repos/backstage/backstage/releases/35801339',
    assets_url:
      'https://api.github.com/repos/backstage/backstage/releases/35801339/assets',
    upload_url:
      'https://uploads.github.com/repos/backstage/backstage/releases/35801339/assets{?name,label}',
    html_url: 'https://github.com/backstage/backstage/releases/tag/v0.4.0',
    id: 35801339,
    author: {
      login: 'Rugvip',
      id: 4984472,
      node_id: 'MDQ6VXNlcjQ5ODQ0NzI=',
      avatar_url: 'https://avatars2.githubusercontent.com/u/4984472?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Rugvip',
      html_url: 'https://github.com/Rugvip',
      followers_url: 'https://api.github.com/users/Rugvip/followers',
      following_url:
        'https://api.github.com/users/Rugvip/following{/other_user}',
      gists_url: 'https://api.github.com/users/Rugvip/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/Rugvip/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Rugvip/subscriptions',
      organizations_url: 'https://api.github.com/users/Rugvip/orgs',
      repos_url: 'https://api.github.com/users/Rugvip/repos',
      events_url: 'https://api.github.com/users/Rugvip/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Rugvip/received_events',
      type: 'User',
      site_admin: false,
    },
    node_id: 'MDc6UmVsZWFzZTM1ODAxMzM5',
    tag_name: 'v0.4.0',
    target_commitish: 'master',
    name: 'v0.4.0',
    draft: false,
    prerelease: false,
    created_at: '2020-12-10T12:26:15Z',
    published_at: '2020-12-29T11:33:35Z',
    assets: [],
    tarball_url:
      'https://api.github.com/repos/backstage/backstage/tarball/v0.4.0',
    zipball_url:
      'https://api.github.com/repos/backstage/backstage/zipball/v0.4.0',
    body:
      "## @backstage/backend-common@0.4.0\n\n### Minor Changes\n\n-   12bbd748c: Removes the Prometheus integration from `backend-common`.\n\n    Rational behind this change is to keep the metrics integration of Backstage\n    generic. Instead of directly relying on Prometheus, Backstage will expose\n    metrics in a generic way. Integrators can then export the metrics in their\n    desired format. For example using Prometheus.\n\n    To keep the existing behavior, you need to integrate Prometheus in your\n    backend:\n\n    First, add a dependency on `express-prom-bundle` and `prom-client` to your backend.\n\n    ```diff\n    // packages/backend/package.json\n      \"dependencies\": {\n    +   \"express-prom-bundle\": \"^6.1.0\",\n    +   \"prom-client\": \"^12.0.0\",\n    ```\n\n    Then, add a handler for metrics and a simple instrumentation for the endpoints.\n\n    ```typescript\n    // packages/backend/src/metrics.ts\n    import { useHotCleanup } from '@backstage/backend-common';\n    import { RequestHandler } from 'express';\n    import promBundle from 'express-prom-bundle';\n    import prom from 'prom-client';\n    import * as url from 'url';\n\n    const rootRegEx = new RegExp('^/([^/]*)/.*');\n    const apiRegEx = new RegExp('^/api/([^/]*)/.*');\n\n    export function normalizePath(req: any): string {\n      const path = url.parse(req.originalUrl || req.url).pathname || '/';\n\n      // Capture /api/ and the plugin name\n      if (apiRegEx.test(path)) {\n        return path.replace(apiRegEx, '/api/$1');\n      }\n\n      // Only the first path segment at root level\n      return path.replace(rootRegEx, '/$1');\n    }\n\n    /**\n     * Adds a /metrics endpoint, register default runtime metrics and instrument the router.\n     */\n    export function metricsHandler(): RequestHandler {\n      // We can only initialize the metrics once and have to clean them up between hot reloads\n      useHotCleanup(module, () => prom.register.clear());\n\n      return promBundle({\n        includeMethod: true,\n        includePath: true,\n        // Using includePath alone is problematic, as it will include path labels with high\n        // cardinality (e.g. path params). Instead we would have to template them. However, this\n        // is difficult, as every backend plugin might use different routes. Instead we only take\n        // the first directory of the path, to have at least an idea how each plugin performs:\n        normalizePath,\n        promClient: { collectDefaultMetrics: {} },\n      });\n    }\n    ```\n\n    Last, extend your router configuration with the `metricsHandler`:\n\n    ```diff\n    +import { metricsHandler } from './metrics';\n\n    ...\n\n      const service = createServiceBuilder(module)\n        .loadConfig(config)\n        .addRouter('', await healthcheck(healthcheckEnv))\n    +   .addRouter('', metricsHandler())\n        .addRouter('/api', apiRouter);\n    ```\n\n    Your Prometheus metrics will be available at the `/metrics` endpoint.\n\n### Patch Changes\n\n-   38e24db00: Move the core url and auth logic to integration for the four major providers\n-   Updated dependencies [38e24db00]\n-   Updated dependencies [b8ecf6f48]\n-   Updated dependencies [e3bd9fc2f]\n-   Updated dependencies [e3bd9fc2f]\n    -   @backstage/integration@0.1.3\n    -   @backstage/config@0.1.2\n\n ## @backstage/catalog-model@0.5.0\n\n### Minor Changes\n\n-   83b6e0c1f: Remove the deprecated fields `ancestors` and `descendants` from the `Group` entity.\n\n    See <https://github.com/backstage/backstage/issues/3049> and the PRs linked from it for details.\n\n### Patch Changes\n\n-   Updated dependencies [e3bd9fc2f]\n-   Updated dependencies [e3bd9fc2f]\n    -   @backstage/config@0.1.2\n\n ## @backstage/core@0.4.0\n\n### Minor Changes\n\n-   ff243ce96: Introducing a new optional property within `app-config.yaml` called `auth.environment` to have configurable environment value for `auth.providers`\n\n    **Default Value:** 'development'\n\n    **Optional Values:** 'production' | 'development'\n\n    **Migration-steps:**\n\n    -   To override the default value, one could simply introduce the new property `environment` within the `auth` section of the `config.yaml`\n    -   re-run the build to reflect the changed configs\n\n### Patch Changes\n\n-   2527628e1: Link `component` prop now accepts any element type.\n-   1c69d4716: Fix React warning of descendant paragraph tag\n-   04f26f88d: Export the `defaultConfigLoader` implementation\n-   Updated dependencies [b6557c098]\n-   Updated dependencies [e3bd9fc2f]\n-   Updated dependencies [d8d5a17da]\n-   Updated dependencies [1665ae8bb]\n-   Updated dependencies [e3bd9fc2f]\n    -   @backstage/core-api@0.2.5\n    -   @backstage/config@0.1.2\n    -   @backstage/theme@0.2.2\n\n ## @backstage/plugin-api-docs@0.4.0\n\n### Minor Changes\n\n-   246799c7f: Stop exposing a custom router from the `api-docs` plugin. Instead, use the\n    widgets exported by the plugin to compose your custom entity pages.\n\n    Instead of displaying the API definitions directly in the API tab of the\n    component, it now contains tables linking to the API entities. This also adds\n    new widgets to display relationships (bot provides & consumes relationships)\n    between components and APIs.\n\n    See the changelog of `create-app` for a migration guide.\n\n### Patch Changes\n\n-   Updated dependencies [2527628e1]\n-   Updated dependencies [6011b7d3e]\n-   Updated dependencies [1c69d4716]\n-   Updated dependencies [83b6e0c1f]\n-   Updated dependencies [1665ae8bb]\n-   Updated dependencies [04f26f88d]\n-   Updated dependencies [ff243ce96]\n    -   @backstage/core@0.4.0\n    -   @backstage/plugin-catalog@0.2.6\n    -   @backstage/catalog-model@0.5.0\n    -   @backstage/theme@0.2.2\n\n ## @backstage/plugin-catalog-backend@0.4.0\n\n### Minor Changes\n\n-   83b6e0c1f: Remove the deprecated fields `ancestors` and `descendants` from the `Group` entity.\n\n    See <https://github.com/backstage/backstage/issues/3049> and the PRs linked from it for details.\n\n### Patch Changes\n\n-   6e8bb3ac0: leave unknown placeholder-lookalikes untouched in the catalog processing loop\n-   e708679d7: refreshAllLocations uses a child logger of the HigherOrderOperation with a meta `component` : `catalog-all-locations-refresh`\n-   047c018c9: Batch the fetching of relations\n-   38d63fbe1: Fix string template literal\n-   Updated dependencies [38e24db00]\n-   Updated dependencies [e3bd9fc2f]\n-   Updated dependencies [12bbd748c]\n-   Updated dependencies [83b6e0c1f]\n-   Updated dependencies [e3bd9fc2f]\n    -   @backstage/backend-common@0.4.0\n    -   @backstage/config@0.1.2\n    -   @backstage/catalog-model@0.5.0\n\n ## @backstage/plugin-cost-insights@0.5.0\n\n### Minor Changes\n\n-   e3071a0d4: Add support for multiple types of entity cost breakdown.\n\n    This change is backwards-incompatible with plugin-cost-insights 0.3.x; the `entities` field on Entity returned in product cost queries changed from `Entity[]` to `Record<string, Entity[]`.\n\n-   d6e8099ed: convert duration + last completed billing date to intervals\n\n-   88ef11b45: Remove calendar MoM period option and fix quarter end date logic\n\n### Patch Changes\n\n-   90458fed6: fix react-hooks/exhaustive-deps error\n-   Updated dependencies [2527628e1]\n-   Updated dependencies [e3bd9fc2f]\n-   Updated dependencies [e1f4e24ef]\n-   Updated dependencies [1c69d4716]\n-   Updated dependencies [1665ae8bb]\n-   Updated dependencies [04f26f88d]\n-   Updated dependencies [ff243ce96]\n-   Updated dependencies [e3bd9fc2f]\n    -   @backstage/core@0.4.0\n    -   @backstage/config@0.1.2\n    -   @backstage/test-utils@0.1.5\n    -   @backstage/theme@0.2.2\n\n ## @backstage/plugin-sentry@0.3.0\n\n### Minor Changes\n\n-   075d3dc5a: The plugin uses the `proxy-backend` instead of a custom `sentry-backend`.\n    It requires a proxy configuration:\n\n    `app-config.yaml`:\n\n    ```yaml\n    proxy:\n      '/sentry/api':\n        target: https://sentry.io/api/\n        allowedMethods: ['GET']\n        headers:\n          Authorization:\n            $env: SENTRY_TOKEN # export SENTRY_TOKEN=\"Bearer <your-sentry-token>\"\n    ```\n\n    The `MockApiBackend` is no longer configured by the `NODE_ENV` variable.\n    Instead, the mock backend can be used with an api-override:\n\n    `packages/app/src/apis.ts`:\n\n    ```ts\n    import { createApiFactory } from '@backstage/core';\n    import { MockSentryApi, sentryApiRef } from '@backstage/plugin-sentry';\n\n    export const apis = [\n      // ...\n\n      createApiFactory(sentryApiRef, new MockSentryApi()),\n    ];\n    ```\n\n    If you already use the Sentry backend, you must remove it from the backend:\n\n    Delete `packages/backend/src/plugins/sentry.ts`.\n\n    ```diff\n    # packages/backend/package.json\n\n    ...\n        \"@backstage/plugin-scaffolder-backend\": \"^0.3.2\",\n    -   \"@backstage/plugin-sentry-backend\": \"^0.1.3\",\n        \"@backstage/plugin-techdocs-backend\": \"^0.3.0\",\n    ...\n    ```\n\n    ```diff\n    // packages/backend/src/index.html\n\n      const apiRouter = Router();\n      apiRouter.use('/catalog', await catalog(catalogEnv));\n      apiRouter.use('/rollbar', await rollbar(rollbarEnv));\n      apiRouter.use('/scaffolder', await scaffolder(scaffolderEnv));\n    - apiRouter.use('/sentry', await sentry(sentryEnv));\n      apiRouter.use('/auth', await auth(authEnv));\n      apiRouter.use('/techdocs', await techdocs(techdocsEnv));\n      apiRouter.use('/kubernetes', await kubernetes(kubernetesEnv));\n      apiRouter.use('/proxy', await proxy(proxyEnv));\n      apiRouter.use('/graphql', await graphql(graphqlEnv));\n      apiRouter.use(notFoundHandler());\n    ```\n\n### Patch Changes\n\n-   Updated dependencies [2527628e1]\n-   Updated dependencies [1c69d4716]\n-   Updated dependencies [83b6e0c1f]\n-   Updated dependencies [1665ae8bb]\n-   Updated dependencies [04f26f88d]\n-   Updated dependencies [ff243ce96]\n    -   @backstage/core@0.4.0\n    -   @backstage/catalog-model@0.5.0\n    -   @backstage/theme@0.2.2\n\n ## @backstage/plugin-sentry-backend@0.2.0\n\n### Minor Changes\n\n-   075d3dc5a: The plugin uses the `proxy-backend` instead of a custom `sentry-backend`.\n    It requires a proxy configuration:\n\n    `app-config.yaml`:\n\n    ```yaml\n    proxy:\n      '/sentry/api':\n        target: https://sentry.io/api/\n        allowedMethods: ['GET']\n        headers:\n          Authorization:\n            $env: SENTRY_TOKEN # export SENTRY_TOKEN=\"Bearer <your-sentry-token>\"\n    ```\n\n    The `MockApiBackend` is no longer configured by the `NODE_ENV` variable.\n    Instead, the mock backend can be used with an api-override:\n\n    `packages/app/src/apis.ts`:\n\n    ```ts\n    import { createApiFactory } from '@backstage/core';\n    import { MockSentryApi, sentryApiRef } from '@backstage/plugin-sentry';\n\n    export const apis = [\n      // ...\n\n      createApiFactory(sentryApiRef, new MockSentryApi()),\n    ];\n    ```\n\n    If you already use the Sentry backend, you must remove it from the backend:\n\n    Delete `packages/backend/src/plugins/sentry.ts`.\n\n    ```diff\n    # packages/backend/package.json\n\n    ...\n        \"@backstage/plugin-scaffolder-backend\": \"^0.3.2\",\n    -   \"@backstage/plugin-sentry-backend\": \"^0.1.3\",\n        \"@backstage/plugin-techdocs-backend\": \"^0.3.0\",\n    ...\n    ```\n\n    ```diff\n    // packages/backend/src/index.html\n\n      const apiRouter = Router();\n      apiRouter.use('/catalog', await catalog(catalogEnv));\n      apiRouter.use('/rollbar', await rollbar(rollbarEnv));\n      apiRouter.use('/scaffolder', await scaffolder(scaffolderEnv));\n    - apiRouter.use('/sentry', await sentry(sentryEnv));\n      apiRouter.use('/auth', await auth(authEnv));\n      apiRouter.use('/techdocs', await techdocs(techdocsEnv));\n      apiRouter.use('/kubernetes', await kubernetes(kubernetesEnv));\n      apiRouter.use('/proxy', await proxy(proxyEnv));\n      apiRouter.use('/graphql', await graphql(graphqlEnv));\n      apiRouter.use(notFoundHandler());\n    ```\n\n### Patch Changes\n\n-   Updated dependencies [38e24db00]\n-   Updated dependencies [12bbd748c]\n    -   @backstage/backend-common@0.4.0\n\n ## @backstage/plugin-techdocs@0.4.0\n\n### Minor Changes\n\n-   87a33d2fe: Removed modifyCss transformer and moved the css to injectCss transformer\n    Fixed issue where some internal doc links would cause a reload of the page\n\n### Patch Changes\n\n-   Updated dependencies [b6557c098]\n-   Updated dependencies [2527628e1]\n-   Updated dependencies [6011b7d3e]\n-   Updated dependencies [e1f4e24ef]\n-   Updated dependencies [1c69d4716]\n-   Updated dependencies [d8d5a17da]\n-   Updated dependencies [83b6e0c1f]\n-   Updated dependencies [1665ae8bb]\n-   Updated dependencies [04f26f88d]\n-   Updated dependencies [ff243ce96]\n    -   @backstage/core-api@0.2.5\n    -   @backstage/core@0.4.0\n    -   @backstage/plugin-catalog@0.2.6\n    -   @backstage/test-utils@0.1.5\n    -   @backstage/catalog-model@0.5.0\n    -   @backstage/theme@0.2.2\n\n ## @backstage/catalog-client@0.3.3\n\n### Patch Changes\n\n-   Updated dependencies [e3bd9fc2f]\n-   Updated dependencies [83b6e0c1f]\n-   Updated dependencies [e3bd9fc2f]\n    -   @backstage/config@0.1.2\n    -   @backstage/catalog-model@0.5.0\n\n ## @backstage/cli@0.4.1\n\n### Patch Changes\n\n-   06dbe707b: Update experimental backend bundle command to only output archives to `dist/` instead of a full workspace mirror in `dist-workspace/`.\n-   011708102: Fixes a big in the bundling logic that caused `node_modules` inside local monorepo packages to be transformed.\n-   61897fb2c: Fix config schema for `.app.listen`\n-   Updated dependencies [e3bd9fc2f]\n-   Updated dependencies [e3bd9fc2f]\n    -   @backstage/config@0.1.2\n\n ## @backstage/config@0.1.2\n\n### Patch Changes\n\n-   e3bd9fc2f: Fix unneeded defensive code\n-   e3bd9fc2f: Fix useless conditional\n\n ## @backstage/core-api@0.2.5\n\n### Patch Changes\n\n-   b6557c098: Update ApiFactory type to correctly infer API type and disallow mismatched implementations.\n\n    This fixes for example the following code:\n\n    ```ts\n    interface MyApi {\n      myMethod(): void\n    }\n\n    const myApiRef = createApiRef<MyApi>({...});\n\n    createApiFactory({\n      api: myApiRef,\n      deps: {},\n      // This should've caused an error, since the empty object does not fully implement MyApi\n      factory: () => ({}),\n    })\n    ```\n\n-   d8d5a17da: Deprecated the `ConcreteRoute`, `MutableRouteRef`, `AbsoluteRouteRef` types and added a new `RouteRef` type as replacement.\n\n    Deprecated and disabled the `createSubRoute` method of `AbsoluteRouteRef`.\n\n    Add an as of yet unused `params` option to `createRouteRef`.\n\n-   Updated dependencies [e3bd9fc2f]\n\n-   Updated dependencies [e1f4e24ef]\n\n-   Updated dependencies [1665ae8bb]\n\n-   Updated dependencies [e3bd9fc2f]\n    -   @backstage/config@0.1.2\n    -   @backstage/test-utils@0.1.5\n    -   @backstage/theme@0.2.2\n\n ## @backstage/create-app@0.2.4\n\n### Patch Changes\n\n-   94348441e: Add `\"files\": [\"dist\"]` to both app and backend packages. This ensures that packaged versions of these packages do not contain unnecessary files.\n\n    To apply this change to an existing app, add the following to `packages/app/package.json` and `packages/backend/package.json`:\n\n    ```json\n      \"files\": [\n        \"dist\"\n      ]\n    ```\n\n-   cb5fc4b29: Adjust template to the latest changes in the `api-docs` plugin.\n\n    ## Template Changes\n\n    While updating to the latest `api-docs` plugin, the following changes are\n    necessary for the `create-app` template in your\n    `app/src/components/catalog/EntityPage.tsx`. This adds:\n\n    -   A custom entity page for API entities\n    -   Changes the API tab to include the new `ConsumedApisCard` and\n        `ProvidedApisCard` that link to the API entity.\n\n    ```diff\n     import {\n    +  ApiDefinitionCard,\n    -  Router as ApiDocsRouter,\n    +  ConsumedApisCard,\n    +  ProvidedApisCard,\n    +  ConsumedApisCard,\n    +  ConsumingComponentsCard,\n    +  ProvidedApisCard,\n    +  ProvidingComponentsCard\n     } from '@backstage/plugin-api-docs';\n\n    ...\n\n    +const ComponentApisContent = ({ entity }: { entity: Entity }) => (\n    +  <Grid container spacing={3} alignItems=\"stretch\">\n    +    <Grid item md={6}>\n    +      <ProvidedApisCard entity={entity} />\n    +    </Grid>\n    +    <Grid item md={6}>\n    +      <ConsumedApisCard entity={entity} />\n    +    </Grid>\n    +  </Grid>\n    +);\n\n     const ServiceEntityPage = ({ entity }: { entity: Entity }) => (\n       <EntityPageLayout>\n         <EntityPageLayout.Content\n          path=\"/\"\n          title=\"Overview\"\n          element={<OverviewContent entity={entity} />}\n        />\n        <EntityPageLayout.Content\n          path=\"/ci-cd/*\"\n          title=\"CI/CD\"\n          element={<CICDSwitcher entity={entity} />}\n        />\n        <EntityPageLayout.Content\n          path=\"/api/*\"\n          title=\"API\"\n    -     element={<ApiDocsRouter entity={entity} />}\n    +     element={<ComponentApisContent entity={entity} />}\n        />\n    ...\n\n    -export const EntityPage = () => {\n    -  const { entity } = useEntity();\n    -  switch (entity?.spec?.type) {\n    -    case 'service':\n    -      return <ServiceEntityPage entity={entity} />;\n    -    case 'website':\n    -      return <WebsiteEntityPage entity={entity} />;\n    -    default:\n    -      return <DefaultEntityPage entity={entity} />;\n    -  }\n    -};\n\n    +export const ComponentEntityPage = ({ entity }: { entity: Entity }) => {\n    +  switch (entity?.spec?.type) {\n    +    case 'service':\n    +      return <ServiceEntityPage entity={entity} />;\n    +    case 'website':\n    +      return <WebsiteEntityPage entity={entity} />;\n    +    default:\n    +      return <DefaultEntityPage entity={entity} />;\n    +  }\n    +};\n    +\n    +const ApiOverviewContent = ({ entity }: { entity: Entity }) => (\n    +  <Grid container spacing={3}>\n    +    <Grid item md={6}>\n    +      <AboutCard entity={entity} />\n    +    </Grid>\n    +    <Grid container item md={12}>\n    +      <Grid item md={6}>\n    +        <ProvidingComponentsCard entity={entity} />\n    +      </Grid>\n    +      <Grid item md={6}>\n    +        <ConsumingComponentsCard entity={entity} />\n    +      </Grid>\n    +    </Grid>\n    +  </Grid>\n    +);\n    +\n    +const ApiDefinitionContent = ({ entity }: { entity: ApiEntity }) => (\n    +  <Grid container spacing={3}>\n    +    <Grid item xs={12}>\n    +      <ApiDefinitionCard apiEntity={entity} />\n    +    </Grid>\n    +  </Grid>\n    +);\n    +\n    +const ApiEntityPage = ({ entity }: { entity: Entity }) => (\n    +  <EntityPageLayout>\n    +    <EntityPageLayout.Content\n    +      path=\"/*\"\n    +      title=\"Overview\"\n    +      element={<ApiOverviewContent entity={entity} />}\n    +    />\n    +    <EntityPageLayout.Content\n    +      path=\"/definition/*\"\n    +      title=\"Definition\"\n    +      element={<ApiDefinitionContent entity={entity as ApiEntity} />}\n    +    />\n    +  </EntityPageLayout>\n    +);\n    +\n    +export const EntityPage = () => {\n    +  const { entity } = useEntity();\n    +\n    +  switch (entity?.kind?.toLowerCase()) {\n    +    case 'component':\n    +      return <ComponentEntityPage entity={entity} />;\n    +    case 'api':\n    +      return <ApiEntityPage entity={entity} />;\n    +    default:\n    +      return <DefaultEntityPage entity={entity} />;\n    +  }\n    +};\n    ```\n\n-   1e22f8e0b: Unify `dockerode` library and type dependency versions\n\n ## @backstage/dev-utils@0.1.6\n\n### Patch Changes\n\n-   b6557c098: Update ApiFactory type to correctly infer API type and disallow mismatched implementations.\n\n    This fixes for example the following code:\n\n    ```ts\n    interface MyApi {\n      myMethod(): void\n    }\n\n    const myApiRef = createApiRef<MyApi>({...});\n\n    createApiFactory({\n      api: myApiRef,\n      deps: {},\n      // This should've caused an error, since the empty object does not fully implement MyApi\n      factory: () => ({}),\n    })\n    ```\n\n-   e1f4e24ef: Fix @backstage/cli not being a devDependency\n\n-   Updated dependencies [2527628e1]\n\n-   Updated dependencies [e1f4e24ef]\n\n-   Updated dependencies [1c69d4716]\n\n-   Updated dependencies [1665ae8bb]\n\n-   Updated dependencies [04f26f88d]\n\n-   Updated dependencies [ff243ce96]\n    -   @backstage/core@0.4.0\n    -   @backstage/test-utils@0.1.5\n    -   @backstage/theme@0.2.2\n\n ## @backstage/integration@0.1.3\n\n### Patch Changes\n\n-   38e24db00: Move the core url and auth logic to integration for the four major providers\n-   b8ecf6f48: Add the basics of cross-integration concerns\n-   Updated dependencies [e3bd9fc2f]\n-   Updated dependencies [e3bd9fc2f]\n    -   @backstage/config@0.1.2\n\n ## @backstage/test-utils@0.1.5\n\n### Patch Changes\n\n-   e1f4e24ef: Fix @backstage/cli not being a devDependency\n-   Updated dependencies [b6557c098]\n-   Updated dependencies [d8d5a17da]\n-   Updated dependencies [1665ae8bb]\n    -   @backstage/core-api@0.2.5\n    -   @backstage/theme@0.2.2\n\n ## @backstage/theme@0.2.2\n\n### Patch Changes\n\n-   1665ae8bb: Add a little more padding in dense tables\n\n ## @backstage/plugin-app-backend@0.3.3\n\n### Patch Changes\n\n-   Updated dependencies [38e24db00]\n-   Updated dependencies [e3bd9fc2f]\n-   Updated dependencies [12bbd748c]\n-   Updated dependencies [e3bd9fc2f]\n    -   @backstage/backend-common@0.4.0\n    -   @backstage/config@0.1.2\n\n ## @backstage/plugin-auth-backend@0.2.6\n\n### Patch Changes\n\n-   Updated dependencies [38e24db00]\n-   Updated dependencies [e3bd9fc2f]\n-   Updated dependencies [12bbd748c]\n-   Updated dependencies [83b6e0c1f]\n-   Updated dependencies [e3bd9fc2f]\n    -   @backstage/backend-common@0.4.0\n    -   @backstage/config@0.1.2\n    -   @backstage/catalog-model@0.5.0\n    -   @backstage/catalog-client@0.3.3\n\n ## @backstage/plugin-catalog@0.2.6\n\n### Patch Changes\n\n-   6011b7d3e: Added pagerduty plugin to example app\n-   Updated dependencies [2527628e1]\n-   Updated dependencies [1c69d4716]\n-   Updated dependencies [83b6e0c1f]\n-   Updated dependencies [87a33d2fe]\n-   Updated dependencies [1665ae8bb]\n-   Updated dependencies [04f26f88d]\n-   Updated dependencies [ff243ce96]\n    -   @backstage/core@0.4.0\n    -   @backstage/catalog-model@0.5.0\n    -   @backstage/plugin-techdocs@0.4.0\n    -   @backstage/theme@0.2.2\n    -   @backstage/plugin-scaffolder@0.3.3\n    -   @backstage/catalog-client@0.3.3\n\n ## @backstage/plugin-catalog-graphql@0.2.4\n\n### Patch Changes\n\n-   Updated dependencies [38e24db00]\n-   Updated dependencies [e3bd9fc2f]\n-   Updated dependencies [12bbd748c]\n-   Updated dependencies [83b6e0c1f]\n-   Updated dependencies [e3bd9fc2f]\n    -   @backstage/backend-common@0.4.0\n    -   @backstage/config@0.1.2\n    -   @backstage/catalog-model@0.5.0\n\n ## @backstage/plugin-catalog-import@0.3.1\n\n### Patch Changes\n\n-   79418ddb6: Align plugin ID and fix variable typo\n-   d2938af4c: Add register existing component instructions\n-   Updated dependencies [6e8bb3ac0]\n-   Updated dependencies [2527628e1]\n-   Updated dependencies [e708679d7]\n-   Updated dependencies [047c018c9]\n-   Updated dependencies [6011b7d3e]\n-   Updated dependencies [1c69d4716]\n-   Updated dependencies [38d63fbe1]\n-   Updated dependencies [83b6e0c1f]\n-   Updated dependencies [1665ae8bb]\n-   Updated dependencies [04f26f88d]\n-   Updated dependencies [ff243ce96]\n    -   @backstage/plugin-catalog-backend@0.4.0\n    -   @backstage/core@0.4.0\n    -   @backstage/plugin-catalog@0.2.6\n    -   @backstage/catalog-model@0.5.0\n    -   @backstage/theme@0.2.2\n\n ## @backstage/plugin-circleci@0.2.4\n\n### Patch Changes\n\n-   04efbbdd2: Refactor to support ADR004 module exporting.\n\n    For more information, see <https://backstage.io/docs/architecture-decisions/adrs-adr004>.\n\n-   Updated dependencies [2527628e1]\n\n-   Updated dependencies [6011b7d3e]\n\n-   Updated dependencies [1c69d4716]\n\n-   Updated dependencies [83b6e0c1f]\n\n-   Updated dependencies [1665ae8bb]\n\n-   Updated dependencies [04f26f88d]\n\n-   Updated dependencies [ff243ce96]\n    -   @backstage/core@0.4.0\n    -   @backstage/plugin-catalog@0.2.6\n    -   @backstage/catalog-model@0.5.0\n    -   @backstage/theme@0.2.2\n\n ## @backstage/plugin-cloudbuild@0.2.4\n\n### Patch Changes\n\n-   Updated dependencies [2527628e1]\n-   Updated dependencies [6011b7d3e]\n-   Updated dependencies [1c69d4716]\n-   Updated dependencies [83b6e0c1f]\n-   Updated dependencies [1665ae8bb]\n-   Updated dependencies [04f26f88d]\n-   Updated dependencies [ff243ce96]\n    -   @backstage/core@0.4.0\n    -   @backstage/plugin-catalog@0.2.6\n    -   @backstage/catalog-model@0.5.0\n    -   @backstage/theme@0.2.2\n\n ## @backstage/plugin-explore@0.2.2\n\n### Patch Changes\n\n-   Updated dependencies [2527628e1]\n-   Updated dependencies [1c69d4716]\n-   Updated dependencies [1665ae8bb]\n-   Updated dependencies [04f26f88d]\n-   Updated dependencies [ff243ce96]\n    -   @backstage/core@0.4.0\n    -   @backstage/theme@0.2.2\n\n ## @backstage/plugin-gcp-projects@0.2.2\n\n### Patch Changes\n\n-   Updated dependencies [2527628e1]\n-   Updated dependencies [1c69d4716]\n-   Updated dependencies [1665ae8bb]\n-   Updated dependencies [04f26f88d]\n-   Updated dependencies [ff243ce96]\n    -   @backstage/core@0.4.0\n    -   @backstage/theme@0.2.2\n\n ## @backstage/plugin-github-actions@0.2.4\n\n### Patch Changes\n\n-   Updated dependencies [b6557c098]\n-   Updated dependencies [2527628e1]\n-   Updated dependencies [6011b7d3e]\n-   Updated dependencies [1c69d4716]\n-   Updated dependencies [d8d5a17da]\n-   Updated dependencies [83b6e0c1f]\n-   Updated dependencies [1665ae8bb]\n-   Updated dependencies [04f26f88d]\n-   Updated dependencies [ff243ce96]\n    -   @backstage/core-api@0.2.5\n    -   @backstage/core@0.4.0\n    -   @backstage/plugin-catalog@0.2.6\n    -   @backstage/catalog-model@0.5.0\n    -   @backstage/theme@0.2.2\n\n ## @backstage/plugin-gitops-profiles@0.2.2\n\n### Patch Changes\n\n-   Updated dependencies [2527628e1]\n-   Updated dependencies [1c69d4716]\n-   Updated dependencies [1665ae8bb]\n-   Updated dependencies [04f26f88d]\n-   Updated dependencies [ff243ce96]\n    -   @backstage/core@0.4.0\n    -   @backstage/theme@0.2.2\n\n ## @backstage/plugin-graphiql@0.2.2\n\n### Patch Changes\n\n-   Updated dependencies [2527628e1]\n-   Updated dependencies [1c69d4716]\n-   Updated dependencies [1665ae8bb]\n-   Updated dependencies [04f26f88d]\n-   Updated dependencies [ff243ce96]\n    -   @backstage/core@0.4.0\n    -   @backstage/theme@0.2.2\n\n ## @backstage/plugin-graphql-backend@0.1.4\n\n### Patch Changes\n\n-   Updated dependencies [38e24db00]\n-   Updated dependencies [e3bd9fc2f]\n-   Updated dependencies [12bbd748c]\n-   Updated dependencies [e3bd9fc2f]\n    -   @backstage/backend-common@0.4.0\n    -   @backstage/config@0.1.2\n    -   @backstage/plugin-catalog-graphql@0.2.4\n\n ## @backstage/plugin-jenkins@0.3.3\n\n### Patch Changes\n\n-   b2a07d2dc: Avoid loading data from Jenkins twice. Don't load data when navigating through the pages as all data from all pages is already loaded.\n\n-   04efbbdd2: Refactor to support ADR004 module exporting.\n\n    For more information, see <https://backstage.io/docs/architecture-decisions/adrs-adr004>.\n\n-   0f8877168: Improve loading speed of the CI/CD page.\n    Only request the necessary fields from Jenkins to keep the request size low.\n    In addition everything is loaded in a single request, instead of requesting\n    each job and build individually. As this (and also the previous behavior) can\n    lead to a big amount of data, this limits the amount of jobs to 50.\n    For each job, only the latest build is loaded. Loading the full build history\n    of a job can lead to excessive load on the Jenkins instance.\n\n-   Updated dependencies [2527628e1]\n\n-   Updated dependencies [6011b7d3e]\n\n-   Updated dependencies [1c69d4716]\n\n-   Updated dependencies [83b6e0c1f]\n\n-   Updated dependencies [1665ae8bb]\n\n-   Updated dependencies [04f26f88d]\n\n-   Updated dependencies [ff243ce96]\n    -   @backstage/core@0.4.0\n    -   @backstage/plugin-catalog@0.2.6\n    -   @backstage/catalog-model@0.5.0\n    -   @backstage/theme@0.2.2\n\n ## @backstage/plugin-kubernetes@0.3.2\n\n### Patch Changes\n\n-   Updated dependencies [2527628e1]\n-   Updated dependencies [e3bd9fc2f]\n-   Updated dependencies [1c69d4716]\n-   Updated dependencies [83b6e0c1f]\n-   Updated dependencies [1665ae8bb]\n-   Updated dependencies [04f26f88d]\n-   Updated dependencies [ff243ce96]\n-   Updated dependencies [e3bd9fc2f]\n    -   @backstage/core@0.4.0\n    -   @backstage/config@0.1.2\n    -   @backstage/catalog-model@0.5.0\n    -   @backstage/theme@0.2.2\n    -   @backstage/plugin-kubernetes-backend@0.2.2\n\n ## @backstage/plugin-kubernetes-backend@0.2.2\n\n### Patch Changes\n\n-   Updated dependencies [38e24db00]\n-   Updated dependencies [e3bd9fc2f]\n-   Updated dependencies [12bbd748c]\n-   Updated dependencies [83b6e0c1f]\n-   Updated dependencies [e3bd9fc2f]\n    -   @backstage/backend-common@0.4.0\n    -   @backstage/config@0.1.2\n    -   @backstage/catalog-model@0.5.0\n\n ## @backstage/plugin-lighthouse@0.2.5\n\n### Patch Changes\n\n-   Updated dependencies [b6557c098]\n-   Updated dependencies [2527628e1]\n-   Updated dependencies [6011b7d3e]\n-   Updated dependencies [e3bd9fc2f]\n-   Updated dependencies [1c69d4716]\n-   Updated dependencies [d8d5a17da]\n-   Updated dependencies [83b6e0c1f]\n-   Updated dependencies [1665ae8bb]\n-   Updated dependencies [04f26f88d]\n-   Updated dependencies [ff243ce96]\n-   Updated dependencies [e3bd9fc2f]\n    -   @backstage/core-api@0.2.5\n    -   @backstage/core@0.4.0\n    -   @backstage/plugin-catalog@0.2.6\n    -   @backstage/config@0.1.2\n    -   @backstage/catalog-model@0.5.0\n    -   @backstage/theme@0.2.2\n\n ## @backstage/plugin-newrelic@0.2.2\n\n### Patch Changes\n\n-   Updated dependencies [2527628e1]\n-   Updated dependencies [1c69d4716]\n-   Updated dependencies [1665ae8bb]\n-   Updated dependencies [04f26f88d]\n-   Updated dependencies [ff243ce96]\n    -   @backstage/core@0.4.0\n    -   @backstage/theme@0.2.2\n\n ## @backstage/plugin-org@0.3.1\n\n### Patch Changes\n\n-   2b71db211: Support transitive ownerships of users and groups.\n-   Updated dependencies [2527628e1]\n-   Updated dependencies [6011b7d3e]\n-   Updated dependencies [1c69d4716]\n-   Updated dependencies [83b6e0c1f]\n-   Updated dependencies [1665ae8bb]\n-   Updated dependencies [04f26f88d]\n-   Updated dependencies [ff243ce96]\n    -   @backstage/core@0.4.0\n    -   @backstage/plugin-catalog@0.2.6\n    -   @backstage/catalog-model@0.5.0\n    -   @backstage/theme@0.2.2\n\n ## @backstage/plugin-pagerduty@0.2.2\n\n### Patch Changes\n\n-   6011b7d3e: Added pagerduty plugin to example app\n-   Updated dependencies [2527628e1]\n-   Updated dependencies [1c69d4716]\n-   Updated dependencies [83b6e0c1f]\n-   Updated dependencies [1665ae8bb]\n-   Updated dependencies [04f26f88d]\n-   Updated dependencies [ff243ce96]\n    -   @backstage/core@0.4.0\n    -   @backstage/catalog-model@0.5.0\n    -   @backstage/theme@0.2.2\n\n ## @backstage/plugin-proxy-backend@0.2.3\n\n### Patch Changes\n\n-   Updated dependencies [38e24db00]\n-   Updated dependencies [e3bd9fc2f]\n-   Updated dependencies [12bbd748c]\n-   Updated dependencies [e3bd9fc2f]\n    -   @backstage/backend-common@0.4.0\n    -   @backstage/config@0.1.2\n\n ## @backstage/plugin-register-component@0.2.4\n\n### Patch Changes\n\n-   Updated dependencies [2527628e1]\n-   Updated dependencies [6011b7d3e]\n-   Updated dependencies [1c69d4716]\n-   Updated dependencies [83b6e0c1f]\n-   Updated dependencies [1665ae8bb]\n-   Updated dependencies [04f26f88d]\n-   Updated dependencies [ff243ce96]\n    -   @backstage/core@0.4.0\n    -   @backstage/plugin-catalog@0.2.6\n    -   @backstage/catalog-model@0.5.0\n    -   @backstage/theme@0.2.2\n\n ## @backstage/plugin-rollbar@0.2.6\n\n### Patch Changes\n\n-   Updated dependencies [2527628e1]\n-   Updated dependencies [6011b7d3e]\n-   Updated dependencies [1c69d4716]\n-   Updated dependencies [83b6e0c1f]\n-   Updated dependencies [1665ae8bb]\n-   Updated dependencies [04f26f88d]\n-   Updated dependencies [ff243ce96]\n    -   @backstage/core@0.4.0\n    -   @backstage/plugin-catalog@0.2.6\n    -   @backstage/catalog-model@0.5.0\n    -   @backstage/theme@0.2.2\n\n ## @backstage/plugin-rollbar-backend@0.1.5\n\n### Patch Changes\n\n-   Updated dependencies [38e24db00]\n-   Updated dependencies [e3bd9fc2f]\n-   Updated dependencies [12bbd748c]\n-   Updated dependencies [e3bd9fc2f]\n    -   @backstage/backend-common@0.4.0\n    -   @backstage/config@0.1.2\n\n ## @backstage/plugin-scaffolder@0.3.3\n\n### Patch Changes\n\n-   Updated dependencies [2527628e1]\n-   Updated dependencies [6011b7d3e]\n-   Updated dependencies [1c69d4716]\n-   Updated dependencies [83b6e0c1f]\n-   Updated dependencies [1665ae8bb]\n-   Updated dependencies [04f26f88d]\n-   Updated dependencies [ff243ce96]\n    -   @backstage/core@0.4.0\n    -   @backstage/plugin-catalog@0.2.6\n    -   @backstage/catalog-model@0.5.0\n    -   @backstage/theme@0.2.2\n\n ## @backstage/plugin-scaffolder-backend@0.3.4\n\n### Patch Changes\n\n-   1e22f8e0b: Unify `dockerode` library and type dependency versions\n-   Updated dependencies [38e24db00]\n-   Updated dependencies [e3bd9fc2f]\n-   Updated dependencies [12bbd748c]\n-   Updated dependencies [83b6e0c1f]\n-   Updated dependencies [e3bd9fc2f]\n    -   @backstage/backend-common@0.4.0\n    -   @backstage/config@0.1.2\n    -   @backstage/catalog-model@0.5.0\n\n ## @backstage/plugin-search@0.2.3\n\n### Patch Changes\n\n-   6a0d7a9fb: change default size for pageSize in search result view\n-   Updated dependencies [2527628e1]\n-   Updated dependencies [6011b7d3e]\n-   Updated dependencies [1c69d4716]\n-   Updated dependencies [83b6e0c1f]\n-   Updated dependencies [1665ae8bb]\n-   Updated dependencies [04f26f88d]\n-   Updated dependencies [ff243ce96]\n    -   @backstage/core@0.4.0\n    -   @backstage/plugin-catalog@0.2.6\n    -   @backstage/catalog-model@0.5.0\n    -   @backstage/theme@0.2.2\n\n ## @backstage/plugin-sonarqube@0.1.6\n\n### Patch Changes\n\n-   Updated dependencies [2527628e1]\n-   Updated dependencies [1c69d4716]\n-   Updated dependencies [83b6e0c1f]\n-   Updated dependencies [1665ae8bb]\n-   Updated dependencies [04f26f88d]\n-   Updated dependencies [ff243ce96]\n    -   @backstage/core@0.4.0\n    -   @backstage/catalog-model@0.5.0\n    -   @backstage/theme@0.2.2\n\n ## @backstage/plugin-tech-radar@0.3.1\n\n### Patch Changes\n\n-   Updated dependencies [2527628e1]\n-   Updated dependencies [e1f4e24ef]\n-   Updated dependencies [1c69d4716]\n-   Updated dependencies [1665ae8bb]\n-   Updated dependencies [04f26f88d]\n-   Updated dependencies [ff243ce96]\n    -   @backstage/core@0.4.0\n    -   @backstage/test-utils@0.1.5\n    -   @backstage/theme@0.2.2\n\n ## @backstage/plugin-techdocs-backend@0.3.2\n\n### Patch Changes\n\n-   1e22f8e0b: Unify `dockerode` library and type dependency versions\n-   Updated dependencies [38e24db00]\n-   Updated dependencies [e3bd9fc2f]\n-   Updated dependencies [12bbd748c]\n-   Updated dependencies [83b6e0c1f]\n-   Updated dependencies [e3bd9fc2f]\n    -   @backstage/backend-common@0.4.0\n    -   @backstage/config@0.1.2\n    -   @backstage/catalog-model@0.5.0\n\n ## @backstage/plugin-user-settings@0.2.3\n\n### Patch Changes\n\n-   Updated dependencies [2527628e1]\n-   Updated dependencies [1c69d4716]\n-   Updated dependencies [1665ae8bb]\n-   Updated dependencies [04f26f88d]\n-   Updated dependencies [ff243ce96]\n    -   @backstage/core@0.4.0\n    -   @backstage/theme@0.2.2\n\n ## @backstage/plugin-welcome@0.2.3\n\n### Patch Changes\n\n-   Updated dependencies [2527628e1]\n-   Updated dependencies [1c69d4716]\n-   Updated dependencies [1665ae8bb]\n-   Updated dependencies [04f26f88d]\n-   Updated dependencies [ff243ce96]\n    -   @backstage/core@0.4.0\n    -   @backstage/theme@0.2.2\n\n ## example-app@0.2.6\n\n### Patch Changes\n\n-   Updated dependencies [b2a07d2dc]\n-   Updated dependencies [075d3dc5a]\n-   Updated dependencies [e3071a0d4]\n-   Updated dependencies [d6e8099ed]\n-   Updated dependencies [88ef11b45]\n-   Updated dependencies [06dbe707b]\n-   Updated dependencies [2527628e1]\n-   Updated dependencies [011708102]\n-   Updated dependencies [04efbbdd2]\n-   Updated dependencies [90458fed6]\n-   Updated dependencies [6011b7d3e]\n-   Updated dependencies [79418ddb6]\n-   Updated dependencies [d2938af4c]\n-   Updated dependencies [61897fb2c]\n-   Updated dependencies [e1f4e24ef]\n-   Updated dependencies [6a0d7a9fb]\n-   Updated dependencies [0f8877168]\n-   Updated dependencies [1c69d4716]\n-   Updated dependencies [246799c7f]\n-   Updated dependencies [83b6e0c1f]\n-   Updated dependencies [87a33d2fe]\n-   Updated dependencies [1665ae8bb]\n-   Updated dependencies [04f26f88d]\n-   Updated dependencies [ff243ce96]\n-   Updated dependencies [2b71db211]\n    -   @backstage/plugin-jenkins@0.3.3\n    -   @backstage/plugin-sentry@0.3.0\n    -   @backstage/plugin-cost-insights@0.5.0\n    -   @backstage/cli@0.4.1\n    -   @backstage/core@0.4.0\n    -   @backstage/plugin-circleci@0.2.4\n    -   @backstage/plugin-catalog@0.2.6\n    -   @backstage/plugin-pagerduty@0.2.2\n    -   @backstage/plugin-catalog-import@0.3.1\n    -   @backstage/test-utils@0.1.5\n    -   @backstage/plugin-search@0.2.3\n    -   @backstage/plugin-api-docs@0.4.0\n    -   @backstage/catalog-model@0.5.0\n    -   @backstage/plugin-techdocs@0.4.0\n    -   @backstage/theme@0.2.2\n    -   @backstage/plugin-org@0.3.1\n    -   @backstage/plugin-cloudbuild@0.2.4\n    -   @backstage/plugin-explore@0.2.2\n    -   @backstage/plugin-gcp-projects@0.2.2\n    -   @backstage/plugin-github-actions@0.2.4\n    -   @backstage/plugin-gitops-profiles@0.2.2\n    -   @backstage/plugin-graphiql@0.2.2\n    -   @backstage/plugin-kubernetes@0.3.2\n    -   @backstage/plugin-lighthouse@0.2.5\n    -   @backstage/plugin-newrelic@0.2.2\n    -   @backstage/plugin-register-component@0.2.4\n    -   @backstage/plugin-rollbar@0.2.6\n    -   @backstage/plugin-scaffolder@0.3.3\n    -   @backstage/plugin-tech-radar@0.3.1\n    -   @backstage/plugin-user-settings@0.2.3\n    -   @backstage/plugin-welcome@0.2.3\n\n ## example-backend@0.2.6\n\n### Patch Changes\n\n-   1e22f8e0b: Unify `dockerode` library and type dependency versions\n-   Updated dependencies [6e8bb3ac0]\n-   Updated dependencies [e708679d7]\n-   Updated dependencies [047c018c9]\n-   Updated dependencies [38e24db00]\n-   Updated dependencies [e3bd9fc2f]\n-   Updated dependencies [12bbd748c]\n-   Updated dependencies [38d63fbe1]\n-   Updated dependencies [1e22f8e0b]\n-   Updated dependencies [83b6e0c1f]\n-   Updated dependencies [e3bd9fc2f]\n    -   @backstage/plugin-catalog-backend@0.4.0\n    -   @backstage/backend-common@0.4.0\n    -   @backstage/config@0.1.2\n    -   @backstage/plugin-scaffolder-backend@0.3.4\n    -   @backstage/plugin-techdocs-backend@0.3.2\n    -   @backstage/catalog-model@0.5.0\n    -   example-app@0.2.6\n    -   @backstage/plugin-app-backend@0.3.3\n    -   @backstage/plugin-auth-backend@0.2.6\n    -   @backstage/plugin-graphql-backend@0.1.4\n    -   @backstage/plugin-kubernetes-backend@0.2.2\n    -   @backstage/plugin-proxy-backend@0.2.3\n    -   @backstage/plugin-rollbar-backend@0.1.5\n",
  },
  {
    url: 'https://api.github.com/repos/backstage/backstage/releases/35801333',
    assets_url:
      'https://api.github.com/repos/backstage/backstage/releases/35801333/assets',
    upload_url:
      'https://uploads.github.com/repos/backstage/backstage/releases/35801333/assets{?name,label}',
    html_url: 'https://github.com/backstage/backstage/releases/tag/v0.3.2',
    id: 35801333,
    author: {
      login: 'Rugvip',
      id: 4984472,
      node_id: 'MDQ6VXNlcjQ5ODQ0NzI=',
      avatar_url: 'https://avatars2.githubusercontent.com/u/4984472?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Rugvip',
      html_url: 'https://github.com/Rugvip',
      followers_url: 'https://api.github.com/users/Rugvip/followers',
      following_url:
        'https://api.github.com/users/Rugvip/following{/other_user}',
      gists_url: 'https://api.github.com/users/Rugvip/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/Rugvip/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Rugvip/subscriptions',
      organizations_url: 'https://api.github.com/users/Rugvip/orgs',
      repos_url: 'https://api.github.com/users/Rugvip/repos',
      events_url: 'https://api.github.com/users/Rugvip/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Rugvip/received_events',
      type: 'User',
      site_admin: false,
    },
    node_id: 'MDc6UmVsZWFzZTM1ODAxMzMz',
    tag_name: 'v0.3.2',
    target_commitish: 'master',
    name: 'v0.3.2',
    draft: false,
    prerelease: false,
    created_at: '2020-11-24T17:51:25Z',
    published_at: '2020-12-29T11:33:26Z',
    assets: [],
    tarball_url:
      'https://api.github.com/repos/backstage/backstage/tarball/v0.3.2',
    zipball_url:
      'https://api.github.com/repos/backstage/backstage/zipball/v0.3.2',
    body:
      "## @backstage/catalog-model@0.3.0\n\n### Minor Changes\n\n-   1166fcc36: add kubernetes selector to component model\n\n### Patch Changes\n\n-   1185919f3: Marked the `Group` entity fields `ancestors` and `descendants` for deprecation on Dec 6th, 2020. See <https://github.com/backstage/backstage/issues/3049> for details.\n\n    Code that consumes these fields should remove those usages as soon as possible. There is no current or planned replacement for these fields.\n\n    The BuiltinKindsEntityProcessor has been updated to inject these fields as empty arrays if they are missing. Therefore, if you are on a catalog instance that uses the updated version of this code, you can start removing the fields from your source catalog-info.yaml data as well, without breaking validation.\n\n    After Dec 6th, the fields will be removed from types and classes of the Backstage repository. At the first release after that, they will not be present in released packages either.\n\n    If your catalog-info.yaml files still contain these fields after the deletion, they will still be valid and your ingestion will not break, but they won't be visible in the types for consuming code.\n\n ## @backstage/plugin-kubernetes@0.3.0\n\n### Minor Changes\n\n-   1166fcc36: add kubernetes selector to component model\n\n### Patch Changes\n\n-   Updated dependencies [475fc0aaa]\n-   Updated dependencies [1166fcc36]\n-   Updated dependencies [1185919f3]\n    -   @backstage/core@0.3.2\n    -   @backstage/catalog-model@0.3.0\n    -   @backstage/plugin-kubernetes-backend@0.2.0\n\n ## @backstage/plugin-kubernetes-backend@0.2.0\n\n### Minor Changes\n\n-   1166fcc36: add kubernetes selector to component model\n\n### Patch Changes\n\n-   Updated dependencies [1166fcc36]\n-   Updated dependencies [bff3305aa]\n-   Updated dependencies [1185919f3]\n-   Updated dependencies [b47dce06f]\n    -   @backstage/catalog-model@0.3.0\n    -   @backstage/backend-common@0.3.1\n\n ## @backstage/backend-common@0.3.1\n\n### Patch Changes\n\n-   bff3305aa: Added readTree support to AzureUrlReader\n-   b47dce06f: Make integration host and url configurations visible in the frontend\n\n ## @backstage/catalog-client@0.3.1\n\n### Patch Changes\n\n-   Updated dependencies [1166fcc36]\n-   Updated dependencies [1185919f3]\n    -   @backstage/catalog-model@0.3.0\n\n ## @backstage/cli@0.3.1\n\n### Patch Changes\n\n-   29a0ccab2: The CLI now detects and transforms linked packages. You can link in external packages by adding them to both the `lerna.json` and `package.json` workspace paths.\n-   faf311c26: New lint rule to disallow <type> assertions and promote `as` assertions. - @typescript-eslint/consistent-type-assertions\n-   31d8b6979: Add experimental backend:bundle command\n-   991345969: Add new `versions:check` and `versions:bump` commands to simplify version management and avoid conflicts\n\n ## @backstage/core@0.3.2\n\n### Patch Changes\n\n-   475fc0aaa: Clear sidebar search field once a search is executed\n\n ## @backstage/plugin-api-docs@0.2.2\n\n### Patch Changes\n\n-   Updated dependencies [475fc0aaa]\n-   Updated dependencies [1166fcc36]\n-   Updated dependencies [1185919f3]\n    -   @backstage/core@0.3.2\n    -   @backstage/catalog-model@0.3.0\n    -   @backstage/plugin-catalog@0.2.3\n\n ## @backstage/plugin-auth-backend@0.2.3\n\n### Patch Changes\n\n-   Updated dependencies [1166fcc36]\n-   Updated dependencies [bff3305aa]\n-   Updated dependencies [1185919f3]\n-   Updated dependencies [b47dce06f]\n    -   @backstage/catalog-model@0.3.0\n    -   @backstage/backend-common@0.3.1\n    -   @backstage/catalog-client@0.3.1\n\n ## @backstage/plugin-catalog@0.2.3\n\n### Patch Changes\n\n-   Updated dependencies [475fc0aaa]\n-   Updated dependencies [1166fcc36]\n-   Updated dependencies [ef2831dde]\n-   Updated dependencies [1185919f3]\n    -   @backstage/core@0.3.2\n    -   @backstage/catalog-model@0.3.0\n    -   @backstage/plugin-scaffolder@0.3.1\n    -   @backstage/catalog-client@0.3.1\n    -   @backstage/plugin-techdocs@0.2.3\n\n ## @backstage/plugin-catalog-backend@0.2.2\n\n### Patch Changes\n\n-   0c2121240: Add support for reading groups and users from the Microsoft Graph API.\n\n-   1185919f3: Marked the `Group` entity fields `ancestors` and `descendants` for deprecation on Dec 6th, 2020. See <https://github.com/backstage/backstage/issues/3049> for details.\n\n    Code that consumes these fields should remove those usages as soon as possible. There is no current or planned replacement for these fields.\n\n    The BuiltinKindsEntityProcessor has been updated to inject these fields as empty arrays if they are missing. Therefore, if you are on a catalog instance that uses the updated version of this code, you can start removing the fields from your source catalog-info.yaml data as well, without breaking validation.\n\n    After Dec 6th, the fields will be removed from types and classes of the Backstage repository. At the first release after that, they will not be present in released packages either.\n\n    If your catalog-info.yaml files still contain these fields after the deletion, they will still be valid and your ingestion will not break, but they won't be visible in the types for consuming code.\n\n-   Updated dependencies [1166fcc36]\n\n-   Updated dependencies [bff3305aa]\n\n-   Updated dependencies [1185919f3]\n\n-   Updated dependencies [b47dce06f]\n    -   @backstage/catalog-model@0.3.0\n    -   @backstage/backend-common@0.3.1\n\n ## @backstage/plugin-catalog-graphql@0.2.2\n\n### Patch Changes\n\n-   Updated dependencies [1166fcc36]\n-   Updated dependencies [bff3305aa]\n-   Updated dependencies [1185919f3]\n-   Updated dependencies [b47dce06f]\n    -   @backstage/catalog-model@0.3.0\n    -   @backstage/backend-common@0.3.1\n\n ## @backstage/plugin-circleci@0.2.2\n\n### Patch Changes\n\n-   a8de7f554: Improved CircleCI builds table to show more information and relevant links\n-   Updated dependencies [475fc0aaa]\n-   Updated dependencies [1166fcc36]\n-   Updated dependencies [1185919f3]\n    -   @backstage/core@0.3.2\n    -   @backstage/catalog-model@0.3.0\n    -   @backstage/plugin-catalog@0.2.3\n\n ## @backstage/plugin-cloudbuild@0.2.2\n\n### Patch Changes\n\n-   Updated dependencies [475fc0aaa]\n-   Updated dependencies [1166fcc36]\n-   Updated dependencies [1185919f3]\n    -   @backstage/core@0.3.2\n    -   @backstage/catalog-model@0.3.0\n    -   @backstage/plugin-catalog@0.2.3\n\n ## @backstage/plugin-cost-insights@0.4.1\n\n### Patch Changes\n\n-   8e6728e25: fix product icon configuration\n-   c93a14b49: truncate large percentages > 1000%\n-   Updated dependencies [475fc0aaa]\n    -   @backstage/core@0.3.2\n\n ## @backstage/plugin-github-actions@0.2.2\n\n### Patch Changes\n\n-   Updated dependencies [475fc0aaa]\n-   Updated dependencies [1166fcc36]\n-   Updated dependencies [1185919f3]\n    -   @backstage/core@0.3.2\n    -   @backstage/catalog-model@0.3.0\n    -   @backstage/plugin-catalog@0.2.3\n\n ## @backstage/plugin-jenkins@0.3.1\n\n### Patch Changes\n\n-   Updated dependencies [475fc0aaa]\n-   Updated dependencies [1166fcc36]\n-   Updated dependencies [1185919f3]\n    -   @backstage/core@0.3.2\n    -   @backstage/catalog-model@0.3.0\n    -   @backstage/plugin-catalog@0.2.3\n\n ## @backstage/plugin-lighthouse@0.2.3\n\n### Patch Changes\n\n-   Updated dependencies [475fc0aaa]\n-   Updated dependencies [1166fcc36]\n-   Updated dependencies [1185919f3]\n    -   @backstage/core@0.3.2\n    -   @backstage/catalog-model@0.3.0\n    -   @backstage/plugin-catalog@0.2.3\n\n ## @backstage/plugin-register-component@0.2.2\n\n### Patch Changes\n\n-   2a71f4bab: Remove catalog link on validate popup\n-   Updated dependencies [475fc0aaa]\n-   Updated dependencies [1166fcc36]\n-   Updated dependencies [1185919f3]\n    -   @backstage/core@0.3.2\n    -   @backstage/catalog-model@0.3.0\n    -   @backstage/plugin-catalog@0.2.3\n\n ## @backstage/plugin-rollbar@0.2.3\n\n### Patch Changes\n\n-   Updated dependencies [475fc0aaa]\n-   Updated dependencies [1166fcc36]\n-   Updated dependencies [1185919f3]\n    -   @backstage/core@0.3.2\n    -   @backstage/catalog-model@0.3.0\n    -   @backstage/plugin-catalog@0.2.3\n\n ## @backstage/plugin-scaffolder@0.3.1\n\n### Patch Changes\n\n-   ef2831dde: Move constructing the catalog-info.yaml URL for scaffolded components to the publishers\n-   Updated dependencies [475fc0aaa]\n-   Updated dependencies [1166fcc36]\n-   Updated dependencies [1185919f3]\n    -   @backstage/core@0.3.2\n    -   @backstage/catalog-model@0.3.0\n    -   @backstage/plugin-catalog@0.2.3\n\n ## @backstage/plugin-scaffolder-backend@0.3.2\n\n### Patch Changes\n\n-   ef2831dde: Move constructing the catalog-info.yaml URL for scaffolded components to the publishers\n-   5a1d8dca3: Fix React entity YAML filename to new standard\n-   Updated dependencies [1166fcc36]\n-   Updated dependencies [bff3305aa]\n-   Updated dependencies [1185919f3]\n-   Updated dependencies [b47dce06f]\n    -   @backstage/catalog-model@0.3.0\n    -   @backstage/backend-common@0.3.1\n\n ## @backstage/plugin-search@0.2.1\n\n### Patch Changes\n\n-   475fc0aaa: Using the search field in the sidebar now navigates to the search result page.\n-   Updated dependencies [475fc0aaa]\n-   Updated dependencies [1166fcc36]\n-   Updated dependencies [1185919f3]\n    -   @backstage/core@0.3.2\n    -   @backstage/catalog-model@0.3.0\n    -   @backstage/plugin-catalog@0.2.3\n\n ## @backstage/plugin-sentry@0.2.3\n\n### Patch Changes\n\n-   Updated dependencies [475fc0aaa]\n-   Updated dependencies [1166fcc36]\n-   Updated dependencies [1185919f3]\n    -   @backstage/core@0.3.2\n    -   @backstage/catalog-model@0.3.0\n\n ## @backstage/plugin-sonarqube@0.1.4\n\n### Patch Changes\n\n-   26484d413: Add configuration schema\n-   Updated dependencies [475fc0aaa]\n-   Updated dependencies [1166fcc36]\n-   Updated dependencies [1185919f3]\n    -   @backstage/core@0.3.2\n    -   @backstage/catalog-model@0.3.0\n\n ## @backstage/plugin-techdocs@0.2.3\n\n### Patch Changes\n\n-   Updated dependencies [475fc0aaa]\n-   Updated dependencies [1166fcc36]\n-   Updated dependencies [1185919f3]\n    -   @backstage/core@0.3.2\n    -   @backstage/catalog-model@0.3.0\n    -   @backstage/plugin-catalog@0.2.3\n\n ## @backstage/plugin-techdocs-backend@0.2.2\n\n### Patch Changes\n\n-   Updated dependencies [1166fcc36]\n-   Updated dependencies [bff3305aa]\n-   Updated dependencies [1185919f3]\n-   Updated dependencies [b47dce06f]\n    -   @backstage/catalog-model@0.3.0\n    -   @backstage/backend-common@0.3.1\n\n ## example-app@0.2.3\n\n### Patch Changes\n\n-   475fc0aaa: Using the search field in the sidebar now navigates to the search result page.\n-   Updated dependencies [475fc0aaa]\n-   Updated dependencies [1166fcc36]\n-   Updated dependencies [29a0ccab2]\n-   Updated dependencies [8e6728e25]\n-   Updated dependencies [c93a14b49]\n-   Updated dependencies [ef2831dde]\n-   Updated dependencies [2a71f4bab]\n-   Updated dependencies [1185919f3]\n-   Updated dependencies [a8de7f554]\n-   Updated dependencies [faf311c26]\n-   Updated dependencies [31d8b6979]\n-   Updated dependencies [991345969]\n-   Updated dependencies [475fc0aaa]\n    -   @backstage/core@0.3.2\n    -   @backstage/catalog-model@0.3.0\n    -   @backstage/plugin-kubernetes@0.3.0\n    -   @backstage/cli@0.3.1\n    -   @backstage/plugin-cost-insights@0.4.1\n    -   @backstage/plugin-scaffolder@0.3.1\n    -   @backstage/plugin-register-component@0.2.2\n    -   @backstage/plugin-circleci@0.2.2\n    -   @backstage/plugin-search@0.2.1\n    -   @backstage/plugin-api-docs@0.2.2\n    -   @backstage/plugin-catalog@0.2.3\n    -   @backstage/plugin-cloudbuild@0.2.2\n    -   @backstage/plugin-github-actions@0.2.2\n    -   @backstage/plugin-jenkins@0.3.1\n    -   @backstage/plugin-lighthouse@0.2.3\n    -   @backstage/plugin-rollbar@0.2.3\n    -   @backstage/plugin-sentry@0.2.3\n    -   @backstage/plugin-techdocs@0.2.3\n\n ## example-backend@0.2.3\n\n### Patch Changes\n\n-   Updated dependencies [1166fcc36]\n-   Updated dependencies [bff3305aa]\n-   Updated dependencies [0c2121240]\n-   Updated dependencies [ef2831dde]\n-   Updated dependencies [1185919f3]\n-   Updated dependencies [475fc0aaa]\n-   Updated dependencies [b47dce06f]\n-   Updated dependencies [5a1d8dca3]\n    -   @backstage/catalog-model@0.3.0\n    -   @backstage/plugin-kubernetes-backend@0.2.0\n    -   @backstage/backend-common@0.3.1\n    -   @backstage/plugin-catalog-backend@0.2.2\n    -   @backstage/plugin-scaffolder-backend@0.3.2\n    -   example-app@0.2.3\n    -   @backstage/plugin-auth-backend@0.2.3\n    -   @backstage/plugin-techdocs-backend@0.2.2\n",
  },
  {
    url: 'https://api.github.com/repos/backstage/backstage/releases/35801330',
    assets_url:
      'https://api.github.com/repos/backstage/backstage/releases/35801330/assets',
    upload_url:
      'https://uploads.github.com/repos/backstage/backstage/releases/35801330/assets{?name,label}',
    html_url: 'https://github.com/backstage/backstage/releases/tag/v0.3.1',
    id: 35801330,
    author: {
      login: 'Rugvip',
      id: 4984472,
      node_id: 'MDQ6VXNlcjQ5ODQ0NzI=',
      avatar_url: 'https://avatars2.githubusercontent.com/u/4984472?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Rugvip',
      html_url: 'https://github.com/Rugvip',
      followers_url: 'https://api.github.com/users/Rugvip/followers',
      following_url:
        'https://api.github.com/users/Rugvip/following{/other_user}',
      gists_url: 'https://api.github.com/users/Rugvip/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/Rugvip/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Rugvip/subscriptions',
      organizations_url: 'https://api.github.com/users/Rugvip/orgs',
      repos_url: 'https://api.github.com/users/Rugvip/repos',
      events_url: 'https://api.github.com/users/Rugvip/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Rugvip/received_events',
      type: 'User',
      site_admin: false,
    },
    node_id: 'MDc6UmVsZWFzZTM1ODAxMzMw',
    tag_name: 'v0.3.1',
    target_commitish: 'master',
    name: 'v0.3.1',
    draft: false,
    prerelease: false,
    created_at: '2020-11-19T16:29:03Z',
    published_at: '2020-12-29T11:33:18Z',
    assets: [],
    tarball_url:
      'https://api.github.com/repos/backstage/backstage/tarball/v0.3.1',
    zipball_url:
      'https://api.github.com/repos/backstage/backstage/zipball/v0.3.1',
    body:
      '## @backstage/backend-common@0.3.0\n\n### Minor Changes\n\n-   1722cb53c: Added support for loading and validating configuration schemas, as well as declaring config visibility through schemas.\n\n    The new `loadConfigSchema` function exported by `@backstage/config-loader` allows for the collection and merging of configuration schemas from all nearby dependencies of the project.\n\n    A configuration schema is declared using the `https://backstage.io/schema/config-v1` JSON Schema meta schema, which is based on draft07. The only difference to the draft07 schema is the custom `visibility` keyword, which is used to indicate whether the given config value should be visible in the frontend or not. The possible values are `frontend`, `backend`, and `secret`, where `backend` is the default. A visibility of `secret` has the same scope at runtime, but it will be treated with more care in certain contexts, and defining both `frontend` and `secret` for the same value in two different schemas will result in an error during schema merging.\n\n    Packages that wish to contribute configuration schema should declare it in a root `"configSchema"` field in `package.json`. The field can either contain an inlined JSON schema, or a relative path to a schema file. Schema files can be in either `.json` or `.d.ts` format.\n\n    TypeScript configuration schema files should export a single `Config` type, for example:\n\n    ```ts\n    export interface Config {\n      app: {\n        /**\n         * Frontend root URL\n         * @visibility frontend\n         */\n        baseUrl: string;\n      };\n    }\n    ```\n\n-   8e2effb53: Refactored UrlReader.readTree to be required and accept (url, options)\n\n### Patch Changes\n\n-   1722cb53c: Added configuration schema\n-   7b37e6834: Added the integration package\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [7b37e6834]\n    -   @backstage/config-loader@0.3.0\n    -   @backstage/integration@0.1.1\n    -   @backstage/test-utils@0.1.3\n\n ## @backstage/catalog-client@0.3.0\n\n### Minor Changes\n\n-   717e43de1: Changed the getEntities interface to (1) nest parameters in an object, (2) support field selection, and (3) return an object with an items field for future extension\n\n ## @backstage/cli@0.3.0\n\n### Minor Changes\n\n-   1722cb53c: Added support for loading and validating configuration schemas, as well as declaring config visibility through schemas.\n\n    The new `loadConfigSchema` function exported by `@backstage/config-loader` allows for the collection and merging of configuration schemas from all nearby dependencies of the project.\n\n    A configuration schema is declared using the `https://backstage.io/schema/config-v1` JSON Schema meta schema, which is based on draft07. The only difference to the draft07 schema is the custom `visibility` keyword, which is used to indicate whether the given config value should be visible in the frontend or not. The possible values are `frontend`, `backend`, and `secret`, where `backend` is the default. A visibility of `secret` has the same scope at runtime, but it will be treated with more care in certain contexts, and defining both `frontend` and `secret` for the same value in two different schemas will result in an error during schema merging.\n\n    Packages that wish to contribute configuration schema should declare it in a root `"configSchema"` field in `package.json`. The field can either contain an inlined JSON schema, or a relative path to a schema file. Schema files can be in either `.json` or `.d.ts` format.\n\n    TypeScript configuration schema files should export a single `Config` type, for example:\n\n    ```ts\n    export interface Config {\n      app: {\n        /**\n         * Frontend root URL\n         * @visibility frontend\n         */\n        baseUrl: string;\n      };\n    }\n    ```\n\n### Patch Changes\n\n-   1722cb53c: Added configuration schema\n-   902340451: Support specifying listen host/port for frontend\n-   Updated dependencies [1722cb53c]\n    -   @backstage/config-loader@0.3.0\n\n ## @backstage/config-loader@0.3.0\n\n### Minor Changes\n\n-   1722cb53c: Added support for loading and validating configuration schemas, as well as declaring config visibility through schemas.\n\n    The new `loadConfigSchema` function exported by `@backstage/config-loader` allows for the collection and merging of configuration schemas from all nearby dependencies of the project.\n\n    A configuration schema is declared using the `https://backstage.io/schema/config-v1` JSON Schema meta schema, which is based on draft07. The only difference to the draft07 schema is the custom `visibility` keyword, which is used to indicate whether the given config value should be visible in the frontend or not. The possible values are `frontend`, `backend`, and `secret`, where `backend` is the default. A visibility of `secret` has the same scope at runtime, but it will be treated with more care in certain contexts, and defining both `frontend` and `secret` for the same value in two different schemas will result in an error during schema merging.\n\n    Packages that wish to contribute configuration schema should declare it in a root `"configSchema"` field in `package.json`. The field can either contain an inlined JSON schema, or a relative path to a schema file. Schema files can be in either `.json` or `.d.ts` format.\n\n    TypeScript configuration schema files should export a single `Config` type, for example:\n\n    ```ts\n    export interface Config {\n      app: {\n        /**\n         * Frontend root URL\n         * @visibility frontend\n         */\n        baseUrl: string;\n      };\n    }\n    ```\n\n ## @backstage/plugin-app-backend@0.3.0\n\n### Minor Changes\n\n-   1722cb53c: Use new config schema support to automatically inject config with frontend visibility, in addition to the existing env schema injection.\n\n    This removes the confusing behavior where configuration was only injected into the app at build time. Any runtime configuration (except for environment config) in the backend used to only apply to the backend itself, and not be injected into the frontend.\n\n### Patch Changes\n\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [7b37e6834]\n-   Updated dependencies [8e2effb53]\n    -   @backstage/backend-common@0.3.0\n    -   @backstage/config-loader@0.3.0\n\n ## @backstage/plugin-cost-insights@0.4.0\n\n### Minor Changes\n\n-   4040d4fcb: remove cost insights currency feature flag\n\n### Patch Changes\n\n-   1722cb53c: Added configuration schema\n-   17a9f48f6: remove excessive margin from cost overview banner\n-   f360395d0: UI improvements: Increase width of first column in product entity dialog table\n    UI improvement: Display full cost amount in product entity dialog table\n-   259d848ee: Fix savings/excess display calculation\n-   Updated dependencies [1722cb53c]\n    -   @backstage/core@0.3.1\n    -   @backstage/test-utils@0.1.3\n\n ## @backstage/core@0.3.1\n\n### Patch Changes\n\n-   1722cb53c: Added configuration schema\n\n ## @backstage/create-app@0.2.2\n\n### Patch Changes\n\n-   7d7abd50c: Add `app-backend` as a backend plugin, and make a single docker build of the backend the default way to deploy backstage.\n\n    Note that the `app-backend` currently only is a solution for deployments of the app, it\'s not a dev server and is not intended for local development.\n\n    ## Template changes\n\n    As a part of installing the `app-backend` plugin, the below changes where made. The changes are grouped into two steps, installing the plugin, and updating the Docker build and configuration.\n\n    ### Installing the `app-backend` plugin in the backend\n\n    First, install the `@backstage/plugin-app-backend` plugin package in your backend. These changes where made for `v0.3.0` of the plugin, and the installation process might change in the future. Run the following from the root of the repo:\n\n    ```bash\n    cd packages/backend\n    yarn add @backstage/plugin-app-backend\n    ```\n\n    For the `app-backend` to get access to the static content in the frontend we also need to add the local `app` package as a dependency. Add the following to your `"dependencies"` in `packages/backend/package.json`, assuming your app package is still named `app` and on version `0.0.0`:\n\n    ```json\n    "app": "0.0.0",\n    ```\n\n    Don\'t worry, this will not cause your entire frontend dependency tree to be added to the app, just double check that `packages/app/package.json` has a `"bundled": true` field at top-level. This signals to the backend build process that the package is bundled and that no transitive dependencies should be included.\n\n    Next, create `packages/backend/src/plugins/app.ts` with the following:\n\n    ```ts\n    import { createRouter } from \'@backstage/plugin-app-backend\';\n    import { PluginEnvironment } from \'../types\';\n\n    export default async function createPlugin({\n      logger,\n      config,\n    }: PluginEnvironment) {\n      return await createRouter({\n        logger,\n        config,\n        appPackageName: \'app\',\n      });\n    }\n    ```\n\n    In `packages/backend/src/index.ts`, make the following changes:\n\n    Add an import for the newly created plugin setup file:\n\n    ```ts\n    import app from \'./plugins/app\';\n    ```\n\n    Setup the following plugin env.\n\n    ```ts\n    const appEnv = useHotMemoize(module, () => createEnv(\'app\'));\n    ```\n\n    Change service builder setup to include the `app` plugin as follows. Note that the `app` plugin is not installed on the `/api` route with most other plugins.\n\n    ```ts\n    const service = createServiceBuilder(module)\n      .loadConfig(config)\n      .addRouter(\'/api\', apiRouter)\n      .addRouter(\'\', await app(appEnv));\n    ```\n\n    You should now have the `app-backend` plugin installed in your backend, ready to serve the frontend bundle!\n\n    ### Docker build setup\n\n    Since the backend image is now the only one needed for a simple Backstage deployment, the image tag name in the `build-image` script inside `packages/backend/package.json` was changed to the following:\n\n    ```json\n    "build-image": "backstage-cli backend:build-image --build --tag backstage",\n    ```\n\n    For convenience, a `build-image` script was also added to the root `package.json` with the following:\n\n    ```json\n    "build-image": "yarn workspace backend build-image",\n    ```\n\n    In the root of the repo, a new `app-config.production.yaml` file was added. This is used to set the appropriate `app.baseUrl` now that the frontend is served directly by the backend in the production deployment. It has the following contents:\n\n    ```yaml\n    app:\n      # Should be the same as backend.baseUrl when using the `app-backend` plugin\n      baseUrl: http://localhost:7000\n\n    backend:\n      baseUrl: http://localhost:7000\n      listen:\n        port: 7000\n    ```\n\n    In order to load in the new configuration at runtime, the command in the `Dockerfile` at the repo root was changed to the following:\n\n    ```dockerfile\n    CMD ["node", "packages/backend", "--config", "app-config.yaml", "--config", "app-config.production.yaml"]\n    ```\n\n ## @backstage/dev-utils@0.1.4\n\n### Patch Changes\n\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [902340451]\n    -   @backstage/cli@0.3.0\n    -   @backstage/core@0.3.1\n    -   @backstage/test-utils@0.1.3\n\n ## @backstage/integration@0.1.1\n\n### Patch Changes\n\n-   7b37e6834: Added the integration package\n\n ## @backstage/test-utils@0.1.3\n\n### Patch Changes\n\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [902340451]\n    -   @backstage/cli@0.3.0\n\n ## @backstage/plugin-auth-backend@0.2.2\n\n### Patch Changes\n\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [7b37e6834]\n-   Updated dependencies [8e2effb53]\n-   Updated dependencies [717e43de1]\n    -   @backstage/backend-common@0.3.0\n    -   @backstage/catalog-client@0.3.0\n\n ## @backstage/plugin-catalog@0.2.2\n\n### Patch Changes\n\n-   8b7737d0b: Add About Card tooltips\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [717e43de1]\n    -   @backstage/core@0.3.1\n    -   @backstage/plugin-techdocs@0.2.2\n    -   @backstage/catalog-client@0.3.0\n\n ## @backstage/plugin-catalog-backend@0.2.1\n\n### Patch Changes\n\n-   f531d307c: An entity A, that exists in the catalog, can no longer be overwritten by registering a different location that also tries to supply an entity with the same kind+namespace+name. Writes of that new entity will instead be rejected with a log message similar to `Rejecting write of entity Component:default/artist-lookup from file:/Users/freben/dev/github/backstage/packages/catalog-model/examples/components/artist-lookup-component.yaml because entity existed from github:https://github.com/backstage/backstage/blob/master/packages/catalog-model/examples/components/artist-lookup-component.yaml`\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [7b37e6834]\n-   Updated dependencies [8e2effb53]\n    -   @backstage/backend-common@0.3.0\n\n ## @backstage/plugin-catalog-graphql@0.2.1\n\n### Patch Changes\n\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [7b37e6834]\n-   Updated dependencies [8e2effb53]\n    -   @backstage/backend-common@0.3.0\n\n ## @backstage/plugin-graphql-backend@0.1.3\n\n### Patch Changes\n\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [7b37e6834]\n-   Updated dependencies [8e2effb53]\n    -   @backstage/backend-common@0.3.0\n    -   @backstage/plugin-catalog-graphql@0.2.1\n\n ## @backstage/plugin-kubernetes-backend@0.1.3\n\n### Patch Changes\n\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [7b37e6834]\n-   Updated dependencies [8e2effb53]\n    -   @backstage/backend-common@0.3.0\n\n ## @backstage/plugin-lighthouse@0.2.2\n\n### Patch Changes\n\n-   1722cb53c: Added configuration schema\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [8b7737d0b]\n    -   @backstage/core@0.3.1\n    -   @backstage/plugin-catalog@0.2.2\n\n ## @backstage/plugin-proxy-backend@0.2.1\n\n### Patch Changes\n\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [7b37e6834]\n-   Updated dependencies [8e2effb53]\n    -   @backstage/backend-common@0.3.0\n\n ## @backstage/plugin-rollbar@0.2.2\n\n### Patch Changes\n\n-   1722cb53c: Added configuration schema\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [8b7737d0b]\n    -   @backstage/core@0.3.1\n    -   @backstage/plugin-catalog@0.2.2\n\n ## @backstage/plugin-rollbar-backend@0.1.3\n\n### Patch Changes\n\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [7b37e6834]\n-   Updated dependencies [8e2effb53]\n    -   @backstage/backend-common@0.3.0\n\n ## @backstage/plugin-scaffolder-backend@0.3.1\n\n### Patch Changes\n\n-   d33f5157c: Extracted pushToRemote function for reuse between publishers\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [7b37e6834]\n-   Updated dependencies [8e2effb53]\n    -   @backstage/backend-common@0.3.0\n\n ## @backstage/plugin-sentry@0.2.2\n\n### Patch Changes\n\n-   1722cb53c: Added configuration schema\n-   Updated dependencies [1722cb53c]\n    -   @backstage/core@0.3.1\n\n ## @backstage/plugin-sentry-backend@0.1.3\n\n### Patch Changes\n\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [7b37e6834]\n-   Updated dependencies [8e2effb53]\n    -   @backstage/backend-common@0.3.0\n\n ## @backstage/plugin-techdocs@0.2.2\n\n### Patch Changes\n\n-   1722cb53c: Added configuration schema\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [8b7737d0b]\n    -   @backstage/core@0.3.1\n    -   @backstage/plugin-catalog@0.2.2\n    -   @backstage/test-utils@0.1.3\n\n ## @backstage/plugin-techdocs-backend@0.2.1\n\n### Patch Changes\n\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [7b37e6834]\n-   Updated dependencies [8e2effb53]\n    -   @backstage/backend-common@0.3.0\n\n ## @backstage/plugin-user-settings@0.2.2\n\n### Patch Changes\n\n-   1722cb53c: Added configuration schema\n-   Updated dependencies [1722cb53c]\n    -   @backstage/core@0.3.1\n\n ## example-app@0.2.2\n\n### Patch Changes\n\n-   3efd03c0e: Removed obsolete CircleCI proxy config from example-app\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [17a9f48f6]\n-   Updated dependencies [4040d4fcb]\n-   Updated dependencies [f360395d0]\n-   Updated dependencies [259d848ee]\n-   Updated dependencies [8b7737d0b]\n-   Updated dependencies [902340451]\n    -   @backstage/cli@0.3.0\n    -   @backstage/core@0.3.1\n    -   @backstage/plugin-cost-insights@0.4.0\n    -   @backstage/plugin-lighthouse@0.2.2\n    -   @backstage/plugin-rollbar@0.2.2\n    -   @backstage/plugin-sentry@0.2.2\n    -   @backstage/plugin-techdocs@0.2.2\n    -   @backstage/plugin-user-settings@0.2.2\n    -   @backstage/plugin-catalog@0.2.2\n    -   @backstage/test-utils@0.1.3\n\n ## example-backend@0.2.2\n\n### Patch Changes\n\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [1722cb53c]\n-   Updated dependencies [f531d307c]\n-   Updated dependencies [3efd03c0e]\n-   Updated dependencies [7b37e6834]\n-   Updated dependencies [8e2effb53]\n-   Updated dependencies [d33f5157c]\n    -   @backstage/backend-common@0.3.0\n    -   @backstage/plugin-app-backend@0.3.0\n    -   @backstage/plugin-catalog-backend@0.2.1\n    -   example-app@0.2.2\n    -   @backstage/plugin-scaffolder-backend@0.3.1\n    -   @backstage/plugin-auth-backend@0.2.2\n    -   @backstage/plugin-graphql-backend@0.1.3\n    -   @backstage/plugin-kubernetes-backend@0.1.3\n    -   @backstage/plugin-proxy-backend@0.2.1\n    -   @backstage/plugin-rollbar-backend@0.1.3\n    -   @backstage/plugin-sentry-backend@0.1.3\n    -   @backstage/plugin-techdocs-backend@0.2.1\n',
  },
  {
    url: 'https://api.github.com/repos/backstage/backstage/releases/35801324',
    assets_url:
      'https://api.github.com/repos/backstage/backstage/releases/35801324/assets',
    upload_url:
      'https://uploads.github.com/repos/backstage/backstage/releases/35801324/assets{?name,label}',
    html_url: 'https://github.com/backstage/backstage/releases/tag/v0.3.0',
    id: 35801324,
    author: {
      login: 'Rugvip',
      id: 4984472,
      node_id: 'MDQ6VXNlcjQ5ODQ0NzI=',
      avatar_url: 'https://avatars2.githubusercontent.com/u/4984472?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Rugvip',
      html_url: 'https://github.com/Rugvip',
      followers_url: 'https://api.github.com/users/Rugvip/followers',
      following_url:
        'https://api.github.com/users/Rugvip/following{/other_user}',
      gists_url: 'https://api.github.com/users/Rugvip/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/Rugvip/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Rugvip/subscriptions',
      organizations_url: 'https://api.github.com/users/Rugvip/orgs',
      repos_url: 'https://api.github.com/users/Rugvip/repos',
      events_url: 'https://api.github.com/users/Rugvip/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Rugvip/received_events',
      type: 'User',
      site_admin: false,
    },
    node_id: 'MDc6UmVsZWFzZTM1ODAxMzI0',
    tag_name: 'v0.3.0',
    target_commitish: 'master',
    name: 'v0.3.0',
    draft: false,
    prerelease: false,
    created_at: '2020-11-12T14:06:54Z',
    published_at: '2020-12-29T11:33:08Z',
    assets: [],
    tarball_url:
      'https://api.github.com/repos/backstage/backstage/tarball/v0.3.0',
    zipball_url:
      'https://api.github.com/repos/backstage/backstage/zipball/v0.3.0',
    body:
      "## @backstage/core@0.3.0\n\n### Minor Changes\n\n-   199237d2f: New DependencyGraph component added to core package.\n\n### Patch Changes\n\n-   7b37d65fd: Adds the MarkdownContent component to render and display Markdown content with the default\n    [GFM](https://github.github.com/gfm/) (Github flavored Markdown) dialect.\n\n        <MarkdownContent content={markdownGithubFlavored} />\n\n    To render the Markdown content with plain [CommonMark](https://commonmark.org/), set the dialect to `common-mark`\n\n        <MarkdownContent content={markdown} dialect='common-mark />\n\n-   4aca74e08: Extend default config loader to read config from the window object.\n\n    Config will be read from `window.__APP_CONFIG__` which should be an object.\n\n-   e8f69ba93: - The BottomLink is now able to handle with internal routes.\n    -   @backstage/core Link component detect whether it's an external link or not, and render accordingly\n\n-   0c0798f08: Extend the table to share its current filter state. The filter state can be used together with the new `useQueryParamState` hook to store the current filter state to the browser history and restore it after navigating to other routes.\n\n-   0c0798f08: Make the selected state of Select and CheckboxTree controllable from outside.\n\n-   6627b626f: Fix divider prop not respected on InfoCard\n\n-   Updated dependencies [c5bab94ab]\n\n-   Updated dependencies [4577e377b]\n    -   @backstage/core-api@0.2.1\n    -   @backstage/theme@0.2.1\n\n ## @backstage/plugin-cost-insights@0.3.0\n\n### Minor Changes\n\n-   0703edee0: rename: Tooltip -> BarChartTooltip\n    rename: TooltipItem -> BarChartTooltipItem\n    Deprecate BarChartData in favor of BarChartOptions\n    Export BarChartLegend component\n    Update BarChart props to accept options prop\n    Deprecate ProductCost type in favor of Entity. Update CostInsightsApi\n\n### Patch Changes\n\n-   9a294574c: Fix styling issue on Cost Insights product panels with no cost\n-   Updated dependencies [7b37d65fd]\n-   Updated dependencies [4aca74e08]\n-   Updated dependencies [e8f69ba93]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [199237d2f]\n-   Updated dependencies [6627b626f]\n-   Updated dependencies [4577e377b]\n    -   @backstage/core@0.3.0\n    -   @backstage/theme@0.2.1\n\n ## @backstage/plugin-jenkins@0.3.0\n\n### Minor Changes\n\n-   a41730c6e: Add tooltip for Jenkins rerun button\n\n### Patch Changes\n\n-   Updated dependencies [7b37d65fd]\n-   Updated dependencies [4aca74e08]\n-   Updated dependencies [e8f69ba93]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [199237d2f]\n-   Updated dependencies [6627b626f]\n-   Updated dependencies [4577e377b]\n-   Updated dependencies [2d0bd1be7]\n    -   @backstage/core@0.3.0\n    -   @backstage/theme@0.2.1\n    -   @backstage/plugin-catalog@0.2.1\n\n ## @backstage/plugin-scaffolder@0.3.0\n\n### Minor Changes\n\n-   59166e5ec: `createRouter` of scaffolder backend will now require additional option as `entityClient` which could be generated by `CatalogEntityClient` in `plugin-scaffolder-backend` package. Here is example to generate `entityClient`.\n\n    ```js\n    import { CatalogEntityClient } from '@backstage/plugin-scaffolder-backend';\n    import { SingleHostDiscovery } from '@backstage/backend-common';\n\n    const discovery = SingleHostDiscovery.fromConfig(config);\n    const entityClient = new CatalogEntityClient({ discovery });\n    ```\n\n    -   Scaffolder's API `/v1/jobs` will accept `templateName` instead of `template` Entity.\n\n### Patch Changes\n\n-   Updated dependencies [7b37d65fd]\n-   Updated dependencies [4aca74e08]\n-   Updated dependencies [e8f69ba93]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [199237d2f]\n-   Updated dependencies [6627b626f]\n-   Updated dependencies [4577e377b]\n-   Updated dependencies [2d0bd1be7]\n    -   @backstage/core@0.3.0\n    -   @backstage/theme@0.2.1\n    -   @backstage/plugin-catalog@0.2.1\n\n ## @backstage/plugin-scaffolder-backend@0.3.0\n\n### Minor Changes\n\n-   59166e5ec: `createRouter` of scaffolder backend will now require additional option as `entityClient` which could be generated by `CatalogEntityClient` in `plugin-scaffolder-backend` package. Here is example to generate `entityClient`.\n\n    ```js\n    import { CatalogEntityClient } from '@backstage/plugin-scaffolder-backend';\n    import { SingleHostDiscovery } from '@backstage/backend-common';\n\n    const discovery = SingleHostDiscovery.fromConfig(config);\n    const entityClient = new CatalogEntityClient({ discovery });\n    ```\n\n    -   Scaffolder's API `/v1/jobs` will accept `templateName` instead of `template` Entity.\n\n### Patch Changes\n\n-   Updated dependencies [33b7300eb]\n    -   @backstage/backend-common@0.2.1\n\n ## @backstage/plugin-tech-radar@0.3.0\n\n### Minor Changes\n\n-   a906f20e7: Added tech radar blip history backend support and normalized the data structure\n\n### Patch Changes\n\n-   3f05616bf: Make the footer color of the tech-radar work in both light and dark theme.\n-   Updated dependencies [7b37d65fd]\n-   Updated dependencies [4aca74e08]\n-   Updated dependencies [e8f69ba93]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [199237d2f]\n-   Updated dependencies [6627b626f]\n-   Updated dependencies [4577e377b]\n    -   @backstage/core@0.3.0\n    -   @backstage/theme@0.2.1\n\n ## @backstage/backend-common@0.2.1\n\n### Patch Changes\n\n-   33b7300eb: Capture plugin name under the /api/ prefix for http metrics\n\n ## @backstage/core-api@0.2.1\n\n### Patch Changes\n\n-   c5bab94ab: Updated the AuthApi `.create` methods to configure the default scope of the corresponding Auth Api. As a result the\n    default scope is configurable when overwriting the Core Api in the app.\n\n        GithubAuth.create({\n          discoveryApi,\n          oauthRequestApi,\n          defaultScopes: ['read:user', 'repo'],\n        }),\n\n    Replaced redundant CreateOptions of each Auth Api with the OAuthApiCreateOptions type.\n\n        export type OAuthApiCreateOptions = AuthApiCreateOptions & {\n          oauthRequestApi: OAuthRequestApi;\n          defaultScopes?: string[];\n        };\n\n        export type AuthApiCreateOptions = {\n          discoveryApi: DiscoveryApi;\n          environment?: string;\n          provider?: AuthProvider & { id: string };\n        };\n\n-   Updated dependencies [4577e377b]\n    -   @backstage/theme@0.2.1\n\n ## @backstage/create-app@0.2.1\n\n### Patch Changes\n\n-   c56e28375: Fix missing api-docs plugin registration in app template\n\n ## @backstage/dev-utils@0.1.3\n\n### Patch Changes\n\n-   Updated dependencies [7b37d65fd]\n-   Updated dependencies [4aca74e08]\n-   Updated dependencies [e8f69ba93]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [199237d2f]\n-   Updated dependencies [6627b626f]\n-   Updated dependencies [4577e377b]\n    -   @backstage/core@0.3.0\n    -   @backstage/theme@0.2.1\n\n ## @backstage/theme@0.2.1\n\n### Patch Changes\n\n-   4577e377b: Improve styling of outlined chips in dark mode.\n\n ## @backstage/plugin-api-docs@0.2.1\n\n### Patch Changes\n\n-   0c0798f08: Persist table state of the API Explorer to the browser history. This allows to navigate between pages and come back to the previous filter state.\n-   84b654d5d: Use dense table style and outlined chips in the API Explorer.\n-   803527bd3: Upgrade @kyma-project/asyncapi-react to 0.14.2\n-   Updated dependencies [7b37d65fd]\n-   Updated dependencies [4aca74e08]\n-   Updated dependencies [e8f69ba93]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [199237d2f]\n-   Updated dependencies [6627b626f]\n-   Updated dependencies [4577e377b]\n-   Updated dependencies [2d0bd1be7]\n    -   @backstage/core@0.3.0\n    -   @backstage/theme@0.2.1\n    -   @backstage/plugin-catalog@0.2.1\n\n ## @backstage/plugin-auth-backend@0.2.1\n\n### Patch Changes\n\n-   752808090: Handle non-7-bit safe characters in the posted message data\n-   462876399: Encode the OAuth state parameter using URL safe chars only, so that providers have an easier time forming the callback URL.\n-   Updated dependencies [33b7300eb]\n    -   @backstage/backend-common@0.2.1\n\n ## @backstage/plugin-catalog@0.2.1\n\n### Patch Changes\n\n-   2d0bd1be7: Improved the edit link to open the component yaml in edit mode in corresponding SCM. Broke out logic for createEditLink to be reused.\n-   Updated dependencies [7b37d65fd]\n-   Updated dependencies [4aca74e08]\n-   Updated dependencies [e8f69ba93]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [199237d2f]\n-   Updated dependencies [6627b626f]\n-   Updated dependencies [4577e377b]\n-   Updated dependencies [59166e5ec]\n    -   @backstage/core@0.3.0\n    -   @backstage/theme@0.2.1\n    -   @backstage/plugin-scaffolder@0.3.0\n    -   @backstage/plugin-techdocs@0.2.1\n\n ## @backstage/plugin-circleci@0.2.1\n\n### Patch Changes\n\n-   Updated dependencies [7b37d65fd]\n-   Updated dependencies [4aca74e08]\n-   Updated dependencies [e8f69ba93]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [199237d2f]\n-   Updated dependencies [6627b626f]\n-   Updated dependencies [4577e377b]\n-   Updated dependencies [2d0bd1be7]\n    -   @backstage/core@0.3.0\n    -   @backstage/theme@0.2.1\n    -   @backstage/plugin-catalog@0.2.1\n\n ## @backstage/plugin-cloudbuild@0.2.1\n\n### Patch Changes\n\n-   Updated dependencies [7b37d65fd]\n-   Updated dependencies [4aca74e08]\n-   Updated dependencies [e8f69ba93]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [199237d2f]\n-   Updated dependencies [6627b626f]\n-   Updated dependencies [4577e377b]\n-   Updated dependencies [2d0bd1be7]\n    -   @backstage/core@0.3.0\n    -   @backstage/theme@0.2.1\n    -   @backstage/plugin-catalog@0.2.1\n\n ## @backstage/plugin-explore@0.2.1\n\n### Patch Changes\n\n-   Updated dependencies [7b37d65fd]\n-   Updated dependencies [4aca74e08]\n-   Updated dependencies [e8f69ba93]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [199237d2f]\n-   Updated dependencies [6627b626f]\n-   Updated dependencies [4577e377b]\n    -   @backstage/core@0.3.0\n    -   @backstage/theme@0.2.1\n\n ## @backstage/plugin-gcp-projects@0.2.1\n\n### Patch Changes\n\n-   Updated dependencies [7b37d65fd]\n-   Updated dependencies [4aca74e08]\n-   Updated dependencies [e8f69ba93]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [199237d2f]\n-   Updated dependencies [6627b626f]\n-   Updated dependencies [4577e377b]\n    -   @backstage/core@0.3.0\n    -   @backstage/theme@0.2.1\n\n ## @backstage/plugin-github-actions@0.2.1\n\n### Patch Changes\n\n-   Updated dependencies [c5bab94ab]\n-   Updated dependencies [7b37d65fd]\n-   Updated dependencies [4aca74e08]\n-   Updated dependencies [e8f69ba93]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [199237d2f]\n-   Updated dependencies [6627b626f]\n-   Updated dependencies [4577e377b]\n-   Updated dependencies [2d0bd1be7]\n    -   @backstage/core-api@0.2.1\n    -   @backstage/core@0.3.0\n    -   @backstage/theme@0.2.1\n    -   @backstage/plugin-catalog@0.2.1\n\n ## @backstage/plugin-gitops-profiles@0.2.1\n\n### Patch Changes\n\n-   Updated dependencies [7b37d65fd]\n-   Updated dependencies [4aca74e08]\n-   Updated dependencies [e8f69ba93]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [199237d2f]\n-   Updated dependencies [6627b626f]\n-   Updated dependencies [4577e377b]\n    -   @backstage/core@0.3.0\n    -   @backstage/theme@0.2.1\n\n ## @backstage/plugin-graphiql@0.2.1\n\n### Patch Changes\n\n-   Updated dependencies [7b37d65fd]\n-   Updated dependencies [4aca74e08]\n-   Updated dependencies [e8f69ba93]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [199237d2f]\n-   Updated dependencies [6627b626f]\n-   Updated dependencies [4577e377b]\n    -   @backstage/core@0.3.0\n    -   @backstage/theme@0.2.1\n\n ## @backstage/plugin-kubernetes@0.2.1\n\n### Patch Changes\n\n-   Updated dependencies [7b37d65fd]\n-   Updated dependencies [4aca74e08]\n-   Updated dependencies [e8f69ba93]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [199237d2f]\n-   Updated dependencies [6627b626f]\n-   Updated dependencies [4577e377b]\n    -   @backstage/core@0.3.0\n    -   @backstage/theme@0.2.1\n\n ## @backstage/plugin-lighthouse@0.2.1\n\n### Patch Changes\n\n-   Updated dependencies [c5bab94ab]\n-   Updated dependencies [7b37d65fd]\n-   Updated dependencies [4aca74e08]\n-   Updated dependencies [e8f69ba93]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [199237d2f]\n-   Updated dependencies [6627b626f]\n-   Updated dependencies [4577e377b]\n-   Updated dependencies [2d0bd1be7]\n    -   @backstage/core-api@0.2.1\n    -   @backstage/core@0.3.0\n    -   @backstage/theme@0.2.1\n    -   @backstage/plugin-catalog@0.2.1\n\n ## @backstage/plugin-newrelic@0.2.1\n\n### Patch Changes\n\n-   Updated dependencies [7b37d65fd]\n-   Updated dependencies [4aca74e08]\n-   Updated dependencies [e8f69ba93]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [199237d2f]\n-   Updated dependencies [6627b626f]\n-   Updated dependencies [4577e377b]\n    -   @backstage/core@0.3.0\n    -   @backstage/theme@0.2.1\n\n ## @backstage/plugin-register-component@0.2.1\n\n### Patch Changes\n\n-   Updated dependencies [7b37d65fd]\n-   Updated dependencies [4aca74e08]\n-   Updated dependencies [e8f69ba93]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [199237d2f]\n-   Updated dependencies [6627b626f]\n-   Updated dependencies [4577e377b]\n-   Updated dependencies [2d0bd1be7]\n    -   @backstage/core@0.3.0\n    -   @backstage/theme@0.2.1\n    -   @backstage/plugin-catalog@0.2.1\n\n ## @backstage/plugin-rollbar@0.2.1\n\n### Patch Changes\n\n-   Updated dependencies [7b37d65fd]\n-   Updated dependencies [4aca74e08]\n-   Updated dependencies [e8f69ba93]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [199237d2f]\n-   Updated dependencies [6627b626f]\n-   Updated dependencies [4577e377b]\n-   Updated dependencies [2d0bd1be7]\n    -   @backstage/core@0.3.0\n    -   @backstage/theme@0.2.1\n    -   @backstage/plugin-catalog@0.2.1\n\n ## @backstage/plugin-sentry@0.2.1\n\n### Patch Changes\n\n-   Updated dependencies [7b37d65fd]\n-   Updated dependencies [4aca74e08]\n-   Updated dependencies [e8f69ba93]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [199237d2f]\n-   Updated dependencies [6627b626f]\n-   Updated dependencies [4577e377b]\n    -   @backstage/core@0.3.0\n    -   @backstage/theme@0.2.1\n\n ## @backstage/plugin-sonarqube@0.1.3\n\n### Patch Changes\n\n-   Updated dependencies [7b37d65fd]\n-   Updated dependencies [4aca74e08]\n-   Updated dependencies [e8f69ba93]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [199237d2f]\n-   Updated dependencies [6627b626f]\n-   Updated dependencies [4577e377b]\n    -   @backstage/core@0.3.0\n    -   @backstage/theme@0.2.1\n\n ## @backstage/plugin-techdocs@0.2.1\n\n### Patch Changes\n\n-   Updated dependencies [c5bab94ab]\n-   Updated dependencies [7b37d65fd]\n-   Updated dependencies [4aca74e08]\n-   Updated dependencies [e8f69ba93]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [199237d2f]\n-   Updated dependencies [6627b626f]\n-   Updated dependencies [4577e377b]\n-   Updated dependencies [2d0bd1be7]\n    -   @backstage/core-api@0.2.1\n    -   @backstage/core@0.3.0\n    -   @backstage/theme@0.2.1\n    -   @backstage/plugin-catalog@0.2.1\n\n ## @backstage/plugin-user-settings@0.2.1\n\n### Patch Changes\n\n-   5a2705de2: Export `AuthProviders`, `DefaultProviderSettings` and `ProviderSettingsItem`.\n-   Updated dependencies [7b37d65fd]\n-   Updated dependencies [4aca74e08]\n-   Updated dependencies [e8f69ba93]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [199237d2f]\n-   Updated dependencies [6627b626f]\n-   Updated dependencies [4577e377b]\n    -   @backstage/core@0.3.0\n    -   @backstage/theme@0.2.1\n\n ## @backstage/plugin-welcome@0.2.1\n\n### Patch Changes\n\n-   Updated dependencies [7b37d65fd]\n-   Updated dependencies [4aca74e08]\n-   Updated dependencies [e8f69ba93]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [199237d2f]\n-   Updated dependencies [6627b626f]\n-   Updated dependencies [4577e377b]\n    -   @backstage/core@0.3.0\n    -   @backstage/theme@0.2.1\n\n ## example-app@0.2.1\n\n### Patch Changes\n\n-   Updated dependencies [7b37d65fd]\n-   Updated dependencies [4aca74e08]\n-   Updated dependencies [a41730c6e]\n-   Updated dependencies [9a294574c]\n-   Updated dependencies [0703edee0]\n-   Updated dependencies [e8f69ba93]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [5a2705de2]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [84b654d5d]\n-   Updated dependencies [0c0798f08]\n-   Updated dependencies [199237d2f]\n-   Updated dependencies [6627b626f]\n-   Updated dependencies [3f05616bf]\n-   Updated dependencies [803527bd3]\n-   Updated dependencies [4577e377b]\n-   Updated dependencies [2d0bd1be7]\n-   Updated dependencies [59166e5ec]\n-   Updated dependencies [a906f20e7]\n    -   @backstage/core@0.3.0\n    -   @backstage/plugin-jenkins@0.3.0\n    -   @backstage/plugin-cost-insights@0.3.0\n    -   @backstage/plugin-user-settings@0.2.1\n    -   @backstage/plugin-api-docs@0.2.1\n    -   @backstage/plugin-tech-radar@0.3.0\n    -   @backstage/theme@0.2.1\n    -   @backstage/plugin-catalog@0.2.1\n    -   @backstage/plugin-scaffolder@0.3.0\n    -   @backstage/plugin-circleci@0.2.1\n    -   @backstage/plugin-cloudbuild@0.2.1\n    -   @backstage/plugin-explore@0.2.1\n    -   @backstage/plugin-gcp-projects@0.2.1\n    -   @backstage/plugin-github-actions@0.2.1\n    -   @backstage/plugin-gitops-profiles@0.2.1\n    -   @backstage/plugin-graphiql@0.2.1\n    -   @backstage/plugin-kubernetes@0.2.1\n    -   @backstage/plugin-lighthouse@0.2.1\n    -   @backstage/plugin-newrelic@0.2.1\n    -   @backstage/plugin-register-component@0.2.1\n    -   @backstage/plugin-rollbar@0.2.1\n    -   @backstage/plugin-sentry@0.2.1\n    -   @backstage/plugin-techdocs@0.2.1\n    -   @backstage/plugin-welcome@0.2.1\n\n ## example-backend@0.2.1\n\n### Patch Changes\n\n-   Updated dependencies [752808090]\n-   Updated dependencies [462876399]\n-   Updated dependencies [59166e5ec]\n-   Updated dependencies [33b7300eb]\n    -   @backstage/plugin-auth-backend@0.2.1\n    -   @backstage/plugin-scaffolder-backend@0.3.0\n    -   @backstage/backend-common@0.2.1\n    -   example-app@0.2.1\n",
  },
  {
    url: 'https://api.github.com/repos/backstage/backstage/releases/35801299',
    assets_url:
      'https://api.github.com/repos/backstage/backstage/releases/35801299/assets',
    upload_url:
      'https://uploads.github.com/repos/backstage/backstage/releases/35801299/assets{?name,label}',
    html_url: 'https://github.com/backstage/backstage/releases/tag/v0.2.0',
    id: 35801299,
    author: {
      login: 'Rugvip',
      id: 4984472,
      node_id: 'MDQ6VXNlcjQ5ODQ0NzI=',
      avatar_url: 'https://avatars2.githubusercontent.com/u/4984472?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Rugvip',
      html_url: 'https://github.com/Rugvip',
      followers_url: 'https://api.github.com/users/Rugvip/followers',
      following_url:
        'https://api.github.com/users/Rugvip/following{/other_user}',
      gists_url: 'https://api.github.com/users/Rugvip/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/Rugvip/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Rugvip/subscriptions',
      organizations_url: 'https://api.github.com/users/Rugvip/orgs',
      repos_url: 'https://api.github.com/users/Rugvip/repos',
      events_url: 'https://api.github.com/users/Rugvip/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Rugvip/received_events',
      type: 'User',
      site_admin: false,
    },
    node_id: 'MDc6UmVsZWFzZTM1ODAxMjk5',
    tag_name: 'v0.2.0',
    target_commitish: 'master',
    name: 'v0.2.0',
    draft: false,
    prerelease: false,
    created_at: '2020-11-04T10:11:47Z',
    published_at: '2020-12-29T11:32:34Z',
    assets: [],
    tarball_url:
      'https://api.github.com/repos/backstage/backstage/tarball/v0.2.0',
    zipball_url:
      'https://api.github.com/repos/backstage/backstage/zipball/v0.2.0',
    body:
      "## @backstage/backend-common@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   5249594c5: Add service discovery interface and implement for single host deployments\r\n\r\n    Fixes #1847, #2596\r\n\r\n    Went with an interface similar to the frontend DiscoveryApi, since it's dead simple but still provides a lot of flexibility in the implementation.\r\n\r\n    Also ended up with two different methods, one for internal endpoint discovery and one for external. The two use-cases are explained a bit more in the docs, but basically it's service-to-service vs callback URLs.\r\n\r\n    This did get me thinking about uniqueness and that we're heading towards a global namespace for backend plugin IDs. That's probably fine, but if we're happy with that we should leverage it a bit more to simplify the backend setup. For example we'd have each plugin provide its own ID and not manually mount on paths in the backend.\r\n\r\n    Draft until we're happy with the implementation, then I can add more docs and changelog entry. Also didn't go on a thorough hunt for places where discovery can be used, but I don't think there are many since it's been pretty awkward to do service-to-service communication.\r\n\r\n-   56e4eb589: Make CSP configurable to fix app-backend served app not being able to fetch\r\n\r\n    See discussion [here on discord](https://discordapp.com/channels/687207715902193673/687235481154617364/758721460163575850)\r\n\r\n-   e37c0a005: Use localhost to fall back to IPv4 if IPv6 isn't available\r\n\r\n-   f00ca3cb8: Auto-create plugin databases\r\n\r\n    Relates to #1598.\r\n\r\n    This creates databases for plugins before handing off control to plugins.\r\n\r\n    The list of plugins currently need to be hard-coded depending on the installed plugins. A later PR will properly refactor the code to provide a factory pattern where plugins specify what they need, and Knex instances will be provided based on the input.\r\n\r\n-   6579769df: Add the ability to import components from Bitbucket Server to the service catalog\r\n\r\n-   8c2b76e45: **BREAKING CHANGE**\r\n\r\n    The existing loading of additional config files like `app-config.development.yaml` using APP_ENV or NODE_ENV has been removed.\r\n    Instead, the CLI and backend process now accept one or more `--config` flags to load config files.\r\n\r\n    Without passing any flags, `app-config.yaml` and, if it exists, `app-config.local.yaml` will be loaded.\r\n    If passing any `--config <path>` flags, only those files will be loaded, **NOT** the default `app-config.yaml` one.\r\n\r\n    The old behaviour of for example `APP_ENV=development` can be replicated using the following flags:\r\n\r\n    ```bash\r\n    --config ../../app-config.yaml --config ../../app-config.development.yaml\r\n    ```\r\n\r\n-   8afce088a: Use APP_ENV before NODE_ENV for determining what config to load\r\n\r\n-   7bbeb049f: Change loadBackendConfig to return the config directly\r\n\r\n### Patch Changes\r\n\r\n-   440a17b39: Added new UrlReader interface for reading opaque data from URLs with different providers.\r\n\r\n    This new URL reading system is intended as a replacement for the various integrations towards\r\n    external systems in the catalog, scaffolder, and techdocs. It is configured via a new top-level\r\n    config section called 'integrations'.\r\n\r\n    Along with the UrlReader interface is a new UrlReaders class, which exposes static factory\r\n    methods for instantiating readers that can read from many different integrations simultaneously.\r\n\r\n-   Updated dependencies [8c2b76e45]\r\n\r\n-   Updated dependencies [ce5512bc0]\r\n    -   @backstage/config-loader@0.2.0\r\n    -   @backstage/test-utils@0.1.2\r\n\r\n ## @backstage/catalog-model@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   3a4236570: Add handling and docs for entity references\r\n\r\n-   e0be86b6f: Entirely case insensitive read path of entities\r\n\r\n-   f70a52868: Add the User & Group entities\r\n\r\n    A user describes a person, such as an employee, a contractor, or similar. Users belong to Group entities in the catalog.\r\n\r\n    A group describes an organizational entity, such as for example a team, a business unit, or a loose collection of people in an interest group. Members of these groups are modeled in the catalog as kind User.\r\n\r\n-   12b5fe940: Add ApiDefinitionAtLocationProcessor that allows to load a API definition from another location\r\n\r\n-   a768a07fb: Add the ability to import users from GitHub Organization into the catalog.\r\n\r\n-   5adfc005e: Changes the various kind policies into a new type `KindValidator`.\r\n\r\n    Adds `CatalogProcessor#validateEntityKind` that makes use of the above\r\n    validators. This moves entity schema validity checking away from entity\r\n    policies and into processors, centralizing the extension points into the\r\n    processor chain.\r\n\r\n-   b3d57961c: Enable adding locations for config files that does not yet exist by adding a flag to api request\r\n\r\n### Patch Changes\r\n\r\n-   fa56f4615: Fix documentation and validation message for tags\r\n\r\n ## @backstage/cli@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   28edd7d29: Create backend plugin through CLI\r\n\r\n-   1d0aec70f: Upgrade dependency `esbuild@0.7.7`\r\n\r\n-   72f6cda35: Adds a new `BACKSTAGE_CLI_BUILD_PARELLEL` environment variable to control\r\n    parallelism for some build steps.\r\n\r\n    This is useful in CI to help avoid out of memory issues when using `terser`. The\r\n    `BACKSTAGE_CLI_BUILD_PARELLEL` environment variable can be set to\r\n    `true | false | [integer]` to override the default behaviour. See\r\n    [terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin#parallel)\r\n    for more details.\r\n\r\n-   8c2b76e45: **BREAKING CHANGE**\r\n\r\n    The existing loading of additional config files like `app-config.development.yaml` using APP_ENV or NODE_ENV has been removed.\r\n    Instead, the CLI and backend process now accept one or more `--config` flags to load config files.\r\n\r\n    Without passing any flags, `app-config.yaml` and, if it exists, `app-config.local.yaml` will be loaded.\r\n    If passing any `--config <path>` flags, only those files will be loaded, **NOT** the default `app-config.yaml` one.\r\n\r\n    The old behaviour of for example `APP_ENV=development` can be replicated using the following flags:\r\n\r\n    ```bash\r\n    --config ../../app-config.yaml --config ../../app-config.development.yaml\r\n    ```\r\n\r\n-   8afce088a: Use APP_ENV before NODE_ENV for determining what config to load\r\n\r\n### Patch Changes\r\n\r\n-   3472c8be7: Add codeowners processor\r\n\r\n    -   Include ESNext.Promise in TypeScript compilation\r\n\r\n-   a3840bed2: Upgrade dependency rollup-plugin-typescript2 to ^0.27.3\r\n\r\n-   cba4e4d97: Including source maps with all packages\r\n\r\n-   9a3b3dbf1: Fixed duplicate help output, and print help on invalid command\r\n\r\n-   7bbeb049f: Change loadBackendConfig to return the config directly\r\n\r\n-   Updated dependencies [8c2b76e45]\r\n\r\n-   Updated dependencies [ce5512bc0]\r\n    -   @backstage/config-loader@0.2.0\r\n\r\n ## @backstage/config-loader@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   8c2b76e45: **BREAKING CHANGE**\r\n\r\n    The existing loading of additional config files like `app-config.development.yaml` using APP_ENV or NODE_ENV has been removed.\r\n    Instead, the CLI and backend process now accept one or more `--config` flags to load config files.\r\n\r\n    Without passing any flags, `app-config.yaml` and, if it exists, `app-config.local.yaml` will be loaded.\r\n    If passing any `--config <path>` flags, only those files will be loaded, **NOT** the default `app-config.yaml` one.\r\n\r\n    The old behaviour of for example `APP_ENV=development` can be replicated using the following flags:\r\n\r\n    ```bash\r\n    --config ../../app-config.yaml --config ../../app-config.development.yaml\r\n    ```\r\n\r\n-   ce5512bc0: Added support for new shorthand when defining secrets, where `$env: ENV` can be used instead of `$secret: { env: ENV }` etc.\r\n\r\n ## @backstage/core@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   819a70229: Add SAML login to backstage\r\n\r\n    ![](https://user-images.githubusercontent.com/872486/92251660-bb9e3400-eeff-11ea-86fe-1f2a0262cd31.png)\r\n\r\n    ![](https://user-images.githubusercontent.com/872486/93851658-1a76f200-fce3-11ea-990b-26ca1a327a15.png)\r\n\r\n-   482b6313d: Fix dense in Structured Metadata Table\r\n\r\n-   1c60f716e: Added EmptyState component\r\n\r\n-   b79017fd3: Updated the `GithubAuth.create` method to configure the default scope of the Github Auth Api. As a result the\r\n    default scope is configurable when overwriting the Core Api in the app.\r\n\r\n        GithubAuth.create({\r\n          discoveryApi,\r\n          oauthRequestApi,\r\n          defaultScopes: ['read:user', 'repo'],\r\n        }),\r\n\r\n-   6d97d2d6f: The InfoCard variant `'height100'` is deprecated. Use variant `'gridItem'` instead.\r\n\r\n    When the InfoCard is displayed as a grid item within a grid, you may want items to have the same height for all items.\r\n    Set to the `'gridItem'` variant to display the InfoCard with full height suitable for Grid:\r\n    `<InfoCard variant=\"gridItem\">...</InfoCard>`\r\n\r\n    Changed the InfoCards in '@backstage/plugin-github-actions', '@backstage/plugin-jenkins', '@backstage/plugin-lighthouse'\r\n    to pass an optional variant to the corresponding card of the plugin.\r\n\r\n    As a result the overview content of the EntityPage shows cards with full height suitable for Grid.\r\n\r\n### Patch Changes\r\n\r\n-   ae5983387: Fix banner position and color\r\n\r\n    This PR closes: #2245\r\n\r\n    The \"fixed\" props added to control the position of the banner. When it is set to true the banner will be shown in bottom of that page and the width will be based on the content of the message.\r\n\r\n    ![](https://user-images.githubusercontent.com/15106494/93765685-999df480-fc15-11ea-8fa5-11cac5836cf1.png)\r\n\r\n    ![](https://user-images.githubusercontent.com/15106494/93765697-9e62a880-fc15-11ea-92af-b6a7fee4bb21.png)\r\n\r\n-   144c66d50: Fixed banner component position in DismissableBanner component\r\n\r\n-   93a3fa3ae: Add forwardRef to the SidebarItem\r\n\r\n-   782f3b354: add test case for Progress component\r\n\r\n-   2713f28f4: fix the warning of all the core components test cases\r\n\r\n-   406015b0d: Update ItemCard headers to pass color contrast standards.\r\n\r\n-   82759d3e4: rename stories folder top Chip\r\n\r\n-   ac8d5d5c7: update the test cases of CodeSnippet component\r\n\r\n-   ebca83d48: add test cases for Status components\r\n\r\n-   aca79334f: update ItemCard component and it's story\r\n\r\n-   c0d5242a0: Proper render boolean values on StructuredMetadataTable component\r\n\r\n-   3beb5c9fc: make ErrorPage responsive + fix the test case\r\n\r\n-   754e31db5: give aria-label attribute to Status Ok, Warning and Error\r\n\r\n-   1611c6dbc: fix the responsive of page story\r\n\r\n-   Updated dependencies [819a70229]\r\n\r\n-   Updated dependencies [ae5983387]\r\n\r\n-   Updated dependencies [0d4459c08]\r\n\r\n-   Updated dependencies [cbbd271c4]\r\n\r\n-   Updated dependencies [b79017fd3]\r\n\r\n-   Updated dependencies [26e69ab1a]\r\n\r\n-   Updated dependencies [cbab5bbf8]\r\n    -   @backstage/core-api@0.2.0\r\n    -   @backstage/theme@0.2.0\r\n\r\n ## @backstage/core-api@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   819a70229: Add SAML login to backstage\r\n\r\n    ![](https://user-images.githubusercontent.com/872486/92251660-bb9e3400-eeff-11ea-86fe-1f2a0262cd31.png)\r\n\r\n    ![](https://user-images.githubusercontent.com/872486/93851658-1a76f200-fce3-11ea-990b-26ca1a327a15.png)\r\n\r\n-   b79017fd3: Updated the `GithubAuth.create` method to configure the default scope of the Github Auth Api. As a result the\r\n    default scope is configurable when overwriting the Core Api in the app.\r\n\r\n        GithubAuth.create({\r\n          discoveryApi,\r\n          oauthRequestApi,\r\n          defaultScopes: ['read:user', 'repo'],\r\n        }),\r\n\r\n-   cbab5bbf8: Refactored the FeatureFlagsApi to make it easier to re-implement. Existing usage of particularly getUserFlags can be replaced with isActive() or save().\r\n\r\n### Patch Changes\r\n\r\n-   cbbd271c4: Add initial RouteRefRegistry\r\n\r\n    Starting out some work to bring routing back and working as part of the work towards finalizing #1536\r\n\r\n    This is some of the groundwork of an experiment we're working on to enable routing via RouteRefs, while letting the app itself look something like this:\r\n\r\n    ```jsx\r\n    const App = () => (\r\n      <BackstageRoutes>\r\n        <Navigate key=\"/\" to=\"/catalog\" />\r\n        <CatalogRoute path=\"/catalog\">\r\n          {' '}\r\n          // catalogRouteRef\r\n          <EntityPage type=\"service\">\r\n            <OverviewContent path=\"/\">\r\n              <WidgetA />\r\n              <WidgetB />\r\n            </OverviewContent>\r\n            <CICDSwitcher path=\"/ci-cd\" />\r\n            <StatusRoute path=\"/api-status\" /> // statusRouteRef\r\n            <ApiDocsRoute path=\"/api\" />\r\n            <DocsRoute path=\"/docs\" />\r\n          </EntityPage>\r\n          <EntityPage type=\"website\">\r\n            <OverviewContent path=\"/\">\r\n              <WidgetA />\r\n              <WidgetB />\r\n            </OverviewContent>\r\n            <CICDSwitcher path=\"/ci-cd\" />\r\n            <SentryRoute path=\"/sentry\" /> // sentryRouteRef\r\n            <DocsRoute path=\"/docs\" />\r\n          </EntityPage>\r\n          <EntityPage>\r\n            <OverviewContent path=\"/\">\r\n              <WidgetA />\r\n              <WidgetB />\r\n            </OverviewContent>\r\n            <DocsRoute path=\"/docs\" />\r\n          </EntityPage>\r\n        </CatalogRoute>\r\n        <DocsRoute path=\"/docs\" />\r\n        <TechRadarRoute path=\"/tech-radar\" width={1500} height={800} />\r\n        <GraphiQLRoute path=\"/graphiql\" />\r\n        <LighthouseRoute path=\"/lighthouse\" />\r\n      </BackstageRoutes>\r\n    );\r\n    ```\r\n\r\n    As part of inverting the composition of the app, route refs and routing in general was somewhat broken, intentionally. Right now it's not really possible to easily route to different parts of the app from a plugin, or even different parts of the plugin that are not within the same router.\r\n\r\n    The core part of the experiment is to construct a map of ApiRef\\[] -> path overrides. Each key in the map is the list of route refs to traversed to reach a leaf in the routing tree, and the value is the path override at that point. For example, the above tree would add entries like [techDocsRouteRef] -> '/docs', and [entityRouteRef, apiDocsRouteRef] -> '/api'. By mapping out the entire app in this structure, the idea is that we can navigate to any point in the app using RouteRefs.\r\n\r\n    The RouteRefRegistry is an implementation of such a map, and the idea is to add it in master to make it a bit easier to experiment and iterate. This is not an exposed API at this point.\r\n\r\n    We've explored a couple of alternatives for how to enable routing, but it's boiled down to either a solution centred around the route map mentioned above, or treating all routes as static and globally unique, with no room for flexibility, customization or conflicts between different plugins. We're starting out pursuing this options 😁. We also expect that a the app-wide routing table will make things like dynamic loading a lot cleaner, as there would be a much more clear handoff between the main chunk and dynamic chunks.\r\n\r\n-   26e69ab1a: Remove cost insights example client from demo app and export from plugin\r\n    Create cost insights dev plugin using example client\r\n    Make PluginConfig and dependent types public\r\n\r\n-   Updated dependencies [ae5983387]\r\n\r\n-   Updated dependencies [0d4459c08]\r\n    -   @backstage/theme@0.2.0\r\n    -   @backstage/test-utils@0.1.2\r\n\r\n ## @backstage/create-app@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   6d29605db: Change the default backend plugin mount point to /api\r\n\r\n-   5249594c5: Add service discovery interface and implement for single host deployments\r\n\r\n    Fixes #1847, #2596\r\n\r\n    Went with an interface similar to the frontend DiscoveryApi, since it's dead simple but still provides a lot of flexibility in the implementation.\r\n\r\n    Also ended up with two different methods, one for internal endpoint discovery and one for external. The two use-cases are explained a bit more in the docs, but basically it's service-to-service vs callback URLs.\r\n\r\n    This did get me thinking about uniqueness and that we're heading towards a global namespace for backend plugin IDs. That's probably fine, but if we're happy with that we should leverage it a bit more to simplify the backend setup. For example we'd have each plugin provide its own ID and not manually mount on paths in the backend.\r\n\r\n    Draft until we're happy with the implementation, then I can add more docs and changelog entry. Also didn't go on a thorough hunt for places where discovery can be used, but I don't think there are many since it's been pretty awkward to do service-to-service communication.\r\n\r\n-   56e4eb589: Make CSP configurable to fix app-backend served app not being able to fetch\r\n\r\n    See discussion [here on discord](https://discordapp.com/channels/687207715902193673/687235481154617364/758721460163575850)\r\n\r\n-   d7873e1aa: Default to using internal scope for new plugins\r\n\r\n-   6f447b3fc: Remove identity-backend\r\n\r\n    Not used, and we're heading down the route of identities in the catalog\r\n\r\n-   61db1ddc6: Allow node v14 and add to master build matrix\r\n\r\n    -   Upgrade sqlite3@^5.0.0 in @backstage/plugin-catalog-backend\r\n    -   Add Node 14 to engines in @backstage/create-app\r\n\r\n-   a768a07fb: Add the ability to import users from GitHub Organization into the catalog.\r\n\r\n    The token needs to have the scopes `user:email`, `read:user`, and `read:org`.\r\n\r\n-   f00ca3cb8: Auto-create plugin databases\r\n\r\n    Relates to #1598.\r\n\r\n    This creates databases for plugins before handing off control to plugins.\r\n\r\n    The list of plugins currently need to be hard-coded depending on the installed plugins. A later PR will properly refactor the code to provide a factory pattern where plugins specify what they need, and Knex instances will be provided based on the input.\r\n\r\n-   6d97d2d6f: The InfoCard variant `'height100'` is deprecated. Use variant `'gridItem'` instead.\r\n\r\n    When the InfoCard is displayed as a grid item within a grid, you may want items to have the same height for all items.\r\n    Set to the `'gridItem'` variant to display the InfoCard with full height suitable for Grid:\r\n    `<InfoCard variant=\"gridItem\">...</InfoCard>`\r\n\r\n    Changed the InfoCards in '@backstage/plugin-github-actions', '@backstage/plugin-jenkins', '@backstage/plugin-lighthouse'\r\n    to pass an optional variant to the corresponding card of the plugin.\r\n\r\n    As a result the overview content of the EntityPage shows cards with full height suitable for Grid.\r\n\r\n-   7aff112af: The default mount point for backend plugins have been changed to /api. These changes are done in the backend package itself, so it is recommended that you sync up existing backend packages with this new pattern.\r\n\r\n### Patch Changes\r\n\r\n-   e67d49bf5: Sync scaffolded backend with example\r\n\r\n-   961414d55: Remove discovery api override\r\n\r\n-   440a17b39: Bump @backstage/catalog-backend and pass the now required UrlReader interface to the plugin\r\n\r\n-   8c2b76e45: **BREAKING CHANGE**\r\n\r\n    The existing loading of additional config files like `app-config.development.yaml` using APP_ENV or NODE_ENV has been removed.\r\n    Instead, the CLI and backend process now accept one or more `--config` flags to load config files.\r\n\r\n    Without passing any flags, `app-config.yaml` and, if it exists, `app-config.local.yaml` will be loaded.\r\n    If passing any `--config <path>` flags, only those files will be loaded, **NOT** the default `app-config.yaml` one.\r\n\r\n    The old behaviour of for example `APP_ENV=development` can be replicated using the following flags:\r\n\r\n    ```bash\r\n    --config ../../app-config.yaml --config ../../app-config.development.yaml\r\n    ```\r\n\r\n-   5a920c6e4: Updated naming of environment variables. New pattern [NAME]\\_TOKEN for Github, Gitlab, Azure & Github enterprise access tokens.\r\n\r\n    ### Detail:\r\n\r\n    -   Previously we have to export same token for both, catalog & scaffolder\r\n\r\n    ```bash\r\n    export GITHUB_ACCESS_TOKEN=foo\r\n    export GITHUB_PRIVATE_TOKEN=foo\r\n    ```\r\n\r\n    with latest changes, only single export is sufficient.\r\n\r\n    ```bash\r\n    export GITHUB_TOKEN=foo\r\n    export GITLAB_TOKEN=foo\r\n    export GHE_TOKEN=foo\r\n    export AZURE_TOKEN=foo\r\n    ```\r\n\r\n    ### list:\r\n\r\n    <table>\r\n      <tr>\r\n        <th>Old name</th>\r\n        <th>New name</th>\r\n      </tr>\r\n      <tr>\r\n        <td>GITHUB_ACCESS_TOKEN</td>\r\n        <td>GITHUB_TOKEN</td>\r\n      </tr>\r\n      <tr>\r\n        <td>GITHUB_PRIVATE_TOKEN</td>\r\n        <td>GITHUB_TOKEN</td>\r\n      </tr>\r\n      <tr>\r\n        <td>GITLAB_ACCESS_TOKEN</td>\r\n        <td>GITLAB_TOKEN</td>\r\n      </tr>\r\n      <tr>\r\n        <td>GITLAB_PRIVATE_TOKEN</td>\r\n        <td>GITLAB_TOKEN</td>\r\n      </tr>\r\n      <tr>\r\n        <td>AZURE_PRIVATE_TOKEN</td>\r\n        <td>AZURE_TOKEN</td>\r\n      </tr>\r\n      <tr>\r\n        <td>GHE_PRIVATE_TOKEN</td>\r\n        <td>GHE_TOKEN</td>\r\n      </tr>\r\n    </table>\r\n\r\n-   67d76b419: Fix for configured templates using 'url' locations even though it's not supported yet\r\n\r\n-   7bbeb049f: Change loadBackendConfig to return the config directly\r\n\r\n ## @backstage/theme@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   0d4459c08: Tweak dark mode colors\r\n\r\n### Patch Changes\r\n\r\n-   ae5983387: Fix banner position and color\r\n\r\n    This PR closes: #2245\r\n\r\n    The \"fixed\" props added to control the position of the banner. When it is set to true the banner will be shown in bottom of that page and the width will be based on the content of the message.\r\n\r\n    ![](https://user-images.githubusercontent.com/15106494/93765685-999df480-fc15-11ea-8fa5-11cac5836cf1.png)\r\n\r\n    ![](https://user-images.githubusercontent.com/15106494/93765697-9e62a880-fc15-11ea-92af-b6a7fee4bb21.png)\r\n\r\n ## @backstage/plugin-api-docs@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   28edd7d29: Create backend plugin through CLI\r\n-   339668995: There were some missing features and markdown was not rendered properly, but this is fixed now.\r\n\r\n    Details:\r\n\r\n    -   [`asyncapi/asyncapi-react#149`](https://github.com/asyncapi/asyncapi-react/pull/149) - fix: improve markdown rendering of nested fields\r\n    -   [`asyncapi/asyncapi-react#150`](https://github.com/asyncapi/asyncapi-react/pull/150) - feat: display the description of channels and operations\r\n    -   [`asyncapi/asyncapi-react#153`](https://github.com/asyncapi/asyncapi-react/pull/153) - fix: let the list of `enums` break into multiple lines\r\n\r\n### Patch Changes\r\n\r\n-   a73979d45: Resolve some dark mode styling issues in asyncAPI specs\r\n-   Updated dependencies [28edd7d29]\r\n-   Updated dependencies [819a70229]\r\n-   Updated dependencies [3a4236570]\r\n-   Updated dependencies [ae5983387]\r\n-   Updated dependencies [0d4459c08]\r\n-   Updated dependencies [482b6313d]\r\n-   Updated dependencies [e0be86b6f]\r\n-   Updated dependencies [f70a52868]\r\n-   Updated dependencies [12b5fe940]\r\n-   Updated dependencies [368fd8243]\r\n-   Updated dependencies [1c60f716e]\r\n-   Updated dependencies [144c66d50]\r\n-   Updated dependencies [a768a07fb]\r\n-   Updated dependencies [b79017fd3]\r\n-   Updated dependencies [6d97d2d6f]\r\n-   Updated dependencies [5adfc005e]\r\n-   Updated dependencies [f0aa01bcc]\r\n-   Updated dependencies [0aecfded0]\r\n-   Updated dependencies [93a3fa3ae]\r\n-   Updated dependencies [782f3b354]\r\n-   Updated dependencies [8b9c8196f]\r\n-   Updated dependencies [2713f28f4]\r\n-   Updated dependencies [406015b0d]\r\n-   Updated dependencies [82759d3e4]\r\n-   Updated dependencies [60d40892c]\r\n-   Updated dependencies [ac8d5d5c7]\r\n-   Updated dependencies [2ebcfac8d]\r\n-   Updated dependencies [fa56f4615]\r\n-   Updated dependencies [ebca83d48]\r\n-   Updated dependencies [aca79334f]\r\n-   Updated dependencies [c0d5242a0]\r\n-   Updated dependencies [b3d57961c]\r\n-   Updated dependencies [0b956f21b]\r\n-   Updated dependencies [97c2cb19b]\r\n-   Updated dependencies [3beb5c9fc]\r\n-   Updated dependencies [754e31db5]\r\n-   Updated dependencies [1611c6dbc]\r\n    -   @backstage/plugin-catalog@0.2.0\r\n    -   @backstage/core@0.2.0\r\n    -   @backstage/catalog-model@0.2.0\r\n    -   @backstage/theme@0.2.0\r\n\r\n ## @backstage/plugin-app-backend@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   28edd7d29: Create backend plugin through CLI\r\n\r\n### Patch Changes\r\n\r\n-   Updated dependencies [5249594c5]\r\n-   Updated dependencies [56e4eb589]\r\n-   Updated dependencies [e37c0a005]\r\n-   Updated dependencies [f00ca3cb8]\r\n-   Updated dependencies [6579769df]\r\n-   Updated dependencies [8c2b76e45]\r\n-   Updated dependencies [440a17b39]\r\n-   Updated dependencies [8afce088a]\r\n-   Updated dependencies [ce5512bc0]\r\n-   Updated dependencies [7bbeb049f]\r\n    -   @backstage/backend-common@0.2.0\r\n    -   @backstage/config-loader@0.2.0\r\n\r\n ## @backstage/plugin-auth-backend@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   28edd7d29: Create backend plugin through CLI\r\n\r\n-   819a70229: Add SAML login to backstage\r\n\r\n    ![](https://user-images.githubusercontent.com/872486/92251660-bb9e3400-eeff-11ea-86fe-1f2a0262cd31.png)\r\n\r\n    ![](https://user-images.githubusercontent.com/872486/93851658-1a76f200-fce3-11ea-990b-26ca1a327a15.png)\r\n\r\n-   6d29605db: Change the default backend plugin mount point to /api\r\n\r\n-   5249594c5: Add service discovery interface and implement for single host deployments\r\n\r\n    Fixes #1847, #2596\r\n\r\n    Went with an interface similar to the frontend DiscoveryApi, since it's dead simple but still provides a lot of flexibility in the implementation.\r\n\r\n    Also ended up with two different methods, one for internal endpoint discovery and one for external. The two use-cases are explained a bit more in the docs, but basically it's service-to-service vs callback URLs.\r\n\r\n    This did get me thinking about uniqueness and that we're heading towards a global namespace for backend plugin IDs. That's probably fine, but if we're happy with that we should leverage it a bit more to simplify the backend setup. For example we'd have each plugin provide its own ID and not manually mount on paths in the backend.\r\n\r\n    Draft until we're happy with the implementation, then I can add more docs and changelog entry. Also didn't go on a thorough hunt for places where discovery can be used, but I don't think there are many since it's been pretty awkward to do service-to-service communication.\r\n\r\n-   6f1768c0f: Initial implementation of catalog user lookup\r\n\r\n    This adds a basic catalog client + method for the Google provider to look up users in the catalog. It expects to find a single user entity in the catalog with a google.com/email annotation that matches the email of the Google profile.\r\n\r\n    Right now it falls back to the old behavior of splitting the email, since I don't wanna break the sign-in flow for existing apps, not yet anyway x).\r\n\r\n    -   Added \"@backstage/catalog-model@^0.1.1-alpha.23\" as a dependency\r\n    -   Added \"node-fetch@^2.6.1\" as a dependency\r\n\r\n-   1687b8fbb: Lookup user in Google Auth Provider\r\n\r\n### Patch Changes\r\n\r\n-   b4e5466e1: Move auth provider router creation to router\r\n-   b652bf2cc: Add OneLogin Identity Provider to Auth Backend\r\n-   e142a2767: Better presentation of authentication errors\r\n-   Updated dependencies [3a4236570]\r\n-   Updated dependencies [e0be86b6f]\r\n-   Updated dependencies [f70a52868]\r\n-   Updated dependencies [12b5fe940]\r\n-   Updated dependencies [5249594c5]\r\n-   Updated dependencies [56e4eb589]\r\n-   Updated dependencies [e37c0a005]\r\n-   Updated dependencies [a768a07fb]\r\n-   Updated dependencies [f00ca3cb8]\r\n-   Updated dependencies [6579769df]\r\n-   Updated dependencies [5adfc005e]\r\n-   Updated dependencies [8c2b76e45]\r\n-   Updated dependencies [440a17b39]\r\n-   Updated dependencies [fa56f4615]\r\n-   Updated dependencies [8afce088a]\r\n-   Updated dependencies [b3d57961c]\r\n-   Updated dependencies [7bbeb049f]\r\n    -   @backstage/catalog-model@0.2.0\r\n    -   @backstage/backend-common@0.2.0\r\n\r\n ## @backstage/plugin-catalog@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   28edd7d29: Create backend plugin through CLI\r\n\r\n-   368fd8243: Created EntityNotFound component for catalog which displays the 404 page when entity is not found.\r\n\r\n    Fixes #2266\r\n\r\n-   6d97d2d6f: The InfoCard variant `'height100'` is deprecated. Use variant `'gridItem'` instead.\r\n\r\n    When the InfoCard is displayed as a grid item within a grid, you may want items to have the same height for all items.\r\n    Set to the `'gridItem'` variant to display the InfoCard with full height suitable for Grid:\r\n    `<InfoCard variant=\"gridItem\">...</InfoCard>`\r\n\r\n    Changed the InfoCards in '@backstage/plugin-github-actions', '@backstage/plugin-jenkins', '@backstage/plugin-lighthouse'\r\n    to pass an optional variant to the corresponding card of the plugin.\r\n\r\n    As a result the overview content of the EntityPage shows cards with full height suitable for Grid.\r\n\r\n-   f0aa01bcc: Add client side paging for catalog table\r\n\r\n-   8b9c8196f: Locations registered through the catalog client now default to the 'url' type. The type selection dropdown in the register-component form has been removed.\r\n\r\n-   2ebcfac8d: Add a validate button to the register-component page\r\n\r\n    This allows the user to validate his location before adding it.\r\n\r\n-   0b956f21b: The URL path for a catalog entity has changed,\r\n\r\n    -   from: `/catalog/:kind/:optionalNamespaceAndName`\r\n    -   to: `/catalog/:namespace/:kind/:name`\r\n\r\n    Redirects are in place, so disruptions for users should not happen.\r\n\r\n### Patch Changes\r\n\r\n-   0aecfded0: handle the case where no entities are available to show\r\n-   60d40892c: Remove \"in default\" in component name\r\n-   97c2cb19b: update the EntityNotFound component\r\n-   Updated dependencies [28edd7d29]\r\n-   Updated dependencies [819a70229]\r\n-   Updated dependencies [3a4236570]\r\n-   Updated dependencies [ae5983387]\r\n-   Updated dependencies [0d4459c08]\r\n-   Updated dependencies [482b6313d]\r\n-   Updated dependencies [e0be86b6f]\r\n-   Updated dependencies [f70a52868]\r\n-   Updated dependencies [12b5fe940]\r\n-   Updated dependencies [8351ad79b]\r\n-   Updated dependencies [fb74f1db6]\r\n-   Updated dependencies [1c60f716e]\r\n-   Updated dependencies [144c66d50]\r\n-   Updated dependencies [a768a07fb]\r\n-   Updated dependencies [b79017fd3]\r\n-   Updated dependencies [6d97d2d6f]\r\n-   Updated dependencies [5adfc005e]\r\n-   Updated dependencies [93a3fa3ae]\r\n-   Updated dependencies [782f3b354]\r\n-   Updated dependencies [c5ef12926]\r\n-   Updated dependencies [2713f28f4]\r\n-   Updated dependencies [406015b0d]\r\n-   Updated dependencies [82759d3e4]\r\n-   Updated dependencies [ac8d5d5c7]\r\n-   Updated dependencies [fa56f4615]\r\n-   Updated dependencies [ebca83d48]\r\n-   Updated dependencies [aca79334f]\r\n-   Updated dependencies [c0d5242a0]\r\n-   Updated dependencies [b3d57961c]\r\n-   Updated dependencies [1c8c43756]\r\n-   Updated dependencies [3beb5c9fc]\r\n-   Updated dependencies [754e31db5]\r\n-   Updated dependencies [57b54c8ed]\r\n-   Updated dependencies [1611c6dbc]\r\n    -   @backstage/plugin-scaffolder@0.2.0\r\n    -   @backstage/plugin-techdocs@0.2.0\r\n    -   @backstage/core@0.2.0\r\n    -   @backstage/catalog-model@0.2.0\r\n    -   @backstage/theme@0.2.0\r\n\r\n ## @backstage/plugin-catalog-backend@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   e0be86b6f: Entirely case insensitive read path of entities\r\n\r\n-   12b5fe940: Add ApiDefinitionAtLocationProcessor that allows to load a API definition from another location\r\n\r\n-   57d555eb2: This feature works the same as \\\\$secret does in config - it allows programmatic substitution of values into a document.\r\n\r\n    This is particularly useful e.g. for API type entities where you do not want to repeat your entire API spec document inside the catalog-info.yaml file. For those cases, you can instead do something like\r\n\r\n        apiVersion: backstage.io/v1alpha1\r\n        kind: API\r\n        metadata:\r\n          name: my-federated-service\r\n        spec:\r\n          type: graphql\r\n          definition:\r\n            $text: ./schema.graphql\r\n\r\n    The textual content of that file will be injected as the value of definition, during each refresh loop. Both relative and absolute paths are supported, as well as any HTTP/HTTPS URL pointing to a service that returns the relevant data.\r\n\r\n    The initial version supports injection of text file data, and structured data from JSON and YAML files. You can add any handler of your own in addition to these.\r\n\r\n-   61db1ddc6: Allow node v14 and add to master build matrix\r\n\r\n    -   Upgrade sqlite3@^5.0.0 in @backstage/plugin-catalog-backend\r\n    -   Add Node 14 to engines in @backstage/create-app\r\n\r\n-   81cb94379: Simplify the read function in processors\r\n\r\n-   a768a07fb: Add the ability to import users from GitHub Organization into the catalog.\r\n\r\n    The token needs to have the scopes `user:email`, `read:user`, and `read:org`.\r\n\r\n-   ce1f55398: Use the new `UrlReader` in `PlaceholderProcessor`.\r\n    This allows to use the placeholder processor to include API definitions in API entities.\r\n    Previously it was only possible to do this if the definition comes from the same location type as the entity itself.\r\n\r\n-   e6b00e3af: Remove the backstage.io/definition-at-location annotation.\r\n    The annotation was superseded by the placeholder processor.\r\n\r\n    ```yaml\r\n    apiVersion: backstage.io/v1alpha1\r\n    kind: API\r\n    metadata:\r\n      name: spotify\r\n      description: The Spotify web API\r\n      tags:\r\n        - spotify\r\n        - rest\r\n      annotations:\r\n        # Don't use this annotation, but the placeholder $text instead (see below).\r\n        backstage.io/definition-at-location: 'url:https://raw.githubusercontent.com/APIs-guru/openapi-directory/master/APIs/spotify.com/v1/swagger.yaml'\r\n    spec:\r\n      type: openapi\r\n      lifecycle: production\r\n      owner: spotify@example.com\r\n      definition:\r\n        $text: https://raw.githubusercontent.com/APIs-guru/openapi-directory/master/APIs/spotify.com/v1/swagger.yaml\r\n    ```\r\n\r\n-   99710b102: The way that wiring together a catalog happens, has changed drastically. Now\r\n    there is a new class `CatalogBuilder` that does almost all of the heavy lifting\r\n    of how to augment/replace pieces of catalog functionality, such as adding\r\n    support for custom entities or adding additional processors.\r\n\r\n    As the builder was added, a lot of the static methods and builders for default\r\n    setups have been removed from classes deep in the hierarchy. Instead, the\r\n    builder contains the knowledge of what the defaults are.\r\n\r\n-   002860e7a: Filters passed to the `/entities` endpoint of the catalog has changed format.\r\n\r\n    The old way was to pass things on the form `?a=b&c=d`; the new way is to pass\r\n    things on the form `?filter=a=b,c=d`. See discussion in\r\n    [#2910](https://github.com/backstage/backstage/issues/2910) for details.\r\n\r\n    The comma separated items within a single filter have an AND between them. If\r\n    multiple such filters are passed, they have an OR between those item groups.\r\n\r\n-   5adfc005e: Changes the various kind policies into a new type `KindValidator`.\r\n\r\n    Adds `CatalogProcessor#validateEntityKind` that makes use of the above\r\n    validators. This moves entity schema validity checking away from entity\r\n    policies and into processors, centralizing the extension points into the\r\n    processor chain.\r\n\r\n-   948052cbb: Add ability to dry run adding a new location to the catalog API.\r\n\r\n    The location is now added in a transaction and afterwards rolled back.\r\n    This allows users to dry run this operation to see if there entity has issues.\r\n    This is probably done by automated tools in the CI/CD pipeline.\r\n\r\n-   4036ff59d: - The `CatalogProcessor` API was updated to have `preProcessEntity` and\r\n    `postProcessEntity` methods, instead of just one `processEntity`. This makes\r\n    it easier to make processors that have several stages in one, and to make\r\n    different processors more position independent in the list of processors.\r\n    -   The `EntityPolicy` is now given directly to the `LocationReaders`, instead of\r\n        being enforced inside a policy. We have decided to separate out the act of\r\n        validating an entity to be outside of the processing flow, to make it\r\n        possible to apply more liberally and to evolve it as a separate concept.\r\n    -   Because of the above, the `EntityPolicyProcessor` has been removed.\r\n\r\n-   512d70973: Use the new `UrlReader` in the `CodeOwnersProcessor`.\r\n\r\n-   2f62e1804: Removed the parseData step from catalog processors. Locations readers should emit full entities instead.\r\n\r\n-   36a71d278: Removed support for deprecated `catalog.providers` config that have been moved to `integrations`\r\n\r\n-   a5cb46bac: Renamed the `LocationProcessor` class to `CatalogProcessor`.\r\n\r\n    Likewise, renamed `LocationProcessorResult`, `LocationProcessorLocationResult`,\r\n    `LocationProcessorDataResult`, `LocationProcessorEntityResult`,\r\n    `LocationProcessorErrorResult`, and `LocationProcessorEmit` to their `Catalog*`\r\n    counterparts.\r\n\r\n-   49d70ccab: Remove the `read` argument of `LocationProcessor.processEntity`.\r\n    Instead, pass the `UrlReader` into the constructor of your `LocationProcessor`.\r\n\r\n-   440a17b39: The catalog backend UrlReaderProcessor now uses a UrlReader from @backstage/backend-common, which must now be supplied to the constructor.\r\n\r\n### Patch Changes\r\n\r\n-   3472c8be7: Add codeowners processor\r\n\r\n    -   Add `codeowners-utils@^1.0.2` as a dependency\r\n    -   Add `core-js@^3.6.5` as a dependency\r\n    -   Added new CodeOwnersProcessor\r\n\r\n-   33454c0f2: Fix `CatalogBuilder#addProcessor`.\r\n\r\n-   183e2a30d: Add support for `fields` sub-selection of just parts of an entity when listing\r\n    entities in the catalog backend.\r\n\r\n    Example: `.../entities?fields=metadata.name,spec.type` will return partial\r\n    entity objects with only those exact fields present and the rest cut out.\r\n    Fields do not have to be simple scalars - you can for example do\r\n    `fields=metadata`.\r\n\r\n-   8bdf0bcf5: Fix CodeOwnersProcessor to handle non team users\r\n\r\n-   4c4eab81b: The CodeOwnersProcessor now handles 'url' locations\r\n\r\n-   Updated dependencies [3a4236570]\r\n\r\n-   Updated dependencies [e0be86b6f]\r\n\r\n-   Updated dependencies [f70a52868]\r\n\r\n-   Updated dependencies [12b5fe940]\r\n\r\n-   Updated dependencies [5249594c5]\r\n\r\n-   Updated dependencies [56e4eb589]\r\n\r\n-   Updated dependencies [e37c0a005]\r\n\r\n-   Updated dependencies [a768a07fb]\r\n\r\n-   Updated dependencies [f00ca3cb8]\r\n\r\n-   Updated dependencies [6579769df]\r\n\r\n-   Updated dependencies [5adfc005e]\r\n\r\n-   Updated dependencies [8c2b76e45]\r\n\r\n-   Updated dependencies [440a17b39]\r\n\r\n-   Updated dependencies [fa56f4615]\r\n\r\n-   Updated dependencies [8afce088a]\r\n\r\n-   Updated dependencies [b3d57961c]\r\n\r\n-   Updated dependencies [7bbeb049f]\r\n    -   @backstage/catalog-model@0.2.0\r\n    -   @backstage/backend-common@0.2.0\r\n\r\n ## @backstage/plugin-catalog-graphql@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   28edd7d29: Create backend plugin through CLI\r\n\r\n### Patch Changes\r\n\r\n-   Updated dependencies [3a4236570]\r\n-   Updated dependencies [e0be86b6f]\r\n-   Updated dependencies [f70a52868]\r\n-   Updated dependencies [12b5fe940]\r\n-   Updated dependencies [5249594c5]\r\n-   Updated dependencies [56e4eb589]\r\n-   Updated dependencies [e37c0a005]\r\n-   Updated dependencies [a768a07fb]\r\n-   Updated dependencies [f00ca3cb8]\r\n-   Updated dependencies [6579769df]\r\n-   Updated dependencies [5adfc005e]\r\n-   Updated dependencies [8c2b76e45]\r\n-   Updated dependencies [440a17b39]\r\n-   Updated dependencies [fa56f4615]\r\n-   Updated dependencies [8afce088a]\r\n-   Updated dependencies [b3d57961c]\r\n-   Updated dependencies [7bbeb049f]\r\n    -   @backstage/catalog-model@0.2.0\r\n    -   @backstage/backend-common@0.2.0\r\n\r\n ## @backstage/plugin-circleci@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   28edd7d29: Create backend plugin through CLI\r\n-   30dd11122: Refactor to use DiscoveryApi\r\n\r\n### Patch Changes\r\n\r\n-   Updated dependencies [28edd7d29]\r\n-   Updated dependencies [819a70229]\r\n-   Updated dependencies [3a4236570]\r\n-   Updated dependencies [ae5983387]\r\n-   Updated dependencies [0d4459c08]\r\n-   Updated dependencies [482b6313d]\r\n-   Updated dependencies [e0be86b6f]\r\n-   Updated dependencies [f70a52868]\r\n-   Updated dependencies [12b5fe940]\r\n-   Updated dependencies [368fd8243]\r\n-   Updated dependencies [1c60f716e]\r\n-   Updated dependencies [144c66d50]\r\n-   Updated dependencies [a768a07fb]\r\n-   Updated dependencies [b79017fd3]\r\n-   Updated dependencies [6d97d2d6f]\r\n-   Updated dependencies [5adfc005e]\r\n-   Updated dependencies [f0aa01bcc]\r\n-   Updated dependencies [0aecfded0]\r\n-   Updated dependencies [93a3fa3ae]\r\n-   Updated dependencies [782f3b354]\r\n-   Updated dependencies [8b9c8196f]\r\n-   Updated dependencies [2713f28f4]\r\n-   Updated dependencies [406015b0d]\r\n-   Updated dependencies [82759d3e4]\r\n-   Updated dependencies [60d40892c]\r\n-   Updated dependencies [ac8d5d5c7]\r\n-   Updated dependencies [2ebcfac8d]\r\n-   Updated dependencies [fa56f4615]\r\n-   Updated dependencies [ebca83d48]\r\n-   Updated dependencies [aca79334f]\r\n-   Updated dependencies [c0d5242a0]\r\n-   Updated dependencies [b3d57961c]\r\n-   Updated dependencies [0b956f21b]\r\n-   Updated dependencies [97c2cb19b]\r\n-   Updated dependencies [3beb5c9fc]\r\n-   Updated dependencies [754e31db5]\r\n-   Updated dependencies [1611c6dbc]\r\n    -   @backstage/plugin-catalog@0.2.0\r\n    -   @backstage/core@0.2.0\r\n    -   @backstage/catalog-model@0.2.0\r\n    -   @backstage/theme@0.2.0\r\n\r\n ## @backstage/plugin-cloudbuild@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   2846ef95c: Releasing Google Cloud Build Plugin\r\n\r\n### Patch Changes\r\n\r\n-   Updated dependencies [28edd7d29]\r\n-   Updated dependencies [819a70229]\r\n-   Updated dependencies [3a4236570]\r\n-   Updated dependencies [ae5983387]\r\n-   Updated dependencies [0d4459c08]\r\n-   Updated dependencies [482b6313d]\r\n-   Updated dependencies [e0be86b6f]\r\n-   Updated dependencies [f70a52868]\r\n-   Updated dependencies [12b5fe940]\r\n-   Updated dependencies [368fd8243]\r\n-   Updated dependencies [1c60f716e]\r\n-   Updated dependencies [144c66d50]\r\n-   Updated dependencies [a768a07fb]\r\n-   Updated dependencies [b79017fd3]\r\n-   Updated dependencies [6d97d2d6f]\r\n-   Updated dependencies [5adfc005e]\r\n-   Updated dependencies [f0aa01bcc]\r\n-   Updated dependencies [0aecfded0]\r\n-   Updated dependencies [93a3fa3ae]\r\n-   Updated dependencies [782f3b354]\r\n-   Updated dependencies [8b9c8196f]\r\n-   Updated dependencies [2713f28f4]\r\n-   Updated dependencies [406015b0d]\r\n-   Updated dependencies [82759d3e4]\r\n-   Updated dependencies [60d40892c]\r\n-   Updated dependencies [ac8d5d5c7]\r\n-   Updated dependencies [2ebcfac8d]\r\n-   Updated dependencies [fa56f4615]\r\n-   Updated dependencies [ebca83d48]\r\n-   Updated dependencies [aca79334f]\r\n-   Updated dependencies [c0d5242a0]\r\n-   Updated dependencies [b3d57961c]\r\n-   Updated dependencies [0b956f21b]\r\n-   Updated dependencies [97c2cb19b]\r\n-   Updated dependencies [3beb5c9fc]\r\n-   Updated dependencies [754e31db5]\r\n-   Updated dependencies [1611c6dbc]\r\n    -   @backstage/plugin-catalog@0.2.0\r\n    -   @backstage/core@0.2.0\r\n    -   @backstage/catalog-model@0.2.0\r\n    -   @backstage/theme@0.2.0\r\n\r\n ## @backstage/plugin-cost-insights@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   cab473771: This PR adds Spotify's Cost Insights Tool. Cost Insights explains costs from cloud services in an understandable way, using software terms familiar to your engineers. This tool helps you and your team make trade-offs between cost optimization efforts and your other priorities.\r\n\r\n    Cost Insights features:\r\n\r\n    Daily cost graph by team or billing account\r\n    Cost comparison against configurable business metrics\r\n    Insights panels for configurable cloud products your company uses\r\n    Cost alerts and recommendations\r\n    Selectable time periods for month over month, or quarter over quarter cost comparison\r\n    Conversion of cost growth into average engineer cost (configurable) to help optimization trade-off decisions\r\n\r\n    ![plugin-cost-insights](https://user-images.githubusercontent.com/3030003/94430416-e166d380-0161-11eb-891c-9ce10187683e.gif)\r\n\r\n    This PR adds the Cost Insights frontend React plugin with a defined CostInsightsApi. We include an example client with static data in the expected format. This API should talk with a cloud billing backend that aggregates billing data from your cloud provider.\r\n\r\n    Fixes #688 💵\r\n\r\n-   bb48b9833: Added getLastCompleteBillingDate to the CostInsightsApi to reason about completeness of billing data\r\n\r\n-   6a84cb072: Enable custom alert types in Cost Insights\r\n\r\n-   e7d4ac7ce: - getProjectDailyCost and getGroupDailyCost no longer accept a metric as a parameter\r\n    -   getDailyMetricData added to API for fetching daily metric data for given interval\r\n    -   dailyCost removed as configurable metric\r\n    -   default field added to metric configuration for displaying comparison metric data in top panel\r\n    -   Metric.kind can no longer be null\r\n    -   MetricData type added\r\n\r\n-   0e67c6b40: Remove product filters from query parameters\r\n\r\n### Patch Changes\r\n\r\n-   8d1360aa9: export test utilities for mocking context\r\n-   0ee9e9f66: migrate type utilities out of type definition files\r\n-   5c70f3d35: expose alerts utilities for export\r\n-   fd8384d7e: prefer named exports\r\n-   26e69ab1a: Remove cost insights example client from demo app and export from plugin\r\n    Create cost insights dev plugin using example client\r\n    Make PluginConfig and dependent types public\r\n-   Updated dependencies [819a70229]\r\n-   Updated dependencies [ae5983387]\r\n-   Updated dependencies [0d4459c08]\r\n-   Updated dependencies [482b6313d]\r\n-   Updated dependencies [1c60f716e]\r\n-   Updated dependencies [144c66d50]\r\n-   Updated dependencies [b79017fd3]\r\n-   Updated dependencies [6d97d2d6f]\r\n-   Updated dependencies [93a3fa3ae]\r\n-   Updated dependencies [782f3b354]\r\n-   Updated dependencies [2713f28f4]\r\n-   Updated dependencies [406015b0d]\r\n-   Updated dependencies [82759d3e4]\r\n-   Updated dependencies [ac8d5d5c7]\r\n-   Updated dependencies [ebca83d48]\r\n-   Updated dependencies [aca79334f]\r\n-   Updated dependencies [c0d5242a0]\r\n-   Updated dependencies [3beb5c9fc]\r\n-   Updated dependencies [754e31db5]\r\n-   Updated dependencies [1611c6dbc]\r\n    -   @backstage/core@0.2.0\r\n    -   @backstage/theme@0.2.0\r\n    -   @backstage/test-utils@0.1.2\r\n\r\n ## @backstage/plugin-explore@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   28edd7d29: Create backend plugin through CLI\r\n-   cab473771: This PR adds Spotify's Cost Insights Tool. Cost Insights explains costs from cloud services in an understandable way, using software terms familiar to your engineers. This tool helps you and your team make trade-offs between cost optimization efforts and your other priorities.\r\n\r\n    Cost Insights features:\r\n\r\n    Daily cost graph by team or billing account\r\n    Cost comparison against configurable business metrics\r\n    Insights panels for configurable cloud products your company uses\r\n    Cost alerts and recommendations\r\n    Selectable time periods for month over month, or quarter over quarter cost comparison\r\n    Conversion of cost growth into average engineer cost (configurable) to help optimization trade-off decisions\r\n\r\n    ![plugin-cost-insights](https://user-images.githubusercontent.com/3030003/94430416-e166d380-0161-11eb-891c-9ce10187683e.gif)\r\n\r\n    This PR adds the Cost Insights frontend React plugin with a defined CostInsightsApi. We include an example client with static data in the expected format. This API should talk with a cloud billing backend that aggregates billing data from your cloud provider.\r\n\r\n    Fixes #688 💵\r\n\r\n### Patch Changes\r\n\r\n-   Updated dependencies [819a70229]\r\n-   Updated dependencies [ae5983387]\r\n-   Updated dependencies [0d4459c08]\r\n-   Updated dependencies [482b6313d]\r\n-   Updated dependencies [1c60f716e]\r\n-   Updated dependencies [144c66d50]\r\n-   Updated dependencies [b79017fd3]\r\n-   Updated dependencies [6d97d2d6f]\r\n-   Updated dependencies [93a3fa3ae]\r\n-   Updated dependencies [782f3b354]\r\n-   Updated dependencies [2713f28f4]\r\n-   Updated dependencies [406015b0d]\r\n-   Updated dependencies [82759d3e4]\r\n-   Updated dependencies [ac8d5d5c7]\r\n-   Updated dependencies [ebca83d48]\r\n-   Updated dependencies [aca79334f]\r\n-   Updated dependencies [c0d5242a0]\r\n-   Updated dependencies [3beb5c9fc]\r\n-   Updated dependencies [754e31db5]\r\n-   Updated dependencies [1611c6dbc]\r\n    -   @backstage/core@0.2.0\r\n    -   @backstage/theme@0.2.0\r\n\r\n ## @backstage/plugin-gcp-projects@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   28edd7d29: Create backend plugin through CLI\r\n\r\n### Patch Changes\r\n\r\n-   Updated dependencies [819a70229]\r\n-   Updated dependencies [ae5983387]\r\n-   Updated dependencies [0d4459c08]\r\n-   Updated dependencies [482b6313d]\r\n-   Updated dependencies [1c60f716e]\r\n-   Updated dependencies [144c66d50]\r\n-   Updated dependencies [b79017fd3]\r\n-   Updated dependencies [6d97d2d6f]\r\n-   Updated dependencies [93a3fa3ae]\r\n-   Updated dependencies [782f3b354]\r\n-   Updated dependencies [2713f28f4]\r\n-   Updated dependencies [406015b0d]\r\n-   Updated dependencies [82759d3e4]\r\n-   Updated dependencies [ac8d5d5c7]\r\n-   Updated dependencies [ebca83d48]\r\n-   Updated dependencies [aca79334f]\r\n-   Updated dependencies [c0d5242a0]\r\n-   Updated dependencies [3beb5c9fc]\r\n-   Updated dependencies [754e31db5]\r\n-   Updated dependencies [1611c6dbc]\r\n    -   @backstage/core@0.2.0\r\n    -   @backstage/theme@0.2.0\r\n\r\n ## @backstage/plugin-github-actions@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   28edd7d29: Create backend plugin through CLI\r\n-   d67c529ab: Adds a widget to show recent git workflow runs to the github actions plugin. The default setting is the last 5 runs across all branches but both branch and the number of runs are configurable.\r\n-   6d97d2d6f: The InfoCard variant `'height100'` is deprecated. Use variant `'gridItem'` instead.\r\n\r\n    When the InfoCard is displayed as a grid item within a grid, you may want items to have the same height for all items.\r\n    Set to the `'gridItem'` variant to display the InfoCard with full height suitable for Grid:\r\n    `<InfoCard variant=\"gridItem\">...</InfoCard>`\r\n\r\n    Changed the InfoCards in '@backstage/plugin-github-actions', '@backstage/plugin-jenkins', '@backstage/plugin-lighthouse'\r\n    to pass an optional variant to the corresponding card of the plugin.\r\n\r\n    As a result the overview content of the EntityPage shows cards with full height suitable for Grid.\r\n\r\n### Patch Changes\r\n\r\n-   Updated dependencies [28edd7d29]\r\n-   Updated dependencies [819a70229]\r\n-   Updated dependencies [3a4236570]\r\n-   Updated dependencies [ae5983387]\r\n-   Updated dependencies [0d4459c08]\r\n-   Updated dependencies [cbbd271c4]\r\n-   Updated dependencies [482b6313d]\r\n-   Updated dependencies [e0be86b6f]\r\n-   Updated dependencies [f70a52868]\r\n-   Updated dependencies [12b5fe940]\r\n-   Updated dependencies [368fd8243]\r\n-   Updated dependencies [1c60f716e]\r\n-   Updated dependencies [144c66d50]\r\n-   Updated dependencies [a768a07fb]\r\n-   Updated dependencies [b79017fd3]\r\n-   Updated dependencies [6d97d2d6f]\r\n-   Updated dependencies [5adfc005e]\r\n-   Updated dependencies [f0aa01bcc]\r\n-   Updated dependencies [0aecfded0]\r\n-   Updated dependencies [93a3fa3ae]\r\n-   Updated dependencies [782f3b354]\r\n-   Updated dependencies [8b9c8196f]\r\n-   Updated dependencies [2713f28f4]\r\n-   Updated dependencies [406015b0d]\r\n-   Updated dependencies [82759d3e4]\r\n-   Updated dependencies [60d40892c]\r\n-   Updated dependencies [ac8d5d5c7]\r\n-   Updated dependencies [2ebcfac8d]\r\n-   Updated dependencies [fa56f4615]\r\n-   Updated dependencies [ebca83d48]\r\n-   Updated dependencies [aca79334f]\r\n-   Updated dependencies [c0d5242a0]\r\n-   Updated dependencies [b3d57961c]\r\n-   Updated dependencies [0b956f21b]\r\n-   Updated dependencies [26e69ab1a]\r\n-   Updated dependencies [97c2cb19b]\r\n-   Updated dependencies [3beb5c9fc]\r\n-   Updated dependencies [cbab5bbf8]\r\n-   Updated dependencies [754e31db5]\r\n-   Updated dependencies [1611c6dbc]\r\n    -   @backstage/plugin-catalog@0.2.0\r\n    -   @backstage/core-api@0.2.0\r\n    -   @backstage/core@0.2.0\r\n    -   @backstage/catalog-model@0.2.0\r\n    -   @backstage/theme@0.2.0\r\n\r\n ## @backstage/plugin-gitops-profiles@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   28edd7d29: Create backend plugin through CLI\r\n\r\n### Patch Changes\r\n\r\n-   Updated dependencies [819a70229]\r\n-   Updated dependencies [ae5983387]\r\n-   Updated dependencies [0d4459c08]\r\n-   Updated dependencies [482b6313d]\r\n-   Updated dependencies [1c60f716e]\r\n-   Updated dependencies [144c66d50]\r\n-   Updated dependencies [b79017fd3]\r\n-   Updated dependencies [6d97d2d6f]\r\n-   Updated dependencies [93a3fa3ae]\r\n-   Updated dependencies [782f3b354]\r\n-   Updated dependencies [2713f28f4]\r\n-   Updated dependencies [406015b0d]\r\n-   Updated dependencies [82759d3e4]\r\n-   Updated dependencies [ac8d5d5c7]\r\n-   Updated dependencies [ebca83d48]\r\n-   Updated dependencies [aca79334f]\r\n-   Updated dependencies [c0d5242a0]\r\n-   Updated dependencies [3beb5c9fc]\r\n-   Updated dependencies [754e31db5]\r\n-   Updated dependencies [1611c6dbc]\r\n    -   @backstage/core@0.2.0\r\n    -   @backstage/theme@0.2.0\r\n\r\n ## @backstage/plugin-graphiql@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   28edd7d29: Create backend plugin through CLI\r\n\r\n### Patch Changes\r\n\r\n-   782f3b354: add test case for Progress component\r\n-   Updated dependencies [819a70229]\r\n-   Updated dependencies [ae5983387]\r\n-   Updated dependencies [0d4459c08]\r\n-   Updated dependencies [482b6313d]\r\n-   Updated dependencies [1c60f716e]\r\n-   Updated dependencies [144c66d50]\r\n-   Updated dependencies [b79017fd3]\r\n-   Updated dependencies [6d97d2d6f]\r\n-   Updated dependencies [93a3fa3ae]\r\n-   Updated dependencies [782f3b354]\r\n-   Updated dependencies [2713f28f4]\r\n-   Updated dependencies [406015b0d]\r\n-   Updated dependencies [82759d3e4]\r\n-   Updated dependencies [ac8d5d5c7]\r\n-   Updated dependencies [ebca83d48]\r\n-   Updated dependencies [aca79334f]\r\n-   Updated dependencies [c0d5242a0]\r\n-   Updated dependencies [3beb5c9fc]\r\n-   Updated dependencies [754e31db5]\r\n-   Updated dependencies [1611c6dbc]\r\n    -   @backstage/core@0.2.0\r\n    -   @backstage/theme@0.2.0\r\n\r\n ## @backstage/plugin-jenkins@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   28edd7d29: Create backend plugin through CLI\r\n-   6d97d2d6f: The InfoCard variant `'height100'` is deprecated. Use variant `'gridItem'` instead.\r\n\r\n    When the InfoCard is displayed as a grid item within a grid, you may want items to have the same height for all items.\r\n    Set to the `'gridItem'` variant to display the InfoCard with full height suitable for Grid:\r\n    `<InfoCard variant=\"gridItem\">...</InfoCard>`\r\n\r\n    Changed the InfoCards in '@backstage/plugin-github-actions', '@backstage/plugin-jenkins', '@backstage/plugin-lighthouse'\r\n    to pass an optional variant to the corresponding card of the plugin.\r\n\r\n    As a result the overview content of the EntityPage shows cards with full height suitable for Grid.\r\n\r\n### Patch Changes\r\n\r\n-   1297dcb3a: Refactor to use DiscoveryApi\r\n-   Updated dependencies [28edd7d29]\r\n-   Updated dependencies [819a70229]\r\n-   Updated dependencies [3a4236570]\r\n-   Updated dependencies [ae5983387]\r\n-   Updated dependencies [0d4459c08]\r\n-   Updated dependencies [482b6313d]\r\n-   Updated dependencies [e0be86b6f]\r\n-   Updated dependencies [f70a52868]\r\n-   Updated dependencies [12b5fe940]\r\n-   Updated dependencies [368fd8243]\r\n-   Updated dependencies [1c60f716e]\r\n-   Updated dependencies [144c66d50]\r\n-   Updated dependencies [a768a07fb]\r\n-   Updated dependencies [b79017fd3]\r\n-   Updated dependencies [6d97d2d6f]\r\n-   Updated dependencies [5adfc005e]\r\n-   Updated dependencies [f0aa01bcc]\r\n-   Updated dependencies [0aecfded0]\r\n-   Updated dependencies [93a3fa3ae]\r\n-   Updated dependencies [782f3b354]\r\n-   Updated dependencies [8b9c8196f]\r\n-   Updated dependencies [2713f28f4]\r\n-   Updated dependencies [406015b0d]\r\n-   Updated dependencies [82759d3e4]\r\n-   Updated dependencies [60d40892c]\r\n-   Updated dependencies [ac8d5d5c7]\r\n-   Updated dependencies [2ebcfac8d]\r\n-   Updated dependencies [fa56f4615]\r\n-   Updated dependencies [ebca83d48]\r\n-   Updated dependencies [aca79334f]\r\n-   Updated dependencies [c0d5242a0]\r\n-   Updated dependencies [b3d57961c]\r\n-   Updated dependencies [0b956f21b]\r\n-   Updated dependencies [97c2cb19b]\r\n-   Updated dependencies [3beb5c9fc]\r\n-   Updated dependencies [754e31db5]\r\n-   Updated dependencies [1611c6dbc]\r\n    -   @backstage/plugin-catalog@0.2.0\r\n    -   @backstage/core@0.2.0\r\n    -   @backstage/catalog-model@0.2.0\r\n    -   @backstage/theme@0.2.0\r\n\r\n ## @backstage/plugin-kubernetes@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   28edd7d29: Create backend plugin through CLI\r\n\r\n### Patch Changes\r\n\r\n-   Updated dependencies [819a70229]\r\n-   Updated dependencies [3a4236570]\r\n-   Updated dependencies [ae5983387]\r\n-   Updated dependencies [0d4459c08]\r\n-   Updated dependencies [482b6313d]\r\n-   Updated dependencies [e0be86b6f]\r\n-   Updated dependencies [f70a52868]\r\n-   Updated dependencies [12b5fe940]\r\n-   Updated dependencies [1c60f716e]\r\n-   Updated dependencies [144c66d50]\r\n-   Updated dependencies [a768a07fb]\r\n-   Updated dependencies [b79017fd3]\r\n-   Updated dependencies [6d97d2d6f]\r\n-   Updated dependencies [5adfc005e]\r\n-   Updated dependencies [93a3fa3ae]\r\n-   Updated dependencies [782f3b354]\r\n-   Updated dependencies [2713f28f4]\r\n-   Updated dependencies [406015b0d]\r\n-   Updated dependencies [82759d3e4]\r\n-   Updated dependencies [ac8d5d5c7]\r\n-   Updated dependencies [fa56f4615]\r\n-   Updated dependencies [ebca83d48]\r\n-   Updated dependencies [aca79334f]\r\n-   Updated dependencies [c0d5242a0]\r\n-   Updated dependencies [b3d57961c]\r\n-   Updated dependencies [3beb5c9fc]\r\n-   Updated dependencies [754e31db5]\r\n-   Updated dependencies [1611c6dbc]\r\n    -   @backstage/core@0.2.0\r\n    -   @backstage/catalog-model@0.2.0\r\n    -   @backstage/theme@0.2.0\r\n    -   @backstage/plugin-kubernetes-backend@0.1.2\r\n\r\n ## @backstage/plugin-lighthouse@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   28edd7d29: Create backend plugin through CLI\r\n-   6d97d2d6f: The InfoCard variant `'height100'` is deprecated. Use variant `'gridItem'` instead.\r\n\r\n    When the InfoCard is displayed as a grid item within a grid, you may want items to have the same height for all items.\r\n    Set to the `'gridItem'` variant to display the InfoCard with full height suitable for Grid:\r\n    `<InfoCard variant=\"gridItem\">...</InfoCard>`\r\n\r\n    Changed the InfoCards in '@backstage/plugin-github-actions', '@backstage/plugin-jenkins', '@backstage/plugin-lighthouse'\r\n    to pass an optional variant to the corresponding card of the plugin.\r\n\r\n    As a result the overview content of the EntityPage shows cards with full height suitable for Grid.\r\n\r\n### Patch Changes\r\n\r\n-   Updated dependencies [28edd7d29]\r\n-   Updated dependencies [819a70229]\r\n-   Updated dependencies [3a4236570]\r\n-   Updated dependencies [ae5983387]\r\n-   Updated dependencies [0d4459c08]\r\n-   Updated dependencies [cbbd271c4]\r\n-   Updated dependencies [482b6313d]\r\n-   Updated dependencies [e0be86b6f]\r\n-   Updated dependencies [f70a52868]\r\n-   Updated dependencies [12b5fe940]\r\n-   Updated dependencies [368fd8243]\r\n-   Updated dependencies [1c60f716e]\r\n-   Updated dependencies [144c66d50]\r\n-   Updated dependencies [a768a07fb]\r\n-   Updated dependencies [b79017fd3]\r\n-   Updated dependencies [6d97d2d6f]\r\n-   Updated dependencies [5adfc005e]\r\n-   Updated dependencies [f0aa01bcc]\r\n-   Updated dependencies [0aecfded0]\r\n-   Updated dependencies [93a3fa3ae]\r\n-   Updated dependencies [782f3b354]\r\n-   Updated dependencies [8b9c8196f]\r\n-   Updated dependencies [2713f28f4]\r\n-   Updated dependencies [406015b0d]\r\n-   Updated dependencies [82759d3e4]\r\n-   Updated dependencies [60d40892c]\r\n-   Updated dependencies [ac8d5d5c7]\r\n-   Updated dependencies [2ebcfac8d]\r\n-   Updated dependencies [fa56f4615]\r\n-   Updated dependencies [ebca83d48]\r\n-   Updated dependencies [aca79334f]\r\n-   Updated dependencies [c0d5242a0]\r\n-   Updated dependencies [b3d57961c]\r\n-   Updated dependencies [0b956f21b]\r\n-   Updated dependencies [26e69ab1a]\r\n-   Updated dependencies [97c2cb19b]\r\n-   Updated dependencies [3beb5c9fc]\r\n-   Updated dependencies [cbab5bbf8]\r\n-   Updated dependencies [754e31db5]\r\n-   Updated dependencies [1611c6dbc]\r\n    -   @backstage/plugin-catalog@0.2.0\r\n    -   @backstage/core-api@0.2.0\r\n    -   @backstage/core@0.2.0\r\n    -   @backstage/catalog-model@0.2.0\r\n    -   @backstage/theme@0.2.0\r\n\r\n ## @backstage/plugin-newrelic@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   28edd7d29: Create backend plugin through CLI\r\n-   4512b9967: The New Relic plugin now uses the Backstage proxy to communicate with New Relic's API.\r\n\r\n    Please update your `app-config.yaml` as follows:\r\n\r\n    ```yaml\r\n    # Old Config\r\n    newrelic:\r\n      api:\r\n        baseUrl: 'https://api.newrelic.com/v2'\r\n        key: NEW_RELIC_REST_API_KEY\r\n    ```\r\n\r\n    ```yaml\r\n    # New Config\r\n    proxy:\r\n      '/newrelic/apm/api':\r\n        target: https://api.newrelic.com/v2\r\n        headers:\r\n          X-Api-Key:\r\n            $env: NEW_RELIC_REST_API_KEY\r\n    ```\r\n\r\n### Patch Changes\r\n\r\n-   Updated dependencies [819a70229]\r\n-   Updated dependencies [ae5983387]\r\n-   Updated dependencies [0d4459c08]\r\n-   Updated dependencies [482b6313d]\r\n-   Updated dependencies [1c60f716e]\r\n-   Updated dependencies [144c66d50]\r\n-   Updated dependencies [b79017fd3]\r\n-   Updated dependencies [6d97d2d6f]\r\n-   Updated dependencies [93a3fa3ae]\r\n-   Updated dependencies [782f3b354]\r\n-   Updated dependencies [2713f28f4]\r\n-   Updated dependencies [406015b0d]\r\n-   Updated dependencies [82759d3e4]\r\n-   Updated dependencies [ac8d5d5c7]\r\n-   Updated dependencies [ebca83d48]\r\n-   Updated dependencies [aca79334f]\r\n-   Updated dependencies [c0d5242a0]\r\n-   Updated dependencies [3beb5c9fc]\r\n-   Updated dependencies [754e31db5]\r\n-   Updated dependencies [1611c6dbc]\r\n    -   @backstage/core@0.2.0\r\n    -   @backstage/theme@0.2.0\r\n\r\n ## @backstage/plugin-proxy-backend@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   5249594c5: Add service discovery interface and implement for single host deployments\r\n\r\n    Fixes #1847, #2596\r\n\r\n    Went with an interface similar to the frontend DiscoveryApi, since it's dead simple but still provides a lot of flexibility in the implementation.\r\n\r\n    Also ended up with two different methods, one for internal endpoint discovery and one for external. The two use-cases are explained a bit more in the docs, but basically it's service-to-service vs callback URLs.\r\n\r\n    This did get me thinking about uniqueness and that we're heading towards a global namespace for backend plugin IDs. That's probably fine, but if we're happy with that we should leverage it a bit more to simplify the backend setup. For example we'd have each plugin provide its own ID and not manually mount on paths in the backend.\r\n\r\n    Draft until we're happy with the implementation, then I can add more docs and changelog entry. Also didn't go on a thorough hunt for places where discovery can be used, but I don't think there are many since it's been pretty awkward to do service-to-service communication.\r\n\r\n-   9226c2aaa: Limit the http headers that are forwarded from the request to a safe set of defaults.\r\n    A user can configure additional headers that should be forwarded if the specific applications needs that.\r\n\r\n    ```yaml\r\n    proxy:\r\n      '/my-api':\r\n        target: 'https://my-api.com/get'\r\n        allowedHeaders:\r\n          # We need to forward the Authorization header that was provided by the caller\r\n          - Authorization\r\n    ```\r\n\r\n### Patch Changes\r\n\r\n-   Updated dependencies [5249594c5]\r\n-   Updated dependencies [56e4eb589]\r\n-   Updated dependencies [e37c0a005]\r\n-   Updated dependencies [f00ca3cb8]\r\n-   Updated dependencies [6579769df]\r\n-   Updated dependencies [8c2b76e45]\r\n-   Updated dependencies [440a17b39]\r\n-   Updated dependencies [8afce088a]\r\n-   Updated dependencies [7bbeb049f]\r\n    -   @backstage/backend-common@0.2.0\r\n\r\n ## @backstage/plugin-register-component@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   28edd7d29: Create backend plugin through CLI\r\n-   2ebcfac8d: Add a validate button to the register-component page\r\n\r\n    This allows the user to validate his location before adding it.\r\n\r\n### Patch Changes\r\n\r\n-   8b9c8196f: Locations registered through the catalog client now default to the 'url' type. The type selection dropdown in the register-component form has been removed.\r\n-   Updated dependencies [28edd7d29]\r\n-   Updated dependencies [819a70229]\r\n-   Updated dependencies [3a4236570]\r\n-   Updated dependencies [ae5983387]\r\n-   Updated dependencies [0d4459c08]\r\n-   Updated dependencies [482b6313d]\r\n-   Updated dependencies [e0be86b6f]\r\n-   Updated dependencies [f70a52868]\r\n-   Updated dependencies [12b5fe940]\r\n-   Updated dependencies [368fd8243]\r\n-   Updated dependencies [1c60f716e]\r\n-   Updated dependencies [144c66d50]\r\n-   Updated dependencies [a768a07fb]\r\n-   Updated dependencies [b79017fd3]\r\n-   Updated dependencies [6d97d2d6f]\r\n-   Updated dependencies [5adfc005e]\r\n-   Updated dependencies [f0aa01bcc]\r\n-   Updated dependencies [0aecfded0]\r\n-   Updated dependencies [93a3fa3ae]\r\n-   Updated dependencies [782f3b354]\r\n-   Updated dependencies [8b9c8196f]\r\n-   Updated dependencies [2713f28f4]\r\n-   Updated dependencies [406015b0d]\r\n-   Updated dependencies [82759d3e4]\r\n-   Updated dependencies [60d40892c]\r\n-   Updated dependencies [ac8d5d5c7]\r\n-   Updated dependencies [2ebcfac8d]\r\n-   Updated dependencies [fa56f4615]\r\n-   Updated dependencies [ebca83d48]\r\n-   Updated dependencies [aca79334f]\r\n-   Updated dependencies [c0d5242a0]\r\n-   Updated dependencies [b3d57961c]\r\n-   Updated dependencies [0b956f21b]\r\n-   Updated dependencies [97c2cb19b]\r\n-   Updated dependencies [3beb5c9fc]\r\n-   Updated dependencies [754e31db5]\r\n-   Updated dependencies [1611c6dbc]\r\n    -   @backstage/plugin-catalog@0.2.0\r\n    -   @backstage/core@0.2.0\r\n    -   @backstage/catalog-model@0.2.0\r\n    -   @backstage/theme@0.2.0\r\n\r\n ## @backstage/plugin-rollbar@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   28edd7d29: Create backend plugin through CLI\r\n\r\n### Patch Changes\r\n\r\n-   Updated dependencies [28edd7d29]\r\n-   Updated dependencies [819a70229]\r\n-   Updated dependencies [3a4236570]\r\n-   Updated dependencies [ae5983387]\r\n-   Updated dependencies [0d4459c08]\r\n-   Updated dependencies [482b6313d]\r\n-   Updated dependencies [e0be86b6f]\r\n-   Updated dependencies [f70a52868]\r\n-   Updated dependencies [12b5fe940]\r\n-   Updated dependencies [368fd8243]\r\n-   Updated dependencies [1c60f716e]\r\n-   Updated dependencies [144c66d50]\r\n-   Updated dependencies [a768a07fb]\r\n-   Updated dependencies [b79017fd3]\r\n-   Updated dependencies [6d97d2d6f]\r\n-   Updated dependencies [5adfc005e]\r\n-   Updated dependencies [f0aa01bcc]\r\n-   Updated dependencies [0aecfded0]\r\n-   Updated dependencies [93a3fa3ae]\r\n-   Updated dependencies [782f3b354]\r\n-   Updated dependencies [8b9c8196f]\r\n-   Updated dependencies [2713f28f4]\r\n-   Updated dependencies [406015b0d]\r\n-   Updated dependencies [82759d3e4]\r\n-   Updated dependencies [60d40892c]\r\n-   Updated dependencies [ac8d5d5c7]\r\n-   Updated dependencies [2ebcfac8d]\r\n-   Updated dependencies [fa56f4615]\r\n-   Updated dependencies [ebca83d48]\r\n-   Updated dependencies [aca79334f]\r\n-   Updated dependencies [c0d5242a0]\r\n-   Updated dependencies [b3d57961c]\r\n-   Updated dependencies [0b956f21b]\r\n-   Updated dependencies [97c2cb19b]\r\n-   Updated dependencies [3beb5c9fc]\r\n-   Updated dependencies [754e31db5]\r\n-   Updated dependencies [1611c6dbc]\r\n    -   @backstage/plugin-catalog@0.2.0\r\n    -   @backstage/core@0.2.0\r\n    -   @backstage/catalog-model@0.2.0\r\n    -   @backstage/theme@0.2.0\r\n\r\n ## @backstage/plugin-scaffolder@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   28edd7d29: Create backend plugin through CLI\r\n\r\n### Patch Changes\r\n\r\n-   fb74f1db6: Make title meaningful after component creation\r\n\r\n    Fixes #2458.\r\n\r\n    After the change, the UX should look like this:\r\n\r\n    ### If the component creation was successful:\r\n\r\n    ![successfully-created-component](https://user-images.githubusercontent.com/33940798/94339294-8bd1e000-0016-11eb-885b-7936fcc23b63.gif)\r\n\r\n    ### If the component creation failed:\r\n\r\n    ![failed-to-create-component](https://user-images.githubusercontent.com/33940798/94339296-90969400-0016-11eb-9a74-ce16b3dd8d88.gif)\r\n\r\n-   c5ef12926: fix the accordion details design when job stage fail\r\n\r\n-   1c8c43756: The new `scaffolder.github.baseUrl` config property allows to specify a custom base url for GitHub enterprise instances\r\n\r\n-   Updated dependencies [28edd7d29]\r\n\r\n-   Updated dependencies [819a70229]\r\n\r\n-   Updated dependencies [3a4236570]\r\n\r\n-   Updated dependencies [ae5983387]\r\n\r\n-   Updated dependencies [0d4459c08]\r\n\r\n-   Updated dependencies [482b6313d]\r\n\r\n-   Updated dependencies [e0be86b6f]\r\n\r\n-   Updated dependencies [f70a52868]\r\n\r\n-   Updated dependencies [12b5fe940]\r\n\r\n-   Updated dependencies [368fd8243]\r\n\r\n-   Updated dependencies [1c60f716e]\r\n\r\n-   Updated dependencies [144c66d50]\r\n\r\n-   Updated dependencies [a768a07fb]\r\n\r\n-   Updated dependencies [b79017fd3]\r\n\r\n-   Updated dependencies [6d97d2d6f]\r\n\r\n-   Updated dependencies [5adfc005e]\r\n\r\n-   Updated dependencies [f0aa01bcc]\r\n\r\n-   Updated dependencies [0aecfded0]\r\n\r\n-   Updated dependencies [93a3fa3ae]\r\n\r\n-   Updated dependencies [782f3b354]\r\n\r\n-   Updated dependencies [8b9c8196f]\r\n\r\n-   Updated dependencies [2713f28f4]\r\n\r\n-   Updated dependencies [406015b0d]\r\n\r\n-   Updated dependencies [82759d3e4]\r\n\r\n-   Updated dependencies [60d40892c]\r\n\r\n-   Updated dependencies [ac8d5d5c7]\r\n\r\n-   Updated dependencies [2ebcfac8d]\r\n\r\n-   Updated dependencies [fa56f4615]\r\n\r\n-   Updated dependencies [ebca83d48]\r\n\r\n-   Updated dependencies [aca79334f]\r\n\r\n-   Updated dependencies [c0d5242a0]\r\n\r\n-   Updated dependencies [b3d57961c]\r\n\r\n-   Updated dependencies [0b956f21b]\r\n\r\n-   Updated dependencies [97c2cb19b]\r\n\r\n-   Updated dependencies [3beb5c9fc]\r\n\r\n-   Updated dependencies [754e31db5]\r\n\r\n-   Updated dependencies [1611c6dbc]\r\n    -   @backstage/plugin-catalog@0.2.0\r\n    -   @backstage/core@0.2.0\r\n    -   @backstage/catalog-model@0.2.0\r\n    -   @backstage/theme@0.2.0\r\n\r\n ## @backstage/plugin-scaffolder-backend@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   3e254503d: Add Azure DevOps support to the scaffolder backend\r\n\r\n    This adds support for Azure DevOps to the scaffolder (preparer & publisher). I thought I should get this in there now since #2426 has been merged. I had a previous PR with only the preparer but I closed that in favor of this one.\r\n\r\n    I stayed with the 'azure/api' structure but I guess we should try and go the same way as with GitHub here #2501\r\n\r\n### Patch Changes\r\n\r\n-   0c370c979: Update SSR template to pass CI\r\n\r\n-   991a950e0: Added .fromConfig static factories for Preparers and Publishers + read integrations config to support url location types\r\n\r\n-   c926765a2: Allow templates to be located on non-default branch\r\n\r\n-   6840a68df: Add authentication token to Scaffolder GitHub Preparer\r\n\r\n-   1c8c43756: The new `scaffolder.github.baseUrl` config property allows to specify a custom base url for GitHub enterprise instances\r\n\r\n-   5e4551e3a: Added support for configuring the working directory of the Scaffolder:\r\n\r\n    ```yaml\r\n    backend:\r\n      workingDirectory: /some-dir # Use this to configure a working directory for the scaffolder, defaults to the OS temp-dir\r\n    ```\r\n\r\n-   e3d063ffa: Introduce PreparerOptions for PreparerBase\r\n\r\n-   Updated dependencies [3a4236570]\r\n\r\n-   Updated dependencies [e0be86b6f]\r\n\r\n-   Updated dependencies [f70a52868]\r\n\r\n-   Updated dependencies [12b5fe940]\r\n\r\n-   Updated dependencies [5249594c5]\r\n\r\n-   Updated dependencies [56e4eb589]\r\n\r\n-   Updated dependencies [e37c0a005]\r\n\r\n-   Updated dependencies [a768a07fb]\r\n\r\n-   Updated dependencies [f00ca3cb8]\r\n\r\n-   Updated dependencies [6579769df]\r\n\r\n-   Updated dependencies [5adfc005e]\r\n\r\n-   Updated dependencies [8c2b76e45]\r\n\r\n-   Updated dependencies [440a17b39]\r\n\r\n-   Updated dependencies [fa56f4615]\r\n\r\n-   Updated dependencies [8afce088a]\r\n\r\n-   Updated dependencies [b3d57961c]\r\n\r\n-   Updated dependencies [7bbeb049f]\r\n    -   @backstage/catalog-model@0.2.0\r\n    -   @backstage/backend-common@0.2.0\r\n\r\n ## @backstage/plugin-sentry@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   28edd7d29: Create backend plugin through CLI\r\n\r\n### Patch Changes\r\n\r\n-   Updated dependencies [819a70229]\r\n-   Updated dependencies [3a4236570]\r\n-   Updated dependencies [ae5983387]\r\n-   Updated dependencies [0d4459c08]\r\n-   Updated dependencies [482b6313d]\r\n-   Updated dependencies [e0be86b6f]\r\n-   Updated dependencies [f70a52868]\r\n-   Updated dependencies [12b5fe940]\r\n-   Updated dependencies [1c60f716e]\r\n-   Updated dependencies [144c66d50]\r\n-   Updated dependencies [a768a07fb]\r\n-   Updated dependencies [b79017fd3]\r\n-   Updated dependencies [6d97d2d6f]\r\n-   Updated dependencies [5adfc005e]\r\n-   Updated dependencies [93a3fa3ae]\r\n-   Updated dependencies [782f3b354]\r\n-   Updated dependencies [2713f28f4]\r\n-   Updated dependencies [406015b0d]\r\n-   Updated dependencies [82759d3e4]\r\n-   Updated dependencies [ac8d5d5c7]\r\n-   Updated dependencies [fa56f4615]\r\n-   Updated dependencies [ebca83d48]\r\n-   Updated dependencies [aca79334f]\r\n-   Updated dependencies [c0d5242a0]\r\n-   Updated dependencies [b3d57961c]\r\n-   Updated dependencies [3beb5c9fc]\r\n-   Updated dependencies [754e31db5]\r\n-   Updated dependencies [1611c6dbc]\r\n    -   @backstage/core@0.2.0\r\n    -   @backstage/catalog-model@0.2.0\r\n    -   @backstage/theme@0.2.0\r\n\r\n ## @backstage/plugin-tech-radar@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   28edd7d29: Create backend plugin through CLI\r\n\r\n### Patch Changes\r\n\r\n-   782f3b354: add test case for Progress component\r\n-   02c60b5f8: fix the horizontal scrolling issue in the RadarPage component\r\n-   Updated dependencies [819a70229]\r\n-   Updated dependencies [ae5983387]\r\n-   Updated dependencies [0d4459c08]\r\n-   Updated dependencies [482b6313d]\r\n-   Updated dependencies [1c60f716e]\r\n-   Updated dependencies [144c66d50]\r\n-   Updated dependencies [b79017fd3]\r\n-   Updated dependencies [6d97d2d6f]\r\n-   Updated dependencies [93a3fa3ae]\r\n-   Updated dependencies [782f3b354]\r\n-   Updated dependencies [2713f28f4]\r\n-   Updated dependencies [406015b0d]\r\n-   Updated dependencies [82759d3e4]\r\n-   Updated dependencies [ac8d5d5c7]\r\n-   Updated dependencies [ebca83d48]\r\n-   Updated dependencies [aca79334f]\r\n-   Updated dependencies [c0d5242a0]\r\n-   Updated dependencies [3beb5c9fc]\r\n-   Updated dependencies [754e31db5]\r\n-   Updated dependencies [1611c6dbc]\r\n    -   @backstage/core@0.2.0\r\n    -   @backstage/theme@0.2.0\r\n    -   @backstage/test-utils@0.1.2\r\n\r\n ## @backstage/plugin-techdocs@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   28edd7d29: Create backend plugin through CLI\r\n-   8351ad79b: Add a message if techdocs takes long time to load\r\n\r\n    Fixes #2416.\r\n\r\n    The UI after the change should look like this:\r\n\r\n    ![techdocs-progress-bar](https://user-images.githubusercontent.com/33940798/94189286-296ac980-fec8-11ea-9051-1b3db938d12f.gif)\r\n\r\n### Patch Changes\r\n\r\n-   782f3b354: add test case for Progress component\r\n-   57b54c8ed: While techdocs fetches site name and metadata for the component, the page title was displayed as '[object Object] | Backstage'. This has now been fixed to display the component ID if site name is not present or being fetched.\r\n-   Updated dependencies [28edd7d29]\r\n-   Updated dependencies [819a70229]\r\n-   Updated dependencies [3a4236570]\r\n-   Updated dependencies [ae5983387]\r\n-   Updated dependencies [0d4459c08]\r\n-   Updated dependencies [cbbd271c4]\r\n-   Updated dependencies [482b6313d]\r\n-   Updated dependencies [e0be86b6f]\r\n-   Updated dependencies [f70a52868]\r\n-   Updated dependencies [12b5fe940]\r\n-   Updated dependencies [368fd8243]\r\n-   Updated dependencies [1c60f716e]\r\n-   Updated dependencies [144c66d50]\r\n-   Updated dependencies [a768a07fb]\r\n-   Updated dependencies [b79017fd3]\r\n-   Updated dependencies [6d97d2d6f]\r\n-   Updated dependencies [5adfc005e]\r\n-   Updated dependencies [f0aa01bcc]\r\n-   Updated dependencies [0aecfded0]\r\n-   Updated dependencies [93a3fa3ae]\r\n-   Updated dependencies [782f3b354]\r\n-   Updated dependencies [8b9c8196f]\r\n-   Updated dependencies [2713f28f4]\r\n-   Updated dependencies [406015b0d]\r\n-   Updated dependencies [82759d3e4]\r\n-   Updated dependencies [60d40892c]\r\n-   Updated dependencies [ac8d5d5c7]\r\n-   Updated dependencies [2ebcfac8d]\r\n-   Updated dependencies [fa56f4615]\r\n-   Updated dependencies [ebca83d48]\r\n-   Updated dependencies [aca79334f]\r\n-   Updated dependencies [c0d5242a0]\r\n-   Updated dependencies [b3d57961c]\r\n-   Updated dependencies [0b956f21b]\r\n-   Updated dependencies [26e69ab1a]\r\n-   Updated dependencies [97c2cb19b]\r\n-   Updated dependencies [3beb5c9fc]\r\n-   Updated dependencies [cbab5bbf8]\r\n-   Updated dependencies [754e31db5]\r\n-   Updated dependencies [1611c6dbc]\r\n    -   @backstage/plugin-catalog@0.2.0\r\n    -   @backstage/core-api@0.2.0\r\n    -   @backstage/core@0.2.0\r\n    -   @backstage/catalog-model@0.2.0\r\n    -   @backstage/theme@0.2.0\r\n    -   @backstage/test-utils@0.1.2\r\n\r\n ## @backstage/plugin-techdocs-backend@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   6d29605db: Change the default backend plugin mount point to /api\r\n\r\n-   5249594c5: Add service discovery interface and implement for single host deployments\r\n\r\n    Fixes #1847, #2596\r\n\r\n    Went with an interface similar to the frontend DiscoveryApi, since it's dead simple but still provides a lot of flexibility in the implementation.\r\n\r\n    Also ended up with two different methods, one for internal endpoint discovery and one for external. The two use-cases are explained a bit more in the docs, but basically it's service-to-service vs callback URLs.\r\n\r\n    This did get me thinking about uniqueness and that we're heading towards a global namespace for backend plugin IDs. That's probably fine, but if we're happy with that we should leverage it a bit more to simplify the backend setup. For example we'd have each plugin provide its own ID and not manually mount on paths in the backend.\r\n\r\n    Draft until we're happy with the implementation, then I can add more docs and changelog entry. Also didn't go on a thorough hunt for places where discovery can be used, but I don't think there are many since it's been pretty awkward to do service-to-service communication.\r\n\r\n-   5a920c6e4: Updated naming of environment variables. New pattern [NAME]\\_TOKEN for Github, Gitlab, Azure & Github enterprise access tokens.\r\n\r\n    ### Detail:\r\n\r\n    -   Previously we have to export same token for both, catalog & scaffolder\r\n\r\n    ```bash\r\n    export GITHUB_ACCESS_TOKEN=foo\r\n    export GITHUB_PRIVATE_TOKEN=foo\r\n    ```\r\n\r\n    with latest changes, only single export is sufficient.\r\n\r\n    ```bash\r\n    export GITHUB_TOKEN=foo\r\n    export GITLAB_TOKEN=foo\r\n    export GHE_TOKEN=foo\r\n    export AZURE_TOKEN=foo\r\n    ```\r\n\r\n    ### list:\r\n\r\n    <table>\r\n      <tr>\r\n        <th>Old name</th>\r\n        <th>New name</th>\r\n      </tr>\r\n      <tr>\r\n        <td>GITHUB_ACCESS_TOKEN</td>\r\n        <td>GITHUB_TOKEN</td>\r\n      </tr>\r\n      <tr>\r\n        <td>GITHUB_PRIVATE_TOKEN</td>\r\n        <td>GITHUB_TOKEN</td>\r\n      </tr>\r\n      <tr>\r\n        <td>GITLAB_ACCESS_TOKEN</td>\r\n        <td>GITLAB_TOKEN</td>\r\n      </tr>\r\n      <tr>\r\n        <td>GITLAB_PRIVATE_TOKEN</td>\r\n        <td>GITLAB_TOKEN</td>\r\n      </tr>\r\n      <tr>\r\n        <td>AZURE_PRIVATE_TOKEN</td>\r\n        <td>AZURE_TOKEN</td>\r\n      </tr>\r\n      <tr>\r\n        <td>GHE_PRIVATE_TOKEN</td>\r\n        <td>GHE_TOKEN</td>\r\n      </tr>\r\n    </table>\r\n\r\n### Patch Changes\r\n\r\n-   22ff8fba5: Replacing the hard coded `baseApiUrl` by reading the value from configuration to enable private GitHub setup for TechDocs.\r\n-   Updated dependencies [3a4236570]\r\n-   Updated dependencies [e0be86b6f]\r\n-   Updated dependencies [f70a52868]\r\n-   Updated dependencies [12b5fe940]\r\n-   Updated dependencies [5249594c5]\r\n-   Updated dependencies [56e4eb589]\r\n-   Updated dependencies [e37c0a005]\r\n-   Updated dependencies [a768a07fb]\r\n-   Updated dependencies [f00ca3cb8]\r\n-   Updated dependencies [6579769df]\r\n-   Updated dependencies [5adfc005e]\r\n-   Updated dependencies [8c2b76e45]\r\n-   Updated dependencies [440a17b39]\r\n-   Updated dependencies [fa56f4615]\r\n-   Updated dependencies [8afce088a]\r\n-   Updated dependencies [b3d57961c]\r\n-   Updated dependencies [7bbeb049f]\r\n    -   @backstage/catalog-model@0.2.0\r\n    -   @backstage/backend-common@0.2.0\r\n\r\n ## @backstage/plugin-user-settings@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   4fc1d440e: Add settings button to sidebar\r\n\r\n### Patch Changes\r\n\r\n-   Updated dependencies [819a70229]\r\n-   Updated dependencies [ae5983387]\r\n-   Updated dependencies [0d4459c08]\r\n-   Updated dependencies [482b6313d]\r\n-   Updated dependencies [1c60f716e]\r\n-   Updated dependencies [144c66d50]\r\n-   Updated dependencies [b79017fd3]\r\n-   Updated dependencies [6d97d2d6f]\r\n-   Updated dependencies [93a3fa3ae]\r\n-   Updated dependencies [782f3b354]\r\n-   Updated dependencies [2713f28f4]\r\n-   Updated dependencies [406015b0d]\r\n-   Updated dependencies [82759d3e4]\r\n-   Updated dependencies [ac8d5d5c7]\r\n-   Updated dependencies [ebca83d48]\r\n-   Updated dependencies [aca79334f]\r\n-   Updated dependencies [c0d5242a0]\r\n-   Updated dependencies [3beb5c9fc]\r\n-   Updated dependencies [754e31db5]\r\n-   Updated dependencies [1611c6dbc]\r\n    -   @backstage/core@0.2.0\r\n    -   @backstage/theme@0.2.0\r\n\r\n ## @backstage/plugin-welcome@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   28edd7d29: Create backend plugin through CLI\r\n\r\n### Patch Changes\r\n\r\n-   Updated dependencies [819a70229]\r\n-   Updated dependencies [ae5983387]\r\n-   Updated dependencies [0d4459c08]\r\n-   Updated dependencies [482b6313d]\r\n-   Updated dependencies [1c60f716e]\r\n-   Updated dependencies [144c66d50]\r\n-   Updated dependencies [b79017fd3]\r\n-   Updated dependencies [6d97d2d6f]\r\n-   Updated dependencies [93a3fa3ae]\r\n-   Updated dependencies [782f3b354]\r\n-   Updated dependencies [2713f28f4]\r\n-   Updated dependencies [406015b0d]\r\n-   Updated dependencies [82759d3e4]\r\n-   Updated dependencies [ac8d5d5c7]\r\n-   Updated dependencies [ebca83d48]\r\n-   Updated dependencies [aca79334f]\r\n-   Updated dependencies [c0d5242a0]\r\n-   Updated dependencies [3beb5c9fc]\r\n-   Updated dependencies [754e31db5]\r\n-   Updated dependencies [1611c6dbc]\r\n    -   @backstage/core@0.2.0\r\n    -   @backstage/theme@0.2.0\r\n\r\n ## @backstage/dev-utils@0.1.2\r\n\r\n### Patch Changes\r\n\r\n-   Updated dependencies [28edd7d29]\r\n-   Updated dependencies [819a70229]\r\n-   Updated dependencies [ae5983387]\r\n-   Updated dependencies [0d4459c08]\r\n-   Updated dependencies [482b6313d]\r\n-   Updated dependencies [3472c8be7]\r\n-   Updated dependencies [1d0aec70f]\r\n-   Updated dependencies [1c60f716e]\r\n-   Updated dependencies [144c66d50]\r\n-   Updated dependencies [a3840bed2]\r\n-   Updated dependencies [b79017fd3]\r\n-   Updated dependencies [6d97d2d6f]\r\n-   Updated dependencies [72f6cda35]\r\n-   Updated dependencies [8c2b76e45]\r\n-   Updated dependencies [93a3fa3ae]\r\n-   Updated dependencies [782f3b354]\r\n-   Updated dependencies [2713f28f4]\r\n-   Updated dependencies [406015b0d]\r\n-   Updated dependencies [82759d3e4]\r\n-   Updated dependencies [cba4e4d97]\r\n-   Updated dependencies [ac8d5d5c7]\r\n-   Updated dependencies [8afce088a]\r\n-   Updated dependencies [ebca83d48]\r\n-   Updated dependencies [aca79334f]\r\n-   Updated dependencies [c0d5242a0]\r\n-   Updated dependencies [9a3b3dbf1]\r\n-   Updated dependencies [3beb5c9fc]\r\n-   Updated dependencies [754e31db5]\r\n-   Updated dependencies [1611c6dbc]\r\n-   Updated dependencies [7bbeb049f]\r\n    -   @backstage/cli@0.2.0\r\n    -   @backstage/core@0.2.0\r\n    -   @backstage/theme@0.2.0\r\n    -   @backstage/test-utils@0.1.2\r\n\r\n ## @techdocs/cli@0.1.2\r\n\r\n### Patch Changes\r\n\r\n-   Updated dependencies [28edd7d29]\r\n-   Updated dependencies [3472c8be7]\r\n-   Updated dependencies [1d0aec70f]\r\n-   Updated dependencies [a3840bed2]\r\n-   Updated dependencies [72f6cda35]\r\n-   Updated dependencies [8c2b76e45]\r\n-   Updated dependencies [cba4e4d97]\r\n-   Updated dependencies [8afce088a]\r\n-   Updated dependencies [9a3b3dbf1]\r\n-   Updated dependencies [7bbeb049f]\r\n    -   @backstage/cli@0.2.0\r\n\r\n ## @backstage/test-utils@0.1.2\r\n\r\n### Patch Changes\r\n\r\n-   Updated dependencies [28edd7d29]\r\n-   Updated dependencies [819a70229]\r\n-   Updated dependencies [ae5983387]\r\n-   Updated dependencies [0d4459c08]\r\n-   Updated dependencies [cbbd271c4]\r\n-   Updated dependencies [3472c8be7]\r\n-   Updated dependencies [1d0aec70f]\r\n-   Updated dependencies [a3840bed2]\r\n-   Updated dependencies [b79017fd3]\r\n-   Updated dependencies [72f6cda35]\r\n-   Updated dependencies [8c2b76e45]\r\n-   Updated dependencies [cba4e4d97]\r\n-   Updated dependencies [8afce088a]\r\n-   Updated dependencies [9a3b3dbf1]\r\n-   Updated dependencies [26e69ab1a]\r\n-   Updated dependencies [cbab5bbf8]\r\n-   Updated dependencies [7bbeb049f]\r\n    -   @backstage/cli@0.2.0\r\n    -   @backstage/core-api@0.2.0\r\n    -   @backstage/theme@0.2.0\r\n\r\n ## @backstage/plugin-graphql-backend@0.1.2\r\n\r\n### Patch Changes\r\n\r\n-   Updated dependencies [28edd7d29]\r\n-   Updated dependencies [5249594c5]\r\n-   Updated dependencies [56e4eb589]\r\n-   Updated dependencies [e37c0a005]\r\n-   Updated dependencies [f00ca3cb8]\r\n-   Updated dependencies [6579769df]\r\n-   Updated dependencies [8c2b76e45]\r\n-   Updated dependencies [440a17b39]\r\n-   Updated dependencies [8afce088a]\r\n-   Updated dependencies [7bbeb049f]\r\n    -   @backstage/plugin-catalog-graphql@0.2.0\r\n    -   @backstage/backend-common@0.2.0\r\n\r\n ## @backstage/plugin-kubernetes-backend@0.1.2\r\n\r\n### Patch Changes\r\n\r\n-   Updated dependencies [5249594c5]\r\n-   Updated dependencies [56e4eb589]\r\n-   Updated dependencies [e37c0a005]\r\n-   Updated dependencies [f00ca3cb8]\r\n-   Updated dependencies [6579769df]\r\n-   Updated dependencies [8c2b76e45]\r\n-   Updated dependencies [440a17b39]\r\n-   Updated dependencies [8afce088a]\r\n-   Updated dependencies [7bbeb049f]\r\n    -   @backstage/backend-common@0.2.0\r\n\r\n ## @backstage/plugin-rollbar-backend@0.1.2\r\n\r\n### Patch Changes\r\n\r\n-   Updated dependencies [5249594c5]\r\n-   Updated dependencies [56e4eb589]\r\n-   Updated dependencies [e37c0a005]\r\n-   Updated dependencies [f00ca3cb8]\r\n-   Updated dependencies [6579769df]\r\n-   Updated dependencies [8c2b76e45]\r\n-   Updated dependencies [440a17b39]\r\n-   Updated dependencies [8afce088a]\r\n-   Updated dependencies [7bbeb049f]\r\n    -   @backstage/backend-common@0.2.0\r\n\r\n ## @backstage/plugin-sentry-backend@0.1.2\r\n\r\n### Patch Changes\r\n\r\n-   Updated dependencies [5249594c5]\r\n-   Updated dependencies [56e4eb589]\r\n-   Updated dependencies [e37c0a005]\r\n-   Updated dependencies [f00ca3cb8]\r\n-   Updated dependencies [6579769df]\r\n-   Updated dependencies [8c2b76e45]\r\n-   Updated dependencies [440a17b39]\r\n-   Updated dependencies [8afce088a]\r\n-   Updated dependencies [7bbeb049f]\r\n    -   @backstage/backend-common@0.2.0\r\n\r\n ## @backstage/plugin-sonarqube@0.1.2\r\n\r\n### Patch Changes\r\n\r\n-   Updated dependencies [819a70229]\r\n-   Updated dependencies [3a4236570]\r\n-   Updated dependencies [ae5983387]\r\n-   Updated dependencies [0d4459c08]\r\n-   Updated dependencies [482b6313d]\r\n-   Updated dependencies [e0be86b6f]\r\n-   Updated dependencies [f70a52868]\r\n-   Updated dependencies [12b5fe940]\r\n-   Updated dependencies [1c60f716e]\r\n-   Updated dependencies [144c66d50]\r\n-   Updated dependencies [a768a07fb]\r\n-   Updated dependencies [b79017fd3]\r\n-   Updated dependencies [6d97d2d6f]\r\n-   Updated dependencies [5adfc005e]\r\n-   Updated dependencies [93a3fa3ae]\r\n-   Updated dependencies [782f3b354]\r\n-   Updated dependencies [2713f28f4]\r\n-   Updated dependencies [406015b0d]\r\n-   Updated dependencies [82759d3e4]\r\n-   Updated dependencies [ac8d5d5c7]\r\n-   Updated dependencies [fa56f4615]\r\n-   Updated dependencies [ebca83d48]\r\n-   Updated dependencies [aca79334f]\r\n-   Updated dependencies [c0d5242a0]\r\n-   Updated dependencies [b3d57961c]\r\n-   Updated dependencies [3beb5c9fc]\r\n-   Updated dependencies [754e31db5]\r\n-   Updated dependencies [1611c6dbc]\r\n    -   @backstage/core@0.2.0\r\n    -   @backstage/catalog-model@0.2.0\r\n    -   @backstage/theme@0.2.0\r\n\r\n ## example-app@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   6d97d2d6f: The InfoCard variant `'height100'` is deprecated. Use variant `'gridItem'` instead.\r\n\r\n    When the InfoCard is displayed as a grid item within a grid, you may want items to have the same height for all items.\r\n    Set to the `'gridItem'` variant to display the InfoCard with full height suitable for Grid:\r\n    `<InfoCard variant=\"gridItem\">...</InfoCard>`\r\n\r\n    Changed the InfoCards in '@backstage/plugin-github-actions', '@backstage/plugin-jenkins', '@backstage/plugin-lighthouse'\r\n    to pass an optional variant to the corresponding card of the plugin.\r\n\r\n    As a result the overview content of the EntityPage shows cards with full height suitable for Grid.\r\n\r\n### Patch Changes\r\n\r\n-   65d722455: Add Pull Request tab to components view.\r\n-   26e69ab1a: Remove cost insights example client from demo app and export from plugin\r\n    Create cost insights dev plugin using example client\r\n    Make PluginConfig and dependent types public\r\n-   e7f5471fd: cleaning up because external plugins have already implemented new api for creating\r\n-   Updated dependencies [28edd7d29]\r\n-   Updated dependencies [819a70229]\r\n-   Updated dependencies [2846ef95c]\r\n-   Updated dependencies [3a4236570]\r\n-   Updated dependencies [ae5983387]\r\n-   Updated dependencies [0d4459c08]\r\n-   Updated dependencies [d67c529ab]\r\n-   Updated dependencies [482b6313d]\r\n-   Updated dependencies [e0be86b6f]\r\n-   Updated dependencies [f70a52868]\r\n-   Updated dependencies [12b5fe940]\r\n-   Updated dependencies [8351ad79b]\r\n-   Updated dependencies [30dd11122]\r\n-   Updated dependencies [1297dcb3a]\r\n-   Updated dependencies [368fd8243]\r\n-   Updated dependencies [fb74f1db6]\r\n-   Updated dependencies [3472c8be7]\r\n-   Updated dependencies [cab473771]\r\n-   Updated dependencies [1d0aec70f]\r\n-   Updated dependencies [1c60f716e]\r\n-   Updated dependencies [a73979d45]\r\n-   Updated dependencies [144c66d50]\r\n-   Updated dependencies [a768a07fb]\r\n-   Updated dependencies [a3840bed2]\r\n-   Updated dependencies [339668995]\r\n-   Updated dependencies [b79017fd3]\r\n-   Updated dependencies [6d97d2d6f]\r\n-   Updated dependencies [5adfc005e]\r\n-   Updated dependencies [f0aa01bcc]\r\n-   Updated dependencies [8d1360aa9]\r\n-   Updated dependencies [72f6cda35]\r\n-   Updated dependencies [0ee9e9f66]\r\n-   Updated dependencies [5c70f3d35]\r\n-   Updated dependencies [bb48b9833]\r\n-   Updated dependencies [fd8384d7e]\r\n-   Updated dependencies [8c2b76e45]\r\n-   Updated dependencies [0aecfded0]\r\n-   Updated dependencies [93a3fa3ae]\r\n-   Updated dependencies [782f3b354]\r\n-   Updated dependencies [c5ef12926]\r\n-   Updated dependencies [8b9c8196f]\r\n-   Updated dependencies [2713f28f4]\r\n-   Updated dependencies [6a84cb072]\r\n-   Updated dependencies [406015b0d]\r\n-   Updated dependencies [82759d3e4]\r\n-   Updated dependencies [60d40892c]\r\n-   Updated dependencies [cba4e4d97]\r\n-   Updated dependencies [ac8d5d5c7]\r\n-   Updated dependencies [2ebcfac8d]\r\n-   Updated dependencies [4fc1d440e]\r\n-   Updated dependencies [fa56f4615]\r\n-   Updated dependencies [8afce088a]\r\n-   Updated dependencies [4512b9967]\r\n-   Updated dependencies [ebca83d48]\r\n-   Updated dependencies [aca79334f]\r\n-   Updated dependencies [c0d5242a0]\r\n-   Updated dependencies [b3d57961c]\r\n-   Updated dependencies [9a3b3dbf1]\r\n-   Updated dependencies [e7d4ac7ce]\r\n-   Updated dependencies [0b956f21b]\r\n-   Updated dependencies [1c8c43756]\r\n-   Updated dependencies [0e67c6b40]\r\n-   Updated dependencies [26e69ab1a]\r\n-   Updated dependencies [97c2cb19b]\r\n-   Updated dependencies [02c60b5f8]\r\n-   Updated dependencies [3beb5c9fc]\r\n-   Updated dependencies [754e31db5]\r\n-   Updated dependencies [57b54c8ed]\r\n-   Updated dependencies [1611c6dbc]\r\n-   Updated dependencies [7bbeb049f]\r\n    -   @backstage/cli@0.2.0\r\n    -   @backstage/plugin-api-docs@0.2.0\r\n    -   @backstage/plugin-catalog@0.2.0\r\n    -   @backstage/plugin-circleci@0.2.0\r\n    -   @backstage/plugin-explore@0.2.0\r\n    -   @backstage/plugin-gcp-projects@0.2.0\r\n    -   @backstage/plugin-github-actions@0.2.0\r\n    -   @backstage/plugin-gitops-profiles@0.2.0\r\n    -   @backstage/plugin-graphiql@0.2.0\r\n    -   @backstage/plugin-jenkins@0.2.0\r\n    -   @backstage/plugin-kubernetes@0.2.0\r\n    -   @backstage/plugin-lighthouse@0.2.0\r\n    -   @backstage/plugin-newrelic@0.2.0\r\n    -   @backstage/plugin-register-component@0.2.0\r\n    -   @backstage/plugin-rollbar@0.2.0\r\n    -   @backstage/plugin-scaffolder@0.2.0\r\n    -   @backstage/plugin-sentry@0.2.0\r\n    -   @backstage/plugin-tech-radar@0.2.0\r\n    -   @backstage/plugin-techdocs@0.2.0\r\n    -   @backstage/plugin-welcome@0.2.0\r\n    -   @backstage/core@0.2.0\r\n    -   @backstage/plugin-cloudbuild@0.2.0\r\n    -   @backstage/catalog-model@0.2.0\r\n    -   @backstage/theme@0.2.0\r\n    -   @backstage/plugin-cost-insights@0.2.0\r\n    -   @backstage/plugin-user-settings@0.2.0\r\n    -   @backstage/test-utils@0.1.2\r\n\r\n ## e2e-test@0.2.0\r\n\r\n### Minor Changes\r\n\r\n-   7de1004f0: Converted into a CLI, use `yarn e2e-test run` to run\r\n\r\n ## example-backend@0.2.0\r\n\r\n### Patch Changes\r\n\r\n-   440a17b39: Bump @backstage/catalog-backend and pass the now required UrlReader interface to the plugin\r\n\r\n-   6840a68df: Pass GitHub token into Scaffolder GitHub Preparer\r\n\r\n-   8c2b76e45: **BREAKING CHANGE**\r\n\r\n    The existing loading of additional config files like `app-config.development.yaml` using APP_ENV or NODE_ENV has been removed.\r\n    Instead, the CLI and backend process now accept one or more `--config` flags to load config files.\r\n\r\n    Without passing any flags, `app-config.yaml` and, if it exists, `app-config.local.yaml` will be loaded.\r\n    If passing any `--config <path>` flags, only those files will be loaded, **NOT** the default `app-config.yaml` one.\r\n\r\n    The old behaviour of for example `APP_ENV=development` can be replicated using the following flags:\r\n\r\n    ```bash\r\n    --config ../../app-config.yaml --config ../../app-config.development.yaml\r\n    ```\r\n\r\n-   7bbeb049f: Change loadBackendConfig to return the config directly\r\n\r\n-   Updated dependencies [28edd7d29]\r\n\r\n-   Updated dependencies [819a70229]\r\n\r\n-   Updated dependencies [3a4236570]\r\n\r\n-   Updated dependencies [3e254503d]\r\n\r\n-   Updated dependencies [6d29605db]\r\n\r\n-   Updated dependencies [e0be86b6f]\r\n\r\n-   Updated dependencies [f70a52868]\r\n\r\n-   Updated dependencies [12b5fe940]\r\n\r\n-   Updated dependencies [5249594c5]\r\n\r\n-   Updated dependencies [56e4eb589]\r\n\r\n-   Updated dependencies [b4e5466e1]\r\n\r\n-   Updated dependencies [6f1768c0f]\r\n\r\n-   Updated dependencies [e37c0a005]\r\n\r\n-   Updated dependencies [3472c8be7]\r\n\r\n-   Updated dependencies [57d555eb2]\r\n\r\n-   Updated dependencies [61db1ddc6]\r\n\r\n-   Updated dependencies [81cb94379]\r\n\r\n-   Updated dependencies [1687b8fbb]\r\n\r\n-   Updated dependencies [a768a07fb]\r\n\r\n-   Updated dependencies [a768a07fb]\r\n\r\n-   Updated dependencies [f00ca3cb8]\r\n\r\n-   Updated dependencies [0c370c979]\r\n\r\n-   Updated dependencies [ce1f55398]\r\n\r\n-   Updated dependencies [e6b00e3af]\r\n\r\n-   Updated dependencies [9226c2aaa]\r\n\r\n-   Updated dependencies [6d97d2d6f]\r\n\r\n-   Updated dependencies [99710b102]\r\n\r\n-   Updated dependencies [6579769df]\r\n\r\n-   Updated dependencies [002860e7a]\r\n\r\n-   Updated dependencies [5adfc005e]\r\n\r\n-   Updated dependencies [33454c0f2]\r\n\r\n-   Updated dependencies [183e2a30d]\r\n\r\n-   Updated dependencies [948052cbb]\r\n\r\n-   Updated dependencies [65d722455]\r\n\r\n-   Updated dependencies [b652bf2cc]\r\n\r\n-   Updated dependencies [4036ff59d]\r\n\r\n-   Updated dependencies [991a950e0]\r\n\r\n-   Updated dependencies [512d70973]\r\n\r\n-   Updated dependencies [8c2b76e45]\r\n\r\n-   Updated dependencies [8bdf0bcf5]\r\n\r\n-   Updated dependencies [c926765a2]\r\n\r\n-   Updated dependencies [5a920c6e4]\r\n\r\n-   Updated dependencies [2f62e1804]\r\n\r\n-   Updated dependencies [440a17b39]\r\n\r\n-   Updated dependencies [fa56f4615]\r\n\r\n-   Updated dependencies [8afce088a]\r\n\r\n-   Updated dependencies [4c4eab81b]\r\n\r\n-   Updated dependencies [22ff8fba5]\r\n\r\n-   Updated dependencies [36a71d278]\r\n\r\n-   Updated dependencies [b3d57961c]\r\n\r\n-   Updated dependencies [6840a68df]\r\n\r\n-   Updated dependencies [a5cb46bac]\r\n\r\n-   Updated dependencies [49d70ccab]\r\n\r\n-   Updated dependencies [1c8c43756]\r\n\r\n-   Updated dependencies [26e69ab1a]\r\n\r\n-   Updated dependencies [5e4551e3a]\r\n\r\n-   Updated dependencies [e142a2767]\r\n\r\n-   Updated dependencies [e7f5471fd]\r\n\r\n-   Updated dependencies [e3d063ffa]\r\n\r\n-   Updated dependencies [440a17b39]\r\n\r\n-   Updated dependencies [7bbeb049f]\r\n    -   @backstage/plugin-app-backend@0.2.0\r\n    -   @backstage/plugin-auth-backend@0.2.0\r\n    -   @backstage/catalog-model@0.2.0\r\n    -   @backstage/plugin-scaffolder-backend@0.2.0\r\n    -   @backstage/plugin-techdocs-backend@0.2.0\r\n    -   @backstage/plugin-catalog-backend@0.2.0\r\n    -   @backstage/plugin-proxy-backend@0.2.0\r\n    -   @backstage/backend-common@0.2.0\r\n    -   example-app@0.2.0\r\n    -   @backstage/plugin-graphql-backend@0.1.2\r\n    -   @backstage/plugin-kubernetes-backend@0.1.2\r\n    -   @backstage/plugin-rollbar-backend@0.1.2\r\n    -   @backstage/plugin-sentry-backend@0.1.2\r\n\r\n ## storybook@0.2.0\r\n\r\n### Patch Changes\r\n\r\n-   Updated dependencies [ae5983387]\r\n-   Updated dependencies [0d4459c08]\r\n    -   @backstage/theme@0.2.0\r\n",
  },
  {
    url: 'https://api.github.com/repos/backstage/backstage/releases/32172338',
    assets_url:
      'https://api.github.com/repos/backstage/backstage/releases/32172338/assets',
    upload_url:
      'https://uploads.github.com/repos/backstage/backstage/releases/32172338/assets{?name,label}',
    html_url:
      'https://github.com/backstage/backstage/releases/tag/v0.1.1-alpha.24',
    id: 32172338,
    author: {
      login: 'Rugvip',
      id: 4984472,
      node_id: 'MDQ6VXNlcjQ5ODQ0NzI=',
      avatar_url: 'https://avatars2.githubusercontent.com/u/4984472?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Rugvip',
      html_url: 'https://github.com/Rugvip',
      followers_url: 'https://api.github.com/users/Rugvip/followers',
      following_url:
        'https://api.github.com/users/Rugvip/following{/other_user}',
      gists_url: 'https://api.github.com/users/Rugvip/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/Rugvip/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Rugvip/subscriptions',
      organizations_url: 'https://api.github.com/users/Rugvip/orgs',
      repos_url: 'https://api.github.com/users/Rugvip/repos',
      events_url: 'https://api.github.com/users/Rugvip/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Rugvip/received_events',
      type: 'User',
      site_admin: false,
    },
    node_id: 'MDc6UmVsZWFzZTMyMTcyMzM4',
    tag_name: 'v0.1.1-alpha.24',
    target_commitish: 'master',
    name: 'v0.1.1-alpha.24',
    draft: false,
    prerelease: true,
    created_at: '2020-10-05T14:52:13Z',
    published_at: '2020-10-05T15:06:43Z',
    assets: [],
    tarball_url:
      'https://api.github.com/repos/backstage/backstage/tarball/v0.1.1-alpha.24',
    zipball_url:
      'https://api.github.com/repos/backstage/backstage/zipball/v0.1.1-alpha.24',
    body:
      "### Backend (example-backend, or backends created with @backstage/create-app)\r\n\r\n- The default mount point for backend plugins have been changed to `/api`. These changes are done in the backend package itself, so it is recommended that you sync up existing backend packages with this new pattern. [#2562](https://github.com/spotify/backstage/pull/2562)\r\n- A service discovery mechanism for backend plugins has been added, and is now a requirement for several backend plugins. See [packages/backend/src/index.ts](./packages/backend/src/index.ts) for how to set it up using `SingleHostDiscovery` from `@backstage/backend-common`. Note that the default base path for plugins is set to `/api` to that change, but it can be set to use the old behavior via the `basePath` option. [#2600](https://github.com/spotify/backstage/pull/2600)\r\n\r\n### @backstage/auth-backend\r\n\r\n- The default mount path of backend plugins was changed to `/api/:pluginId`, and as part of that it was needed to enable configuration of the base path of the auth backend, so that it can construct redirect URLs correctly. Note that you will also need to reconfigure any allowed redirect URLs to include `/api` if you switch to the new recommended pattern. [#2562](https://github.com/spotify/backstage/pull/2562)\r\n- The auth backend now requires an implementation of `PluginEndpointDiscovery` from `@backstage/backend-common` to be passed in as `discovery`. See the changes to `@backstage/backend`.\r\n\r\n### @backstage/proxy-backend\r\n\r\n- The proxy backend now requires an implementation of `PluginEndpointDiscovery` from `@backstage/backend-common` to be passed in as `discovery`. See the changes to `@backstage/backend`.\r\n\r\n### @backstage/techdocs-backend\r\n\r\n- The TechDocs backend now requires an implementation of `PluginEndpointDiscovery` from `@backstage/backend-common` to be passed in as `discovery`. See the changes to `@backstage/backend`.\r\n\r\n### @backstage/plugin-identity-backend\r\n\r\n- This plugin was removed, remove it from your backend if it's there. [#2616](https://github.com/spotify/backstage/pull/2616)",
  },
  {
    url: 'https://api.github.com/repos/backstage/backstage/releases/31891113',
    assets_url:
      'https://api.github.com/repos/backstage/backstage/releases/31891113/assets',
    upload_url:
      'https://uploads.github.com/repos/backstage/backstage/releases/31891113/assets{?name,label}',
    html_url:
      'https://github.com/backstage/backstage/releases/tag/v0.1.1-alpha.23',
    id: 31891113,
    author: {
      login: 'Rugvip',
      id: 4984472,
      node_id: 'MDQ6VXNlcjQ5ODQ0NzI=',
      avatar_url: 'https://avatars2.githubusercontent.com/u/4984472?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Rugvip',
      html_url: 'https://github.com/Rugvip',
      followers_url: 'https://api.github.com/users/Rugvip/followers',
      following_url:
        'https://api.github.com/users/Rugvip/following{/other_user}',
      gists_url: 'https://api.github.com/users/Rugvip/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/Rugvip/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Rugvip/subscriptions',
      organizations_url: 'https://api.github.com/users/Rugvip/orgs',
      repos_url: 'https://api.github.com/users/Rugvip/repos',
      events_url: 'https://api.github.com/users/Rugvip/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Rugvip/received_events',
      type: 'User',
      site_admin: false,
    },
    node_id: 'MDc6UmVsZWFzZTMxODkxMTEz',
    tag_name: 'v0.1.1-alpha.23',
    target_commitish: 'master',
    name: 'v0.1.1-alpha.23',
    draft: false,
    prerelease: true,
    created_at: '2020-09-23T16:48:35Z',
    published_at: '2020-09-28T14:57:56Z',
    assets: [],
    tarball_url:
      'https://api.github.com/repos/backstage/backstage/tarball/v0.1.1-alpha.23',
    zipball_url:
      'https://api.github.com/repos/backstage/backstage/zipball/v0.1.1-alpha.23',
    body:
      '### @backstage/core\r\n\r\n- Renamed `SessionStateApi` to `SessionApi` and `logout` to `signOut`. Custom implementations of the `SingInPage` app-component will need to rename their `logout` function. The different auth provider items for the `UserSettingsMenu` have been consolidated into a single `ProviderSettingsItem`, meaning you need to replace existing usages of `OAuthProviderSettings` and `OIDCProviderSettings`. [#2555](https://github.com/spotify/backstage/pull/2555).\r\n',
  },
  {
    url: 'https://api.github.com/repos/backstage/backstage/releases/31891098',
    assets_url:
      'https://api.github.com/repos/backstage/backstage/releases/31891098/assets',
    upload_url:
      'https://uploads.github.com/repos/backstage/backstage/releases/31891098/assets{?name,label}',
    html_url:
      'https://github.com/backstage/backstage/releases/tag/v0.1.1-alpha.22',
    id: 31891098,
    author: {
      login: 'Rugvip',
      id: 4984472,
      node_id: 'MDQ6VXNlcjQ5ODQ0NzI=',
      avatar_url: 'https://avatars2.githubusercontent.com/u/4984472?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Rugvip',
      html_url: 'https://github.com/Rugvip',
      followers_url: 'https://api.github.com/users/Rugvip/followers',
      following_url:
        'https://api.github.com/users/Rugvip/following{/other_user}',
      gists_url: 'https://api.github.com/users/Rugvip/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/Rugvip/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Rugvip/subscriptions',
      organizations_url: 'https://api.github.com/users/Rugvip/orgs',
      repos_url: 'https://api.github.com/users/Rugvip/repos',
      events_url: 'https://api.github.com/users/Rugvip/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Rugvip/received_events',
      type: 'User',
      site_admin: false,
    },
    node_id: 'MDc6UmVsZWFzZTMxODkxMDk4',
    tag_name: 'v0.1.1-alpha.22',
    target_commitish: 'master',
    name: 'v0.1.1-alpha.22',
    draft: false,
    prerelease: true,
    created_at: '2020-09-18T15:11:30Z',
    published_at: '2020-09-28T14:57:42Z',
    assets: [],
    tarball_url:
      'https://api.github.com/repos/backstage/backstage/tarball/v0.1.1-alpha.22',
    zipball_url:
      'https://api.github.com/repos/backstage/backstage/zipball/v0.1.1-alpha.22',
    body:
      '### @backstage/core\r\n\r\n- Introduced initial version of an inverted app/plugin relationship, where plugins export components for apps to use, instead registering themselves directly into the app. This enables more fine-grained control of plugin features, and also composition of plugins such as catalog pages with additional cards and tabs. This breaks the use of `RouteRef`s, and there will be more changes related to this in the future, but this change lays the initial foundation. See `packages/app` and followup PRs for how to update plugins for this change. [#2076](https://github.com/spotify/backstage/pull/2076)\r\n- Switch to an automatic dependency injection mechanism for all Utility APIs, allowing plugins to ship default implementations of their APIs. See [https://backstage.io/docs/api/utility-apis](https://backstage.io/docs/api/utility-apis). [#2285](https://github.com/spotify/backstage/pull/2285)\r\n\r\n### @backstage/cli\r\n\r\n- Change `backstage-cli backend:build-image` to forward all args to `docker image build`, instead of just tag. Also add `--build` flag for building all dependent packages before packaging the workspace for the docker build. [#2299](https://github.com/spotify/backstage/pull/2299)\r\n\r\n### @backstage/create-app\r\n\r\n- Change root `tsc` output dir to `dist-types`, in order to allow for standalone plugin repos. [#2278](https://github.com/spotify/backstage/pull/2278)\r\n\r\n### @backstage/catalog-backend\r\n\r\n- We have simplified the way that GitHub ingestion works. The `catalog.processors.githubApi` key is deprecated, in favor of `catalog.processors.github`. At the same time, the location type `github/api` is likewise deprecated, in favor of `github`. This location type now serves both raw HTTP reads and APIv3 reads, depending on how you configure it. It also supports having several providers at once - for example, both public GitHub and an internal GitHub Enterprise, with different keys. If you still use the `catalog.processors.githubApi` config key, things will work but you will get a deprecation warning at startup. In a later release, support for the old key will go away entirely. See the [configuration section in the docs](https://backstage.io/docs/features/software-catalog/configuration) for more details.',
  },
  {
    url: 'https://api.github.com/repos/backstage/backstage/releases/31891088',
    assets_url:
      'https://api.github.com/repos/backstage/backstage/releases/31891088/assets',
    upload_url:
      'https://uploads.github.com/repos/backstage/backstage/releases/31891088/assets{?name,label}',
    html_url:
      'https://github.com/backstage/backstage/releases/tag/v0.1.1-alpha.21',
    id: 31891088,
    author: {
      login: 'Rugvip',
      id: 4984472,
      node_id: 'MDQ6VXNlcjQ5ODQ0NzI=',
      avatar_url: 'https://avatars2.githubusercontent.com/u/4984472?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Rugvip',
      html_url: 'https://github.com/Rugvip',
      followers_url: 'https://api.github.com/users/Rugvip/followers',
      following_url:
        'https://api.github.com/users/Rugvip/following{/other_user}',
      gists_url: 'https://api.github.com/users/Rugvip/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/Rugvip/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Rugvip/subscriptions',
      organizations_url: 'https://api.github.com/users/Rugvip/orgs',
      repos_url: 'https://api.github.com/users/Rugvip/repos',
      events_url: 'https://api.github.com/users/Rugvip/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Rugvip/received_events',
      type: 'User',
      site_admin: false,
    },
    node_id: 'MDc6UmVsZWFzZTMxODkxMDg4',
    tag_name: 'v0.1.1-alpha.21',
    target_commitish: 'master',
    name: 'v0.1.1-alpha.21',
    draft: false,
    prerelease: true,
    created_at: '2020-09-02T15:13:54Z',
    published_at: '2020-09-28T14:57:26Z',
    assets: [],
    tarball_url:
      'https://api.github.com/repos/backstage/backstage/tarball/v0.1.1-alpha.21',
    zipball_url:
      'https://api.github.com/repos/backstage/backstage/zipball/v0.1.1-alpha.21',
    body:
      '- Added many more frontend plugins to the template along with the sidebar. [#1942](https://github.com/spotify/backstage/pull/1942), [#2084](https://github.com/spotify/backstage/pull/2084)\r\n\r\n### @backstage/core\r\n\r\n- Material-UI: Bumped to 4.11.0, which is the version that create-app will\r\n  resolve to, because we wanted to get the renaming of ExpansionPanel to\r\n  Accordion into place. This gets rid of a lot of console deprecation warnings\r\n  in newly scaffolded apps.\r\n\r\n### @backstage/cli\r\n\r\n- Set `NODE_ENV` to `test` when running test. [#2214](https://github.com/spotify/backstage/pull/2214)\r\n\r\n- Fix for backend plugins names requiring to be prefixed with `@backstage` to build. [#2224](https://github.com/spotify/backstage/pull/2224)\r\n\r\n### @backstage/backend-common\r\n\r\n- The backend plugin\r\n  [service builder](https://github.com/spotify/backstage/blob/master/packages/backend-common/src/service/lib/ServiceBuilderImpl.ts)\r\n  no longer adds `express.json()` automatically to all routes. While convenient\r\n  in a lot of cases, it also led to problems where for example the proxy\r\n  middleware could hang because the body had already been altered and could not\r\n  be streamed. Also, plugins that rather wanted to handle e.g. form encoded data\r\n  still had to cater to that manually. We therefore decided to let plugins add\r\n  `express.json()` themselves if they happen to deal with JSON data.\r\n\r\n### @backstage/catalog-backend\r\n\r\n- Add rules configuration for catalog location and entity kinds. The default rules should cover most use-cases, but you may need to allow specific entity kinds when using things like Template or Group entities. [#2118](https://github.com/spotify/backstage/pull/2118)',
  },
  {
    url: 'https://api.github.com/repos/backstage/backstage/releases/31891067',
    assets_url:
      'https://api.github.com/repos/backstage/backstage/releases/31891067/assets',
    upload_url:
      'https://uploads.github.com/repos/backstage/backstage/releases/31891067/assets{?name,label}',
    html_url:
      'https://github.com/backstage/backstage/releases/tag/v0.1.1-alpha.20',
    id: 31891067,
    author: {
      login: 'Rugvip',
      id: 4984472,
      node_id: 'MDQ6VXNlcjQ5ODQ0NzI=',
      avatar_url: 'https://avatars2.githubusercontent.com/u/4984472?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Rugvip',
      html_url: 'https://github.com/Rugvip',
      followers_url: 'https://api.github.com/users/Rugvip/followers',
      following_url:
        'https://api.github.com/users/Rugvip/following{/other_user}',
      gists_url: 'https://api.github.com/users/Rugvip/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/Rugvip/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Rugvip/subscriptions',
      organizations_url: 'https://api.github.com/users/Rugvip/orgs',
      repos_url: 'https://api.github.com/users/Rugvip/repos',
      events_url: 'https://api.github.com/users/Rugvip/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Rugvip/received_events',
      type: 'User',
      site_admin: false,
    },
    node_id: 'MDc6UmVsZWFzZTMxODkxMDY3',
    tag_name: 'v0.1.1-alpha.20',
    target_commitish: 'master',
    name: 'v0.1.1-alpha.20',
    draft: false,
    prerelease: true,
    created_at: '2020-08-26T11:00:15Z',
    published_at: '2020-09-28T14:57:09Z',
    assets: [],
    tarball_url:
      'https://api.github.com/repos/backstage/backstage/tarball/v0.1.1-alpha.20',
    zipball_url:
      'https://api.github.com/repos/backstage/backstage/zipball/v0.1.1-alpha.20',
    body:
      '### @backstage/cli\r\n\r\n- Use config files according to `NODE_ENV` when serving and building frontend packages. [#2077](https://github.com/spotify/backstage/pull/2077)\r\n\r\n- Pin `rollup-plugin-dts` to avoid a later broken version. [#2097](https://github.com/spotify/backstage/pull/2097)\r\n',
  },
  {
    url: 'https://api.github.com/repos/backstage/backstage/releases/31891035',
    assets_url:
      'https://api.github.com/repos/backstage/backstage/releases/31891035/assets',
    upload_url:
      'https://uploads.github.com/repos/backstage/backstage/releases/31891035/assets{?name,label}',
    html_url:
      'https://github.com/backstage/backstage/releases/tag/v0.1.1-alpha.19',
    id: 31891035,
    author: {
      login: 'Rugvip',
      id: 4984472,
      node_id: 'MDQ6VXNlcjQ5ODQ0NzI=',
      avatar_url: 'https://avatars2.githubusercontent.com/u/4984472?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Rugvip',
      html_url: 'https://github.com/Rugvip',
      followers_url: 'https://api.github.com/users/Rugvip/followers',
      following_url:
        'https://api.github.com/users/Rugvip/following{/other_user}',
      gists_url: 'https://api.github.com/users/Rugvip/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/Rugvip/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Rugvip/subscriptions',
      organizations_url: 'https://api.github.com/users/Rugvip/orgs',
      repos_url: 'https://api.github.com/users/Rugvip/repos',
      events_url: 'https://api.github.com/users/Rugvip/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Rugvip/received_events',
      type: 'User',
      site_admin: false,
    },
    node_id: 'MDc6UmVsZWFzZTMxODkxMDM1',
    tag_name: 'v0.1.1-alpha.19',
    target_commitish: 'master',
    name: 'v0.1.1-alpha.19',
    draft: false,
    prerelease: true,
    created_at: '2020-08-22T09:05:24Z',
    published_at: '2020-09-28T14:56:50Z',
    assets: [],
    tarball_url:
      'https://api.github.com/repos/backstage/backstage/tarball/v0.1.1-alpha.19',
    zipball_url:
      'https://api.github.com/repos/backstage/backstage/zipball/v0.1.1-alpha.19',
    body:
      '### @backstage/backend-common\r\n\r\n- Allow listen host and port to be configured separately, in order to support PORT environment variables. [#1950](https://github.com/spotify/backstage/pull/1950)\r\n\r\n### @backstage/core\r\n\r\n- Added new `DiscoveryApi` for discovering backend endpoint in the frontend, and use in most plugins. See [packages/app/src/apis.ts](https://github.com/spotify/backstage/blob/master/packages/app/src/apis.ts) for how to register in your app. [#2074](https://github.com/spotify/backstage/pull/2074)\r\n\r\n### @backstage/create-app\r\n\r\n- Added catalog and scaffolder frontend plugins to the template along with the sidebar. [#1942](https://github.com/spotify/backstage/pull/1942), [#2084](https://github.com/spotify/backstage/pull/2084)\r\n- Many plugins have been added to the catalog and will for now be required to be added to separate apps as well. This will be solved as [#1536](https://github.com/spotify/backstage/issues/1536) gets sorted out, but for now you may need to install some plugins just to get pages to work.\r\n\r\n### @backstage/catalog-backend\r\n\r\n- Added the possibility to add static locations via `app-config.yaml`. This changed the signature of `new LocationReaders(logger)` inside `packages/backend/src/plugins/catalog.ts` to `new LocationReaders({config, logger})`. [#1890](https://github.com/spotify/backstage/pull/1890)\r\n\r\n### @backstage/theme\r\n\r\n- Changed the type signature of the palette, removing `sidebar: string` and adding `navigation: { background: string; indicator: string}`. [#1880](https://github.com/spotify/backstage/pull/1880)\r\n',
  },
  {
    url: 'https://api.github.com/repos/backstage/backstage/releases/31891014',
    assets_url:
      'https://api.github.com/repos/backstage/backstage/releases/31891014/assets',
    upload_url:
      'https://uploads.github.com/repos/backstage/backstage/releases/31891014/assets{?name,label}',
    html_url:
      'https://github.com/backstage/backstage/releases/tag/v0.1.1-alpha.18',
    id: 31891014,
    author: {
      login: 'Rugvip',
      id: 4984472,
      node_id: 'MDQ6VXNlcjQ5ODQ0NzI=',
      avatar_url: 'https://avatars2.githubusercontent.com/u/4984472?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Rugvip',
      html_url: 'https://github.com/Rugvip',
      followers_url: 'https://api.github.com/users/Rugvip/followers',
      following_url:
        'https://api.github.com/users/Rugvip/following{/other_user}',
      gists_url: 'https://api.github.com/users/Rugvip/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/Rugvip/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Rugvip/subscriptions',
      organizations_url: 'https://api.github.com/users/Rugvip/orgs',
      repos_url: 'https://api.github.com/users/Rugvip/repos',
      events_url: 'https://api.github.com/users/Rugvip/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Rugvip/received_events',
      type: 'User',
      site_admin: false,
    },
    node_id: 'MDc6UmVsZWFzZTMxODkxMDE0',
    tag_name: 'v0.1.1-alpha.18',
    target_commitish: 'master',
    name: 'v0.1.1-alpha.18',
    draft: false,
    prerelease: true,
    created_at: '2020-08-07T16:41:06Z',
    published_at: '2020-09-28T14:56:31Z',
    assets: [],
    tarball_url:
      'https://api.github.com/repos/backstage/backstage/tarball/v0.1.1-alpha.18',
    zipball_url:
      'https://api.github.com/repos/backstage/backstage/zipball/v0.1.1-alpha.18',
    body:
      "### @backstage/catalog-backend\r\n\r\n- Fixed an issue with duplicated location logs. Applying the database migrations from this fix will clear the existing migration logs. [#1836](https://github.com/spotify/backstage/pull/1836)\r\n\r\n### @backstage/auth-backend\r\n\r\nThis version fixes a breakage in CSP policies set by the auth backend. If you're facing trouble with auth in alpha.17, upgrade to alpha.18.\r\n\r\n- OAuth redirect URLs no longer receive the `env` parameter, as it is now passed through state instead. This will likely require a reconfiguration of the OAuth app, where a redirect URL like `http://localhost:7000/auth/google/handler/frame?env=development` should now be configured as `http://localhost:7000/auth/google/handler/frame`. [#1812](https://github.com/spotify/backstage/pull/1812)\r\n\r\n### @backstage/core\r\n\r\n- `SignInPage` props have been changed to receive a list of provider objects instead of simple string identifiers for all but the `'guest'` and `'custom'` providers. This opens up for configuration of custom providers, but may break existing configurations. See [packages/app/src/App.tsx](https://github.com/spotify/backstage/blob/032ba401af36a760efdac41668d7000ccf09bc57/packages/app/src/App.tsx#L36) and [packages/app/src/identityProviders.ts](https://github.com/spotify/backstage/blob/032ba401af36a760efdac41668d7000ccf09bc57/packages/app/src/identityProviders.ts#L24) for how to bring back the existing providers. [#1816](https://github.com/spotify/backstage/pull/1816)\r\n",
  },
  {
    url: 'https://api.github.com/repos/backstage/backstage/releases/31890990',
    assets_url:
      'https://api.github.com/repos/backstage/backstage/releases/31890990/assets',
    upload_url:
      'https://uploads.github.com/repos/backstage/backstage/releases/31890990/assets{?name,label}',
    html_url:
      'https://github.com/backstage/backstage/releases/tag/v0.1.1-alpha.17',
    id: 31890990,
    author: {
      login: 'Rugvip',
      id: 4984472,
      node_id: 'MDQ6VXNlcjQ5ODQ0NzI=',
      avatar_url: 'https://avatars2.githubusercontent.com/u/4984472?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Rugvip',
      html_url: 'https://github.com/Rugvip',
      followers_url: 'https://api.github.com/users/Rugvip/followers',
      following_url:
        'https://api.github.com/users/Rugvip/following{/other_user}',
      gists_url: 'https://api.github.com/users/Rugvip/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/Rugvip/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Rugvip/subscriptions',
      organizations_url: 'https://api.github.com/users/Rugvip/orgs',
      repos_url: 'https://api.github.com/users/Rugvip/repos',
      events_url: 'https://api.github.com/users/Rugvip/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Rugvip/received_events',
      type: 'User',
      site_admin: false,
    },
    node_id: 'MDc6UmVsZWFzZTMxODkwOTkw',
    tag_name: 'v0.1.1-alpha.17',
    target_commitish: 'master',
    name: 'v0.1.1-alpha.17',
    draft: false,
    prerelease: true,
    created_at: '2020-08-05T18:26:16Z',
    published_at: '2020-09-28T14:56:09Z',
    assets: [],
    tarball_url:
      'https://api.github.com/repos/backstage/backstage/tarball/v0.1.1-alpha.17',
    zipball_url:
      'https://api.github.com/repos/backstage/backstage/zipball/v0.1.1-alpha.17',
    body:
      "### @backstage/techdocs-backend\r\n\r\n- The techdocs backend now requires more configuration to be supplied when creating the router. See [packages/backend/src/plugins/techdocs.ts](https://github.com/spotify/backstage/blob/0201fd9b4a52429519dd59e9184106ba69456deb/packages/backend/src/plugins/techdocs.ts#L42) for an example. [#1736](https://github.com/spotify/backstage/pull/1736)\r\n\r\n### @backstage/cli\r\n\r\n- The `create-app` command was moved out from the CLI to a standalone package. It's now invoked with `npx @backstage/create-app` instead. [#1745](https://github.com/spotify/backstage/pull/1745)",
  },
];

// https://api.github.com/repos/mcalus3/backstage/readme
export const readmeResponseMock = {
  name: 'README.md',
  path: 'README.md',
  sha: 'e05c1eb16edde11b8c936a3130d157f9f29b907b',
  size: 3941,
  url:
    'https://api.github.com/repos/mcalus3/backstage/contents/README.md?ref=master',
  html_url: 'https://github.com/mcalus3/backstage/blob/master/README.md',
  git_url:
    'https://api.github.com/repos/mcalus3/backstage/git/blobs/e05c1eb16edde11b8c936a3130d157f9f29b907b',
  download_url:
    'https://raw.githubusercontent.com/mcalus3/backstage/master/README.md',
  type: 'file',
  content:
    'IVtoZWFkbGluZV0oZG9jcy9hc3NldHMvaGVhZGxpbmUucG5nKQoKIyBbQmFj\na3N0YWdlXShodHRwczovL2JhY2tzdGFnZS5pbykKClshW0xpY2Vuc2VdKGh0\ndHBzOi8vaW1nLnNoaWVsZHMuaW8vYmFkZ2UvTGljZW5zZS1BcGFjaGUlMjAy\nLjAtYmx1ZS5zdmcpXShodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2Vz\nL0FwYWNoZS0yLjApCiFbXShodHRwczovL2dpdGh1Yi5jb20vc3BvdGlmeS9i\nYWNrc3RhZ2Uvd29ya2Zsb3dzL0Zyb250ZW5kJTIwQ0kvYmFkZ2Uuc3ZnKQpb\nIVtEaXNjb3JkXShodHRwczovL2ltZy5zaGllbGRzLmlvL2Rpc2NvcmQvNjg3\nMjA3NzE1OTAyMTkzNjczKV0oaHR0cHM6Ly9kaXNjb3JkLmdnL0VCSEVHelgp\nCiFbQ29kZSBzdHlsZV0oaHR0cHM6Ly9pbWcuc2hpZWxkcy5pby9iYWRnZS9j\nb2RlX3N0eWxlLXByZXR0aWVyLWZmNjliNC5zdmcpClshW0NvZGVjb3ZdKGh0\ndHBzOi8vaW1nLnNoaWVsZHMuaW8vY29kZWNvdi9jL2dpdGh1Yi9zcG90aWZ5\nL2JhY2tzdGFnZSldKGh0dHBzOi8vY29kZWNvdi5pby9naC9zcG90aWZ5L2Jh\nY2tzdGFnZSkKWyFbXShodHRwczovL2ltZy5zaGllbGRzLmlvL25wbS92L0Bi\nYWNrc3RhZ2UvY29yZT9sYWJlbD1WZXJzaW9uKV0oaHR0cHM6Ly9naXRodWIu\nY29tL3Nwb3RpZnkvYmFja3N0YWdlL3JlbGVhc2VzKQoKIyMgV2hhdCBpcyBC\nYWNrc3RhZ2U/CgpbQmFja3N0YWdlXShodHRwczovL2JhY2tzdGFnZS5pby8p\nIGlzIGFuIG9wZW4gcGxhdGZvcm0gZm9yIGJ1aWxkaW5nIGRldmVsb3BlciBw\nb3J0YWxzLiBQb3dlcmVkIGJ5IGEgY2VudHJhbGl6ZWQgc2VydmljZSBjYXRh\nbG9nLCBCYWNrc3RhZ2UgcmVzdG9yZXMgb3JkZXIgdG8geW91ciBtaWNyb3Nl\ncnZpY2VzIGFuZCBpbmZyYXN0cnVjdHVyZS4gU28geW91ciBwcm9kdWN0IHRl\nYW1zIGNhbiBzaGlwIGhpZ2gtcXVhbGl0eSBjb2RlIHF1aWNrbHkg4oCUIHdp\ndGhvdXQgY29tcHJvbWlzaW5nIGF1dG9ub215LgoKQmFja3N0YWdlIHVuaWZp\nZXMgYWxsIHlvdXIgaW5mcmFzdHJ1Y3R1cmUgdG9vbGluZywgc2VydmljZXMs\nIGFuZCBkb2N1bWVudGF0aW9uIHRvIGNyZWF0ZSBhIHN0cmVhbWxpbmVkIGRl\ndmVsb3BtZW50IGVudmlyb25tZW50IGZyb20gZW5kIHRvIGVuZC4KCiFbc2Vy\ndmljZS1jYXRhbG9nXShodHRwczovL2JhY2tzdGFnZS5pby9ibG9nL2Fzc2V0\ncy82L2hlYWRlci5wbmcpCgpPdXQgb2YgdGhlIGJveCwgQmFja3N0YWdlIGlu\nY2x1ZGVzOgoKLSBbQmFja3N0YWdlIFNlcnZpY2UgQ2F0YWxvZ10oaHR0cHM6\nLy9iYWNrc3RhZ2UuaW8vZG9jcy9mZWF0dXJlcy9zb2Z0d2FyZS1jYXRhbG9n\nL3NvZnR3YXJlLWNhdGFsb2ctb3ZlcnZpZXcpIGZvciBtYW5hZ2luZyBhbGwg\neW91ciBzb2Z0d2FyZSAobWljcm9zZXJ2aWNlcywgbGlicmFyaWVzLCBkYXRh\nIHBpcGVsaW5lcywgd2Vic2l0ZXMsIE1MIG1vZGVscywgZXRjLikKLSBbQmFj\na3N0YWdlIFNvZnR3YXJlIFRlbXBsYXRlc10oaHR0cHM6Ly9iYWNrc3RhZ2Uu\naW8vZG9jcy9mZWF0dXJlcy9zb2Z0d2FyZS10ZW1wbGF0ZXMvc29mdHdhcmUt\ndGVtcGxhdGVzLWluZGV4KSBmb3IgcXVpY2tseSBzcGlubmluZyB1cCBuZXcg\ncHJvamVjdHMgYW5kIHN0YW5kYXJkaXppbmcgeW91ciB0b29saW5nIHdpdGgg\neW91ciBvcmdhbml6YXRpb27igJlzIGJlc3QgcHJhY3RpY2VzCi0gW0JhY2tz\ndGFnZSBUZWNoRG9jc10oaHR0cHM6Ly9iYWNrc3RhZ2UuaW8vZG9jcy9mZWF0\ndXJlcy90ZWNoZG9jcy90ZWNoZG9jcy1vdmVydmlldykgZm9yIG1ha2luZyBp\ndCBlYXN5IHRvIGNyZWF0ZSwgbWFpbnRhaW4sIGZpbmQsIGFuZCB1c2UgdGVj\naG5pY2FsIGRvY3VtZW50YXRpb24sIHVzaW5nIGEgImRvY3MgbGlrZSBjb2Rl\nIiBhcHByb2FjaAotIFBsdXMsIGEgZ3Jvd2luZyBlY29zeXN0ZW0gb2YgW29w\nZW4gc291cmNlIHBsdWdpbnNdKGh0dHBzOi8vZ2l0aHViLmNvbS9zcG90aWZ5\nL2JhY2tzdGFnZS90cmVlL21hc3Rlci9wbHVnaW5zKSB0aGF0IGZ1cnRoZXIg\nZXhwYW5kIEJhY2tzdGFnZeKAmXMgY3VzdG9taXphYmlsaXR5IGFuZCBmdW5j\ndGlvbmFsaXR5CgpGb3IgbW9yZSBpbmZvcm1hdGlvbiBnbyB0byBbYmFja3N0\nYWdlLmlvXShodHRwczovL2JhY2tzdGFnZS5pbykgb3Igam9pbiBvdXIgW0Rp\nc2NvcmQgY2hhdHJvb21dKGh0dHBzOi8vZGlzY29yZC5nZy9FQkhFR3pYKS4K\nCvCfjokgQmFja3N0YWdlIGlzIGEgQ05DRiBTYW5kYm94IHByb2plY3QuIFJl\nYWQgdGhlIGFubm91bmNlbWVudCBbaGVyZV0oaHR0cHM6Ly9iYWNrc3RhZ2Uu\naW8vYmxvZy8yMDIwLzA5LzIzL2JhY2tzdGFnZS1jbmNmLXNhbmRib3gpLgoK\nIyMgUHJvamVjdCByb2FkbWFwCgpBIGRldGFpbGVkIHByb2plY3Qgcm9hZG1h\ncCwgaW5jbHVkaW5nIGFscmVhZHkgZGVsaXZlcmVkIG1pbGVzdG9uZXMsIGlz\nIGF2YWlsYWJsZSBbaGVyZV0oaHR0cHM6Ly9iYWNrc3RhZ2UuaW8vZG9jcy9v\ndmVydmlldy9yb2FkbWFwKS4KCiMjIEdldHRpbmcgU3RhcnRlZAoKQ2hlY2sg\nb3V0IFt0aGUgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9iYWNrc3RhZ2UuaW8v\nZG9jcy9nZXR0aW5nLXN0YXJ0ZWQpIG9uIGhvdyB0byBzdGFydCB1c2luZyBC\nYWNrc3RhZ2UuCgojIyBEb2N1bWVudGF0aW9uCgotIFtNYWluIGRvY3VtZW50\nYXRpb25dKGh0dHBzOi8vYmFja3N0YWdlLmlvL2RvY3MpCi0gW1NlcnZpY2Ug\nQ2F0YWxvZ10oaHR0cHM6Ly9iYWNrc3RhZ2UuaW8vZG9jcy9mZWF0dXJlcy9z\nb2Z0d2FyZS1jYXRhbG9nL3NvZnR3YXJlLWNhdGFsb2ctb3ZlcnZpZXcpCi0g\nW0FyY2hpdGVjdHVyZV0oaHR0cHM6Ly9iYWNrc3RhZ2UuaW8vZG9jcy9vdmVy\ndmlldy9hcmNoaXRlY3R1cmUtdGVybWlub2xvZ3kpIChbRGVjaXNpb25zXSho\ndHRwczovL2JhY2tzdGFnZS5pby9kb2NzL2FyY2hpdGVjdHVyZS1kZWNpc2lv\nbnMvYWRycy1vdmVydmlldykpCi0gW0Rlc2lnbmluZyBmb3IgQmFja3N0YWdl\nXShodHRwczovL2JhY2tzdGFnZS5pby9kb2NzL2Rscy9kZXNpZ24pCi0gW1N0\nb3J5Ym9vayAtIFVJIGNvbXBvbmVudHNdKGh0dHBzOi8vYmFja3N0YWdlLmlv\nL3N0b3J5Ym9vaykKCiMjIENvbW11bml0eQoKLSBbRGlzY29yZCBjaGF0cm9v\nbV0oaHR0cHM6Ly9kaXNjb3JkLmdnL01VcE1qUDIpIC0gR2V0IHN1cHBvcnQg\nb3IgZGlzY3VzcyB0aGUgcHJvamVjdAotIFtHb29kIEZpcnN0IElzc3Vlc10o\naHR0cHM6Ly9naXRodWIuY29tL3Nwb3RpZnkvYmFja3N0YWdlL2NvbnRyaWJ1\ndGUpIC0gU3RhcnQgaGVyZSBpZiB5b3Ugd2FudCB0byBjb250cmlidXRlCi0g\nW1JGQ3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9zcG90aWZ5L2JhY2tzdGFnZS9s\nYWJlbHMvcmZjKSAtIEhlbHAgc2hhcGUgdGhlIHRlY2huaWNhbCBkaXJlY3Rp\nb24KLSBbRkFRXShodHRwczovL2JhY2tzdGFnZS5pby9kb2NzL0ZBUSkgLSBG\ncmVxdWVudGx5IEFza2VkIFF1ZXN0aW9ucwotIFtDb2RlIG9mIENvbmR1Y3Rd\nKENPREVfT0ZfQ09ORFVDVC5tZCkgLSBUaGlzIGlzIGhvdyB3ZSByb2xsCi0g\nW0Fkb3B0ZXJzXShBRE9QVEVSUy5tZCkgLSBDb21wYW5pZXMgYWxyZWFkeSB1\nc2luZyBCYWNrc3RhZ2UKLSBbQmxvZ10oaHR0cHM6Ly9iYWNrc3RhZ2UuaW8v\nYmxvZy8pIC0gQW5ub3VuY2VtZW50cyBhbmQgdXBkYXRlcwotIFtOZXdzbGV0\ndGVyXShodHRwczovL21haWxjaGkubXAvc3BvdGlmeS9iYWNrc3RhZ2UtY29t\nbXVuaXR5KSAtIFN1YnNjcmliZSB0byBvdXIgZW1haWwgbmV3c2xldHRlcgot\nIEdpdmUgdXMgYSBzdGFyIOKtkO+4jyAtIElmIHlvdSBhcmUgdXNpbmcgQmFj\na3N0YWdlIG9yIHRoaW5rIGl0IGlzIGFuIGludGVyZXN0aW5nIHByb2plY3Qs\nIHdlIHdvdWxkIGxvdmUgYSBzdGFyIOKdpO+4jwoKIyMgTGljZW5zZQoKQ29w\neXJpZ2h0IDIwMjAgU3BvdGlmeSBBQi4KCkxpY2Vuc2VkIHVuZGVyIHRoZSBB\ncGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjA6IGh0dHA6Ly93d3cuYXBhY2hl\nLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMAo=\n',
  encoding: 'base64',
  _links: {
    self:
      'https://api.github.com/repos/mcalus3/backstage/contents/README.md?ref=master',
    git:
      'https://api.github.com/repos/mcalus3/backstage/git/blobs/e05c1eb16edde11b8c936a3130d157f9f29b907b',
    html: 'https://github.com/mcalus3/backstage/blob/master/README.md',
  },
};

// 	https://api.github.com/repos/mcalus3/backstage/branches?protected=true
export const branchesResponseMock = [
  {
    name: 'master',
    commit: {
      sha: '5032aa4bba5b3d3366066b1471f1b27ba3045b65',
      url:
        'https://api.github.com/repos/backstage/backstage/commits/5032aa4bba5b3d3366066b1471f1b27ba3045b65',
    },
    protected: true,
  },
];

// https://api.github.com/repos/backstage/backstage/contributors?per_page=10
export const contributorsResponseMock = [
  {
    login: 'Rugvip',
    id: 4984472,
    node_id: 'MDQ6VXNlcjQ5ODQ0NzI=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/4984472?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/Rugvip',
    html_url: 'https://github.com/Rugvip',
    followers_url: 'https://api.github.com/users/Rugvip/followers',
    following_url: 'https://api.github.com/users/Rugvip/following{/other_user}',
    gists_url: 'https://api.github.com/users/Rugvip/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/Rugvip/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/Rugvip/subscriptions',
    organizations_url: 'https://api.github.com/users/Rugvip/orgs',
    repos_url: 'https://api.github.com/users/Rugvip/repos',
    events_url: 'https://api.github.com/users/Rugvip/events{/privacy}',
    received_events_url: 'https://api.github.com/users/Rugvip/received_events',
    type: 'User',
    site_admin: false,
    contributions: 2296,
  },
  {
    login: 'freben',
    id: 3097461,
    node_id: 'MDQ6VXNlcjMwOTc0NjE=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/3097461?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/freben',
    html_url: 'https://github.com/freben',
    followers_url: 'https://api.github.com/users/freben/followers',
    following_url: 'https://api.github.com/users/freben/following{/other_user}',
    gists_url: 'https://api.github.com/users/freben/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/freben/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/freben/subscriptions',
    organizations_url: 'https://api.github.com/users/freben/orgs',
    repos_url: 'https://api.github.com/users/freben/repos',
    events_url: 'https://api.github.com/users/freben/events{/privacy}',
    received_events_url: 'https://api.github.com/users/freben/received_events',
    type: 'User',
    site_admin: false,
    contributions: 784,
  },
  {
    login: 'benjdlambert',
    id: 3645856,
    node_id: 'MDQ6VXNlcjM2NDU4NTY=',
    avatar_url: 'https://avatars1.githubusercontent.com/u/3645856?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/benjdlambert',
    html_url: 'https://github.com/benjdlambert',
    followers_url: 'https://api.github.com/users/benjdlambert/followers',
    following_url:
      'https://api.github.com/users/benjdlambert/following{/other_user}',
    gists_url: 'https://api.github.com/users/benjdlambert/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/benjdlambert/starred{/owner}{/repo}',
    subscriptions_url:
      'https://api.github.com/users/benjdlambert/subscriptions',
    organizations_url: 'https://api.github.com/users/benjdlambert/orgs',
    repos_url: 'https://api.github.com/users/benjdlambert/repos',
    events_url: 'https://api.github.com/users/benjdlambert/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/benjdlambert/received_events',
    type: 'User',
    site_admin: false,
    contributions: 761,
  },
  {
    login: 'shmidt-i',
    id: 5012901,
    node_id: 'MDQ6VXNlcjUwMTI5MDE=',
    avatar_url: 'https://avatars0.githubusercontent.com/u/5012901?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/shmidt-i',
    html_url: 'https://github.com/shmidt-i',
    followers_url: 'https://api.github.com/users/shmidt-i/followers',
    following_url:
      'https://api.github.com/users/shmidt-i/following{/other_user}',
    gists_url: 'https://api.github.com/users/shmidt-i/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/shmidt-i/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/shmidt-i/subscriptions',
    organizations_url: 'https://api.github.com/users/shmidt-i/orgs',
    repos_url: 'https://api.github.com/users/shmidt-i/repos',
    events_url: 'https://api.github.com/users/shmidt-i/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/shmidt-i/received_events',
    type: 'User',
    site_admin: false,
    contributions: 359,
  },
  {
    login: 'stefanalund',
    id: 190856,
    node_id: 'MDQ6VXNlcjE5MDg1Ng==',
    avatar_url: 'https://avatars2.githubusercontent.com/u/190856?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/stefanalund',
    html_url: 'https://github.com/stefanalund',
    followers_url: 'https://api.github.com/users/stefanalund/followers',
    following_url:
      'https://api.github.com/users/stefanalund/following{/other_user}',
    gists_url: 'https://api.github.com/users/stefanalund/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/stefanalund/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/stefanalund/subscriptions',
    organizations_url: 'https://api.github.com/users/stefanalund/orgs',
    repos_url: 'https://api.github.com/users/stefanalund/repos',
    events_url: 'https://api.github.com/users/stefanalund/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/stefanalund/received_events',
    type: 'User',
    site_admin: false,
    contributions: 347,
  },
  {
    login: 'OrkoHunter',
    id: 8065913,
    node_id: 'MDQ6VXNlcjgwNjU5MTM=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/8065913?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/OrkoHunter',
    html_url: 'https://github.com/OrkoHunter',
    followers_url: 'https://api.github.com/users/OrkoHunter/followers',
    following_url:
      'https://api.github.com/users/OrkoHunter/following{/other_user}',
    gists_url: 'https://api.github.com/users/OrkoHunter/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/OrkoHunter/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/OrkoHunter/subscriptions',
    organizations_url: 'https://api.github.com/users/OrkoHunter/orgs',
    repos_url: 'https://api.github.com/users/OrkoHunter/repos',
    events_url: 'https://api.github.com/users/OrkoHunter/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/OrkoHunter/received_events',
    type: 'User',
    site_admin: false,
    contributions: 277,
  },
  {
    login: 'marcuseide',
    id: 18682151,
    node_id: 'MDQ6VXNlcjE4NjgyMTUx',
    avatar_url: 'https://avatars3.githubusercontent.com/u/18682151?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/marcuseide',
    html_url: 'https://github.com/marcuseide',
    followers_url: 'https://api.github.com/users/marcuseide/followers',
    following_url:
      'https://api.github.com/users/marcuseide/following{/other_user}',
    gists_url: 'https://api.github.com/users/marcuseide/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/marcuseide/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/marcuseide/subscriptions',
    organizations_url: 'https://api.github.com/users/marcuseide/orgs',
    repos_url: 'https://api.github.com/users/marcuseide/repos',
    events_url: 'https://api.github.com/users/marcuseide/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/marcuseide/received_events',
    type: 'User',
    site_admin: false,
    contributions: 196,
  },
  {
    login: 'dependabot-preview[bot]',
    id: 27856297,
    node_id: 'MDM6Qm90Mjc4NTYyOTc=',
    avatar_url: 'https://avatars3.githubusercontent.com/in/2141?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/dependabot-preview%5Bbot%5D',
    html_url: 'https://github.com/apps/dependabot-preview',
    followers_url:
      'https://api.github.com/users/dependabot-preview%5Bbot%5D/followers',
    following_url:
      'https://api.github.com/users/dependabot-preview%5Bbot%5D/following{/other_user}',
    gists_url:
      'https://api.github.com/users/dependabot-preview%5Bbot%5D/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/dependabot-preview%5Bbot%5D/starred{/owner}{/repo}',
    subscriptions_url:
      'https://api.github.com/users/dependabot-preview%5Bbot%5D/subscriptions',
    organizations_url:
      'https://api.github.com/users/dependabot-preview%5Bbot%5D/orgs',
    repos_url: 'https://api.github.com/users/dependabot-preview%5Bbot%5D/repos',
    events_url:
      'https://api.github.com/users/dependabot-preview%5Bbot%5D/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/dependabot-preview%5Bbot%5D/received_events',
    type: 'Bot',
    site_admin: false,
    contributions: 188,
  },
  {
    login: 'bih',
    id: 918552,
    node_id: 'MDQ6VXNlcjkxODU1Mg==',
    avatar_url: 'https://avatars3.githubusercontent.com/u/918552?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bih',
    html_url: 'https://github.com/bih',
    followers_url: 'https://api.github.com/users/bih/followers',
    following_url: 'https://api.github.com/users/bih/following{/other_user}',
    gists_url: 'https://api.github.com/users/bih/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bih/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bih/subscriptions',
    organizations_url: 'https://api.github.com/users/bih/orgs',
    repos_url: 'https://api.github.com/users/bih/repos',
    events_url: 'https://api.github.com/users/bih/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bih/received_events',
    type: 'User',
    site_admin: false,
    contributions: 187,
  },
  {
    login: 'Nek',
    id: 132011,
    node_id: 'MDQ6VXNlcjEzMjAxMQ==',
    avatar_url: 'https://avatars0.githubusercontent.com/u/132011?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/Nek',
    html_url: 'https://github.com/Nek',
    followers_url: 'https://api.github.com/users/Nek/followers',
    following_url: 'https://api.github.com/users/Nek/following{/other_user}',
    gists_url: 'https://api.github.com/users/Nek/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/Nek/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/Nek/subscriptions',
    organizations_url: 'https://api.github.com/users/Nek/orgs',
    repos_url: 'https://api.github.com/users/Nek/repos',
    events_url: 'https://api.github.com/users/Nek/events{/privacy}',
    received_events_url: 'https://api.github.com/users/Nek/received_events',
    type: 'User',
    site_admin: false,
    contributions: 177,
  },
];
