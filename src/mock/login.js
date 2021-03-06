import { param2Obj } from '@/utils'

const userMap = {
  yzx: {
    token: 'iamtoken',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',  //头像
    name: 'admin'
  },
}

export default {
  login: config => {
    const { username } = JSON.parse(config.body)
	  return {
		  success: !!userMap[username],
		  ...userMap[username]
	  }
  },
  getUserInfo: config => {
    const { token } = param2Obj(config.url)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  },
  logout: () => 'success'
}
