export class Nations {
  public static readonly JAPAN = 'Japan';
  public static readonly RUSSIA = 'Russia';
  public static readonly EGYPT = 'Egypt';
}

export class Nationalities {
  public static readonly JAPAN = 'Japanese';
  public static readonly RUSSIA = 'Russian';
  public static readonly EGYPT = 'Egyptian';
}

export const NationalitiesMap = new Map([
  [Nations.JAPAN, Nationalities.JAPAN],
  [Nations.RUSSIA, Nationalities.RUSSIA],
  [Nations.EGYPT, Nationalities.EGYPT],
]);
