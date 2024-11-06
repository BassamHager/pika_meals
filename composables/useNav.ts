import { ref } from "vue";

// @todo: remove this file if useNavStore works properly.
export function useNav() {
  const tabs = [
    {
      title: "home",
      to: "/",
    },
    {
      title: "about",
      to: "/about",
    },
  ] as const;

  type TabTitle = (typeof tabs)[number]["title"] | undefined;

  const currentTab = ref<TabTitle>("home");
  const updateCurrentTab = (title: TabTitle) => (currentTab.value = title);

  return { tabs, currentTab, updateCurrentTab };
}
