import { Entity } from '@backstage/catalog-model';
import { useApi, githubAuthApiRef } from '@backstage/core';
import { Octokit } from '@octokit/rest';
import { OctokitResponse } from '@octokit/types';
import { useAsync } from 'react-use';
import { useProjectEntity } from './useProjectEntity';
import { useUrl } from './useUrl';

export const useProtectedBranches = (entity: Entity) => {
  const auth = useApi(githubAuthApiRef);
  const { baseUrl } = useUrl();
  const { value, loading, error } = useAsync(async (): Promise<any> => {
    const token = await auth.getAccessToken(['repo']);
    const { owner, repo } = useProjectEntity(entity);
    const octokit = new Octokit({ auth: token });

    const response = await octokit.request(
      'GET /repos/{owner}/{repo}/branches',
      {
        baseUrl,
        owner,
        repo,
        protected: true,
      },
    );
    return response.data;
  }, []);

  return {
    branches: value,
    loading,
    error,
  };
};

export const useRepoLicence = (entity: Entity) => {
  const auth = useApi(githubAuthApiRef);
  const { baseUrl } = useUrl();
  const { value, loading, error } = useAsync(async (): Promise<any> => {
    const token = await auth.getAccessToken(['repo']);
    const { owner, repo } = useProjectEntity(entity);
    const octokit = new Octokit({ auth: token });

    let license: string = '';
    try {
      const response = await octokit.request(
        'GET /repos/{owner}/{repo}/contents/{path}',
        {
          baseUrl,
          owner,
          repo,
          path: 'LICENSE',
        },
      ) as OctokitResponse<any>;
      license = atob(response.data.content)
        .split('\n')
        .map(line => line.trim())
        .filter(Boolean)[0];
    } catch (error) {
      license = 'No license file found';
    }
    return license;
  }, []);
  return {
    license: value,
    loading,
    error,
  };
};
