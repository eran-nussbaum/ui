import httpClient from '../httpClient'

export default {
  getAll: () => httpClient.get('/runs'),
  getJobLogs: id => httpClient.get(`/log/default/${id}`),
  getJobArtifacts: (schema, path, config) => {
    return schema
      ? httpClient.get(`/files?schema=${schema}&path=${path}`, config)
      : httpClient.get(`/files?path=${path}`, config)
  }
}