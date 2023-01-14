const animations = {
  fadeIn: (time: string) => `fadeIn ${time}`,

  jump: {
    fast: 'jump 512ms ease-in-out infinite alternate',
    slow: 'jump2 1024ms ease-in-out infinite alternate',
  },
  spin: 'spin 512s linear infinite',
}

export default animations
