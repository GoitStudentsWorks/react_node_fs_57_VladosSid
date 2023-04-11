export const theme = {
  device: {
    mobail: 'screen and (min-width: 375px)',
    tablet: 'screen and (min-width: 768px)',
    desktop: 'screen and (min-width: 1304px)',
  },

  // ${props => props.theme.color.footer.bavkgroundFooter}

  dark: {
    color: {
      primary: '#22252A',
      secondary: '#8BAA36',

      // background
      backgrounGlobal: '#1E1F28',

      header: {
        backgroun: '#1E1F28',
        textNavigation: '#FAFAFA',
        SearchImg: '#FAFAFA',
      },
      mainPage: {
        mpHeroTitle: '#FAFAFA',
        mpHeroText: '#FAFAFA',
        mpHeroProductColor: '#FAFAFA',
        mpHeroProductBackground: '#2A2C36',
        recipeCategoryName: '#FAFAFA',
        mpButton: '#FAFAFA',
        searchBtn: '#8BAA36',
        searchBtnFocus: '#fafafa',
        searchInputBorder: 'rgba(250, 250, 250, 0.5)',
        searchInputBG: 'transparent',
        searchInputPlaceholder: 'rgba(250, 250, 250, 0.5)',
        searchBtncolorFocus: '#22252A',
      },
      dishCard: { dishTitleWrapper: '#2A2C36', dishTitle: '#FAFAFA' },
      mainPageTitle: {
        colorTitle: '#FAFAFA',
      },

      favorit: {
        CardWrapper: '#2A2C36',
        CardTitle: '#FAFAFA',
        CardDescription: 'rgba(250, 250, 250, 0.6)',
        CardTime: '#FAFAFA',
        CardButtonSee: '#8BAA36',
        CardButtonSeeBorder: '#8BAA36',
        CardButtonSeeHover: '#22252A',
        CardButtonDelete: '#1E1F28',
        CardButtonDeleteHoverBackground: '#EBF3D4',
        CardButtonDeleteBorder: '#1E1F28',
        CardIconStroke: '#fafafa',
        CardIconStrokeHover: '#22252a',
        CardIconFill: '#1E1F28',
        CardIconFillHover: '#EBF3D4',
      },

      shoppingList: {
        colorImageContainer: '#2A2C36',
        borderItemContainer: 'rgba(250, 250, 250, 0.3)',
        titleProduct: '#FAFAFA',
        strokeRemoveSvg: '#FAFAFA',
        ImgIngradientsText: ' #FAFAFA',
      },

      footer: {
        bavkgroundFooter: '#8BAA36',
      },
    },
  },

  white: {
    color: {
      primary: '#8BAA36',
      secondary: '#22252A',

      // background
      backgrounGlobal: '#FFFFFF',

      header: {
        backgroun: '#FAFAFA',
        textNavigation: '#23262A',
        SearchImg: '#22252A',
      },
      mainPage: {
        mpHeroTitle: '#22252a',
        mpHeroText: '#23262a',
        mpHeroProductColor: '#3E4462',
        mpHeroProductBackground: '#ffffff',
        recipeCategoryName: '#001833',
        mpButton: '#22252a',
        searchBtn: '#22252A',
        searchBtnFocus: '#8BAA36',
        searchInputBorder: '#F0F0F0',
        searchInputBG: '#fafafa',
        searchInputPlaceholder: '#3e4462',
        searchBtncolorFocus: '#fafafa',
      },
      dishCard: { dishTitleWrapper: '#ffffff', dishTitle: '#3e4462' },
      mainPageTitle: {
        colorTitle: '#001833',
      },

      favorit: {
        CardWrapper: '#FFFFFF',
        CardTitle: '#3e4462',
        CardDescription: '#23262A',
        CardTime: '#3e4462',
        CardButtonSee: '#22252A',
        CardButtonSeeBorder: 'rgb(250, 250, 250)',
        CardButtonSeeHover: '#8BAA36',
        CardButtonDelete: '#ebf3d4',
        CardButtonDeleteHoverBackground: '#1e1f28',
        CardButtonDeleteBorder: '#EBF3D4',
        CardIconStroke: '#22252a',
        CardIconStrokeHover: '#fafafa',
        CardIconFill: '#ebf3d4',
        CardIconFillHover: '#22252a',
      },

      shoppingList: {
        colorImageContainer: '#EBF3D4',
        borderItemContainer: '#e0e0e0',
        titleProduct: '#3e4462',
        strokeRemoveSvg: '#333333',
      },
      footer: {
        bavkgroundFooter: '#22252A',
      },

      //  text
    },
  },
};

export default theme;
