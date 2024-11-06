export const useNavStore = defineStore("navStore", () => {
  const tabList = [
    {
      title: "home",
      to: "/",
    },
    {
      title: "about",
      to: "/about",
    },
  ] as const;

  type TabTitle = (typeof tabList)[number]["title"] | undefined;

  const tabs = ref(tabList);
  const currentTab = ref<TabTitle>("home");
  const updateCurrentTab = (title: TabTitle) => (currentTab.value = title);

  return { tabs, currentTab, updateCurrentTab };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNavStore, import.meta.hot));
}
