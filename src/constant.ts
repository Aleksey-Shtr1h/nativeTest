interface OptionsCardInterface {
  card: {
    widthPhoto: number,
    heightPhoto: number,
    marginBetweenBlock: string
  },

  basket: {
    widthPhoto: number,
    heightPhoto: number,
    marginBetweenBlock: string
  }
}

export const optionsCard: OptionsCardInterface = {
  card: {
    widthPhoto: 150,
    heightPhoto: 150,
    marginBetweenBlock: "0 0 16px 0"
  },

  basket: {
    widthPhoto: 84,
    heightPhoto: 84,
    marginBetweenBlock: "0 16px 0 0"
  }
};
