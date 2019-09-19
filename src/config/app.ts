
/**
   * HTTP service port
   */
export const port = 8080

/**
   * Encryption Key
   *
   * This key is used by cookie or others
   * should be set to a random, 32 character string
   * if set empty, application will auto set with app started
   */
export const keys = ['SEKRIT1']

export const algorithm = 'sha1'
export const encoding = 'base64'

export const public_enable =  '/'

export const public_prefix = '/'
export const view_extension = 'njk'
export const port = 8080
export const port = 8080




export default {
 

  /**
   * static server with public path
   *
   * public - enabled or disabled public static resource request
   *
   * public_prefix - public resource request root dir
   */
  public: true,

  public_prefix: '/',

  /**
   * View config
   *
   * view_extension - The view defaults to the HTML suffix
   */

  view_extension: 'njk',

  /**
   * Cluster
   *
   * cluster.enable - enable or disable cluster mode
   *
   * cluster.workers - Number of work processes, set to 0 by default using CPU cores
   *
   * cluster.sticky - ticky session
   */
  cluster: {
    enable: false,
    workers: 0,
    sticky: false,
  },

  /**
   * debug mode
   */
  debug: true,

  /**
   * template
   */
  http_exception_template: {
    /* ex: 404: 'errors/404.njk', root path: /views */
  },

  providers: [
    // require.resolve('../provider/bootstrap'),
  ],
};
