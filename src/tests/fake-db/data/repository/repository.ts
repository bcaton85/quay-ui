import {AxiosRequestConfig} from 'axios';
import {mock} from 'src/tests/fake-db/MockAxios';

const user1Response = {
  repositories: [
    {
      namespace: 'user1',
      name: 'postgres',
      description: null,
      is_public: false,
      kind: 'image',
      state: 'NORMAL',
      quota_report: {
        quota_bytes: 132459661,
        configured_quota: 104857600,
      },
      last_modified: 1656432090,
      popularity: 0.0,
      is_starred: false,
    },
  ],
};

const quayResponse = {
  repositories: [
    {
      namespace: 'quay',
      name: 'postgres',
      description: null,
      is_public: false,
      kind: 'image',
      state: 'NORMAL',
      quota_report: {
        quota_bytes: 132459661,
        configured_quota: 104857600,
      },
      last_modified: 1656428008,
      popularity: 0.0,
      is_starred: false,
    },
  ],
};

const projectquayResponse = {
  repositories: [],
};

const testorgResponse = {
  repositories: [
    {
      namespace: 'testorg',
      name: 'redis',
      description: null,
      is_public: false,
      kind: 'image',
      state: 'NORMAL',
      quota_report: {
        quota_bytes: 0,
        configured_quota: 104857600,
      },
      last_modified: null,
      popularity: 1.0,
      is_starred: false,
    },
    {
      namespace: 'testorg',
      name: 'postgres',
      description: null,
      is_public: false,
      kind: 'image',
      state: 'NORMAL',
      quota_report: {
        quota_bytes: 132459661,
        configured_quota: 104857600,
      },
      last_modified: 1656426723,
      popularity: 1.0,
      is_starred: false,
    },
    {
      namespace: 'testorg',
      name: 'blah-blah12',
      description: 'blah-blah',
      is_public: true,
      kind: 'image',
      state: 'NORMAL',
      quota_report: {
        quota_bytes: 0,
        configured_quota: 104857600,
      },
      last_modified: null,
      popularity: 1.0,
      is_starred: false,
    },
  ],
};

const response = {
  namespace: 'quay',
  name: 'testrepo',
  kind: 'image',
};

const successResponse = {
  success: true,
};

const repoDetailsResponse = {
  state: 'NORMAL',
};

mock
  .onGet('/api/v1/repository?last_modified=true&namespace=quay&public=true')
  .reply(200, quayResponse);
mock
  .onGet(
    '/api/v1/repository?last_modified=true&namespace=projectquay&public=true',
  )
  .reply(200, projectquayResponse);
mock
  .onGet('/api/v1/repository?last_modified=true&namespace=testorg&public=true')
  .reply(200, testorgResponse);
mock
  .onGet('/api/v1/repository?last_modified=true&namespace=user1&public=true')
  .reply(200, user1Response);
mock
  .onGet('/api/v1/repository?last_modified=true&namespace=&public=true')
  .reply(200, {repositories: []});

const repoDetailsPathRegex = new RegExp(
  `/api/v1/repository/.+/.+?includeStats=false&includeTags=false`,
);
mock.onGet(repoDetailsPathRegex).reply((request: AxiosRequestConfig) => {
  return [200, repoDetailsResponse];
});

mock.onPost('/api/v1/repository').reply((request: AxiosRequestConfig) => {
  const {namespace, repository, visibility, description, repo_kind} =
    JSON.parse(request.data);
  return [200, successResponse];
});

const visibilityPathRegex = new RegExp(
  `/api/v1/repository/.+/.+/changevisibility`,
);
mock.onPost(visibilityPathRegex).reply((request: AxiosRequestConfig) => {
  const {visibility} = JSON.parse(request.data);
  return [200, successResponse];
});

const deleteRepoRegex = new RegExp(`/api/v1/repository/.+/.+`);
mock.onDelete(deleteRepoRegex).reply((request: AxiosRequestConfig) => {
  return [200, successResponse];
});
