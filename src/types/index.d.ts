type GameVersion = {
  type: number;
  versions: string[];
};

type VersionType = {
  id: number;
  gameId: number;
  name: string;
  slug: string;
};

type CurseForgeLocalDBData = {
  gameVersions: GameVersion[];
  versionTypes: VersionType[];
};
