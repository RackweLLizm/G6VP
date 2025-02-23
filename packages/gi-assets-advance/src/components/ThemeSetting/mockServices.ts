import { ADD_THEME, GET_THEMES, REMOVE_THEME, UPDATE_THEME } from './const';
import { ITheme } from './typing';

const mockServices = () => {
  return [
    {
      id: GET_THEMES,
      service: async () => {
        const hash = window.location.hash;
        const projectId = hash.split('/')[2].split('?')[0];
        //@ts-ignore
        const { localforage } = window;
        const project = await localforage.getItem(projectId);

        const themes = project.themes || [];
        return {
          success: true,
          data: themes,
        };
      },
    },
    {
      id: ADD_THEME,
      service: async (theme: ITheme) => {
        const hash = window.location.hash;
        const projectId = hash.split('/')[2].split('?')[0];
        //@ts-ignore
        const { localforage } = window;
        const project = await localforage.getItem(projectId);
        const themes = project.themes || [];
        //project.themes = [...themes, theme];
        const newThemes = [...themes, theme];
        localforage.setItem(projectId, { ...project, themes: newThemes });
        return {
          success: true,
          msg: '主题创建成功！',
          data: [...newThemes],
        };
      },
    },
    {
      id: UPDATE_THEME,
      service: async (id: string, theme: ITheme) => {
        const hash = window.location.hash;
        const projectId = hash.split('/')[2].split('?')[0];
        //@ts-ignore
        const { localforage } = window;
        const project = await localforage.getItem(projectId);
        const themes = project.themes || [];
        const index = themes.findIndex(item => item.id === id);
        if (index !== -1) {
          themes[index] = theme;
          localforage.setItem(projectId, { ...project, themes });
          return {
            success: true,
            msg: '主题更新成功',
            data: [...themes],
          };
        } else {
          return {
            sucess: false,
            msg: '主题不存在',
          };
        }
      },
    },
    {
      id: REMOVE_THEME,
      service: async (id: string) => {
        const hash = window.location.hash;
        const projectId = hash.split('/')[2].split('?')[0];
        //@ts-ignore
        const { localforage } = window;
        const project = await localforage.getItem(projectId);
        const themes = project.themes;
        const filterThemes = themes.filter(item => item.id !== id);
        localforage.setItem(projectId, { ...project, themes: filterThemes });
        return {
          success: true,
          msg: '删除成功',
          data: filterThemes,
        };
      },
    },
  ];
};

export default mockServices;
