// Generated from papi.proto

import type {
  ResultRankType,
  LiveSkipType,
  LinkType,
  BoxGachaItemType,
  AccessoryCategoryType,
  DiceQuestDifficultyType,
  LiveType,
  AttributeType,
  MoodType,
  DokanType,
  ShopType,
  ResourceType,
  ResetTimingType,
  ActivityFanEventType,
  CardDisplayType,
  GachaContinuousResultType,
  GachaType,
  GvgMatchResultType,
  LoveBaseType,
  MarathonType,
  LadderPanelType,
  LeagueDeckType,
  SkillPossessionType,
  LoveType,
  PhotoContestEvaluationRankType,
  ProfileBackgroundType,
  ProfileLayoutType,
  ProfileInformationType,
  ProfileColorType,
  ShopConditionRewardStatusType,
  PhotoShootingActionType,
  AccessoryEnhanceMaterialType,
  ActivityFanEventHappeningType,
  ItemType,
  WatchAdvertisementType,
  AnniversaryTransitionActionType,
  BacksideType,
  BacksideAreaType,
  BacksideDifficultyType,
  BacksidePracticeRankType,
  BacksideStageType,
  BacksidePanelType,
  BacksidePanelAttributeType,
  MusicChartType,
  SkillFailureType,
  StatusEffectType,
  SkillEfficacyType,
  PhotoImageType,
  ActivityCampaignEffectType,
  CompanyTrustMissionCategoryType,
  CompanyEnjoyCharacterMissionCategoryType,
  DeckEditType,
  DicePanelType,
  DiceItemType,
  DivisionCannotMoveReasonType,
  DreamAreaRankType,
  ForumListReplyRequestType,
  GachaRewardPatternType,
  GachaAnimationEmbeddedType,
  GiftSortType,
  GiftFilterType,
  GvgChallengeConsumptionType,
  GraphicType,
  HomePositionType,
  LeagueStatusType,
  FunctionMaintenanceType,
  LeagueSeasonResultType,
  LeagueSeasonCardResultType,
  LoveHintType,
  MarathonRaidProgressType,
  RuleType,
  InquiryTemplateType,
  HelpType,
  ProviderType,
  ErrorCode,
  PhotoImageRequestType,
  PhotoLookingType,
  PhotoContestBaseEvaluationType,
  PhotoContestBaseGuideRankType,
  RouletteRarityType,
  RouletteSpecialEffectType,
  RouletteCharacterType,
  RouletteBackgroundColorType,
  RouletteButtonColorType,
  RouletteObtainEffectType,
  ShelfTemplateType,
  ParameterType,
  TourType,
  TourEnemyType,
  TourAreaType,
  TourStepType,
  TutorialType,
} from './proto_enum'
import type {
  Accessory,
  HelpCategory,
} from './proto_master'
import type {
  UserPhoto,
  RewardResult,
  UserMission,
  Reward,
  Payslip,
  UserPublic,
  UserCharacter,
  User,
  UserItem,
  UserCard,
  UserCostume,
  UserAccessory,
  UserDeck,
  UserStory,
  UserPoint,
  UserStaff,
  UserMessage,
  UserTelephone,
  UserProfile,
  UserEmblem,
  UserCharacterMusic,
  UserBalance,
  UserTotalCount,
  UserArea,
  UserQuest,
  UserGachaButton,
  UserHomeTalk,
  UserPhotoReport,
  UserCardSupport,
  UserMessageSchedule,
  UserNotification,
  UserHierarchy,
  UserTutorial,
  UserHomePosition,
  UserMusic,
  UserDecoration,
  UserPhotoRecipe,
  UserBuddy,
  UserInvite,
  UserHair,
  UserActivityFanEventProgress,
  UserLove,
  UserLeagueDeckPosition,
  UserDuty,
  UserDutyPoint,
  UserCompany,
  UserShowcase,
  UserShowcaseLike,
  UserShowcaseMusic,
  UserShowcaseToy,
  UserShowcaseMyset,
  UserTourArea,
  UserPhotoPose,
  ConsumptionResult,
  UserGift,
  UserGiftHistory,
  UserLoginBonus,
  MasterTag,
} from './proto_transaction'

export type ActiveFanEvent = {
  characterIds: string[]
  name: string
  subName: string
  level: number
  finishTime: string
  currentCheerPoint: number
}

export type ActivePromotion = {
  characterIds: string[]
  name: string
  subName: string
  level: number
  finishTime: string
  campaignEffects: ActivityCampaignEffect[]
}

export type ActiveRefresh = {
  characterIds: string[]
  name: string
  subName: string
  finishTime: string
}

export type ActivityCharacterInfo = {
  characterId: string
  costumeId: string
  hairId: string
}

export type ActivityLessonProgress = {
  stepRewardGold: number
  stepRewardManagerExp: number
  stepRewardCardEnhanceItem: number
  rewardGoldAmount: number
  rewardManagerExpAmount: number
  rewardCardEnhanceItemAmount: number
  lastReceiveTime: string
  maxRewardTime: string
  dailyPromoteCount: number
  currentAreaId: string
}

export type AnniversaryInfo = {
  isPrevious: boolean
  prologueStoryID: string
  beforeAssetId: string
  afterAssetId: string
  extraStoryId: string
  isHideHomeCharacter: boolean
  isStoryUnread: boolean
  anniversaryId: string
  endTime: string
}

export type BacksideCardLiveAbilityInfo = {
  cardId: string
  level: number
  rarity: number
  liveAbilityLevel: string
  liveAbilityId: string
}

export type BacksideDeckCardDetailInfo = {
  position: number
  cardId: string
  displayCharacterId: string
  displayCostumeId: string
  level: number
  rarity: number
  vocal: string
  dance: string
  visual: string
  stamina: string
  mental: string
  technique: string
  skillLevel1: number
  skillLevel2: number
  skillLevel3: number
  liveAbilityLevel: number
  part1Accessory: Accessory
  part2Accessory: Accessory
  photos: UserPhoto[]
  staminaPermil: number
  supported: boolean
  displayHairId: string
  skillLevel4: number
  evolutionLevel: number
}

export type BacksideDeckCardInfo = {
  position: number
  cardId: string
  level: number
  rarity: number
  evolutionLevel: number
}

export type BacksideDeckCardStaminaInfo = {
  cardId: string
  currentMaxStamina: string
  currentRemainingStamina: string
}

export type BacksideDifficultyInfo = {
  backsideDifficultyNumber: number
  managerLevel: number
  cleared: boolean
  unlockConditionId: string
  unlocked: boolean
  stageTotalResultInfo: BacksidePracticeStageTotalResultInfo
  practiceStageInfos: BacksidePracticeStageInfo[]
  finalStageInfo: BacksideFinalStageInfo
  rewardReceivedRankType: ResultRankType
  rewardReceivedRankPlus: number
}

export type BacksideFinalStageInfo = {
  number: number
  name: string
  maxActionCount: number
  backsidePanelGoalSettingId: string
  stageResultInfo: BacksideFinalStageResultInfo
  stageHalfwayInfo: BacksideFinalStageHalfwayInfo
  pickupCharacterIDs: string[]
}

export type BacksideLiveBonus = {
  liveBonusId: string
  name: string
  liveAbilityId: string
  liveAbilityLevel: number
  powerPermil: number
}

export type BacksidePanelGoalInfo = {
  musicId: string
  musicChartPatternId: string
  name: string
  clearScore: number
  maxCapacity: number
  stageId: string
  backsideQuestSettingId: string
  mentalThreshold: number
  liveSkipType: LiveSkipType
}

export type BacksidePanelLiveInfo = {
  musicId: string
  musicChartPatternId: string
  name: string
  clearScore: number
  maxCapacity: number
  stageId: string
  backsideQuestSettingId: string
  mentalThreshold: number
  liveSkipType: LiveSkipType
}

export type BacksidePanelPvpInfo = {
  musicId: string
  musicChartPatternId: string
  name: string
  clearScore: number
  maxCapacity: number
  stageId: string
  opponentInfo: BacksideOpponentInfo
  backsideQuestSettingId: string
  mentalThreshold: number
  liveSkipType: LiveSkipType
}

export type BacksidePracticeStageInfo = {
  number: number
  name: string
  maxActionCount: number
  backsidePanelGoalSettingId: string
  stageResultInfo: BacksidePracticeStageResultInfo
  stageHalfwayInfo: BacksidePracticeStageHalfwayInfo
  pickupCharacterIDs: string[]
}

export type BacksideRankingInfo = {
  userId: string
  name: string
  managerLevel: number
  totalPracticeScore: string
  finalScore: string
  rank: number
  emblemId: string
  deckCardInfos: BacksideDeckCardInfo[]
}

export type BacksideRankingRewardInfo = {
  rankFrom: number
  rewardId: string
}

export type Banner = {
  id: string
  assetId: string
  text: string
  linkType: LinkType
  linkDetail: string
  order: number
  viewConditionId: string
}

export type BirthdayInfo = {
  birthdayAdvInfo: BirthdayAdvInfo
  text: string
  costumeId: string
}

export type BoxGachaItem = {
  order: number
  itemType: BoxGachaItemType
  rewardId: string
  liveBonusGroupId: string
  initialStock: number
  stock: number
  isLimited: boolean
  assetId: string
  description: string
}

export type BuddyCardInfo = {
  cardId: string
  rarity: number
  level: number
  evolutionLevel: number
}

export type CompanyBulkReceiveEnjoyResult = {
  characterId: string
  beforeCharacterEnjoyPoint: string
  enjoyCharacterLevelRewardResults: RewardResult[]
}

export type CompanyEnjoyCharacterLevelInfo = {
  characterId: string
  levelKey: number
  isReceivable: boolean
  isAlreadyReceived: boolean
}

export type CompanyEnjoyCharacterRankingInfo = {
  userId: string
  currentRank: number
  managerName: string
  currentEnjoyPoint: string
  emblemId: string
}

export type CompanyGradeInfo = {
  id: string
  isReceivable: boolean
  isAlreadyReceived: boolean
}

export type CompanyRankingInfo = {
  userId: string
  currentRank: number
  managerName: string
  currentPoint: string
  emblemId: string
  currentEnjoyPoint: string
  currentTrustPoint: string
  currentSalaryPoint: string
}

export type CompanyTopResponse = {
  companyGradeInfos: CompanyGradeInfo[]
  trustMissionInfos: CompanyTrustMissionInfo[]
  trustLevelInfos: CompanyTrustLevelInfo[]
  currentRank: number
  receivableLevelRewardEnjoyCharacterIds: string[]
  thisMonthSalaryPoint: string
  dokanInfos: DokanInfo[]
  commonResponse: CommonResponse
}

export type CompanyTrustLevelInfo = {
  levelKey: number
  isReceivable: boolean
  isAlreadyReceived: boolean
}

export type DeckPositionCharacter = {
  userDeckPosition: UserDeckPosition
  characterId: string
  displayCharacterId: string
  displayCostumeId: string
  displayHairId: string
}

export type DiceAccessoryInfo = {
  accessoryId: string
  categoryType: AccessoryCategoryType
  param1Permil: number
  param1Value: number
  param2Permil: number
  param2Value: number
}

export type DiceDailyRewardInfo = {
  panelCount: number
  rewardId: string
  liveBonus: DiceLiveBonus
  medalAmount: number
}

export type DiceDailyRewardResultInfo = {
  movedPanelCount: number
  medalItemId: string
  rewardResults: RewardResult[]
  liveBonuses: DiceLiveBonus[]
  dailyRewardInfos: DiceDailyRewardInfo[]
  rank: number
}

export type DiceInfo = {
  id: string
  startTime: string
  endTime: string
  exchangeEndTime: string
  assetId: string
  noticeInfo: NoticeInfo
  eventMissionInfo: EventMissionInfo
  medalItemId: string
  moneyItemId: string
  staminaRecoveryItemId: string
  maxStamina: number
  movePanelConsumptionStamina: number
  staminaRecoveryMinutes: number
  areaInfo: DiceAreaInfo
  dailyRewardInfos: DiceDailyRewardInfo[]
  rankingRewardInfos: DiceRankingRewardInfo[]
}

export type DiceLiveBonus = {
  id: string
  liveAbilityId: string
  liveAbilityLevel: number
  powerPermil: number
}

export type DicePhotoAbilityInfo = {
  photoAbilityId: string
  effectValue: string
}

export type DiceQuestInfo = {
  difficultyType: DiceQuestDifficultyType
  cleared: boolean
  highestScore: string
  highestScoreRankType: ResultRankType
  highestScoreRankPlus: number
  name: string
  liveType: LiveType
  clearScore: string
  opponentInfo: QuestOpponentInfo
  difficultyLevel: number
  obtainMedalAmount: number
  stageId: string
  musicId: string
  musicChartPatternId: string
  position1AttributeType: AttributeType
  position2AttributeType: AttributeType
  position3AttributeType: AttributeType
  position4AttributeType: AttributeType
  position5AttributeType: AttributeType
  activeSkillWeightPermil: number
  specialSkillWeightPermil: number
  skillStaminaWeightPermil: number
  staminaRecoveryWeightPermil: number
  beatDanceWeightPermil: number
  beatVocalWeightPermil: number
  beatVisualWeightPermil: number
  questPressureId: string
  questCharacterAdvantageId: string
  questAudienceAdvantageId: string
  moodType: MoodType
  liveBonusGroupId: string
  maxCapacity: number
  mentalThreshold: number
  consumptionStamina: number
  obtainDiceItem: DiceItem
  obtainLiveBonus: DiceLiveBonus
  obtainMoneyAmount: string
  liveSkipType: LiveSkipType
}

export type DiceRankingRewardInfo = {
  rankFrom: number
  rewardId: string
}

export type DiceStoryCharacterInfo = {
  characterId: string
  name: string
  colorCode: string
  costumeAssetId: string
  hairAssetId: string
  mascotAssetId: string
}

export type DivisionInfo = {
  id: string
  levelAvg: number
}

export type DokanInfo = {
  id: string
  type: DokanType
  advAssetId: string
  noticeInfo: NoticeInfo
  shopItem: ShopItem
  assetId: string
  description: string
  name: string
  shopType: ShopType
  storyId: string
  linkTitle: string
  linkType: LinkType
  linkDetail: string
}

export type DreamAreaAttributeInfo = {
  activeSkillWeightPermil: number
  specialSkillWeightPermil: number
  skillStaminaWeightPermil: number
  staminaRecoveryWeightPermil: number
  beatDanceWeightPermil: number
  beatVocalWeightPermil: number
  beatVisualWeightPermil: number
  attributeType: AttributeType
  questPressureId: string
}

export type DreamBasePhotoEnhanceLevelEffectValueInfo = {
  photoAbilityId: string
  effectValue: string
}

export type DreamQuestInfo = {
  questNumber: number
  stageId: string
  musicId: string
  difficultyLevel: number
  name: string
  musicChartPatternId: string
  position1AttributeType: AttributeType
  position2AttributeType: AttributeType
  position3AttributeType: AttributeType
  position4AttributeType: AttributeType
  position5AttributeType: AttributeType
  activeSkillWeightPermil: number
  specialSkillWeightPermil: number
  skillStaminaWeightPermil: number
  staminaRecoveryWeightPermil: number
  beatDanceWeightPermil: number
  beatVocalWeightPermil: number
  beatVisualWeightPermil: number
  maxCapacity: number
  mentalThreshold: number
  questPressureId: string
  questCharacterAdvantageId: string
  questAudienceAdvantageId: string
  clearScore: string
  liveBonusGroupId: string
  liveSkipType: LiveSkipType
  cleared: boolean
  isPlayable: boolean
  isSkipAvailable: boolean
  userPhotoAbilityUpInfos: DreamUserPhotoAbilityUpInfo[]
}

export type DreamSeasonInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  generateAreaItemId: string
  assetId: string
  noticeInfo: NoticeInfo
  rankInfos: DreamRankInfo[]
  eventMissionInfo: EventMissionInfo
}

export type DreamSkipMusicMasteryRewardInfo = {
  musicId: string
  totalStoneAmount: string
  characterIds: string[]
}

export type DreamUserPhotoAbility = {
  photoAbilityId: string
  maxEffectValue: string
  totalEnhancedEffectValue: string
  maxDisplayValue: string
}

export type DreamUserPhotoAbilityChangeInfo = {
  photoAbilityId: string
  maxEffectValue: string
  beforeEffectValue: string
  afterEffectValue: string
  maxDisplayValue: string
}

export type DreamUserPhotoAbilityUpInfo = {
  photoAbilityId: string
  afterEffectValue: string
  upEffectValue: string
}

export type DutyConsumptionPoint = {
  dutyPointId: string
  amount: string
}

export type DutyExchangeRewardInfo = {
  number: string
  name: string
  description: string
  consumptionPoints: DutyConsumptionPoint[]
  rewardId: string
  assetId: string
  mainColorCode: string
  subColorCode: string
  mainFontColorCode: string
  subFontColorCode: string
  unlockConditionId: string
  isUnlocked: boolean
  isExchanged: boolean
}

export type DutyPointInfo = {
  dutyPointId: string
  amount: string
}

export type DutyTopResponse = {
  id: string
  seasonNumber: string
  name: string
  startTime: string
  endTime: string
  pointInfos: DutyPointInfo[]
  eventMissionInfo: EventMissionInfo
  costumeId: string
  noticeInfo: NoticeInfo
  assetId: string
  bgmAssetId: string
  exchangeInfos: DutyExchangeRewardInfo[]
  totalObtainRewardInfos: DutyTotalObtainRewardInfo[]
  homeActionInfos: DutyHomeActionInfo[]
  backgroundAssetId: string
  dokanInfos: DokanInfo[]
  isLastSeason: boolean
  title: string
  tabName: string
  commonResponse: CommonResponse
}

export type DutyTotalObtainRewardInfo = {
  number: string
  rewardId: string
  totalObtainAmount: string
  isReceived: boolean
}

export type EventButtonDisplayInfo = {
  conditionId: string
  priority: number
  assetId: string
}

export type EventMissionInfo = {
  id: string
  unlocked: boolean
  userMissions: UserMission[]
}

export type EventStoryInfo = {
  id: string
  episodes: EventStoryEpisodeInfo[]
}

export type ExchangeBooth = {
  id: string
  name: string
  bannerAssetId: string
  requiredResourceType: ResourceType
  requiredResourceId: string
  resetTimingType: ResetTimingType
  nextResetTime: string
  unlocked: boolean
  endTime: string
  linkType: LinkType
  linkDetail: string
  order: number
  limited: boolean
  colorCode: string
  backgroundColorCode: string
  exchanges: ExchangeItem[]
  costumeId: string
  iconAssetId: string
  viewConditionId: string
  unlockConditionId: string
}

export type ExchangeItem = {
  id: string
  assetId: string
  rewardId: string
  resetTimingType: ResetTimingType
  nextResetTime: string
  unlocked: boolean
  name: string
  description: string
  exchangeLimit: number
  leftCount: number
  requiredResourceAmount: string
  order: number
  viewConditionId: string
  unlockConditionId: string
}

export type ExerciseDeckPosition = {
  position: number
  cardId: string
  part1AccessoryId: string
  part2AccessoryId: string
  photoAllInOneIds: string[]
}

export type ExerciseInfo = {
  exerciseId: string
  unlocked: boolean
  positions: ExerciseDeckPosition[]
  opponentInfo: QuestOpponentInfo
}

export type ExerciseStartResponse = {
  questId: string
  result: LiveResult
  rankType: ResultRankType
  rankPlus: number
  rankPatterns: QuestRankPattern[]
  clearRewards: RewardResult[]
  commonResponse: CommonResponse
}

export type ExternalRewardInfo = {
  externalRewardId: string
  rewardId: string
  isReceived: boolean
}

export type ExtraStoryInfo = {
  id: string
  unlocked: boolean
  episodes: ExtraStoryEpisodeInfo[]
}

export type ExtraStoryPartInfo = {
  id: string
  unlocked: boolean
  stories: ExtraStoryInfo[]
}

export type FanEvent = {
  id: string
  name: string
  subName: string
  type: ActivityFanEventType
  unlockConditionId: string
  isUnlocked: boolean
  activityPerformanceId: string
  level: number
  exp: number
  nextLevelRequiredExp: number
  requiredStamina: number
  nextLevelUnlockConditionId: string
  isNextLevelUnlocked: boolean
  stepConsumptionStamina: number
  fixedRewardId: string
  additionalRewardId: string
  rankSRewardId: string
  rankARewardId: string
  rankBRewardId: string
  rankCRewardId: string
  rankDRewardId: string
  viewConditionId: string
  campaignDropRewardIds: string[]
}

export type FanEventCharacterInfo = {
  characterId: string
  costumeId: string
  activityStamina: number
  completedStep: number
  finishTime: string
  activityPoint: number
  maxStep: number
  lastSavedActivityPoint: number
  hairId: string
}

export type FanEventProgress = {
  activityFanEventId: string
  activityFanEventName: string
  activityFanEventSubName: string
  activityFanEventType: ActivityFanEventType
  activityFanEventLevel: number
  characters: FanEventCharacterInfo[]
  startTime: string
  stepConsumptionStamina: number
  stepActivityPointCoefficientPermil: number
  rankPatterns: FanEventRankPattern[]
  usedSuperModeItem: boolean
  activityPerformanceId: string
  maleNpcSpineId: string
  femaleNpcSpineId: string
  specialFanCheerPoint: number
  currentCheerPoint: number
  newSpecialFansCount: number
  speedRate: number
}

export type FanEventRankingInfo = {
  rank: string
  score: string
  userId: string
  name: string
  managerLevel: number
  characterIds: string[]
  emblemId: string
}

export type FavoriteCardInfo = {
  cardId: string
  rarity: number
  displayType: CardDisplayType
  evolutionLevel: number
}

export type GachaButtonInfo = {
  id: string
  todayCount: number
  totalCount: number
  drawTime: string
}

export type GachaContinuousInfo = {
  totalDrawCount: number
  cardIds: string[]
  isFinished: boolean
  externalRewardInfo: ExternalRewardInfo
}

export type GachaContinuousResult = {
  totalDrawCount: number
  cardIds: string[]
  resultType: GachaContinuousResultType
  externalRewardInfo: ExternalRewardInfo
}

export type GachaExchangeInfo = {
  id: string
  exchangedCount: number
  exchangedTime: string
}

export type GachaHistory = {
  gachaType: GachaType
  drawTime: string
  gachaId: string
  resourceType: ResourceType
  resourceId: string
  amount: number
}

export type GachaInfo = {
  id: string
  unlocked: boolean
  buttons: GachaButtonInfo[]
  exchanges: GachaExchangeInfo[]
  itemGachaRewards: Reward[]
  noticeInfo: NoticeInfo
  selectedCardIds: string[]
  premiumInfo: GachaPremiumInfo
  continuousInfo: GachaContinuousInfo
  stampInfo: GachaStampInfo
  showcaseToyGachaRewards: Reward[]
}

export type GachaPremiumInfo = {
  fixedPremiumRewardRequiredDrawCount: number
  premiumRewardIds: string[]
  featuredRewards: Reward[]
  freeGachaTicketItemId: string
  isFreeGachaTicketReceivable: boolean
}

export type GuildGvgMatchRankInfo = {
  name: string
  managerLevel: number
  point: string
  rank: number
  emblemId: string
}

export type GuildGvgSeasonInfo = {
  name: string
  matchNumber: number
  matchEndTime: string
  guildRank: number
  ranks: GuildGvgRankInfo[]
  aggregateEndTime: string
  isAggregate: boolean
  preMatchResult: GuildGvgSeasonMatchResult
  isRemainingChallenge: boolean
  winRewardId: string
  isCurrentMatchWin: boolean
}

export type GuildGvgSeasonMatchResult = {
  matchNumber: number
  opponentGuildId: string
  point: string
  opponentPoint: string
  resultType: GvgMatchResultType
  mvpInfo: GuildGvgMatchRankInfo
}

export type GuildParam = {
  id: string
  weaknessRank: number
  memberAmountRank: number
  prevSeasonResult: GuildGvgSeasonResult
}

export type GvgCurrentSeasonMatchInfo = {
  matchNumber: number
  endTime: string
  opponentGuildId: string
  opponentRank: number
  opponentPoint: string
  opponentWinCount: number
  opponentLoseCount: number
  opponentDrawCount: number
}

export type GvgGuildRankingRewardInfo = {
  rankFrom: number
  rewardId: string
}

export type GvgRankingRewardInfo = {
  order: number
  rankRateFromPercent: number
  rankFrom: number
  rewardId: string
  hierarchyVariablePoint: string
}

export type GvgSeasonInfo = {
  id: string
  name: string
  startTime: string
  aggregateEndTime: string
  challengeRewardId: string
  challengeItemId: string
  winRewardId: string
}

export type GvgSeasonMatchInfo = {
  matchNumber: number
  opponentGuildId: string
  point: string
  opponentPoint: string
  resultType: GvgMatchResultType
  memberAmountWeightPermil: number
  opponentMemberAmountWeightPermil: number
}

export type HierarchyChangeInfo = {
  addHierarchyPoint: string
  oldDetailGradeId: string
  newDetailGradeId: string
  currentRank: number
}

export type HierarchyDivisionRewardInfo = {
  hierarchyDivisionRewardId: string
  canReceive: boolean
  haveReceived: boolean
  firstUserInfo: ProfileInfo
}

export type HierarchyNotiInfo = {
  rewardIds: string[]
  divisionRewardIds: string[]
  currentDetailGradeId: string
  currentRank: number
}

export type HierarchyProfileInfo = {
  detailGradeId: string
  rank: number
}

export type HierarchyRankUserInfo = {
  userId: string
  currentRank: number
  managerName: string
  managerLevel: number
  currentDetailGradeId: string
  currentPoint: string
  emblemId: string
  deckName: string
  cardInfos: LastCardInfo[]
}

export type HierarchyRewardInfo = {
  hierarchyRewardId: string
  canReceive: boolean
  haveReceived: boolean
}

export type HomeBacksideInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  aggregateEndTime: string
  exchangeEndTime: string
  assetId: string
  bannerAssetId: string
  order: number
  unlockConditionId: string
  isUnlocked: boolean
  eventMissionId: string
}

export type HomeDiceInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  exchangeEndTime: string
  assetId: string
  bannerAssetId: string
  order: number
  unlockConditionId: string
  isUnlocked: boolean
  eventMissionId: string
  isUnplayed: boolean
  isMaxStamina: boolean
  isMosaicExchangeable: boolean
  isMosaicTotalConsumptionRewardReceivable: boolean
}

export type HomeDreamInfo = {
  name: string
  startTime: string
  endTime: string
  assetId: string
  bannerAssetId: string
  order: number
  unlockConditionId: string
  isUnlocked: boolean
  generateAreaItemId: string
  isReceivableLoginReward: boolean
  eventMissionId: string
}

export type HomeDutyInfo = {
  id: string
  seasonNumber: string
  name: string
  startTime: string
  endTime: string
  assetId: string
  bannerAssetId: string
  order: number
  unlockConditionId: string
  isUnlocked: boolean
  eventMissionId: string
  isExchangeable: boolean
  isTotalObtainRewardReceivable: boolean
}

export type HomeEnterResponse = {
  gachaInfos: GachaInfo[]
  fanEventInfo: FanEventInfo
  promotionInfo: PromotionInfo
  refreshInfo: RefreshInfo
  lessonProgress: ActivityLessonProgress
  functionMaintenanceInfos: FunctionMaintenanceInfo[]
  bannerInfo: BannerInfo
  lastFriendApprovedTime: string
  gvgInfo: CurrentGvgInfo
  shopIds: string[]
  exchangeBoothIds: string[]
  isRemainingDiary: boolean
  notiStoneShopItem: NotiShopItem
  notiNormalShopItem: NotiShopItem
  payslip: Payslip
  currentMainAreaId: string
  eventInfo: HomeEventInfo
  pvpInfo: HomePvpInfo
  hierarchyNotiInfo: HierarchyNotiInfo
  isDailyQuestPlayable: boolean
  currentTowerQuestId: string
  hasUnplayedContest: boolean
  eventStoryInfos: EventStoryInfo[]
  photoActivities: PhotoActivity[]
  photoMusics: PhotoMusic[]
  photoStages: PhotoStage[]
  friendAppliedCount: number
  purchasedConditionRewardShopInfo: PurchasedConditionRewardShopInfo[]
  lessonInfo: LessonInfo
  eventButtonDisplayInfos: EventButtonDisplayInfo[]
  hasCanReceiveInviteHostRewards: boolean
  existsUnclearedExercise: boolean
  extraStoryPartInfos: ExtraStoryPartInfo[]
  leagueInfo: HomeLeagueInfo
  specialHomePositionInfo: SpecialHomePositionInfo
  specialHomeActionInfos: SpecialHomeActionInfo[]
  specialPhotoShootingInfo: SpecialPhotoShootingInfo
  loveInfo: HomeLoveInfo
  hasReceivableGift: boolean
  anniversaryInfo: AnniversaryInfo
  rouletteInfo: RouletteInfo
  companyInfo: CompanyInfo
  isDefaultNormalShopFreeItemStockExist: boolean
  notiShowcaseShopItem: NotiShopItem
  showcaseToyShopIds: string[]
  unlockedShowcaseNumbers: number[]
  isUnclearedPlayableQuest: boolean
  photoExpressions: PhotoExpression[]
  satelliteInfo: HomeSatelliteInfo
  pvpRewardResultInfo: PvpRewardResultInfo
  gvgRewardResultInfo: GvgRewardResultInfo
  tourRewardResultInfos: TourRewardResultInfo[]
  backsideRewardResultInfos: BacksideRewardResultInfo[]
  photoContestRewardResultInfos: PhotoContestRewardResultInfo[]
  raceRewardResultInfos: RaceRewardResultInfo[]
  raceDailyRewardResultInfos: RaceDailyRewardResultInfo[]
  buddyUsedRewardResultInfo: BuddyUsedRewardResultInfo
  leagueRewardResultInfo: LeagueRewardResultInfo
  diceDailyRewardResultInfo: DiceDailyRewardResultInfo
  diceRewardResultInfo: DiceRewardResultInfo
  showcaseLikedRewardResultInfo: ShowcaseLikedRewardResultInfo
  commonResponse: CommonResponse
}

export type HomeEventMissionInfo = {
  id: string
  unlocked: boolean
  order: number
}

export type HomeGeneralEventInfo = {
  id: string
  assetId: string
  text: string
  linkType: LinkType
  linkDetail: string
  order: number
  viewConditionId: string
}

export type HomeLadderInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  assetId: string
  bannerAssetId: string
  order: number
  unlockConditionId: string
  isUnlocked: boolean
  eventMissionId: string
  messageGroupId: string
  reachablePanelCount: number
}

export type HomeLoveEventInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  bannerAssetId: string
  order: number
  unlockConditionId: string
  isUnlocked: boolean
  eventMissionIds: string[]
  limitedEventMissionIds: string[]
  isLessonRewardMax: boolean
  isUnplayed: boolean
  hasHiddenFavorabilityObtainItem: boolean
  baseType: LoveBaseType
  limitedExtraTitleAssetId: string
}

export type HomeLoveInfo = {
  isViewable: boolean
  isUnlocked: boolean
  unlockConditionId: string
  eventMissionIds: string[]
  existsLessonRewardMaxLove: boolean
  existsUnplayedLove: boolean
  existsHasHiddenFavorabilityObtainItemLove: boolean
}

export type HomeMarathonInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  exchangeEndTime: string
  assetId: string
  bannerAssetId: string
  order: number
  unlockConditionId: string
  isUnlocked: boolean
  eventMissionId: string
  isMaxStamina: boolean
  isRaidStaminaOverThreshold: boolean
  hasFinishedRaidQuest: boolean
  isRaidHostEnable: boolean
  reachableLadderPanelCount: number
  type: MarathonType
  ladderId: string
}

export type HomeMosaicInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  assetId: string
  bannerAssetId: string
  order: number
  unlockConditionId: string
  unlocked: boolean
  eventMissionId: string
  isExchangeable: boolean
  isTotalConsumptionRewardReceivable: boolean
}

export type HomePhotoContestInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  aggregateEndTime: string
  exchangeEndTime: string
  assetId: string
  bannerAssetId: string
  order: number
  unlockConditionId: string
  isUnlocked: boolean
  hasReceivableSectionReward: boolean
}

export type HomeRaceInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  aggregateEndTime: string
  exchangeEndTime: string
  assetId: string
  bannerAssetId: string
  order: number
  unlockConditionId: string
  isUnlocked: boolean
  eventMissionId: string
  isLessenRewardMax: boolean
}

export type HomeShelfInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  bannerAssetId: string
  order: number
  unlockConditionId: string
  isUnlocked: boolean
  albumInfos: ShelfAlbumInfo[]
  eventMissionId: string
}

export type HomeTourInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  aggregateEndTime: string
  exchangeEndTime: string
  assetId: string
  bannerAssetId: string
  order: number
  unlockConditionId: string
  isUnlocked: boolean
  eventMissionId: string
}

export type InviteGuestInfo = {
  userId: string
  name: string
  receivedHostRewardIds: string[]
  buddyCardInfo: BuddyCardInfo
  clearQuestMainAreaCount: string
  invitedTime: string
}

export type LadderInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  eventMissionInfo: EventMissionInfo
  messageGroupId: string
  costumeIds: string[]
  ladderPointItemId: string
  assetId: string
  topColorCode: string
  bottomColorCode: string
  bgmAssetId: string
  backgroundAssetId: string
}

export type LadderPanel = {
  type: LadderPanelType
  messageId: string
  rewardId: string
  requiredPointItemAmount: number
  unlockConditionId: string
  unlocked: boolean
  reached: boolean
  reachable: boolean
}

export type LastCardInfo = {
  position: number
  cardId: string
  level: number
  rarity: number
  evolutionLevel: number
}

export type LeagueCardInfo = {
  cardId: string
  level: number
  rarity: number
  evolutionLevel: number
}

export type LeagueCardRanking = {
  userId: string
  name: string
  cardInfo: LeagueCardInfo
  value: string
  rank: number
  emblemId: string
}

export type LeagueDailyResultInfo = {
  date: string
  point: string
  rank: number
  winCount: number
  loseCount: number
  headline: string
  mvpCardId: string
}

export type LeagueNewsInfo = {
  date: string
  deckACards: LiveCardInfo[]
  deckAWinCount: number
  deckALoseCount: number
  deckBCards: LiveCardInfo[]
  deckBWinCount: number
  deckBLoseCount: number
  beforeRank: number
  beforePoint: string
  headline: string
  interview: string
  body: string
  thumbnailAssetId: string
  thumbnailShootMillisecond: number
  thumbnailEffectShootMilliseconds: number[]
  mvpDeckType: LeagueDeckType
  mvpCardId: string
  mvpSeasonCardResultInfo: LeagueSeasonCardResultInfo
  mvpMusicId: string
  mvpStageId: string
  displayPositionCharacters: DeckPositionCharacter[]
}

export type LeaguePointRanking = {
  userId: string
  name: string
  point: string
  rank: number
  deckACards: LiveCardInfo[]
  deckBCards: LiveCardInfo[]
  emblemId: string
}

export type LeagueSeasonRewardInfo = {
  upgradeRewardId: string
  stayRewardId: string
  downgradeRewardId: string
}

export type LessonInfo = {
  lessonProgress: ActivityLessonProgress
  campaignEffects: ActivityCampaignEffect[]
  campaignDropRewardIds: string[]
}

export type LiveBattleCardInfo = {
  position: number
  cardId: string
  level: number
  rarity: number
  lightFanAmount: number
  middleFanAmount: number
  heavyFanAmount: number
  evolutionLevel: number
}

export type LiveBattleQuestInfo = {
  id: string
  stageId: string
  musicId: string
  musicChartPatternId: string
  position1AttributeType: AttributeType
  position2AttributeType: AttributeType
  position3AttributeType: AttributeType
  position4AttributeType: AttributeType
  position5AttributeType: AttributeType
  activeSkillWeightPermil: number
  specialSkillWeightPermil: number
  skillStaminaWeightPermil: number
  staminaRecoveryWeightPermil: number
  beatDanceWeightPermil: number
  beatVocalWeightPermil: number
  beatVisualWeightPermil: number
  maxCapacity: number
  mentalThreshold: number
  questPressureId: string
  questCharacterAdvantageId: string
  questAudienceAdvantageId: string
  moodType: MoodType
  liveBonusGroupId: string
  liveSkipType: LiveSkipType
}

export type LiveCardInfo = {
  position: number
  cardId: string
  level: number
  rarity: number
  evolutionLevel: number
}

export type LiveCardResult = {
  cardId: string
  totalScore: string
}

export type LiveCharacterAssetInfo = {
  characterId: string
  costumeId: string
  hairId: string
}

export type LiveDeckCard = {
  index: number
  cardId: string
  displayCharacterId: string
  displayCostumeId: string
  level: number
  rarity: number
  vocal: string
  dance: string
  visual: string
  stamina: string
  startStamina: string
  mental: string
  technique: string
  skillLevel1: number
  skillLevel2: number
  skillLevel3: number
  audienceAmount: number
  skills: LiveDeckCardSkill[]
  isBuddy: boolean
  isFriendBuddy: boolean
  displayHairId: string
  isTourScout: boolean
  evolutionLevel: number
  skillLevel4: number
}

export type LiveDeckCardSkill = {
  index: number
  skillId: string
  skillLevel: number
  possessionType: SkillPossessionType
  liveAbilityId: string
  liveAbilityLevel: number
  rewrittenEfficacyIds: string[]
}

export type LiveRankingInfo = {
  userId: string
  name: string
  managerLevel: number
  point: string
  rank: number
  cardInfos: LiveCardInfo[]
  emblemId: string
  deckName: string
}

export type LiveUserInfo = {
  index: number
  userId: string
  name: string
  emblemId: string
  userDeck: LiveUserDeck
  userResult: LiveUserResult
  isNpc: boolean
}

export type LoveInfo = {
  loveId: string
  description: string
  characterId: string
  costumeId: string
  lastPlayTime: string
  storyEndInfos: LoveStoryEndInfo[]
  type: LoveType
  startTime: string
  endTime: string
  unlockConditionId: string
  isUnlocked: boolean
  assetId: string
  eventMissionIds: string[]
  limitedEventMissionIds: string[]
  isLessonRewardMax: boolean
  isUnplayed: boolean
  hasHiddenFavorabilityObtainItem: boolean
  order: number
  mainCharacterInfo: LoveMainCharacterInfo
  baseType: LoveBaseType
  isHideManagerVoiceSwitch: boolean
}

export type LoveItemInfo = {
  storyReadItemId: string
  hiddenFavorabilityObtainItemId: string
  lessonPromoteItemId: string
}

export type LoveLoadResponse = {
  storyEpisodeIds: string[]
  commonResponse: CommonResponse
}

export type LoveMainCharacterInfo = {
  characterId: string
  costumeId: string
  assetId: string
  color: string
}

export type LoveResetResponse = {
  storyEpisodeIds: string[]
  commonResponse: CommonResponse
}

export type LoveSaveDataInfo = {
  slotNumber: number
  saveTime: string
  latestStoryEpisodeId: string
  name: string
}

export type LoveTopResponse = {
  loveName: string
  playerName: string
  exp: string
  lessonProgress: LoveLessonProgress
  storyEpisodeIds: string[]
  saveInfo: LoveSaveInfo
  itemInfo: LoveItemInfo
  eventMissionInfos: EventMissionInfo[]
  limitedEventMissionInfos: EventMissionInfo[]
  hiddenFavorability: string
  storyEndInfos: LoveStoryEndInfo[]
  loveLevelInfos: LoveLevelInfo[]
  bannerAssetId: string
  noticeInfo: NoticeInfo
  expAssetId: string
  mainCharacterInfo: LoveMainCharacterInfo
  loveSimpleName: string
  commonResponse: CommonResponse
}

export type MarathonAccessoryInfo = {
  accessoryId: string
  categoryType: AccessoryCategoryType
  param1Permil: number
  param1Value: number
  param2Permil: number
  param2Value: number
}

export type MarathonBoxGachaInfo = {
  boxGachaId: string
  boxGachaItems: BoxGachaItem[]
  isFull: boolean
  currentMarathonPoint: number
  unlocked: boolean
  remainResetCount: number
}

export type MarathonInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  exchangeEndTime: string
  initialStamina: number
  staminaRecoveryMinutes: number
  assetId: string
  boxGachaGroupId: string
  eventStoryInfo: EventStoryInfo
  eventMissionInfo: EventMissionInfo
  noticeInfo: NoticeInfo
  staminaRecoveryItemId: string
  questUnlockItemId: string
  type: MarathonType
  raidStaminaRecoveryItemId: string
  initialRaidStamina: number
  raidStaminaRecoveryMinutes: number
  raidQuest: MarathonRaidQuest
  raidRequiredPointFriendDiscountRatePermil: number
  raidLimitHours: number
  ladderInfo: LadderInfo
}

export type MarathonLiveBonusInfo = {
  liveBonusId: string
  amount: number
}

export type MarathonPhotoAbilityInfo = {
  photoAbilityId: string
  effectValue: string
}

export type MarathonQuestInfo = {
  marathonQuestId: string
  unlocked: boolean
  difficultyLevelInfos: MarathonQuestDifficultyLevelInfo[]
  lastChallengeDifficultyNumber: number
  isUnlockable: boolean
  isPlayable: boolean
  playableCount: number
}

export type MarathonQuestStartResponse = {
  marathonId: string
  marathonQuestId: string
  marathonQuestDifficultyNumber: number
  result: LiveResult
  reward: QuestReward
  rankType: ResultRankType
  rankPlus: number
  rankPatterns: QuestRankPattern[]
  highestClearRankType: ResultRankType
  highestScore: string
  addMarathonPoint: number
  friendApplyToBuddyInfo: FriendApplyToBuddyInfo
  commonResponse: CommonResponse
}

export type MarathonRaidHostUser = {
  name: string
  isFriend: boolean
  favoriteCard: FavoriteCardInfo
  favoritePhoto: FavoritePhotoInfo
  decorationId: string
  userId: string
}

export type MarathonRaidJoinResponse = {
  marathonId: string
  difficultyNumber: number
  difficultyLevel: number
  result: LiveResult
  joinRewards: RewardResult[]
  raidEndTime: string
  raidResult: MarathonRaidResult
  beforeScore: string
  rankPatterns: QuestRankPattern[]
  finished: boolean
  liveBonusId: string
  commonResponse: CommonResponse
}

export type MarathonRaidQuest = {
  id: string
  stageId: string
  name: string
  description: string
  unlockConditionId: string
  unlockDescription: string
  musicId: string
  musicChartPatternId: string
  position1AttributeType: AttributeType
  position2AttributeType: AttributeType
  position3AttributeType: AttributeType
  position4AttributeType: AttributeType
  position5AttributeType: AttributeType
  activeSkillWeightPermil: number
  specialSkillWeightPermil: number
  skillStaminaWeightPermil: number
  staminaRecoveryWeightPermil: number
  beatDanceWeightPermil: number
  beatVocalWeightPermil: number
  beatVisualWeightPermil: number
  questPressureId: string
  questCharacterAdvantageId: string
  questAudienceAdvantageId: string
  moodType: MoodType
  maxCapacity: number
  liveBonusGroupId: string
  unlocked: boolean
  difficulties: MarathonRaidQuestDifficulty[]
}

export type MarathonRaidQuestDifficulty = {
  raidQuestId: string
  difficultyNumber: number
  difficultyLevel: number
  mentalThreshold: number
  clearScore: string
  requiredRaidStamina: number
  hostRewardId: string
  joinRewardId: string
  mvpRewardId: string
  unlockConditionId: string
  rewardManagerExp: number
  rewardCardExp: number
  cleared: boolean
  unlocked: boolean
  liveSkipType: LiveSkipType
}

export type MarathonRaidRankedUser = {
  rank: number
  userName: string
  managerLevel: number
  score: string
  emblemId: string
  userId: string
  cardInfos: LiveCardInfo[]
}

export type MarathonRaidStartResponse = {
  marathonId: string
  difficultyNumber: number
  difficultyLevel: number
  result: LiveResult
  reward: QuestReward
  hostRewards: RewardResult[]
  raidEndTime: string
  raidResult: MarathonRaidResult
  beforeScore: string
  rankPatterns: QuestRankPattern[]
  liveBonusId: string
  commonResponse: CommonResponse
}

export type MarketItem = {
  number: number
  consumptionResourceType: ResourceType
  baseAmount: number
  discountAmount: number
  rewardId: string
  discountRatePermil: number
  soldOut: boolean
  unlockConditionId: string
}

export type MessageGroupInfo = {
  messageGroupId: string
  latestTimelineInfo: TimelineInfo
}

export type MosaicInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  eventMissionInfo: EventMissionInfo
  assetId: string
  noticeInfo: NoticeInfo
  bgmAssetId: string
  backgroundColorCode1: string
  backgroundColorCode2: string
  consumptionItemId: string
  panelInfos: MosaicPanelInfo[]
  totalConsumptionRewardInfos: MosaicTotalConsumptionRewardInfo[]
}

export type MosaicPanelInfo = {
  number: number
  rewardId: string
  consumptionAmount: string
  exchangeLimit: number
  leftCount: number
  unlockConditionId: string
  name: string
  description: string
  unlocked: boolean
}

export type MosaicTotalConsumptionRewardInfo = {
  number: number
  rewardId: string
  totalConsumptionAmount: string
}

export type PhotoActivity = {
  photoActivityId: string
  isUnlocked: boolean
}

export type PhotoContestActivity = {
  id: string
  isUnlocked: boolean
}

export type PhotoContestInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  aggregateEndTime: string
  exchangeEndTime: string
  assetId: string
  eventStoryInfo: EventStoryInfo
  eventExchangeBoothInfo: EventExchangeBoothInfo
  noticeInfo: NoticeInfo
  totalBestShootEvaluationPoint: string
  totalBestShootEvaluationPointTime: string
  rank: string
  rankingRewardInfos: PhotoContestRankingRewardInfo[]
  sectionInfos: PhotoContestSectionInfo[]
  activities: PhotoContestActivity[]
  musics: PhotoContestQuestMusic[]
  stages: PhotoContestQuestStage[]
  dailyRewardResults: RewardResult[]
  onceShootingSubmitLimitCount: number
  currentPhotoAmount: string
  submittingItemId: string
  creatingItemId: string
}

export type PhotoContestPhotoInfo = {
  assetId: string
  sectionId: string
  evaluationPoint: string
  isBest: boolean
  shootingTime: string
  fixedCreatePhotoRarity: string
  evaluationRankType: PhotoContestEvaluationRankType
}

export type PhotoContestQuestMusic = {
  id: string
  isUnlocked: boolean
}

export type PhotoContestQuestStage = {
  id: string
  isUnlocked: boolean
}

export type PhotoContestRankingInfo = {
  userId: string
  name: string
  managerLevel: number
  totalBestShootEvaluationPoint: string
  rank: number
  emblemId: string
  bestPhotoInfos: PhotoContestPhotoInfo[]
}

export type PhotoContestRankingRewardInfo = {
  rankFrom: number
  rewardId: string
}

export type PhotoContestSectionInfo = {
  id: string
  sectionRewardInfos: PhotoContestSectionRewardInfo[]
  bestShootAssetId: string
  bestShootEvaluationPoint: string
  totalSectionEvaluationPoint: string
  isUnlocked: boolean
  advanceGuideInfos: PhotoContestSectionAdvanceGuideInfo[]
}

export type PhotoContestSectionRewardInfo = {
  sectionRewardId: string
  canReceive: boolean
  haveReceived: boolean
}

export type PhotoContestSubmitShootingResponse = {
  evaluationPoint: string
  isBest: boolean
  totalSectionEvaluationPoint: string
  totalBestShotEvaluationPoint: string
  nextPhotoImageId: string
  newCanReceiveSectionRewardIds: string[]
  rank: string
  evaluationRankType: PhotoContestEvaluationRankType
  baseGuideInfos: PhotoContestSectionBaseGuideInfo[]
  advanceGuideInfos: PhotoContestSectionAdvanceGuideInfo[]
  fixedCreatePhotoRarity: string
  commonResponse: CommonResponse
}

export type PhotoExpression = {
  photoExpressionId: string
  isUnlocked: boolean
}

export type PhotoListSpecialShootingResponse = {
  activities: SpecialPhotoActivityInfo[]
  musics: SpecialPhotoQuestMusicInfo[]
  name: string
  itemIds: string[]
  commonResponse: CommonResponse
}

export type PhotoMusic = {
  musicId: string
  isUnlocked: boolean
}

export type PhotoStage = {
  stageId: string
  isUnlocked: boolean
}

export type ProfileFindUserResponse = {
  userId: string
  name: string
  managerExp: string
  managerLevel: number
  divisionId: string
  guildId: string
  emblemId: string
  favoriteCard: FavoriteCardInfo
  favoritePhoto: FavoritePhotoInfo
  favoriteCharacterIds: string[]
  message: string
  birthMonth: number
  birthDay: number
  backgroundType: ProfileBackgroundType
  layoutType: ProfileLayoutType
  hierarchyCurrentDetailGradeId: string
  hierarchyCurrentRank: number
  decorationId: string
  informationType: ProfileInformationType
  colorType: ProfileColorType
  commonResponse: CommonResponse
}

export type ProfileInfo = {
  userId: string
  name: string
  managerExp: string
  managerLevel: number
  emblemId: string
  favoriteCard: FavoriteCardInfo
  favoritePhoto: FavoritePhotoInfo
  favoriteCharacterIds: string[]
  backgroundType: ProfileBackgroundType
  layoutType: ProfileLayoutType
  lastLoginTime: string
  decorationId: string
  informationType: ProfileInformationType
  colorType: ProfileColorType
  buddyCardInfo: BuddyCardInfo
}

export type ProfileTopResponse = {
  hierarchyCurrentDetailGradeId: string
  hierarchyCurrentRank: number
  friendProfiles: ProfileInfo[]
  commonResponse: CommonResponse
}

export type Promotion = {
  id: string
  name: string
  subName: string
  unlockConditionId: string
  isUnlocked: boolean
  activityPerformanceId: string
  level: number
  exp: number
  nextLevelRequiredExp: number
  requiredStamina: number
  nextLevelUnlockConditionId: string
  isNextLevelUnlocked: boolean
  stepConsumptionStamina: number
  stepRewardGold: number
  stepRewardCardEnhanceItem: number
  stepAdditionalRewardId: string
  multiStepRewardId: string
  maxFanAmount: number
  viewConditionId: string
  subGenre: string
  multiStepCampaignDropRewardIds: string[]
}

export type PromotionProgress = {
  activityPromotionId: string
  activityPromotionName: string
  activityPromotionSubName: string
  activityPromotionLevel: number
  characters: ActivityCharacterInfo[]
  startTime: string
  finishTime: string
  stepConsumptionStamina: number
  completedStep: number
  stepRewardGold: number
  stepRewardManagerExp: number
  stepRewardActivityExp: number
  stepRewardCharacterActivityExp: number
  stepAdditionalRewardId: string
  multiStepRewardId: string
  stepRewardCardEnhanceItem: number
  rewardGoldAmount: number
  rewardCardEnhanceItemAmount: number
  rewards: ActivityPromotionReward[]
  nextActivityLevelUpTime: string
  campaignEffects: ActivityCampaignEffect[]
  activityPerformanceId: string
  subGenre: string
  multiStepCampaignDropRewardIds: string[]
}

export type PvpRewardInfo = {
  rankFrom: string
  rankingRewardId: string
  challengeRewardId: string
  hierarchyVariablePoint: string
}

export type QuestAreaGroupInfo = {
  areaGroupId: string
  areas: QuestAreaInfo[]
}

export type QuestAreaInfo = {
  areaId: string
  unlocked: boolean
  quests: QuestInfo[]
}

export type QuestBulkDailyDeckPositionInfo = {
  position: number
  cardId: string
}

export type QuestBulkDailyInfo = {
  questId: string
  deckPositions: QuestBulkDailyDeckPositionInfo[]
  rankType: ResultRankType
  rankPlus: number
}

export type QuestBulkDailyResultInfo = {
  questId: string
  playCount: number
  deckPositions: QuestBulkDailyDeckPositionInfo[]
  reward: QuestReward
  rankType: ResultRankType
  rankPlus: number
}

export type QuestClearInfo = {
  score: string
  userName: string
  deckName: string
  cards: LiveCardInfo[]
  emblemId: string
  userId: string
  rankType: ResultRankType
  plus: number
  isLiveResultDetailAvailable: boolean
}

export type QuestContestRankInfo = {
  rank: number
  isNPC: boolean
  score: string
  userName: string
  deckName: string
  cards: LiveCardInfo[]
  emblemId: string
  userId: string
  isLiveResultDetailAvailable: boolean
}

export type QuestInfo = {
  questId: string
  cleared: boolean
  highestScore: string
  rankType: ResultRankType
  plus: number
  highestRank: number
  isPlayable: boolean
  playableCount: number
  opponentInfo: QuestOpponentInfo
  campaignDropRewardIds: string[]
}

export type QuestListTowerRankingResponse = {
  selfHighestRank: number
  selfQuestId: string
  ranks: QuestTowerRankInfo[]
  totalQuestNum: number
  commonResponse: CommonResponse
}

export type QuestRewardCard = {
  cardId: string
  funAmount: string
  exp: number
  isExpTruncated: boolean
}

export type QuestStartResponse = {
  questId: string
  result: LiveResult
  reward: QuestReward
  rankType: ResultRankType
  rankPlus: number
  rankPatterns: QuestRankPattern[]
  highestRank: number
  highestScore: string
  hierarchyChangeInfo: HierarchyChangeInfo
  friendApplyToBuddyInfo: FriendApplyToBuddyInfo
  commonResponse: CommonResponse
}

export type QuestTopResponse = {
  mainAreaGroups: QuestAreaGroupInfo[]
  contestTotalScore: string
  hasUnplayedContest: boolean
  pvpInfo: QuestTopPvpInfo
  currentTowerQuestId: string
  isDailyPlayable: boolean
  gvgInfo: CurrentGvgInfo
  hierarchyNotiInfo: HierarchyNotiInfo
  dailyAreas: QuestAreaInfo[]
  towerArea: QuestAreaInfo
  contestArea: QuestAreaInfo
  isTowerTopUnlocked: boolean
  bulkDailyInfos: QuestBulkDailyInfo[]
  commonResponse: CommonResponse
}

export type QuestTowerAreaInfo = {
  area: QuestAreaInfo
  currentTowerQuestId: string
}

export type QuestTowerRankInfo = {
  rank: number
  questId: string
  userName: string
  deckName: string
  cards: LiveCardInfo[]
  emblemId: string
  userId: string
}

export type RaceAccessoryInfo = {
  accessoryId: string
  categoryType: AccessoryCategoryType
  param1Permil: number
  param1Value: number
  param2Permil: number
  param2Value: number
}

export type RaceDailyRankingUserInfo = {
  userId: string
  userName: string
  score: string
  emblemId: string
  rank: number
}

export type RaceInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  exchangeEndTime: string
  aggregateEndTime: string
  assetId: string
  eventStoryInfo: EventStoryInfo
  eventMissionInfo: EventMissionInfo
  noticeInfo: NoticeInfo
  racePointItemId: string
  raceMedalItemId: string
  raceLiveBonusResetItemId: string
  raceAreaInfos: RaceAreaInfo[]
  requiredCardCoolTimeRacePointAmount: number
  raceRankGradeInfos: RaceRankGradeInfo[]
  livePanelDifficultyNumber: number
  cardCoolTimeMinutes: number
  raceLiveBonusGroupId: string
}

export type RaceLiveBonusInfo = {
  liveBonusId: string
  level: number
}

export type RaceLiveQuestInfo = {
  raceQuestId: string
  currentClearDifficultyNumber: number
  beforeClearDifficultyNumber: number
  difficultyLevelInfos: RaceLiveQuestDifficultyLevelInfo[]
}

export type RaceOpponentProgressInfo = {
  userId: string
  name: string
  displayCharacterId: string
  clearPanelCount: number
  rank: number
  liveBonusInfos: RaceLiveBonusInfo[]
}

export type RacePhotoAbilityInfo = {
  photoAbilityId: string
  effectValue: string
}

export type RaceRankingInfo = {
  userId: string
  name: string
  managerLevel: number
  clearPanelCount: number
  rank: number
  emblemId: string
}

export type RaceUserCardCoolTimeInfo = {
  cardId: string
  coolTime: string
}

export type Refresh = {
  id: string
  name: string
  requiredMinutes: number
  unlockConditionId: string
  isUnlocked: boolean
  level: number
  exp: number
  nextLevelRequiredExp: number
  levels: RefreshLevel[]
  viewConditionId: string
}

export type RefreshLevel = {
  level: number
  name: string
  requiredGold: number
  unlockConditionId: string
  isUnlocked: boolean
  activityPerformanceId: string
  recoveryAmount: number
  viewConditionId: string
  subGenre: string
}

export type RefreshProgress = {
  activityRefreshId: string
  activityRefreshName: string
  activityRefreshSubName: string
  activityRefreshLevel: number
  characters: ActivityCharacterInfo[]
  startTime: string
  finishTime: string
  requiredMinutes: number
  recoveryAmount: number
  activityPerformanceId: string
  subGenre: string
}

export type ShelfAlbumEpisodeInfo = {
  episode: number
  assetId: string
  storyId: string
  viewConditionId: string
  unlockConditionId: string
  isUnlocked: boolean
}

export type ShelfAlbumInfo = {
  albumId: string
  assetId: string
  unlockConditionId: string
  isUnlocked: boolean
  snsText: string
  isNew: boolean
  name: string
  bgmAssetId: string
}

export type ShelfInfo = {
  name: string
  startTime: string
  endTime: string
  assetId: string
  eventMissionInfo: EventMissionInfo
  noticeInfo: NoticeInfo
  photoCreatingItemId: string
  albumInfos: ShelfAlbumInfo[]
}

export type ShelfPhotoInfo = {
  assetId: string
  shootingTime: string
  episode: number
  mainCharacterId: string
}

export type ShopConditionReward = {
  number: number
  conditionId: string
  rewardId: string
  statusType: ShopConditionRewardStatusType
}

export type ShopInfo = {
  id: string
  name: string
  type: ShopType
  order: number
  colorCode: string
  backgroundColorCode: string
  noticeInfo: NoticeInfo
  viewConditionId: string
  thumbnailAssetId: string
  costumeId: string
  resetTimingType: ResetTimingType
  nextResetTime: string
  isPurchased: boolean
  progress: number
  maxProgress: number
  bannerAssetId: string
}

export type ShopItem = {
  id: string
  name: string
  description: string
  productId: string
  consumptionId: string
  rewardId: string
  thumbnailAssetId: string
  purchaseLimit: number
  leftCount: number
  order: number
  viewConditionId: string
  pushSegment: string
  resetTimingType: ResetTimingType
  nextResetTime: string
  unlockConditionId: string
  unlocked: boolean
  colorCode: string
  backgroundColorCode: string
}

export type ShopLoginBonus = {
  day: number
  rewardId: string
  isReceived: boolean
}

export type ShowcaseApplyMysetResponse = {
  frameId: string
  layoutInfo: ShowcaseLayoutInfo
  commonResponse: CommonResponse
}

export type ShowcaseFrameInfo = {
  id: string
  isUnlocked: boolean
}

export type ShowcaseSelfInfo = {
  number: number
  defaultName: string
  unlockConditionId: string
  isUnlocked: boolean
  layoutInfo: ShowcaseLayoutInfo
}

export type ShowcaseTopResponse = {
  shops: ShopInfo[]
  dokanInfos: DokanInfo[]
  showcaseInfos: ShowcaseSelfInfo[]
  totalLikedCount: string
  mysetInfos: ShowcaseMysetInfo[]
  frameInfos: ShowcaseFrameInfo[]
  topDokanInfos: DokanInfo[]
  showcaseMusicIds: string[]
  commonResponse: CommonResponse
}

export type SpecialHomeActionInfo = {
  characterId: string
  specialHomeActionDetails: SpecialHomeActionDetail[]
}

export type SpecialHomeMotionInfo = {
  characterId: string
  idleMotionAssetId: string
  idleAdditionMotionAssetId: string
}

export type SpecialHomePositionInfo = {
  homeCostumeIds: string[]
  trainingCostumeIds: string[]
  activityCostumeIds: string[]
  idolCostumeIds: string[]
  specialHomePositionId: string
  specialHomeMotionInfos: SpecialHomeMotionInfo[]
}

export type SpecialPhotoActivityInfo = {
  isUnlocked: boolean
  order: number
  name: string
  thumbAssetId: string
  photoStageId: string
  photoShootingMotionSetId: string
  isDeleteCharacter: boolean
  costumeTypeIds: string[]
  forceCostumeTypeId: string
  characterIds: string[]
  unlockConditionId: string
  actionType: PhotoShootingActionType
  viewConditionId: string
}

export type SpecialPhotoQuestMusicInfo = {
  musicId: string
  isUnlocked: boolean
  order: number
  costumeTypeIds: string[]
  characterIds: string[]
  photoStages: SpecialPhotoQuestStage[]
  unlockConditionId: string
  viewConditionId: string
}

export type SpecialPhotoQuestStage = {
  stageId: string
  isUnlocked: boolean
  maxCapacity: number
  unlockConditionId: string
  order: number
  viewConditionId: string
}

export type SpecialPhotoShootingInfo = {
  specialPhotoShootingId: string
  isUnlocked: boolean
  unlockConditionId: string
}

export type StoryReadAnniversaryStoryResponse = {
  rewards: RewardResult[]
  newTitleBackgroundId: string
  commonResponse: CommonResponse
}

export type TimelineInfo = {
  messageGroupId: string
  timelineId: string
  messageId: string
  arrivedTime: string
  selectMessageDetailIds: string[]
  lastMessageDetailId: string
  lastMessageDetailTime: string
  finished: boolean
}

export type TourDifficultyInfo = {
  tourDifficultyId: string
  tourDifficultyNumber: number
  managerLevel: number
  unlockConditionId: string
  unlocked: boolean
}

export type TourEffectActivity = {
  itemId: string
  amount: number
  activityPerformanceId: string
  activityPromotionSubGenre: string
}

export type TourEffectLive = {
  musicId: string
  name: string
  stageId: string
  musicChartPatternId: string
  maxCapacity: number
  mentalThreshold: number
  clearScore: string
  rewardId: string
  difficultyLevel: number
  tourQuestSettingId: string
  liveSkipType: LiveSkipType
}

export type TourEffectPvp = {
  musicId: string
  name: string
  stageId: string
  musicChartPatternId: string
  maxCapacity: number
  mentalThreshold: number
  clearScore: string
  opponentInfo: TourOpponentInfo
  scoutInfo: TourScoutInfo
  rewardId: string
  tourQuestSettingId: string
  liveSkipType: LiveSkipType
}

export type TourEffectRefresh = {
  amountPermil: number
  activityPerformanceId: string
  activityRefreshSubGenre: string
}

export type TourLiveBonusInfo = {
  liveBonusId: string
  name: string
  liveAbilityId: string
  liveAbilityLevel: number
  powerPermil: number
}

export type TourRankingInfo = {
  userId: string
  name: string
  managerLevel: number
  point: string
  rank: number
  emblemId: string
}

export type TourRankingRewardInfo = {
  rankFrom: number
  rewardId: string
}

export type UserHierarchyInfo = {
  currentDetailGradeId: string
  currentRank: number
  currentPoint: string
}

export type AccessoryEnhanceRequest = {
  accessoryId: string
  count: number
  materialType: AccessoryEnhanceMaterialType
}

export type AccessoryEnhanceResponse = {
  isUnsetLeague: boolean
  commonResponse: CommonResponse
}

export type AccessoryLimitBreakRequest = {
  accessoryId: string
  isInUse: boolean
  isInUseLeague: boolean
}

export type AccessoryLimitBreakResponse = {
  commonResponse: CommonResponse
}

export type AccessorySellRequest = {
  accessoryId: string
  count: number
}

export type AccessorySellResponse = {
  commonResponse: CommonResponse
}

export type ActivityStartFanEventRequest = {
  activityFanEventId: string
  characterIds: string[]
  costumeIds: string[]
  itemIds: string[]
  hairIds: string[]
}

export type ActivityStartFanEventResponse = {
  progress: FanEventProgress
  commonResponse: CommonResponse
}

export type ActivityLoadFanEventResponse = {
  progress: FanEventProgress
  commonResponse: CommonResponse
}

export type ActivityFetchFanEventStepsRequest = {
  steps: number[]
}

export type ActivityFetchFanEventStepsResponse = {
  characterSteps: FanEventCharacterSteps[]
  commonResponse: CommonResponse
}

export type ActivitySaveFanEventRequest = {
  characterResults: FanEventCharacterResult[]
  useItemId: string
  execCheer: boolean
}

export type ActivitySaveFanEventResponse = {
  characterSteps: FanEventCharacterSteps[]
  commonResponse: CommonResponse
}

export type ActivityFinishFanEventResponse = {
  activityPoint: number
  rankType: ResultRankType
  plus: number
  rewards: Reward[]
  rankPatterns: FanEventRankPattern[]
  activityLevelProgress: ActivityLevelProgress
  characters: ActivityCharacterInfo[]
  campaignEffects: ActivityCampaignEffect[]
  campaignDropRewards: Reward[]
  commonResponse: CommonResponse
}

export type ActivityGetFanEventRankingRequest = {
  activityFanEventId: string
}

export type ActivityGetFanEventRankingResponse = {
  selfRank: string
  selfScore: string
  rankInfos: FanEventRankingInfo[]
  commonResponse: CommonResponse
}

export type ActivityStartPromotionRequest = {
  activityPromotionId: string
  characterIds: string[]
  costumeIds: string[]
  hairIds: string[]
}

export type ActivityStartPromotionResponse = {
  progress: PromotionProgress
  commonResponse: CommonResponse
}

export type ActivityLoadPromotionResponse = {
  progress: PromotionProgress
  commonResponse: CommonResponse
}

export type ActivityUsePromotionItemRequest = {
  itemId: string
  amount: number
}

export type ActivityUsePromotionItemResponse = {
  progress: PromotionProgress
  commonResponse: CommonResponse
}

export type ActivityReceivePromotionRewardResponse = {
  rewards: Reward[]
  bonusRewards: Reward[]
  completedStep: number
  progress: PromotionProgress
  activityLevelProgress: ActivityLevelProgress
  campaignEffects: ActivityCampaignEffect[]
  campaignDropRewards: Reward[]
  commonResponse: CommonResponse
}

export type ActivityFetchPromotionStepsRequest = {
  step: number
}

export type ActivityFetchPromotionStepsResponse = {
  steps: PromotionStep[]
  commonResponse: CommonResponse
}

export type ActivityFinishPromotionResponse = {
  rewards: Reward[]
  bonusRewards: Reward[]
  activityLevelProgress: ActivityLevelProgress
  totalSteps: number
  characters: ActivityCharacterInfo[]
  campaignEffects: ActivityCampaignEffect[]
  campaignDropRewards: Reward[]
  commonResponse: CommonResponse
}

export type ActivityStartRefreshRequest = {
  activityRefreshId: string
  activityRefreshLevel: number
  characterIds: string[]
  costumeIds: string[]
  hairIds: string[]
}

export type ActivityStartRefreshResponse = {
  progress: RefreshProgress
  commonResponse: CommonResponse
}

export type ActivityLoadRefreshResponse = {
  progress: RefreshProgress
  commonResponse: CommonResponse
}

export type ActivityUseRefreshItemRequest = {
  itemId: string
  amount: number
}

export type ActivityUseRefreshItemResponse = {
  progress: RefreshProgress
  commonResponse: CommonResponse
}

export type ActivityFinishRefreshResponse = {
  activityLevelProgress: ActivityLevelProgress
  characters: ActivityCharacterInfo[]
  commonResponse: CommonResponse
}

export type ActivityReceiveLessonRewardResponse = {
  rewards: Reward[]
  progress: ActivityLessonProgress
  campaignEffects: ActivityCampaignEffect[]
  campaignDropRewards: Reward[]
  commonResponse: CommonResponse
}

export type ActivityPromoteLessonRequest = {
  isFree: boolean
  useItemId: string
}

export type ActivityPromoteLessonResponse = {
  rewards: Reward[]
  progress: ActivityLessonProgress
  campaignEffects: ActivityCampaignEffect[]
  campaignDropRewards: Reward[]
  commonResponse: CommonResponse
}

export type FanEventCharacterSteps = {
  characterId: string
  steps: FanEventStep[]
}

export type FanEventStep = {
  step: number
  happenings: FanEventHappening[]
  itemEffects: FanEventItemEffect[]
}

export type FanEventHappening = {
  type: ActivityFanEventHappeningType
  characterId: string
}

export type FanEventItemEffect = {
  type: ItemType
  value: number
}

export type FanEventCharacterResult = {
  characterId: string
  stepResults: FanEventStepResult[]
}

export type FanEventStepResult = {
  step: number
  reductionMilliSeconds: string
  activityPoint: number
}

export type PromotionStep = {
  step: number
  rewards: ActivityPromotionReward[]
}

export type AdvertisementStartRequest = {
  watchAdType: WatchAdvertisementType
}

export type AdvertisementStartResponse = {
  commonResponse: CommonResponse
}

export type AdvertisementEndRequest = {
  watchAdType: WatchAdvertisementType
}

export type AdvertisementEndResponse = {
  commonResponse: CommonResponse
}

export type AnniversaryOutputTransitionLogRequest = {
  anniversaryId: string
  actionType: AnniversaryTransitionActionType
}

export type AnniversaryOutputTransitionLogResponse = {
  commonResponse: CommonResponse
}

export type AuthCreateRequest = {
  firebaseUID: string
}

export type AuthCreateResponse = {
  firebaseCustomToken: string
}

export type AuthLoginRequest = {
  firebaseIDToken: string
}

export type AuthLoginResponse = {
  gameAuthToken: string
  userPublic: UserPublic
  requiredFirebaseReauthenticate: boolean
}

export type AuthDeleteResponse = {
}

export type AuthRecreateRequest = {
  firebaseIDToken: string
}

export type AuthRecreateResponse = {
  firebaseCustomToken: string
}

export type BacksideTopRequest = {
  backsideId: string
}

export type BacksideTopResponse = {
  backsideInfo: BacksideInfo
  dokanInfos: DokanInfo[]
  commonResponse: CommonResponse
}

export type BacksideRankingRequest = {
  backsideId: string
}

export type BacksideRankingResponse = {
  rankingInfos: BacksideRankingInfo[]
  selfFinalScore: string
  selfRank: number
  commonResponse: CommonResponse
}

export type BacksideStageStartRequest = {
  backsideId: string
  number: number
  deckNumber: string
  difficultyNumber: number
}

export type BacksideStageStartResponse = {
  stageInfo: BacksideStageInfo
  execPanelLocationInfo: BacksideExecPanelLocationInfo
  halfwayLiveBonusChoices: BacksideLiveBonus[]
  halfwaySurpriseInfo: BacksideSurpriseInfo
  halfwayPracticeClearInfo: BacksidePracticeStageClearInfo
  isForceRetired: boolean
  commonResponse: CommonResponse
}

export type BacksideStageActionRequest = {
  backsideId: string
  pieceNumber: number
  radiusNumber: number
  panelNumber: number
  isSkip: boolean
}

export type BacksideStageActionResponse = {
  stageProgressInfo: BacksideStageProgressInfo
  liveBonusChoices: BacksideLiveBonus[]
  isScheduled: boolean
  liveInfo: BacksideLiveInfo
  practiceClearInfo: BacksidePracticeStageClearInfo
  finalClearInfo: BacksideFinalStageClearInfo
  surpriseInfo: BacksideSurpriseInfo
  isForceRetired: boolean
  commonResponse: CommonResponse
}

export type BacksideStageLiveBonusRequest = {
  backsideId: string
  liveBonusId: string
}

export type BacksideStageLiveBonusResponse = {
  stageProgressInfo: BacksideStageProgressInfo
  commonResponse: CommonResponse
}

export type BacksideStagePracticeUpdateRequest = {
  backsideId: string
  isUpdate: boolean
}

export type BacksideStagePracticeUpdateResponse = {
  commonResponse: CommonResponse
}

export type BacksideStageResetRequest = {
  backsideId: string
  isInGame: boolean
}

export type BacksideStageResetResponse = {
  commonResponse: CommonResponse
}

export type BacksideStageSurpriseFinishRequest = {
  backsideId: string
}

export type BacksideStageSurpriseFinishResponse = {
  stageProgressInfo: BacksideStageProgressInfo
  commonResponse: CommonResponse
}

export type BacksideStageDeckPositionChangeRequest = {
  backsideId: string
  deckPositionInfos: BacksideDeckPositionInfo[]
}

export type BacksideStageDeckPositionChangeResponse = {
  deckUserCharacters: UserCharacter[]
  deckDetailInfo: BacksideStageDeckDetailInfo
  scoreLiveDeckDetailInfo: BacksideStageDeckDetailInfo
  battleLiveDeckDetailInfo: BacksideStageDeckDetailInfo
  commonResponse: CommonResponse
}

export type BacksideInfo = {
  id: string
  name: string
  type: BacksideType
  startTime: string
  endTime: string
  aggregateEndTime: string
  exchangeEndTime: string
  assetId: string
  eventStoryInfo: EventStoryInfo
  eventMissionInfo: EventMissionInfo
  eventExchangeBoothInfo: EventExchangeBoothInfo
  noticeInfo: NoticeInfo
  areaInfo: BacksideAreaInfo
  rankingRewardInfos: BacksideRankingRewardInfo[]
  realScore: string
  realScoreTime: string
  rank: string
  stageStamina: string
  stageStaminaUpdatedTime: string
  stageStaminaRecoveryMinutes: number
}

export type BacksideAreaInfo = {
  areaId: string
  name: string
  type: BacksideAreaType
  assetId: string
  backsideDifficultyInfos: BacksideDifficultyInfo[]
  currentDifficultyNumber: number
  lastChallengeDifficultyNumber: number
  difficultyType: BacksideDifficultyType
}

export type BacksidePracticeStageTotalResultInfo = {
  practiceRankType: BacksidePracticeRankType
  practiceRankPlus: number
  practiceScore: string
  practiceLiveBonusInfos: BacksideLiveBonusInfo[]
}

export type BacksidePracticeStageResultInfo = {
  practiceRankType: BacksidePracticeRankType
  practiceRankPlus: number
  practiceScore: string
  deckCardInfos: BacksideDeckCardInfo[]
  liveBonuses: BacksideLiveBonus[]
}

export type BacksideFinalStageResultInfo = {
  totalPracticeRankType: BacksidePracticeRankType
  totalPracticeRankPlus: number
  totalPracticeScore: string
  finalRankType: ResultRankType
  finalRankPlus: number
  finalScore: string
  deckCardInfos: BacksideDeckCardInfo[]
  allLiveBonusInfos: BacksideLiveBonusInfo[]
  practiceScore: string
}

export type BacksidePracticeStageHalfwayInfo = {
  passedActionCount: number
  practiceScore: string
  deckCardInfos: BacksideDeckCardInfo[]
  liveBonuses: BacksideLiveBonus[]
}

export type BacksideFinalStageHalfwayInfo = {
  passedActionCount: number
  deckCardInfos: BacksideDeckCardInfo[]
  allLiveBonusInfos: BacksideLiveBonusInfo[]
  practiceScore: string
  totalPracticeScore: string
}

export type BacksideLiveBonusInfo = {
  stageNumber: number
  stageType: BacksideStageType
  stageName: string
  liveBonuses: BacksideLiveBonus[]
}

export type BacksideStageDeckDetailInfo = {
  deckCardDetailInfos: BacksideDeckCardDetailInfo[]
  deckCardStaminaInfos: BacksideDeckCardStaminaInfo[]
  baseDeckOverallValue: string
}

export type BacksideStageInfo = {
  panelInfos: BacksidePanelInfo[]
  scheduleInfos: BacksideScheduleInfo[]
  nextActionCount: string
  practiceScore: string
  liveBonuses: BacksideLiveBonus[]
  allLiveBonusInfos: BacksideLiveBonusInfo[]
  cardLiveAbilityInfos: BacksideCardLiveAbilityInfo[]
  totalPracticeScore: string
  deckUserCharacters: UserCharacter[]
  deckDetailInfo: BacksideStageDeckDetailInfo
  scoreLiveDeckDetailInfo: BacksideStageDeckDetailInfo
  battleLiveDeckDetailInfo: BacksideStageDeckDetailInfo
}

export type BacksideStageProgressInfo = {
  panelInfos: BacksidePanelInfo[]
  nextActionCount: string
  practiceScore: string
  liveBonuses: BacksideLiveBonus[]
  execPanelLocationInfo: BacksideExecPanelLocationInfo
  totalPracticeScore: string
  deckUserCharacters: UserCharacter[]
  deckDetailInfo: BacksideStageDeckDetailInfo
  scoreLiveDeckDetailInfo: BacksideStageDeckDetailInfo
  battleLiveDeckDetailInfo: BacksideStageDeckDetailInfo
}

export type BacksidePanelInfo = {
  pieceNumber: number
  radiusNumber: number
  panelNumber: number
  panelType: BacksidePanelType
  panelAttributeType: BacksidePanelAttributeType
  panelRank: number
  panelGoalInfo: BacksidePanelGoalInfo
  panelLiveInfo: BacksidePanelLiveInfo
  panelPvpInfo: BacksidePanelPvpInfo
  panelStaminaInfo: BacksidePanelStaminaInfo
  haveExecuted: boolean
  canAction: boolean
}

export type BacksideOpponentInfo = {
  name: string
  managerLevel: number
  cardInfos: LiveBattleCardInfo[]
}

export type BacksidePanelStaminaInfo = {
  staminaConsumptionAmount: number
  staminaRecoveryAmount: number
}

export type BacksideScheduleInfo = {
  actionCount: number
  panelType: BacksidePanelType
}

export type BacksideLiveInfo = {
  result: LiveResult
  rankType: ResultRankType
  rankPlus: number
  rankPatterns: QuestRankPattern[]
}

export type BacksidePracticeStageClearInfo = {
  name: string
  practiceRankType: BacksidePracticeRankType
  practiceRankPlus: number
  practiceScore: string
  liveBonuses: BacksideLiveBonus[]
  lastPracticeRankType: BacksidePracticeRankType
  lastPracticeRankPlus: number
  lastPracticeScore: string
  lastLiveBonuses: BacksideLiveBonus[]
  firstClearRewardResults: RewardResult[]
  firstPracticeRankRewardResults: RewardResult[]
  loopPracticeRankRewardResults: RewardResult[]
}

export type BacksideFinalStageClearInfo = {
  name: string
  finalRankType: ResultRankType
  finalRankPlus: number
  finalScore: string
  firstClearRewardResults: RewardResult[]
  firstFinalRankRewardResults: RewardResult[]
  isBest: boolean
  newRank: string
  practiceScore: string
  totalPracticeScore: string
  loopFinalRankRewardResults: RewardResult[]
  difficultyAreaRewardResults: RewardResult[]
}

export type BacksideSurpriseInfo = {
  advAssetId: string
  liveBonus: BacksideLiveBonus
}

export type BacksideExecPanelLocationInfo = {
  pieceNumber: number
  radiusNumber: number
  panelNumber: number
}

export type BacksideDeckPositionInfo = {
  cardId: string
  newPosition: number
}

export type BirthdayTopResponse = {
  birthdayInfos: BirthdayInfo[]
  unwatchedAdvBirthdayIds: string[]
  receivableRewardBirthdayIds: string[]
  commonResponse: CommonResponse
}

export type BirthdaySetWatchedRequest = {
  birthdayId: string
}

export type BirthdaySetWatchedResponse = {
  unwatchAdvBirthdayIds: string[]
  receivableRewardBirthdayIds: string[]
  commonResponse: CommonResponse
}

export type BirthdayReceiveRewardResponse = {
  rewards: RewardResult[]
  commonResponse: CommonResponse
}

export type BirthdayOutputWatchedLogRequest = {
  birthdayId: string
  isSkip: boolean
}

export type BirthdayOutputWatchedLogResponse = {
  commonResponse: CommonResponse
}

export type BirthdaySetWatchedRemindInfoResponse = {
  commonResponse: CommonResponse
}

export type CardEnhanceRequest = {
  cardId: string
  level: number
}

export type CardEnhanceResponse = {
  commonResponse: CommonResponse
}

export type CardLimitBreakRequest = {
  cardId: string
  rarity: number
}

export type CardLimitBreakResponse = {
  commonResponse: CommonResponse
}

export type CardSkillEnhanceRequest = {
  cardId: string
  skillId: string
}

export type CardSkillEnhanceResponse = {
  commonResponse: CommonResponse
}

export type CardLiveAbilityEnhanceRequest = {
  cardId: string
  abilityId: string
}

export type CardLiveAbilityEnhanceResponse = {
  commonResponse: CommonResponse
}

export type CardActivityAbilityEnhanceRequest = {
  cardId: string
  abilityId: string
}

export type CardActivityAbilityEnhanceResponse = {
  commonResponse: CommonResponse
}

export type CardResetRequest = {
  cardId: string
}

export type CardResetResponse = {
  rewards: Reward[]
  commonResponse: CommonResponse
}

export type CardSetSupportRequest = {
  number: number
  cardId: string
}

export type CardSetSupportResponse = {
  commonResponse: CommonResponse
}

export type CardRemoveSupportRequest = {
  number: number
}

export type CardRemoveSupportResponse = {
  rewards: Reward[]
  commonResponse: CommonResponse
}

export type CardReleaseSupportRequest = {
  useStone: boolean
}

export type CardReleaseSupportResponse = {
  commonResponse: CommonResponse
}

export type CardRankUpRequest = {
  cardId: string
  rank: number
}

export type CardRankUpResponse = {
  commonResponse: CommonResponse
}

export type CardUpdateDisplayTypeRequest = {
  cardId: string
  displayType: CardDisplayType
}

export type CardUpdateDisplayTypeResponse = {
  commonResponse: CommonResponse
}

export type LoginBonusPackageItem = {
  shopItem: ShopItem
  loginBonuses: ShopLoginBonus[]
  isPurchased: boolean
}

export type ConditionRewardPackageItem = {
  shopItem: ShopItem
  conditionRewards: ShopConditionReward[]
  isPurchased: boolean
}

export type LiveResult = {
  userInfos: LiveUserInfo[]
  activatedPassiveSkills: LiveSkill[]
  charts: LiveChart[]
  totalAudienceAmount: number
  cleared: boolean
  isDisplayDetailAvailable: boolean
  preChart: LiveChart
  detailLogId: string
}

export type LiveUserDeck = {
  deckName: string
  cards: LiveDeckCard[]
  bonusSkills: LiveDeckCardSkill[]
}

export type LiveChart = {
  number: number
  chartType: MusicChartType
  attributeType: AttributeType
  beats: LiveBeat[]
  activatedSkill: LiveSkill
  activatedPassiveSkills: LiveSkill[]
  userStatuses: LiveUserStatus[]
  cardStatuses: LiveCardStatus[]
}

export type LiveBeat = {
  order: number
  cardIndex: number
  score: string
  isCritical: boolean
}

export type LiveSkill = {
  order: number
  cardIndex: number
  skillIndex: number
  activated: boolean
  stamina: string
  score: string
  isCritical: boolean
  details: LiveSkillDetail[]
  failures: LiveSkillFailure[]
  isComboBreak: boolean
  cardStatuses: LiveCardStatus[]
  userStatuses: LiveUserStatus[]
  descriptions: LiveLogDescription[]
}

export type LiveSkillFailure = {
  cardIndex: number
  type: SkillFailureType
  eachFailureTypes: SkillFailureType[]
}

export type LiveSkillDetail = {
  efficacyIndex: number
  value: string
  statusType: StatusEffectType
  targetCardIndexes: number[]
  effectiveChartCount: number
  targetCardInfos: LiveSkillDetailTargetCardInfo[]
}

export type LiveSkillDetailTargetCardInfo = {
  targetCardIndex: number
  value: string
}

export type LiveLogDescription = {
  message: string
}

export type LiveUserStatus = {
  userIndex: number
  currentComboCount: number
  totalScore: string
}

export type LiveCardStatus = {
  cardIndex: number
  stamina: string
  dance: string
  vocal: string
  visual: string
  effects: LiveCardStatusEffect[]
  skillStatuses: LiveSkillStatus[]
}

export type LiveCardStatusEffect = {
  statusType: StatusEffectType
  skillEfficacyType: SkillEfficacyType
  value: string
  grade: number
  remainEffectedChartCount: number
  maxGrade: number
  value2: string
  statusReasons: LiveStatusEffectReason[]
  limitBreakMaxGrade: number
}

export type LiveStatusEffectReason = {
  cardIndex: number
  skillIndex: number
}

export type LiveSkillStatus = {
  skillIndex: number
  remainCount: number
  coolTime: number
}

export type LiveUserResult = {
  score: string
  criticalCount: number
  hitCount: number
  missCount: number
  maxComboCount: number
  cardResults: LiveCardResult[]
}

export type PvpOpponentInfo = {
  opponentId: string
  name: string
  managerLevel: number
  point: string
  rank: number
  cardInfos: LiveBattleCardInfo[]
}

export type GvgOpponentInfo = {
  opponentId: string
  name: string
  managerLevel: number
  cardInfos: LiveBattleCardInfo[]
}

export type QuestRankPattern = {
  rankType: ResultRankType
  plus: number
  thresholdScore: string
}

export type ActivityPromotionReward = {
  resourceType: ResourceType
  resourceId: string
  amount: string
  isRare: boolean
}

export type AllProfileInfo = {
  profile: ProfileInfo
  hierarchy: HierarchyProfileInfo
}

export type FavoritePhotoInfo = {
  photoId: string
  assetId: string
  imageType: PhotoImageType
}

export type NoticeInfo = {
  id: string
  title: string
  bannerAssetId: string
  linkType: LinkType
  linkDetail: string
  displayNotification: boolean
  startTime: string
  listTitle: string
  notificationRestartTime: string
}

export type PaidJpy = {
  amount: number
}

export type FanEventRankPattern = {
  rankType: ResultRankType
  plus: number
  thresholdPoint: number
}

export type ActivityLevelProgress = {
  maxActivityLevel: number
  before: ActivityLevelInfo
  after: ActivityLevelInfo
}

export type ActivityLevelInfo = {
  exp: number
  level: number
  nextLevelLocked: boolean
}

export type ActivityCampaignEffect = {
  type: ActivityCampaignEffectType
  value: number
  endTime: string
}

export type EventStoryEpisodeInfo = {
  episode: number
  unlocked: boolean
}

export type ExtraStoryEpisodeInfo = {
  episode: number
  unlocked: boolean
}

export type EventExchangeBoothInfo = {
  id: string
  name: string
  bannerAssetId: string
  requiredResourceType: ResourceType
  requiredResourceId: string
}

export type PvpSeasonInfo = {
  id: string
  name: string
  startTime: string
  endTime: string
  aggregateEndTime: string
  challengeCount: number
  nextStartTime: string
}

export type CurrentGvgInfo = {
  gvgSeason: GvgSeasonInfo
  isRemainingChallenge: boolean
}

export type GachaStampInfo = {
  currentSheetNumber: number
  currentStampNumber: number
}

export type HomeEventInfo = {
  eventMissionInfos: HomeEventMissionInfo[]
  tourInfos: HomeTourInfo[]
  backsideInfos: HomeBacksideInfo[]
  marathonInfos: HomeMarathonInfo[]
  photoContestInfos: HomePhotoContestInfo[]
  raceInfos: HomeRaceInfo[]
  ladderInfos: HomeLadderInfo[]
  loveEventInfos: HomeLoveEventInfo[]
  homeBirthdayInfo: HomeBirthdayInfo
  dreamInfo: HomeDreamInfo
  mosaicInfos: HomeMosaicInfo[]
  diceInfo: HomeDiceInfo
  shelfInfo: HomeShelfInfo
  dutyInfos: HomeDutyInfo[]
  generalEventInfos: HomeGeneralEventInfo[]
}

export type HomeBirthdayInfo = {
  bannerAssetId: string
  order: number
  isRemainingUnwatched: boolean
  isRemainingReceivableReward: boolean
}

export type QuestReward = {
  clearRewards: RewardResult[]
  scoreRankRewards: RewardResult[]
  scoreRankAdditionalRewards: RewardResult[]
  musicMasteryRewards: Reward[]
  achievedRankRewards: Reward[]
  rewardCards: QuestRewardCard[]
  campaignDropRewards: RewardResult[]
}

export type QuestOpponentInfo = {
  name: string
  managerLevel: number
  cardInfos: LiveBattleCardInfo[]
}

export type BoxGachaDrawResult = {
  itemType: BoxGachaItemType
  rewards: Reward[]
  liveBonusId: string
}

export type UserDeckPosition = {
  position: number
  cardId: string
  part1AccessoryId: string
  part2AccessoryId: string
  photoIds: string[]
  costumeId: string
  buddyUserId: string
  hairId: string
}

export type LadderProgressInfo = {
  steps: LadderStep[]
}

export type LadderStep = {
  step: number
  lane1Panel: LadderPanel
  lane2Panel: LadderPanel
  lane3Panel: LadderPanel
}

export type FriendApplyToBuddyInfo = {
  isActive: boolean
  isAlreadyOffered: boolean
}

export type BirthdayAdvInfo = {
  birthdayId: string
  advAssetId: string
}

export type BirthdayRemindInfo = {
  assetId: string
  description: string
  linkTitle: string
  linkType: LinkType
  linkDetail: string
}

export type MosaicProgressInfo = {
  totalConsumptionAmount: string
  currentReceivedTotalConsumptionRewardNumber: number
}

export type CommonResponse = {
  updatedData: UpdatedData
  deletedData: DeletedData
}

export type UpdatedData = {
  user: User
  items: UserItem[]
  cards: UserCard[]
  characters: UserCharacter[]
  costumes: UserCostume[]
  accessories: UserAccessory[]
  photos: UserPhoto[]
  decks: UserDeck[]
  deckPositions: UserDeckPosition[]
  stories: UserStory[]
  points: UserPoint[]
  staffs: UserStaff[]
  messages: UserMessage[]
  telephones: UserTelephone[]
  missions: UserMission[]
  profile: UserProfile
  emblems: UserEmblem[]
  characterMusics: UserCharacterMusic[]
  balance: UserBalance
  totalCount: UserTotalCount
  areas: UserArea[]
  quests: UserQuest[]
  gachaButtons: UserGachaButton[]
  homeTalks: UserHomeTalk[]
  photoReport: UserPhotoReport
  cardSupports: UserCardSupport[]
  messageSchedules: UserMessageSchedule[]
  notifications: UserNotification[]
  hierarchy: UserHierarchy
  tutorials: UserTutorial[]
  homePositions: UserHomePosition[]
  musics: UserMusic[]
  decorations: UserDecoration[]
  photoRecipes: UserPhotoRecipe[]
  buddy: UserBuddy
  invite: UserInvite
  hairs: UserHair[]
  activityFanEventProgress: UserActivityFanEventProgress
  loves: UserLove[]
  leagueDeckPositions: UserLeagueDeckPosition[]
  duties: UserDuty[]
  dutyPoints: UserDutyPoint[]
  company: UserCompany
  showcases: UserShowcase[]
  showcaseLike: UserShowcaseLike
  showcaseMusics: UserShowcaseMusic[]
  showcaseToys: UserShowcaseToy[]
  showcaseMysets: UserShowcaseMyset[]
  tourAreas: UserTourArea[]
  photoPoses: UserPhotoPose[]
}

export type DeletedData = {
  items: UserItem[]
  accessories: UserAccessory[]
  photos: UserPhoto[]
  decks: UserDeck[]
  deckPositions: UserDeckPosition[]
  points: UserPoint[]
  messageSchedules: UserMessageSchedule[]
  stories: UserStory[]
  photoRecipes: UserPhotoRecipe[]
  leagueDeckPositions: UserLeagueDeckPosition[]
  showcaseMysets: UserShowcaseMyset[]
  tourAreas: UserTourArea[]
}

export type CompanyTopRequest = {
  isSkipReportMissions: boolean
}

export type CompanyListRankingResponse = {
  rankingInfos: CompanyRankingInfo[]
  selfPoint: string
  selfRank: number
  commonResponse: CommonResponse
}

export type CompanyReceiveGradeRewardsRequest = {
  gradeIds: string[]
}

export type CompanyReceiveGradeRewardsResponse = {
  results: RewardResult[]
  commonResponse: CommonResponse
}

export type CompanyBulkReceiveMissionRequest = {
  missionIds: string[]
}

export type CompanyBulkReceiveMissionResponse = {
  results: RewardResult[]
  commonResponse: CommonResponse
}

export type CompanyEnjoyCharacterTopRequest = {
  characterId: string
}

export type CompanyEnjoyCharacterTopResponse = {
  enjoyLevelInfos: CompanyEnjoyCharacterLevelInfo[]
  missionInfos: CompanyEnjoyCharacterMissionInfo[]
  currentRank: number
  commonResponse: CommonResponse
}

export type CompanyListEnjoyCharacterRankingRequest = {
  characterId: string
}

export type CompanyListEnjoyCharacterRankingResponse = {
  rankingInfos: CompanyEnjoyCharacterRankingInfo[]
  selfPoint: string
  selfRank: number
  commonResponse: CommonResponse
}

export type CompanyReceiveEnjoyCharacterLevelRewardsRequest = {
  characterId: string
  levelKeys: number[]
}

export type CompanyReceiveEnjoyCharacterLevelRewardsResponse = {
  results: RewardResult[]
  commonResponse: CommonResponse
}

export type CompanyUseObtainEnjoyPointItemRequest = {
  characterId: string
  itemId: string
}

export type CompanyUseObtainEnjoyPointItemResponse = {
  commonResponse: CommonResponse
}

export type CompanyBulkReceiveEnjoyRequest = {
  missionIds: string[]
}

export type CompanyBulkReceiveEnjoyResponse = {
  results: CompanyBulkReceiveEnjoyResult[]
  commonResponse: CommonResponse
}

export type CompanyBulkReceiveEnjoyCharacterLevelRewardsResponse = {
  results: CompanyBulkReceiveEnjoyResult[]
  commonResponse: CommonResponse
}

export type CompanyReceiveTrustLevelRewardsRequest = {
  levelKeys: number[]
}

export type CompanyReceiveTrustLevelRewardsResponse = {
  results: RewardResult[]
  commonResponse: CommonResponse
}

export type CompanyTrustMissionInfo = {
  categoryType: CompanyTrustMissionCategoryType
  userMissions: UserMission[]
}

export type CompanyEnjoyCharacterMissionInfo = {
  categoryType: CompanyEnjoyCharacterMissionCategoryType
  userMissions: UserMission[]
}

export type CostumeSetRequest = {
  costumeId: string
  hairId: string
}

export type CostumeSetResponse = {
  commonResponse: CommonResponse
}

export type CostumeLiveSetRequest = {
  costumeId: string
  hairId: string
}

export type CostumeLiveSetResponse = {
  commonResponse: CommonResponse
}

export type CostumeCheckRequest = {
  costumeId: string
}

export type CostumeCheckResponse = {
  commonResponse: CommonResponse
}

export type CostumeCheckBulkRequest = {
  costumeIds: string[]
  hairIds: string[]
}

export type CostumeCheckBulkResponse = {
  commonResponse: CommonResponse
}

export type DeckSaveRequest = {
  number: number
  name: string
  userDeckPositions: UserDeckPosition[]
  deckEditType: DeckEditType
  questId: string
}

export type DeckSaveResponse = {
  commonResponse: CommonResponse
}

export type DeckDeleteRequest = {
  number: number
}

export type DeckDeleteResponse = {
  commonResponse: CommonResponse
}

export type DeckBuddyListResponse = {
  friendBuddyUserCardInfos: DeckBuddyUserCardInfo[]
  notFriendBuddyUserCardInfos: DeckBuddyUserCardInfo[]
  commonResponse: CommonResponse
}

export type DeckBuddyUserCardInfo = {
  userId: string
  userCard: UserCard
  managerName: string
}

export type DiaryGetInfosResponse = {
  infos: DiaryInfo[]
  commonResponse: CommonResponse
}

export type DiaryReadRequest = {
  diaryIds: string[]
}

export type DiaryReadResponse = {
  commonResponse: CommonResponse
}

export type DiaryInfo = {
  id: string
  year: number
  month: number
  day: number
  assetId: string
  isRead: boolean
}

export type DiceTopResponse = {
  diceInfo: DiceInfo
  userInfo: DiceUserInfo
  mosaicInfo: MosaicInfo
  mosaicProgressInfo: MosaicProgressInfo
  dokanInfos: DokanInfo[]
  questInfos: DiceQuestInfo[]
  commonResponse: CommonResponse
}

export type DiceAreaInfo = {
  name: string
  panelInfos: DicePanelInfo[]
  backgroundColorCode1: string
  backgroundColorCode2: string
}

export type DicePanelInfo = {
  number: number
  type: DicePanelType
  value: number
  liveBonus: DiceLiveBonus
  forceStoryCharacterInfo: DiceStoryCharacterInfo
}

export type DiceUserInfo = {
  panelNumber: string
  totalAreaCount: string
  todayMovedPanelCount: string
  stamina: number
  staminaUpdatedTime: string
  diceItems: DiceItem[]
  liveBonusInfos: DiceLiveBonusInfo[]
  highestScore: string
  currentRank: string
  panelProgressInfo: DicePanelProgressInfo
  eventStoryInfo: EventStoryInfo
  rankingColorCodeA: string
  rankingColorCodeB: string
  movedPanelCount: string
}

export type DicePanelProgressInfo = {
  shopItemInfos: DiceShopItemInfo[]
  storyInfo: DiceStoryInfo
  liveBonuses: DiceLiveBonus[]
  isRestartQuest: boolean
  isChallengeQuest: boolean
}

export type DiceItem = {
  id: string
  type: DiceItemType
  name: string
  value: number
  assetId: string
  description: string
  salePrice: number
}

export type DiceMovePanelResponse = {
  diceRoll: number
  userInfo: DiceUserInfo
  rewardResults: RewardResult[]
  questInfos: DiceQuestInfo[]
  commonResponse: CommonResponse
}

export type DiceUseItemRequest = {
  diceItemId: string
}

export type DiceUseItemResponse = {
  userInfo: DiceUserInfo
  rewardResults: RewardResult[]
  questInfos: DiceQuestInfo[]
  commonResponse: CommonResponse
}

export type DiceShopItemInfo = {
  number: number
  diceItem: DiceItem
  diceLiveBonus: DiceLiveBonus
  price: number
  discountPermil: number
  isPurchased: boolean
}

export type DiceStoryInfo = {
  name: string
  backgroundAssetId: string
  detailInfos: DiceStoryDetailInfo[]
  characterInfos: DiceStoryCharacterInfo[]
}

export type DiceStoryDetailInfo = {
  number: number
  branchNumber: number
  diceStoryCharacterId: string
  text: string
  motionAssetId: string
  emoteAssetId: string
  seAssetId: string
  choiceInfos: DiceStoryChoiceInfo[]
}

export type DiceStoryChoiceInfo = {
  id: string
  number: number
  text: string
  branchNumber: number
}

export type DiceDeckInfo = {
  number: number
  cardDetailInfos: DiceDeckCardDetailInfo[]
  deckOverallValue: string
}

export type DiceDeckCardDetailInfo = {
  position: number
  vocal: string
  dance: string
  visual: string
  stamina: string
  mental: string
  technique: string
  accessoryInfos: DiceAccessoryInfo[]
  photoInfos: DicePhotoInfo[]
}

export type DicePhotoInfo = {
  photoId: string
  level: number
  abilities: DicePhotoAbilityInfo[]
}

export type DiceDiscardItemRequest = {
  diceItemId: string
}

export type DiceDiscardItemResponse = {
  userInfo: DiceUserInfo
  commonResponse: CommonResponse
}

export type DicePurchaseItemRequest = {
  number: number
}

export type DicePurchaseItemResponse = {
  userInfo: DiceUserInfo
  commonResponse: CommonResponse
}

export type DiceLiveBonusInfo = {
  diceLiveBonus: DiceLiveBonus
  amount: number
}

export type DiceSellItemRequest = {
  diceItemId: string
}

export type DiceSellItemResponse = {
  userInfo: DiceUserInfo
  rewardResults: RewardResult[]
  commonResponse: CommonResponse
}

export type DiceFinishShopPanelResponse = {
  userInfo: DiceUserInfo
  commonResponse: CommonResponse
}

export type DiceFinishStoryPanelRequest = {
  selectedDiceStoryChoiceIds: string[]
}

export type DiceFinishStoryPanelResponse = {
  userInfo: DiceUserInfo
  diceItems: DiceItem[]
  diceLiveBonuses: DiceLiveBonus[]
  rewardResults: RewardResult[]
  commonResponse: CommonResponse
}

export type DiceUseStaminaRecoveryItemRequest = {
  amount: number
}

export type DiceUseStaminaRecoveryItemResponse = {
  userInfo: DiceUserInfo
  commonResponse: CommonResponse
}

export type DiceStartQuestRequest = {
  difficultyType: DiceQuestDifficultyType
  deckNumber: number
  isSkip: boolean
}

export type DiceStartQuestResponse = {
  result: LiveResult
  rankType: ResultRankType
  rankPlus: number
  rankPatterns: QuestRankPattern[]
  rewardResults: RewardResult[]
  liveMedalBonusPermil: number
  userInfo: DiceUserInfo
  diceItem: DiceItem
  diceLiveBonus: DiceLiveBonus
  baseQuestObtainMedalAmount: number
  isUpdateHighestScore: boolean
  commonResponse: CommonResponse
}

export type DiceStartGoalQuestRequest = {
  difficultyType: DiceQuestDifficultyType
  deckNumber: number
  isSkip: boolean
}

export type DiceStartGoalQuestResponse = {
  result: LiveResult
  rankType: ResultRankType
  rankPlus: number
  rankPatterns: QuestRankPattern[]
  afterRank: number
  rewardResults: RewardResult[]
  liveMedalBonusPermil: number
  userInfo: DiceUserInfo
  beforeRank: number
  baseQuestObtainMedalAmount: number
  isUpdateHighestScore: boolean
  commonResponse: CommonResponse
}

export type DiceListDeckRequest = {
  difficultyType: DiceQuestDifficultyType
}

export type DiceListDeckResponse = {
  deckInfos: DiceDeckInfo[]
  commonResponse: CommonResponse
}

export type DiceChooseLiveBonusRequest = {
  diceLiveBonusId: string
}

export type DiceChooseLiveBonusResponse = {
  userInfo: DiceUserInfo
  areaInfo: DiceAreaInfo
  commonResponse: CommonResponse
}

export type DiceListRankingResponse = {
  rankingInfos: LiveRankingInfo[]
  selfPoint: string
  selfRank: number
  commonResponse: CommonResponse
}

export type DiceSaveDeckRequest = {
  number: number
  name: string
  userDeckPositions: UserDeckPosition[]
  difficultyType: DiceQuestDifficultyType
}

export type DiceSaveDeckResponse = {
  deckInfo: DiceDeckInfo
  commonResponse: CommonResponse
}

export type DivisionListResponse = {
  divisions: DivisionInfo[]
  reasonType: DivisionCannotMoveReasonType
  commonResponse: CommonResponse
}

export type DivisionMoveRequest = {
  divisionId: string
}

export type DivisionMoveResponse = {
  commonResponse: CommonResponse
}

export type DokanListResponse = {
  dokanInfos: DokanInfo[]
  commonResponse: CommonResponse
}

export type DokanSetWatchedRequest = {
  dokanIds: string[]
  skippedDokanIds: string[]
}

export type DokanSetWathcedResponse = {
  commonResponse: CommonResponse
}

export type DokanOutputWatchedLogRequest = {
  dokanIds: string[]
  skippedDokanIds: string[]
}

export type DokanOutputWatchedLogResponse = {
  commonResponse: CommonResponse
}

export type DreamTopResponse = {
  seasonInfo: DreamSeasonInfo
  dreamUserPhotos: DreamUserPhoto[]
  loginRewardResults: RewardResult[]
  dokanInfos: DokanInfo[]
  growthPermilNoticeInfo: NoticeInfo
  commonResponse: CommonResponse
}

export type DreamRankInfo = {
  areaRankType: DreamAreaRankType
  areaRankPlus: string
  topColorCode: string
  bottomColorCode: string
}

export type DreamUserPhoto = {
  photoId: string
  generatedTime: string
  lastChallengedTime: string
  areaRankType: DreamAreaRankType
  areaRankPlus: string
  clearQuestNumber: number
  maxQuestNumber: number
  abilities: DreamUserPhotoAbility[]
  attributeInfo: DreamAreaAttributeInfo
  rankPoint: string
  isDisableGenerateArea: boolean
  maxGrowthPermil: number
  currentGrowthPermil: number
}

export type DreamListMaterialPhotoRequest = {
  basePhotoId: string
}

export type DreamListMaterialPhotoResponse = {
  userMaterialPhotos: DreamUserMaterialPhoto[]
  commonResponse: CommonResponse
}

export type DreamUserMaterialPhoto = {
  photoId: string
  areaRankType: DreamAreaRankType
  areaRankPlus: string
  maxQuestNumber: number
  enhancePlanAbilities: DreamUserPhotoAbility[]
  generateAreaItemConsumptionAmount: number
  attributeInfo: DreamAreaAttributeInfo
  rankPoint: string
  maxGrowthPermil: number
}

export type DreamListQuestRequest = {
  basePhotoId: string
}

export type DreamListQuestResponse = {
  questInfos: DreamQuestInfo[]
  clearQuestNumber: number
  maxQuestNumber: number
  commonResponse: CommonResponse
}

export type DreamGenerateAreaRequest = {
  basePhotoId: string
  materialPhotoId: string
}

export type DreamGenerateAreaResponse = {
  dreamUserPhoto: DreamUserPhoto
  commonResponse: CommonResponse
}

export type DreamStartQuestRequest = {
  basePhotoId: string
  deckNumber: number
  isSkip: boolean
  userBuddyDeckPositions: UserDeckPosition[]
  buddyDeckName: string
}

export type DreamStartQuestResponse = {
  result: LiveResult
  clearedQuestNumber: number
  maxQuestNumber: number
  musicMasteryRewards: Reward[]
  abilityChangeInfos: DreamUserPhotoAbilityChangeInfo[]
  friendApplyToBuddyInfo: FriendApplyToBuddyInfo
  rankPatterns: QuestRankPattern[]
  dreamUserPhoto: DreamUserPhoto
  commonResponse: CommonResponse
}

export type DreamSkipQuestRequest = {
  basePhotoId: string
  deckNumber: number
  questNumber: number
}

export type DreamSkipQuestResponse = {
  clearedQuestNumber: number
  maxQuestNumber: number
  skipMusicMasteryRewardInfos: DreamSkipMusicMasteryRewardInfo[]
  abilityChangeInfos: DreamUserPhotoAbilityChangeInfo[]
  dreamUserPhoto: DreamUserPhoto
  commonResponse: CommonResponse
}

export type DreamResetAreaRequest = {
  basePhotoId: string
}

export type DreamResetAreaResponse = {
  commonResponse: CommonResponse
}

export type DutyTopRequest = {
  dutyId: string
}

export type DutyExchangeRewardRequest = {
  dutyId: string
  exchangeRewardNumber: string
}

export type DutyExchangeRewardResponse = {
  rewardResults: RewardResult[]
  commonResponse: CommonResponse
}

export type DutyReceiveTotalObtainRewardRequest = {
  dutyId: string
}

export type DutyReceiveTotalObtainRewardResponse = {
  rewardResults: RewardResult[]
  commonResponse: CommonResponse
}

export type DutyHomeActionInfo = {
  message: string
}

export type ExchangeListResponse = {
  booths: ExchangeBooth[]
  commonResponse: CommonResponse
}

export type ExchangeExecuteRequest = {
  exchangeId: string
  count: number
}

export type ExchangeExecuteResponse = {
  results: RewardResult[]
  afterExchangeItem: ExchangeItem
  booth: ExchangeBooth
  commonResponse: CommonResponse
}

export type ExchangeTryOnRequest = {
  exchangeId: string
  costumeId: string
  hairId: string
}

export type ExchangeTryOnResponse = {
  commonResponse: CommonResponse
}

export type ExerciseTopResponse = {
  exercises: ExerciseInfo[]
  commonResponse: CommonResponse
}

export type ExerciseSaveDeckRequest = {
  exerciseId: string
  positions: ExerciseDeckPosition[]
}

export type ExerciseSaveDeckResponse = {
  commonResponse: CommonResponse
}

export type ExerciseStartRequest = {
  exerciseId: string
  isSkip: boolean
}

export type ExerciseListAssetRequest = {
  exerciseId: string
}

export type ExerciseListAssetResponse = {
  characterAssets: LiveCharacterAssetInfo[]
  commonResponse: CommonResponse
}

export type ForumListThreadReplyRequest = {
  threadId: string
  requestType: ForumListReplyRequestType
  replyId: number
}

export type ForumCreateThreadRequest = {
  title: string
  firstReplyContent: string
}

export type ForumSendThreadReplyRequest = {
  threadId: string
  replyContent: string
}

export type ForumLikeReplyRequest = {
  threadId: string
  replyId: number
}

export type ForumDislikeReplyRequest = {
  threadId: string
  replyId: number
}

export type ForumBookmarkThreadRequest = {
  threadId: string
}

export type ForumUnbookmarkThreadRequest = {
  threadId: string
}

export type ForumBlockUserRequest = {
  userId: string
}

export type ForumListThreadResponse = {
  threads: ForumThreadInfo[]
  commonResponse: CommonResponse
}

export type ForumListThreadReplyResponse = {
  threadReplies: ForumThreadReplyInfo[]
  thread: ForumThreadInfo
  commonResponse: CommonResponse
}

export type ForumCreateThreadResponse = {
  threadId: string
  commonResponse: CommonResponse
}

export type ForumSendThreadReplyResponse = {
  commonResponse: CommonResponse
}

export type ForumLikeReplyResponse = {
  commonResponse: CommonResponse
}

export type ForumDislikeReplyResponse = {
  commonResponse: CommonResponse
}

export type ForumBookmarkThreadResponse = {
  commonResponse: CommonResponse
}

export type ForumUnbookmarkThreadResponse = {
  commonResponse: CommonResponse
}

export type ForumBlockUserResponse = {
  commonResponse: CommonResponse
}

export type ForumThreadInfo = {
  id: string
  title: string
  replyCount: number
  isBookmarked: boolean
  lastUpdatedTime: string
  power: number
}

export type ForumThreadReplyInfo = {
  id: number
  threadId: string
  userId: string
  userName: string
  repliedTime: string
  content: string
  likeCount: number
  isLiked: boolean
  isBlocked: boolean
  isDeleted: boolean
}

export type FriendListResponse = {
  profiles: ProfileInfo[]
  commonResponse: CommonResponse
}

export type FriendDeleteRequest = {
  userIds: string[]
}

export type FriendDeleteResponse = {
  commonResponse: CommonResponse
}

export type FriendApplyRequest = {
  userId: string
}

export type FriendApplyResponse = {
  isTargetOfferedLimit: boolean
  isAlreadyFriend: boolean
  isAlreadyOffering: boolean
  isAlreadyOffered: boolean
  isAccountBan: boolean
  applied: boolean
  isAccountDeleted: boolean
  commonResponse: CommonResponse
}

export type FriendApproveRequest = {
  userId: string
}

export type FriendApproveResponse = {
  isFriendLimit: boolean
  isTargetFriendLimit: boolean
  isOfferDeleted: boolean
  isAccountBan: boolean
  approved: boolean
  isAccountDeleted: boolean
  commonResponse: CommonResponse
}

export type FriendCancelRequest = {
  userId: string
}

export type FriendCancelResponse = {
  commonResponse: CommonResponse
}

export type FriendCancelAllResponse = {
  commonResponse: CommonResponse
}

export type FriendRejectRequest = {
  userId: string
}

export type FriendRejectResponse = {
  isOfferDeleted: boolean
  commonResponse: CommonResponse
}

export type FriendListApplyingResponse = {
  profiles: ProfileInfo[]
  commonResponse: CommonResponse
}

export type FriendListAppliedResponse = {
  profiles: ProfileInfo[]
  commonResponse: CommonResponse
}

export type FriendSearchResponse = {
  profiles: ProfileInfo[]
  commonResponse: CommonResponse
}

export type GachaListResponse = {
  gachas: GachaInfo[]
  commonResponse: CommonResponse
}

export type GachaDrawRequest = {
  gachaButtonId: string
  execCount: number
}

export type GachaDrawResponse = {
  button: GachaButtonInfo
  rewards: Reward[]
  consumptionResults: ConsumptionResult[]
  rewardResults: RewardResult[]
  drawRewardResults: RewardResult[]
  bonusRewards: Reward[]
  gachaMovie: GachaMovie
  cardRewards: Reward[]
  continuousResult: GachaContinuousResult
  stampInfo: GachaStampInfo
  stampRewards: Reward[]
  pickupRewards: Reward[]
  commonResponse: CommonResponse
}

export type GachaExchangeRequest = {
  gachaExchangeId: string
  count: number
}

export type GachaExchangeResponse = {
  exchange: GachaExchangeInfo
  rewardResults: RewardResult[]
  consumptionResults: ConsumptionResult[]
  commonResponse: CommonResponse
}

export type GachaProbabilityRequest = {
  gachaId: string
}

export type GachaProbabilityResponse = {
  rarityProbabilityInfos: RarityProbabilityInfo[]
  fixProbabilityInfos: FixProbabilityInfo[]
  probabilityInfos: ProbabilityInfo[]
  commonResponse: CommonResponse
}

export type GachaHistoryRequest = {
  gachaType: GachaType
}

export type GachaHistoryResponse = {
  histories: GachaHistory[]
  commonResponse: CommonResponse
}

export type GachaSelectCardRequest = {
  gachaId: string
  selectedCardIds: string[]
}

export type GachaSelectCardResponse = {
  commonResponse: CommonResponse
}

export type GachaReceiveFreePremiumGachaTicketRequest = {
  gachaId: string
}

export type GachaReceiveFreePremiumGachaTicketResponse = {
  rewardResults: RewardResult[]
  commonResponse: CommonResponse
}

export type RarityProbabilityInfo = {
  rarity: number
  probability: number
  probabilityInfos: ProbabilityInfo[]
  gachaRewardPatternType: GachaRewardPatternType
  individualProbability: number
}

export type FixProbabilityInfo = {
  gachaButtonId: string
  rarityProbabilityInfos: RarityProbabilityInfo[]
}

export type ProbabilityInfo = {
  resourceType: ResourceType
  resourceId: string
  amount: string
  probability: number
  isRatioUp: boolean
}

export type GachaAnimation = {
  id: string
  embeddedType: GachaAnimationEmbeddedType
  assetId: string
}

export type GachaMovie = {
  assetId: string
  bgmAssetId: string
  isForce: boolean
}

export type GiftListRequest = {
  offset: number
  sortType: GiftSortType
  filters: GiftFilterType[]
  desc: boolean
}

export type GiftListResponse = {
  gifts: UserGift[]
  hasNext: boolean
  count: number
  commonResponse: CommonResponse
}

export type GiftCountRequest = {
  filters: GiftFilterType[]
}

export type GiftCountResponse = {
  count: number
  commonResponse: CommonResponse
}

export type GiftReceiveRequest = {
  giftIds: string[]
}

export type GiftReceiveResponse = {
  results: RewardResult[]
  hasUnreceivedGift: boolean
  receivedGiftIds: string[]
  unreceivedGiftIds: string[]
  hierarchyChangeInfo: HierarchyChangeInfo
  commonResponse: CommonResponse
}

export type GiftHistoryListResponse = {
  gifts: UserGiftHistory[]
  commonResponse: CommonResponse
}

export type GppReceiveRewardRequest = {
  productId: string
  receipt: string
  signature: string
}

export type GppReceiveRewardResponse = {
  rewards: Reward[]
  commonResponse: CommonResponse
}

export type GuildListResponse = {
  guilds: GuildParam[]
  commonResponse: CommonResponse
}

export type GuildGvgSeasonResult = {
  seasonRank: number
  seasonWinCount: number
  seasonLoseCount: number
  seasonDrawCount: number
  seasonTotalPoint: string
}

export type GuildTopResponse = {
  rewardGuildMedalAmount: number
  gvgSeasonInfo: GuildGvgSeasonInfo
  exchangeBoothId: string
  commonResponse: CommonResponse
}

export type GuildGvgRankInfo = {
  name: string
  point: string
  rank: number
}

export type GuildJoinRequest = {
  guildId: string
  isRecommended: boolean
}

export type GuildJoinResponse = {
  commonResponse: CommonResponse
}

export type GvgTopResponse = {
  topResult: GvgTopInfo
  commonResponse: CommonResponse
}

export type GvgTopInfo = {
  gvgSeason: GvgSeasonInfo
  currentMatch: GvgCurrentSeasonMatchInfo
  seasonMatches: GvgSeasonMatchInfo[]
  rankingRewards: GvgRankingRewardInfo[]
  guildRankingRewards: GvgGuildRankingRewardInfo[]
  gvgQuest: LiveBattleQuestInfo
  userGvgSeason: UserGvgSeasonInfo
}

export type UserGvgSeasonInfo = {
  points: string[]
  totalPoint: string
  rankRatePercent: number
  rank: number
  guildPoint: string
  guildRank: number
  hasChallenged: boolean
  winCount: number
  loseCount: number
  drawCount: number
  isCurrentMatchWin: boolean
}

export type GvgListOpponentRequest = {
  gvgSeasonId: string
}

export type GvgListOpponentResponse = {
  opponentInfos: GvgOpponentInfo[]
  commonResponse: CommonResponse
}

export type GvgListRankingRequest = {
  gvgSeasonId: string
}

export type GvgListRankingResponse = {
  rankingInfos: LiveRankingInfo[]
  selfPoint: string
  selfRank: number
  commonResponse: CommonResponse
}

export type GvgStartRequest = {
  gvgSeasonId: string
  opponentId: string
  deckNumber: number
  isSkip: boolean
  matchNumber: number
  challengeConsumptionType: GvgChallengeConsumptionType
}

export type GvgStartResponse = {
  result: LiveResult
  point: string
  addPoint: string
  rank: number
  musicMasteryRewards: Reward[]
  challengeRewards: RewardResult[]
  guildPoint: string
  addGuildPoint: string
  totalPoint: string
  profile: AllProfileInfo
  opponentProfile: AllProfileInfo
  winRewards: RewardResult[]
  commonResponse: CommonResponse
}

export type GvgListAssetRequest = {
  gvgSeasonId: string
  opponentId: string
  deckNumber: number
  matchNumber: number
}

export type GvgListAssetResponse = {
  characterAssets: LiveCharacterAssetInfo[]
  opponentCharacterAssets: LiveCharacterAssetInfo[]
  commonResponse: CommonResponse
}

export type HairCheckRequest = {
  hairId: string
}

export type HairCheckResponse = {
  commonResponse: CommonResponse
}

export type HealthCheckRequest = {
  service: string
}

export type HealthCheckResponse = {
}

export type HierarchyRewardsReceiveRequest = {
  hierarchyRewardIds: string[]
}

export type HierarchyDivisionRewardsReceiveRequest = {
  hierarchyDivisionRewardIds: string[]
}

export type HierarchyTopResponse = {
  userHierarchyInfo: UserHierarchyInfo
  rewardInfos: HierarchyRewardInfo[]
  divisionRewardInfos: HierarchyDivisionRewardInfo[]
  highestGradeUserNames: string[]
  commonResponse: CommonResponse
}

export type HierarchyRankingResponse = {
  rankUserInfos: HierarchyRankUserInfo[]
  commonResponse: CommonResponse
}

export type HierarchyRewardsReceiveResponse = {
  results: RewardResult[]
  commonResponse: CommonResponse
}

export type HierarchyDivisionRewardsReceiveResponse = {
  results: RewardResult[]
  commonResponse: CommonResponse
}

export type HomeEnterRequest = {
  skipUpdate: boolean
}

export type NotiShopItem = {
  shopId: string
  shopItemIds: string[]
}

export type SpecialHomeActionDetail = {
  motionAssetId: string
  additionMotionAssetId: string
  voiceAssetId: string
  text: string
  weight: number
}

export type RouletteInfo = {
  isRouletteFreeDraw: boolean
}

export type CompanyInfo = {
  isReceivableRewards: boolean
  isReceivableEnjoyRewards: boolean
}

export type HomeLoginRequest = {
  settingInfo: SettingInfo
}

export type SettingInfo = {
  soundBgm: number
  soundEffect: number
  soundVoice: number
  graphicType: GraphicType
  frameRate: number
  activityFinishNotification: boolean
  messageNotification: boolean
  nightMode: boolean
  notLoginNotification: boolean
  appCapacityLimit: number
}

export type HomeLoginResponse = {
  paidJpy: PaidJpy
  purchasedLoginBonusShopInfos: PurchasedLoginBonusShopInfo[]
  birthdayAdvInfo: BirthdayAdvInfo
  birthdayRemindInfo: BirthdayRemindInfo
  commonResponse: CommonResponse
}

export type HomeReadTalkRequest = {
  homeTalkId: string
}

export type HomeReadTalkResponse = {
  isReliabilityUp: boolean
  commonResponse: CommonResponse
}

export type HomeSetReviewResponse = {
  commonResponse: CommonResponse
}

export type HomeSetCharacterPositionRequest = {
  positions: HomeCharacterPosition[]
}

export type HomeCharacterPosition = {
  type: HomePositionType
  characterId: string
  isCharacterRandom: boolean
  isCostumeRandom: boolean
}

export type HomeSetCharacterPositionResponse = {
  commonResponse: CommonResponse
}

export type HomePvpInfo = {
  remainingChallengeCount: number
  latestPvpSeason: PvpSeasonInfo
}

export type HomeLeagueInfo = {
  nextBattleStartTime: string
  battleEndTime: string
  nextSeasonStartTime: string
  statusType: LeagueStatusType
  isNewsUnread: boolean
  isNewSeasonNotJoined: boolean
  isRemainingImperfectDeck: boolean
  deckInfos: HomeLeagueDeckInfo[]
}

export type HomeLeagueDeckInfo = {
  seasonId: string
  deckType: LeagueDeckType
  deckPositions: UserDeckPosition[]
}

export type PvpRewardResultInfo = {
  name: string
  point: string
  rank: string
  rankingRewards: Reward[]
  hierarchyChangeInfo: HierarchyChangeInfo
}

export type GvgRewardResultInfo = {
  name: string
  point: string
  rank: number
  rankRate: number
  guildRank: number
  rankingRewards: Reward[]
  guildRankingRewards: Reward[]
  hierarchyChangeInfo: HierarchyChangeInfo
}

export type TourRewardResultInfo = {
  name: string
  score: string
  rank: number
  rankingRewards: Reward[]
}

export type BacksideRewardResultInfo = {
  name: string
  score: string
  rank: number
  rankingRewards: Reward[]
}

export type PhotoContestRewardResultInfo = {
  name: string
  score: string
  rank: number
  rankingRewards: Reward[]
}

export type RaceRewardResultInfo = {
  name: string
  score: string
  rank: number
  rankingRewards: Reward[]
}

export type RaceDailyRewardResultInfo = {
  score: string
  rank: number
  rankingRewards: Reward[]
  rankingUserInfos: RaceDailyRankingUserInfo[]
  days: number
}

export type BuddyUsedRewardResultInfo = {
  usedCount: string
  rewards: Reward[]
}

export type HomeActiveFanEvent = {
  characterIds: string[]
  finishTime: string
  activityPoint: number
  rankType: ResultRankType
  rankPlus: number
  currentCheerPoint: number
}

export type HomeActivePromotion = {
  characterIds: string[]
  finishTime: string
  rewardGoldAmount: number
  rewardCardEnhanceItemAmount: number
  rewards: ActivityPromotionReward[]
  hasMoreRewards: boolean
}

export type HomeActiveRefresh = {
  characterIds: string[]
  finishTime: string
}

export type FunctionMaintenanceInfo = {
  type: FunctionMaintenanceType
  targetIds: string[]
  isTwitter: boolean
  websiteUrl: string
}

export type BannerInfo = {
  menuBanners: Banner[]
  messageBanners: Banner[]
  boardBanners: Banner[]
  questBanners: Banner[]
  inviteBanners: Banner[]
  exerciseBanners: Banner[]
  specialPhotoShootingQuestBanners: Banner[]
  specialPhotoShootingActivityBanners: Banner[]
}

export type FanEventInfo = {
  fanEvents: FanEvent[]
  activeFanEvent: ActiveFanEvent
  campaignEffects: ActivityCampaignEffect[]
}

export type PromotionInfo = {
  promotions: Promotion[]
  activePromotion: ActivePromotion
  campaignEffects: ActivityCampaignEffect[]
}

export type RefreshInfo = {
  refreshes: Refresh[]
  activeRefresh: ActiveRefresh
  campaignEffects: ActivityCampaignEffect[]
}

export type PurchasedLoginBonusShopInfo = {
  shopInfo: ShopInfo
  loginBonusPackageItem: LoginBonusPackageItem
}

export type PurchasedConditionRewardShopInfo = {
  shopInfo: ShopInfo
  conditionRewardPackageItem: ConditionRewardPackageItem
}

export type LeagueRewardResultInfo = {
  leagueSeasonName: string
  leagueGradeName: string
  seasonResultType: LeagueSeasonResultType
  rank: number
  point: string
  winCount: number
  loseCount: number
  rewards: Reward[]
  highestLeagueGradeName: string
}

export type DiceRewardResultInfo = {
  score: string
  rank: number
  rewardResults: Reward[]
  totalAreaCount: string
  totalMovedPanelCount: string
}

export type ShowcaseLikedRewardResultInfo = {
  likedCount: string
  rewards: Reward[]
}

export type HomeSatelliteInfo = {
  id: string
  description: string
  buttonText: string
  startTime: string
  endTime: string
  buttonLabel: string
  isGeneratedCode: boolean
  websiteUrl: string
}

export type InviteTopResponse = {
  inviteCode: string
  guestInfos: InviteGuestInfo[]
  noticeInfo: NoticeInfo
  receivedHostRewardTotalAmount: string
  exchangeBoothId: string
  commonResponse: CommonResponse
}

export type InviteReceiveHostRewardsRequest = {
  userIds: string[]
}

export type InviteReceiveHostRewardsResponse = {
  results: RewardResult[]
  commonResponse: CommonResponse
}

export type InviteEnterCodeRequest = {
  inviteCode: string
}

export type InviteEnterCodeResponse = {
  commonResponse: CommonResponse
}

export type ItemSellRequest = {
  itemId: string
  amount: string
}

export type ItemSellResponse = {
  commonResponse: CommonResponse
}

export type LadderTopRequest = {
  ladderId: string
}

export type LadderTopResponse = {
  ladderInfo: LadderInfo
  progressInfo: LadderProgressInfo
  dokanInfos: DokanInfo[]
  commonResponse: CommonResponse
}

export type LadderPanelReachRequest = {
  ladderId: string
  step: number
  lane: number
}

export type LadderPanelReachResponse = {
  rewardResults: RewardResult[]
  progressInfo: LadderProgressInfo
  reachablePanelCount: number
  commonResponse: CommonResponse
}

export type LeagueTopResponse = {
  seasonInfo: LeagueSeasonInfo
  newsInfo: LeagueNewsInfo
  seasonResultInfo: LeagueSeasonResultInfo
  dailyResultInfos: LeagueDailyResultInfo[]
  seasonCardResultInfos: LeagueSeasonCardResultInfo[]
  deckInfos: LeagueDeckInfo[]
  deckHistoryInfos: LeagueDeckHistoryInfo[]
  rankExistInfo: LeagueRankExistInfo
  commonResponse: CommonResponse
}

export type LeagueSeasonInfo = {
  id: string
  name: string
  endTime: string
  deckABattleQuestInfo: LiveBattleQuestInfo
  deckBBattleQuestInfo: LiveBattleQuestInfo
  nextSeasonDeckABattleQuestInfo: LiveBattleQuestInfo
  nextSeasonDeckBBattleQuestInfo: LiveBattleQuestInfo
  rewardInfo: LeagueSeasonRewardInfo
  nextBattleStartTime: string
  skillActivationRateValidJoinCount: number
  nextId: string
  preId: string
}

export type LeagueSeasonResultInfo = {
  leagueGradeName: string
  point: string
  rank: number
  winCount: number
  loseCount: number
  seasonResultType: LeagueSeasonResultType
  upgradeRankThreshold: string
  upgradeLeagueGradeName: string
  downgradeRankThreshold: string
  downgradeLeagueGradeName: string
  highestLeagueGradeName: string
  lowestLeagueGradeName: string
  memberAmount: number
}

export type LeagueSeasonCardResultInfo = {
  cardInfo: LeagueCardInfo
  highestScore: string
  skillActivationRatePermil: number
  mvpCount: number
  highestScoreCardRank: number
  skillActivationRateCardRank: number
  mvpCountCardRank: number
  highestScoreLeagueRank: number
  skillActivationRateLeagueRank: number
  mvpCountLeagueRank: number
  joinCount: number
}

export type LeagueGetDailyDetailRequest = {
  seasonId: string
  date: string
}

export type LeagueGetDailyDetailResponse = {
  deckACards: LiveCardInfo[]
  deckBCards: LiveCardInfo[]
  battleResultInfos: LeagueBattleResultInfo[]
  winCount: number
  loseCount: number
  point: string
  rank: number
  commonResponse: CommonResponse
}

export type LeagueBattleResultInfo = {
  opponentUserId: string
  opponentUserName: string
  opponentDeckACards: LiveCardInfo[]
  deckASelfScore: string
  deckAOpponentScore: string
  opponentDeckBCards: LiveCardInfo[]
  deckBSelfScore: string
  deckBOpponentScore: string
}

export type LeagueOpponentInfo = {
  userId: string
  name: string
  deckACards: LiveCardInfo[]
  deckBCards: LiveCardInfo[]
}

export type LeagueGetLiveResultRequest = {
  seasonId: string
  date: string
  userId: string
  deckType: LeagueDeckType
  isDetail: boolean
}

export type LeagueGetLiveResultResponse = {
  result: LiveResult
  commonResponse: CommonResponse
}

export type LeagueSaveDeckRequest = {
  seasonId: string
  deckType: LeagueDeckType
  deckPositions: UserDeckPosition[]
  deckEditType: DeckEditType
}

export type LeagueSaveDeckResponse = {
  deckPositions: UserDeckPosition[]
  commonResponse: CommonResponse
}

export type LeagueDeckInfo = {
  seasonId: string
  deckType: LeagueDeckType
  deckPositions: UserDeckPosition[]
  winCount: number
  loseCount: number
  consecutiveWinCount: number
}

export type LeagueDeckHistoryInfo = {
  date: string
  deckACards: LiveCardInfo[]
  deckAWinCount: number
  deckALoseCount: number
  deckBCards: LiveCardInfo[]
  deckBWinCount: number
  deckBLoseCount: number
}

export type LeagueGetLastSeasonResultResponse = {
  seasonName: string
  seasonResultInfo: LeagueSeasonResultInfo
  dailyResultInfos: LeagueDailyResultInfo[]
  seasonCardResultInfos: LeagueSeasonCardResultInfo[]
  skillActivationRateValidJoinCount: number
  rankExistInfo: LeagueRankExistInfo
  commonResponse: CommonResponse
}

export type LeagueListPointRankingRequest = {
  seasonId: string
}

export type LeagueListPointRankingResponse = {
  rankings: LeaguePointRanking[]
  commonResponse: CommonResponse
}

export type LeagueListCardHighestScoreRankingRequest = {
  seasonId: string
}

export type LeagueListCardHighestScoreRankingResponse = {
  rankings: LeagueCardRanking[]
  commonResponse: CommonResponse
}

export type LeagueListCardSkillRateRankingRequest = {
  seasonId: string
}

export type LeagueListCardSkillRateRankingResponse = {
  rankings: LeagueCardRanking[]
  commonResponse: CommonResponse
}

export type LeagueListCardMvpRankingRequest = {
  seasonId: string
}

export type LeagueListCardMvpRankingResponse = {
  rankings: LeagueCardRanking[]
  commonResponse: CommonResponse
}

export type LeagueRankExistInfo = {
  isPointExist: boolean
  cardRankExistInfos: LeagueCardRankExistInfo[]
}

export type LeagueCardRankExistInfo = {
  resultType: LeagueSeasonCardResultType
  isExist: boolean
}

export type LoginBonusListResponse = {
  infos: LoginBonusInfo[]
  commonResponse: CommonResponse
}

export type LoginBonusReceiveRequest = {
  loginBonusId: string
}

export type LoginBonusReceiveResponse = {
  userLoginBonus: UserLoginBonus
  rewards: RewardResult[]
  commonResponse: CommonResponse
}

export type LoginBonusInfo = {
  userLoginBonus: UserLoginBonus
  noticeInfo: NoticeInfo
}

export type LoveTitleResponse = {
  loveInfos: LoveInfo[]
  commonResponse: CommonResponse
}

export type LoveTitleExtraRequest = {
  loveId: string
}

export type LoveTitleExtraResponse = {
  loveInfo: LoveInfo
  titleAssetId: string
  commonResponse: CommonResponse
}

export type LoveStoryEndInfo = {
  id: string
  name: string
  unlocked: boolean
}

export type LoveRegisterRequest = {
  loveId: string
  name: string
}

export type LoveRegisterResponse = {
  commonResponse: CommonResponse
}

export type LoveTopRequest = {
  loveId: string
}

export type LoveSaveInfo = {
  unlocked: boolean
  saveDataInfos: LoveSaveDataInfo[]
}

export type LoveLessonProgress = {
  lastReceiveTime: string
  maxRewardTime: string
}

export type LoveLevelInfo = {
  level: number
  unlockStoryEpisode: number
  unlockLoveHintType: LoveHintType
  isTextViewable: boolean
}

export type LoveStartRequest = {
  storyEpisodeId: string
  hintLevel: number
}

export type LoveStartResponse = {
  storyChoiceGroupInfos: LoveStoryChoiceGroupInfo[]
  advBranchInfos: LoveAdvBranchInfo[]
  commonResponse: CommonResponse
}

export type LoveRestartRequest = {
  storyEpisodeId: string
  hintLevel: number
}

export type LoveRestartResponse = {
  storyChoiceGroupInfos: LoveStoryChoiceGroupInfo[]
  advBranchInfos: LoveAdvBranchInfo[]
  commonResponse: CommonResponse
}

export type LoveStoryChoiceGroupInfo = {
  groupIndex: number
  storyChoiceInfos: LoveStoryChoiceInfo[]
  existsObtainableFavorabilityDifference: boolean
}

export type LoveStoryChoiceInfo = {
  index: number
  isBestObtainableFavorability: boolean
  isPastSelected: boolean
}

export type LoveAdvBranchInfo = {
  groupIndex: number
  index: number
}

export type LoveFinishRequest = {
  storyEpisodeId: string
  selectStoryChoiceInfos: LoveSelectStoryChoiceInfo[]
  hintLevel: number
}

export type LoveSelectStoryChoiceInfo = {
  groupIndex: number
  index: number
  isValid: boolean
}

export type LoveFinishResponse = {
  rewards: RewardResult[]
  storyEndName: string
  unlockSave: boolean
  endRollAssetId: string
  commonResponse: CommonResponse
}

export type LoveResetReadingStoryStatusRequest = {
  loveId: string
}

export type LoveResetReadingStoryStatusResponse = {
  commonResponse: CommonResponse
}

export type LovePresentRequest = {
  loveId: string
}

export type LovePresentResponse = {
  hiddenFavorability: string
  commonResponse: CommonResponse
}

export type LoveSaveRequest = {
  loveId: string
  slotNumber: number
}

export type LoveSaveResponse = {
  commonResponse: CommonResponse
}

export type LoveUpdateSaveNameRequest = {
  loveId: string
  slotNumber: number
  name: string
}

export type LoveUpdateSaveNameResponse = {
  commonResponse: CommonResponse
}

export type LoveLoadRequest = {
  loveId: string
  slotNumber: number
}

export type LoveResetRequest = {
  loveId: string
}

export type LoveReceiveLessonRewardRequest = {
  loveId: string
}

export type LoveReceiveLessonRewardResponse = {
  rewards: Reward[]
  obtainExp: string
  totalExp: string
  lessonProgress: LoveLessonProgress
  commonResponse: CommonResponse
}

export type LovePromoteLessonRequest = {
  loveId: string
}

export type LovePromoteLessonResponse = {
  rewards: Reward[]
  obtainExp: string
  totalExp: string
  lessonProgress: LoveLessonProgress
  commonResponse: CommonResponse
}

export type LoveUpdateNameRequest = {
  loveId: string
  name: string
}

export type LoveUpdateNameResponse = {
  commonResponse: CommonResponse
}

export type LoveGetMainCharacterRequest = {
  loveId: string
}

export type LoveGetMainCharacterResponse = {
  mainCharacterInfo: LoveMainCharacterInfo
  commonResponse: CommonResponse
}

export type MarathonTopRequest = {
  marathonId: string
}

export type MarathonTopResponse = {
  marathonInfo: MarathonInfo
  userMarathonInfo: UserMarathonInfo
  questInfos: MarathonQuestInfo[]
  boxGachaInfos: MarathonBoxGachaInfo[]
  dokanInfos: DokanInfo[]
  commonResponse: CommonResponse
}

export type MarathonQuestUnlockRequest = {
  marathonQuestId: string
}

export type MarathonQuestUnlockResponse = {
  unlockedQuestInfo: MarathonQuestInfo
  commonResponse: CommonResponse
}

export type MarathonQuestStartRequest = {
  marathonQuestId: string
  marathonQuestDifficultyNumber: number
  deckNumber: number
  isSkip: boolean
  execCount: number
  userBuddyDeckPositions: UserDeckPosition[]
  buddyDeckName: string
}

export type MarathonQuestListAssetRequest = {
  marathonId: string
  deckNumber: number
  userBuddyDeckPositions: UserDeckPosition[]
  buddyDeckName: string
}

export type MarathonQuestListAssetResponse = {
  characterAssets: LiveCharacterAssetInfo[]
  commonResponse: CommonResponse
}

export type MarathonUseQuestStaminaRecoveryItemRequest = {
  marathonId: string
  amount: number
}

export type MarathonUseQuestStaminaRecoveryItemResponse = {
  userMarathonInfo: UserMarathonInfo
  commonResponse: CommonResponse
}

export type MarathonListDeckRequest = {
  marathonId: string
  marathonQuestId: string
  marathonQuestDifficultyNumber: number
  marathonBuddyDecks: MarathonBuddyDeck[]
}

export type MarathonListDeckResponse = {
  deckInfos: MarathonDeckInfo[]
  buddyDeckInfos: MarathonDeckInfo[]
  commonResponse: CommonResponse
}

export type MarathonDeckSaveRequest = {
  marathonQuestId: string
  number: number
  name: string
  userDeckPositions: UserDeckPosition[]
  marathonQuestDifficultyNumber: number
}

export type MarathonDeckSaveResponse = {
  deckInfo: MarathonDeckInfo
  commonResponse: CommonResponse
}

export type MarathonBuddyDeckRequest = {
  marathonQuestId: string
  marathonQuestDifficultyNumber: number
  marathonBuddyDecks: MarathonBuddyDeck[]
}

export type MarathonBuddyDeck = {
  deckNumber: number
  deckName: string
  userBuddyDeckPositions: UserDeckPosition[]
}

export type MarathonBuddyDeckResponse = {
  buddyDeckInfos: MarathonDeckInfo[]
  commonResponse: CommonResponse
}

export type MarathonBoxGachaDrawRequest = {
  marathonId: string
  boxGachaId: string
  execCount: number
}

export type MarathonBoxGachaDrawResponse = {
  drawResults: BoxGachaDrawResult[]
  pickupResults: BoxGachaDrawResult[]
  commonResponse: CommonResponse
}

export type MarathonBoxGachaResetRequest = {
  marathonId: string
  boxGachaId: string
}

export type MarathonBoxGachaResetResponse = {
  boxGachaInfo: MarathonBoxGachaInfo
  commonResponse: CommonResponse
}

export type MarathonRaidListRequest = {
  marathonId: string
}

export type MarathonRaidListResponse = {
  joinableQuests: MarathonRaidQuestProgress[]
  progressingQuests: MarathonRaidQuestProgress[]
  finishedQuests: MarathonRaidQuestProgress[]
  updateEnableTime: string
  commonResponse: CommonResponse
}

export type MarathonRaidCheckProgressRequest = {
  marathonId: string
  raidId: string
}

export type MarathonRaidCheckProgressResponse = {
  finished: boolean
  commonResponse: CommonResponse
}

export type MarathonRaidListHistoryRequest = {
  marathonId: string
}

export type MarathonRaidListHistoryResponse = {
  quests: MarathonRaidQuestProgress[]
  commonResponse: CommonResponse
}

export type MarathonRaidGetHistoryDetailRequest = {
  marathonId: string
  raidId: string
}

export type MarathonRaidGetHistoryDetailResponse = {
  raidResult: MarathonRaidResult
  commonResponse: CommonResponse
}

export type MarathonRaidListRankingRequest = {
  marathonId: string
  raidId: string
}

export type MarathonRaidListRankingResponse = {
  rankedUsers: MarathonRaidRankedUser[]
  selfScore: string
  hostUserName: string
  commonResponse: CommonResponse
}

export type MarathonRaidStartRequest = {
  marathonId: string
  difficultyNumber: number
  deckNumber: number
  isSkip: boolean
}

export type MarathonRaidJoinRequest = {
  marathonId: string
  raidId: string
  deckNumber: number
  isSkip: boolean
  difficultyNumber: number
}

export type MarathonRaidFinishRequest = {
  marathonId: string
  raidId: string
}

export type MarathonRaidFinishResponse = {
  raidResult: MarathonRaidResult
  commonResponse: CommonResponse
}

export type MarathonUseRaidStaminaRecoveryItemRequest = {
  marathonId: string
  amount: number
}

export type MarathonUseRaidStaminaRecoveryItemResponse = {
  userMarathonInfo: UserMarathonInfo
  commonResponse: CommonResponse
}

export type MarathonListRaidDeckRequest = {
  marathonId: string
  difficultyNumber: number
  raidId: string
}

export type MarathonListRaidDeckResponse = {
  deckInfos: MarathonDeckInfo[]
  rankedUsers: MarathonRaidSimpleRankedUser[]
  commonResponse: CommonResponse
}

export type MarathonRaidDeckSaveRequest = {
  marathonId: string
  number: number
  name: string
  userDeckPositions: UserDeckPosition[]
  difficultyNumber: number
}

export type MarathonRaidDeckSaveResponse = {
  deckInfo: MarathonDeckInfo
  commonResponse: CommonResponse
}

export type UserMarathonInfo = {
  currentStamina: number
  staminaUpdatedTime: string
  liveBonusInfos: MarathonLiveBonusInfo[]
  currentRaidStamina: number
  raidStaminaUpdatedTime: string
  ladderProgressInfo: LadderProgressInfo
  progressingRaidQuestCount: number
  finishedRaidQuestCount: number
  nextRaidHostEnableTime: string
  isRaidHostEnable: boolean
  reachableLadderPanelCount: number
}

export type MarathonQuestDifficultyLevelInfo = {
  marathonQuestDifficultyNumber: number
  cleared: boolean
  rankType: ResultRankType
  plus: number
  opponentInfo: QuestOpponentInfo
  unlocked: boolean
  highestScore: string
  liveSkipType: LiveSkipType
}

export type MarathonDeckInfo = {
  number: number
  cardDetailInfo: MarathonDeckCardDetailInfo[]
  deckOverallValue: string
}

export type MarathonDeckCardDetailInfo = {
  position: number
  vocal: string
  dance: string
  visual: string
  stamina: string
  mental: string
  technique: string
  accessoryInfos: MarathonAccessoryInfo[]
  photoInfos: MarathonPhotoInfo[]
}

export type MarathonPhotoInfo = {
  photoId: string
  level: number
  abilities: MarathonPhotoAbilityInfo[]
}

export type MarathonRaidResult = {
  isClear: boolean
  score: string
  clearScore: string
  totalScore: string
  elapsedMilliSeconds: number
  rank: number
  joinedUserCount: number
  mvpRewards: RewardResult[]
  rankedUsers: MarathonRaidRankedUser[]
  clearRewards: RewardResult[]
}

export type MarathonRaidSimpleRankedUser = {
  rank: number
  userName: string
  userId: string
}

export type MarathonRaidQuestProgress = {
  raidId: string
  hostUser: MarathonRaidHostUser
  raidEndTime: string
  joinedUserCount: number
  clearScore: string
  totalScore: string
  difficultyNumber: number
  difficultyLevel: number
  progressType: MarathonRaidProgressType
  liveSkipType: LiveSkipType
}

export type MarketListItemResponse = {
  marketItems: MarketItem[]
  nextResetTime: string
  freeResetRemainCount: number
  resetRemainCount: number
  requiredResetStoneAmount: number
  commonResponse: CommonResponse
}

export type MarketResetRequest = {
  isFree: boolean
}

export type MarketResetResponse = {
  marketItems: MarketItem[]
  freeResetRemainCount: number
  resetRemainCount: number
  requiredResetStoneAmount: number
  commonResponse: CommonResponse
}

export type MarketPurchaseRequest = {
  number: number
}

export type MarketPurchaseResponse = {
  marketItems: MarketItem[]
  commonResponse: CommonResponse
}

export type MasterGetResponse = {
  masterTag: MasterTag
}

export type MasterFaqResponse = {
  helpCategories: HelpCategory[]
}

export type MasterRuleRequest = {
  ruleType: RuleType
}

export type MasterRuleResponse = {
  text: string
}

export type MasterGetInquiryTemplateRequest = {
  templateType: InquiryTemplateType
}

export type MasterGetInquiryTemplateResponse = {
  text: string
}

export type MasterGetHelpCategoryRequest = {
  helpType: HelpType
}

export type MasterGetHelpCategoryResponse = {
  helpCategories: HelpCategory[]
}

export type MessageListGroupResponse = {
  infos: MessageGroupInfo[]
  commonResponse: CommonResponse
}

export type MessageTimelineRequest = {
  messageGroupId: string
  timelineId: string
}

export type MessageTimelineResponse = {
  infos: TimelineInfo[]
  hasNext: boolean
  commonResponse: CommonResponse
}

export type MessageReceiveRequest = {
  messageIds: string[]
}

export type MessageReceiveResponse = {
  commonResponse: CommonResponse
}

export type MessageSaveRequest = {
  messageGroupId: string
  timelineId: string
  messageDetailId: string
  selectMessageDetailIds: string[]
}

export type MessageSaveResponse = {
  commonResponse: CommonResponse
}

export type MessageFinishRequest = {
  messageGroupId: string
  timelineId: string
  selectMessageDetailIds: string[]
}

export type MessageFinishResponse = {
  isReliabilityUp: boolean
  commonResponse: CommonResponse
}

export type MessageSaveHistoryRequest = {
  messageId: string
  selectMessageDetailIds: string[]
}

export type MessageSaveHistoryResponse = {
  commonResponse: CommonResponse
}

export type MigrationListResponse = {
  apple: boolean
  google: boolean
  facebook: boolean
  twitter: boolean
  password: boolean
  commonResponse: CommonResponse
}

export type MigrationExecuteRequest = {
  onetimeToken: string
}

export type MigrationExecuteResponse = {
  token: string
}

export type MigrationSetPasswordRequest = {
  password: string
}

export type MigrationSetPasswordResponse = {
  commonResponse: CommonResponse
}

export type MigrationMigratePasswordRequest = {
  userId: string
  password: string
}

export type MigrationProviderAppleInfo = {
  idToken: string
}

export type MigrationLinkAppleRequest = {
  info: MigrationProviderAppleInfo
}

export type MigrationMigrateAppleRequest = {
  info: MigrationProviderAppleInfo
}

export type MigrationProviderGoogleInfo = {
  idToken: string
}

export type MigrationLinkGoogleRequest = {
  info: MigrationProviderGoogleInfo
}

export type MigrationMigrateGoogleRequest = {
  info: MigrationProviderGoogleInfo
}

export type RequestTwitterOAuthTokenRequest = {
  bundleId: string
}

export type RequestTwitterOAuthTokenResponse = {
  oauthToken: string
}

export type MigrationProviderTwitterInfo = {
  oauthToken: string
  oauthVerifier: string
}

export type MigrationLinkTwitterRequest = {
  info: MigrationProviderTwitterInfo
}

export type MigrationMigrateTwitterRequest = {
  info: MigrationProviderTwitterInfo
}

export type MigrationLinkResponse = {
  success: boolean
  linkedUserId: string
  linkedUser: User
  onetimeToken: string
  commonResponse: CommonResponse
}

export type MigrationMigrateResponse = {
  success: boolean
  linkedUserId: string
  linkedUser: User
  onetimeToken: string
}

export type MigrationUnlinkRequest = {
  providerType: ProviderType
}

export type MigrationUnlinkResponse = {
  commonResponse: CommonResponse
}

export type MissionListResponse = {
  userMissions: UserMission[]
  commonResponse: CommonResponse
}

export type MissionReceiveRequest = {
  missionIds: string[]
}

export type MissionReceiveResponse = {
  results: RewardResult[]
  commonResponse: CommonResponse
}

export type MissionURLTransitionRequest = {
  url: string
}

export type MissionURLTransitionResponse = {
  commonResponse: CommonResponse
}

export type MissionEventRequest = {
  eventMissionId: string
}

export type MissionEventResponse = {
  info: EventMissionInfo
  commonResponse: CommonResponse
}

export type MosaicTopRequest = {
  mosaicId: string
}

export type MosaicTopResponse = {
  mosaicInfo: MosaicInfo
  progressInfo: MosaicProgressInfo
  commonResponse: CommonResponse
}

export type MosaicExchangeRequest = {
  mosaicId: string
  number: number
  count: number
}

export type MosaicExchangeResponse = {
  rewardResults: RewardResult[]
  progressInfo: MosaicProgressInfo
  afterPanelInfo: MosaicPanelInfo
  commonResponse: CommonResponse
}

export type MosaicReceiveTotalConsumptionRewardRequest = {
  mosaicId: string
}

export type MosaicReceiveTotalConsumptionRewardResponse = {
  rewardResults: RewardResult[]
  progressInfo: MosaicProgressInfo
  commonResponse: CommonResponse
}

export type CheckOption = {
  disableGameAuthToken: boolean
  disableMasterVersion: boolean
  enableResponseCache: boolean
  enableBodyHash: boolean
  disableCheckLoginToday: boolean
  disableCheckMaintenance: boolean
  disableCheckAppVersion: boolean
}

export type ErrorOption = {
  errorCodes: ErrorCode[]
}

export type NoticeListResponse = {
  notices: NoticeInfo[]
  malfunctionNotices: NoticeInfo[]
  prNotices: NoticeInfo[]
  noticeHasNext: boolean
  malfunctionNoticeHasNext: boolean
  prNoticeHasNext: boolean
  roootAssociateToken: string
  commonResponse: CommonResponse
}

export type NoticeFetchRequest = {
  noticeCategoryType: number
  offset: number
}

export type NoticeFetchResponse = {
  notices: NoticeInfo[]
  hasNext: boolean
  roootAssociateToken: string
  commonResponse: CommonResponse
}

export type NoticeGetRequest = {
  noticeId: string
}

export type NoticeGetResponse = {
  notice: NoticeInfo
  roootAssociateToken: string
  commonResponse: CommonResponse
}

export type PhotoSwitchLockRequest = {
  photoIds: string[]
}

export type PhotoSwitchLockResponse = {
  commonResponse: CommonResponse
}

export type PhotoDeleteRequest = {
  photoIds: string[]
}

export type PhotoDeleteResponse = {
  rewardResults: RewardResult[]
  commonResponse: CommonResponse
}

export type PhotoEnhanceRequest = {
  photoId: string
  level: number
}

export type PhotoEnhanceResponse = {
  commonResponse: CommonResponse
}

export type PhotoRerollRequest = {
  photoId: string
}

export type PhotoRerollResponse = {
  commonResponse: CommonResponse
}

export type PhotoRetouchRequest = {
  photoRecipeId: string
  photoId: string
}

export type PhotoRetouchResponse = {
  commonResponse: CommonResponse
}

export type PhotoUpdateRequest = {
  photoId: string
  name: string
}

export type PhotoUpdateResponse = {
  commonResponse: CommonResponse
}

export type PhotoReportResponse = {
  isGift: boolean
  commonResponse: CommonResponse
}

export type PhotoGetImageUrlRequest = {
  type: PhotoImageRequestType
  assetIds: string[]
}

export type PhotoGetImageUrlResponse = {
  urlList: PhotoImageUrl[]
}

export type PhotoImageUrl = {
  assetId: string
  origUrl: string
  tmbUrl: string
}

export type PhotoCheckShootingRequest = {
  actionType: PhotoShootingActionType
  photoActivityId: string
  photoMusicId: string
  photoStageId: string
  characterIds: string[]
  costumeIds: string[]
  hairIds: string[]
}

export type PhotoCheckShootingResponse = {
  commonResponse: CommonResponse
}

export type PhotoCreateShootingsRequest = {
  actionType: PhotoShootingActionType
  photoActivityId: string
  photoMusicId: string
  photoStageId: string
  characterIds: string[]
  costumeIds: string[]
  hairIds: string[]
  createShootingParams: PhotoCreateShootingParam[]
  manualCount: number
}

export type PhotoCreateShootingParam = {
  photoImageId: string
  itemId: string
  mainCharacterId: string
}

export type PhotoCreateShootingsResponse = {
  photos: UserPhoto[]
  isGift: boolean
  commonResponse: CommonResponse
}

export type PhotoListShootingResponse = {
  activities: PhotoActivity[]
  musics: PhotoMusic[]
  stages: PhotoStage[]
  expressions: PhotoExpression[]
  dokanInfo: PhotoDokanInfo
  commonResponse: CommonResponse
}

export type PhotoExtendLimitResponse = {
  commonResponse: CommonResponse
}

export type PhotoSaleRecipeRequest = {
  photoRecipeIds: string[]
}

export type PhotoSaleRecipeResponse = {
  rewardResults: RewardResult[]
  commonResponse: CommonResponse
}

export type PhotoListSpecialShootingRequest = {
  specialPhotoShootingId: string
}

export type PhotoCheckSpecialShootingRequest = {
  actionType: PhotoShootingActionType
  specialPhotoShootingId: string
  musicId: string
  stageId: string
  characterIds: string[]
  costumeIds: string[]
  hairIds: string[]
}

export type PhotoCheckSpecialShootingResponse = {
  commonResponse: CommonResponse
}

export type PhotoCreateSpecialShootingsRequest = {
  actionType: PhotoShootingActionType
  specialPhotoShootingId: string
  musicId: string
  stageId: string
  characterIds: string[]
  costumeIds: string[]
  hairIds: string[]
  createShootingParams: PhotoCreateShootingParam[]
  manualCount: number
}

export type PhotoCreateSpecialShootingsResponse = {
  photos: UserPhoto[]
  isGift: boolean
  snsText: string
  commonResponse: CommonResponse
}

export type GetDreamBasePhotoEnhanceLevelInfosRequest = {
  basePhotoId: string
}

export type GetDreamBasePhotoEnhanceLevelInfosResponse = {
  levelInfos: DreamBasePhotoEnhanceLevelInfo[]
  commonResponse: CommonResponse
}

export type DreamBasePhotoEnhanceLevelInfo = {
  level: number
  effectValueInfos: DreamBasePhotoEnhanceLevelEffectValueInfo[]
}

export type PhotoActivateStoryEpisodeShootingRequest = {
  storyPartId: string
  chapter: number
  route: number
  episode: number
}

export type PhotoActivateStoryEpisodeShootingResponse = {
  commonResponse: CommonResponse
}

export type PhotoCheckStoryEpisodeShootingRequest = {
  storyPartId: string
  chapter: number
  route: number
  episode: number
}

export type PhotoCheckStoryEpisodeShootingResponse = {
  commonResponse: CommonResponse
}

export type PhotoCheckCardStoryShootingRequest = {
  cardId: string
  number: number
}

export type PhotoCheckCardStoryShootingResponse = {
  commonResponse: CommonResponse
}

export type PhotoCreateStoryEpisodeShootingsRequest = {
  storyPartId: string
  chapter: number
  route: number
  episode: number
  createShootingParams: PhotoCreateShootingParam[]
  manualCount: number
}

export type PhotoCreateStoryEpisodeShootingsResponse = {
  photos: UserPhoto[]
  isGift: boolean
  commonResponse: CommonResponse
}

export type PhotoCreateCardStoryShootingsRequest = {
  cardId: string
  number: number
  createShootingParams: PhotoCreateShootingParam[]
  manualCount: number
}

export type PhotoCreateCardStoryShootingsResponse = {
  photos: UserPhoto[]
  isGift: boolean
  commonResponse: CommonResponse
}

export type PhotoCheckExpressionShootingRequest = {
  photoExpressionId: string
  characterId: string
  costumeId: string
  hairId: string
}

export type PhotoCheckExpressionShootingResponse = {
  commonResponse: CommonResponse
}

export type PhotoCreateExpressionShootingsRequest = {
  photoExpressionId: string
  characterId: string
  costumeId: string
  hairId: string
  createExpressionShootingParams: PhotoCreateExpressionShootingParam[]
  manualCount: number
}

export type PhotoCreateExpressionShootingsResponse = {
  photos: UserPhoto[]
  isGift: boolean
  commonResponse: CommonResponse
}

export type PhotoCreateExpressionShootingParam = {
  photoImageId: string
  itemId: string
  stagePositionNumber: number
  photoPoseId: string
  photoFacialId: string
  photoLookingType: PhotoLookingType
}

export type PhotoDokanInfo = {
  expressions: DokanInfo[]
}

export type PhotoContestTopRequest = {
  photoContestId: string
}

export type PhotoContestTopResponse = {
  photoContestInfo: PhotoContestInfo
  dokanInfos: DokanInfo[]
  commonResponse: CommonResponse
}

export type PhotoContestListPhotoRequest = {
  photoContestId: string
}

export type PhotoContestListPhotoResponse = {
  photoInfos: PhotoContestPhotoInfo[]
  commonResponse: CommonResponse
}

export type PhotoContestRankingRequest = {
  photoContestId: string
}

export type PhotoContestRankingResponse = {
  rankingInfos: PhotoContestRankingInfo[]
  selfPoint: string
  selfRank: number
  commonResponse: CommonResponse
}

export type PhotoContestReceiveSectionRewardsRequest = {
  photoContestId: string
  sectionRewardIds: string[]
  sectionId: string
}

export type PhotoContestReceiveSectionRewardsResponse = {
  results: RewardResult[]
  commonResponse: CommonResponse
}

export type PhotoContestCheckShootingRequest = {
  photoContestId: string
  actionType: PhotoShootingActionType
  photoContestActivityId: string
  photoContestQuestMusicId: string
  photoContestQuestStageId: string
  selectedCharacterIds: string[]
  selectedCostumeIds: string[]
  sectionId: string
  selectedHairIds: string[]
}

export type PhotoContestCheckShootingResponse = {
  nextPhotoImageId: string
  commonResponse: CommonResponse
}

export type PhotoContestSubmitShootingRequest = {
  photoContestId: string
  sectionId: string
  itemId: string
  actionType: PhotoShootingActionType
  photoContestActivityId: string
  photoContestQuestMusicId: string
  photoContestQuestStageId: string
  mainCharacterId: string
  characterIds: string[]
  costumeIds: string[]
  elapsedMilliSeconds: number
  sizeFullPermil: number
  sizeUpperPermil: number
  directionFrontPermil: number
  directionSidePermil: number
  positionPermil: number
  shootingMotionId: string
  selectedCharacterIds: string[]
  selectedCostumeIds: string[]
  hairIds: string[]
  selectedHairIds: string[]
}

export type PhotoContestCreateShootingRequest = {
  photoContestId: string
  assetId: string
  itemId: string
}

export type PhotoContestCreateShootingResponse = {
  photo: UserPhoto
  isGift: boolean
  commonResponse: CommonResponse
}

export type PhotoContestSectionBaseGuideInfo = {
  baseEvaluationType: PhotoContestBaseEvaluationType
  baseGuideRankType: PhotoContestBaseGuideRankType
}

export type PhotoContestSectionAdvanceGuideInfo = {
  number: number
  description: string
  isSatisfied: boolean
}

export type ProfileFindUserRequest = {
  userId: string
}

export type ProfileUpdateNameRequest = {
  name: string
}

export type ProfileUpdateNameResponse = {
  commonResponse: CommonResponse
}

export type ProfileUpdateMessageRequest = {
  message: string
}

export type ProfileUpdateMessageResponse = {
  commonResponse: CommonResponse
}

export type ProfileUpdateBackgroundRequest = {
  backgroundType: ProfileBackgroundType
  favoriteCardId: string
  favoritePhotoId: string
  favoriteCardDisplayType: CardDisplayType
}

export type ProfileUpdateBackgroundResponse = {
  commonResponse: CommonResponse
}

export type ProfileUpdateFavoriteCharactersRequest = {
  favoriteCharacterIds: string[]
}

export type ProfileUpdateFavoriteCharactersResponse = {
  commonResponse: CommonResponse
}

export type ProfileUpdateDecorationRequest = {
  decorationId: string
}

export type ProfileUpdateDecorationResponse = {
  commonResponse: CommonResponse
}

export type ProfileUpdateEmblemRequest = {
  emblemId: string
}

export type ProfileUpdateEmblemResponse = {
  commonResponse: CommonResponse
}

export type ProfileUpdateLayoutRequest = {
  layoutType: ProfileLayoutType
  informationType: ProfileInformationType
  colorType: ProfileColorType
}

export type ProfileUpdateLayoutResponse = {
  commonResponse: CommonResponse
}

export type ProfileClearTwitterMissionResponse = {
  commonResponse: CommonResponse
}

export type ProfileUpdateBuddyCardRequest = {
  cardId: string
}

export type ProfileUpdateBuddyCardResponse = {
  commonResponse: CommonResponse
}

export type ProfileUpdateBirthdayRequest = {
  month: number
  day: number
}

export type ProfileUpdateBirthdayResponse = {
  birthdayAdvInfo: BirthdayAdvInfo
  birthdayRemindInfo: BirthdayRemindInfo
  commonResponse: CommonResponse
}

export type PvpTopResponse = {
  topResult: PvpTopResultInfo
  opponentInfos: PvpOpponentInfo[]
  commonResponse: CommonResponse
}

export type PvpTopResultInfo = {
  pvpSeason: PvpSeasonInfo
  pvpRewards: PvpRewardInfo[]
  pvpQuest: LiveBattleQuestInfo
  userPvpSeason: UserPvpSeasonInfo
  rank: string
  pvpTicketAvailableAmount: number
}

export type UserPvpSeasonInfo = {
  point: string
  challengeCount: number
}

export type PvpListOpponentRequest = {
  pvpSeasonId: string
}

export type PvpListOpponentResponse = {
  opponentInfos: PvpOpponentInfo[]
  commonResponse: CommonResponse
}

export type PvpListRankingRequest = {
  pvpSeasonId: string
}

export type PvpListRankingResponse = {
  rankingInfos: LiveRankingInfo[]
  selfPoint: string
  selfRank: number
  commonResponse: CommonResponse
}

export type PvpStartRequest = {
  pvpSeasonId: string
  opponentId: string
  deckNumber: number
  usePvpTicket: boolean
  isSkip: boolean
}

export type PvpStartResponse = {
  result: LiveResult
  point: string
  addPoint: string
  rank: number
  musicMasteryRewards: Reward[]
  challengeRewards: RewardResult[]
  profile: AllProfileInfo
  opponentProfile: AllProfileInfo
  commonResponse: CommonResponse
}

export type PvpListAssetRequest = {
  pvpSeasonId: string
  opponentId: string
  deckNumber: number
}

export type PvpListAssetResponse = {
  characterAssets: LiveCharacterAssetInfo[]
  opponentCharacterAssets: LiveCharacterAssetInfo[]
  commonResponse: CommonResponse
}

export type QuestListMainResponse = {
  areaGroups: QuestAreaGroupInfo[]
  commonResponse: CommonResponse
}

export type QuestListDailyResponse = {
  areas: QuestAreaInfo[]
  bulkDailyInfos: QuestBulkDailyInfo[]
  commonResponse: CommonResponse
}

export type QuestListContestResponse = {
  area: QuestAreaInfo
  commonResponse: CommonResponse
}

export type QuestListTowerResponse = {
  area: QuestAreaInfo
  commonResponse: CommonResponse
}

export type QuestStartRequest = {
  questId: string
  deckNumber: number
  useDailyTicket: boolean
  isSkip: boolean
  playCount: number
  userBuddyDeckPositions: UserDeckPosition[]
  buddyDeckName: string
}

export type QuestStartBulkDailyResponse = {
  results: QuestBulkDailyResultInfo[]
  commonResponse: CommonResponse
}

export type QuestListTowerRankingRequest = {
  areaId: string
}

export type QuestListContestRankingRequest = {
  questId: string
}

export type QuestListContestRankingResponse = {
  selfHighestRank: number
  selfScore: string
  ranks: QuestContestRankInfo[]
  commonResponse: CommonResponse
}

export type QuestListLatestClearRequest = {
  questId: string
}

export type QuestListLatestClearResponse = {
  clears: QuestClearInfo[]
  commonResponse: CommonResponse
}

export type QuestListAssetRequest = {
  questId: string
  deckNumber: number
  userBuddyDeckPositions: UserDeckPosition[]
  buddyDeckName: string
}

export type QuestListAssetResponse = {
  characterAssets: LiveCharacterAssetInfo[]
  commonResponse: CommonResponse
}

export type QuestGetLatestClearLiveResultRequest = {
  questId: string
  userId: string
  isDetail: boolean
}

export type QuestGetLatestClearLiveResultResponse = {
  result: LiveResult
  rankPatterns: QuestRankPattern[]
  commonResponse: CommonResponse
}

export type QuestGetRankingLiveResultRequest = {
  questId: string
  userId: string
  isDetail: boolean
}

export type QuestGetRankingLiveResultResponse = {
  result: LiveResult
  rankPatterns: QuestRankPattern[]
  commonResponse: CommonResponse
}

export type QuestTowerTopResponse = {
  towerArea: QuestTowerAreaInfo
  subTowerAreas: QuestTowerAreaInfo[]
  hierarchyNotiInfo: HierarchyNotiInfo
}

export type QuestTopPvpInfo = {
  rank: number
  remainingChallengeCount: number
  latestPvpSeason: PvpSeasonInfo
}

export type OutputLiveResultDetailLogRequest = {
  liveResultDetailLogId: string
  cleared: boolean
  score: string
}

export type OutputLiveResultDetailLogResponse = {
  commonResponse: CommonResponse
}

export type RaceTopRequest = {
  raceId: string
}

export type RaceTopResponse = {
  raceInfo: RaceInfo
  userRaceInfo: UserRaceInfo
  liveQuestInfos: RaceLiveQuestInfo[]
  isInitialLogin: boolean
  dokanInfos: DokanInfo[]
  opponentProgressInfos: RaceOpponentProgressInfo[]
  isFirstLoginInDailyAggregationPeriod: boolean
  nextDailyAggregationTime: string
  commonResponse: CommonResponse
}

export type RaceMovePanelRequest = {
  raceId: string
}

export type RaceMovePanelResponse = {
  rewardResults: RewardResult[]
  userRaceInfo: UserRaceInfo
  opponentProgressInfos: RaceOpponentProgressInfo[]
  liveQuestInfos: RaceLiveQuestInfo[]
  commonResponse: CommonResponse
}

export type RaceReceiveActivityLessonRequest = {
  raceId: string
}

export type RaceReceiveActivityLessonResponse = {
  rewards: Reward[]
  userRaceInfo: UserRaceInfo
  commonResponse: CommonResponse
}

export type RaceEnhanceLiveBonusRequest = {
  raceId: string
  liveBonusId: string
  level: number
}

export type RaceEnhanceLiveBonusResponse = {
  userRaceInfo: UserRaceInfo
  commonResponse: CommonResponse
}

export type RaceResetLiveBonusRequest = {
  raceId: string
}

export type RaceResetLiveBonusResponse = {
  userRaceInfo: UserRaceInfo
  commonResponse: CommonResponse
}

export type RaceStartLivePanelQuestRequest = {
  raceId: string
  deckNumber: number
  isSkip: boolean
}

export type RaceStartLivePanelQuestResponse = {
  result: LiveResult
  userRaceInfo: UserRaceInfo
  opponentProgressInfos: RaceOpponentProgressInfo[]
  beforeScore: string
  rankPatterns: QuestRankPattern[]
  commonResponse: CommonResponse
}

export type RaceStartLiveAreaQuestRequest = {
  raceId: string
  raceQuestId: string
  difficultyNumber: number
  deckNumber: number
  isSkip: boolean
}

export type RaceStartLiveAreaQuestResponse = {
  result: LiveResult
  userRaceInfo: UserRaceInfo
  rankPatterns: QuestRankPattern[]
  commonResponse: CommonResponse
}

export type RaceQuestListAssetRequest = {
  raceId: string
  raceQuestId: string
  deckNumber: number
}

export type RaceQuestListAssetResponse = {
  characterAssets: LiveCharacterAssetInfo[]
  commonResponse: CommonResponse
}

export type RaceListDeckRequest = {
  raceId: string
  raceQuestId: string
  difficultyNumber: number
}

export type RaceListDeckResponse = {
  deckInfos: RaceDeckInfo[]
}

export type RaceSaveDeckRequest = {
  raceId: string
  number: number
  name: string
  userDeckPositions: UserDeckPosition[]
  raceQuestId: string
  difficultyNumber: number
}

export type RaceSaveDeckResponse = {
  deckInfo: RaceDeckInfo
  commonResponse: CommonResponse
}

export type RaceResetCardCoolTimeRequest = {
  raceId: string
  cardId: string
}

export type RaceResetCardCoolTimeResponse = {
  userRaceInfo: UserRaceInfo
  commonResponse: CommonResponse
}

export type RaceRankingRequest = {
  raceId: string
}

export type RaceRankingResponse = {
  rankingInfos: RaceRankingInfo[]
  selfClearPanelCount: string
  selfRank: number
}

export type RaceAreaInfo = {
  raceAreaId: string
  order: number
  panelCount: number
}

export type RaceRankGradeInfo = {
  id: string
  hierarchyPointFrom: string
  name: string
  topColorCode: string
  bottomColorCode: string
}

export type UserRaceInfo = {
  rankGradeId: string
  rankGradeNumber: number
  currnentRank: number
  currentAreaId: string
  currentPanelNumber: number
  activityLessonProgress: RaceActivityLessonProgress
  liveBonusInfos: RaceLiveBonusInfo[]
  cardCoolTimeInfos: RaceUserCardCoolTimeInfo[]
  totalClearPanelCount: number
  currentLivePanelScore: string
}

export type RaceActivityLessonProgress = {
  stepRewardRacePoint: number
  stepRewardRaceMedal: number
  lastReceiveTime: string
  maxRewardTime: string
}

export type RaceLiveQuestDifficultyLevelInfo = {
  raceLiveQuestDifficultyNumber: number
  cleared: boolean
  opponentInfo: QuestOpponentInfo
  highestScore: string
  unlocked: boolean
}

export type RaceDeckInfo = {
  number: number
  cardDetailInfos: RaceDeckCardDetailInfo[]
  deckOverallValue: string
}

export type RaceDeckCardDetailInfo = {
  position: number
  vocal: string
  dance: string
  visual: string
  stamina: string
  mental: string
  technique: string
  accessoryInfos: RaceAccessoryInfo[]
  photoInfos: RacePhotoInfo[]
}

export type RacePhotoInfo = {
  photoId: string
  level: number
  abilities: RacePhotoAbilityInfo[]
}

export type RouletteTopResponse = {
  id: string
  freeCountLimit: number
  adCountLimit: number
  displayRewardList: RouletteReward[]
  currentDrawFreeCount: number
  currentDrawAdCount: number
  assetId: string
  commonResponse: CommonResponse
}

export type RouletteCheckRequest = {
  rouletteId: string
}

export type RouletteCheckResponse = {
  commonResponse: CommonResponse
}

export type RouletteDrawRequest = {
  rouletteId: string
}

export type RouletteDrawResponse = {
  rewardResults: RewardResult[]
  number: number
  rarityType: RouletteRarityType
  effectInfo: RouletteEffectInfo
  rewardList: RouletteReward[]
  commonResponse: CommonResponse
}

export type RouletteReward = {
  reward: Reward
  number: number
  rarityType: RouletteRarityType
}

export type RouletteEffectInfo = {
  specialEffectType: RouletteSpecialEffectType
  reversalEffectAssetId: string
  characterType: RouletteCharacterType
  frameAssetId: string
  characterStoppingAssetId: string
  characterRotatingAssetId: string
  crowdAssetId: string
  backgroundColorType: RouletteBackgroundColorType
  buttonColorAssetId: string
  buttonColorType: RouletteButtonColorType
  isMuteBgm: boolean
  isVibration: boolean
  isRotateDirectionLeft: boolean
  obtainEffectType: RouletteObtainEffectType
}

export type SalaryGetPayslipRequest = {
  yearMonths: number[]
}

export type SalaryGetPayslipResponse = {
  payslips: Payslip[]
  commonResponse: CommonResponse
}

export type SalaryPayRequest = {
  year: number
  month: number
}

export type SalaryPayResponse = {
  payslip: Payslip
  commonResponse: CommonResponse
}

export type SatelliteInitCodeRequest = {
  satelliteId: string
}

export type SatelliteInitCodeResponse = {
  code: string
  commonResponse: CommonResponse
}

export type ShelfTopResponse = {
  shelfInfo: ShelfInfo
  commonResponse: CommonResponse
}

export type ShelfAlbumTopRequest = {
  shelfAlbumId: string
}

export type ShelfAlbumTopResponse = {
  templateInfos: ShelfTemplateInfo[]
  photoInfos: ShelfPhotoInfo[]
  episodeInfos: ShelfAlbumEpisodeInfo[]
  selectedTemplateId: string
  commonResponse: CommonResponse
}

export type ShelfCheckShootingRequest = {
  shelfAlbumId: string
  episode: number
}

export type ShelfCheckShootingResponse = {
  commonResponse: CommonResponse
}

export type ShelfSavePhotoRequest = {
  shelfAlbumId: string
  episode: number
  savePhotoParams: ShelfSavePhotoParam[]
}

export type ShelfSavePhotoResponse = {
  commonResponse: CommonResponse
}

export type ShelfSetPhotoRequest = {
  shelfAlbumId: string
  slotNumber: number
  assetId: string
  positionX: string
}

export type ShelfSetPhotoResponse = {
  commonResponse: CommonResponse
}

export type ShelfCreatePhotoRequest = {
  shelfAlbumId: string
  assetId: string
}

export type ShelfCreatePhotoResponse = {
  photo: UserPhoto
  isGift: boolean
  commonResponse: CommonResponse
}

export type ShelfCreateAlbumPhotoRequest = {
  shelfAlbumId: string
  assetId: string
}

export type ShelfCreateAlbumPhotoResponse = {
  photo: UserPhoto
  isGift: boolean
  commonResponse: CommonResponse
}

export type ShelfDeletePhotoRequest = {
  shelfAlbumId: string
  assetIds: string[]
}

export type ShelfDeletePhotoResponse = {
  commonResponse: CommonResponse
}

export type ShelfSwitchTemplateRequest = {
  shelfAlbumId: string
  templateId: string
}

export type ShelfSwitchTemplateResponse = {
  commonResponse: CommonResponse
}

export type ShelfUnsetPhotoRequest = {
  shelfAlbumId: string
  slotNumber: number
}

export type ShelfUnsetPhotoResponse = {
  commonResponse: CommonResponse
}

export type ShelfTemplateInfo = {
  templateId: string
  slotInfos: ShelfAlbumSlotInfo[]
  templateType: ShelfTemplateType
  backgroundAssetId: string
}

export type ShelfAlbumSlotInfo = {
  slotNumber: number
  episode: number
  assetId: string
  positionX: string
}

export type ShelfSavePhotoParam = {
  assetId: string
  mainCharacterId: string
  characterIds: string[]
}

export type ShopListResponse = {
  shops: ShopInfo[]
  dokanInfos: DokanInfo[]
  commonResponse: CommonResponse
}

export type ShopListItemRequest = {
  shopId: string
}

export type ShopListItemResponse = {
  shopItems: ShopItem[]
  commonResponse: CommonResponse
}

export type ShopGetLoginBonusPackageItemRequest = {
  shopId: string
}

export type ShopGetLoginBonusPackageItemResponse = {
  loginBonusPackageItem: LoginBonusPackageItem
  commonResponse: CommonResponse
}

export type ShopGetConditionRewardPackageItemRequest = {
  shopId: string
}

export type ShopGetConditionRewardPackageItemResponse = {
  conditionRewardPackageItem: ConditionRewardPackageItem
  commonResponse: CommonResponse
}

export type ShopPurchaseRequest = {
  shopItemId: string
}

export type ShopPurchaseResponse = {
  rewards: RewardResult[]
  commonResponse: CommonResponse
}

export type ShopRegisterPurchaseTransactionRequest = {
  shopItemId: string
}

export type ShopRegisterPurchaseTransactionResponse = {
  transactionId: string
  commonResponse: CommonResponse
}

export type ShopCancelPurchaseTransactionRequest = {
  shopItemId: string
  transactionId: string
}

export type ShopCancelPurchaseTransactionResponse = {
  commonResponse: CommonResponse
}

export type ShopPurchaseStoneRequest = {
  productId: string
  transactionId: string
  receipt: string
  signature: string
  currencyCode: string
  localizedPricePermyriad: string
}

export type ShopPurchaseStoneResponse = {
  rewards: RewardResult[]
  paidJpy: PaidJpy
  commonResponse: CommonResponse
}

export type ShopRecoverPurchaseStoneRequest = {
  productId: string
  receipt: string
  signature: string
  currencyCode: string
  localizedPricePermyriad: string
}

export type ShopRecoverPurchaseStoneResponse = {
  rewards: RewardResult[]
  shopItemName: string
  commonResponse: CommonResponse
}

export type ShopCheckPurchaseStoneRequest = {
  shopItemId: string
}

export type ShopCheckPurchaseStoneResponse = {
  birthdayNotRegistered: boolean
  exceedMaxStoneAmount: boolean
  exceedPurchaseThreshold: boolean
  exceedAlertThreshold: boolean
  commonResponse: CommonResponse
}

export type ShopRegisterBirthdayRequest = {
  year: number
  month: number
}

export type ShopRegisterBirthdayResponse = {
  commonResponse: CommonResponse
}

export type ShopReceiveConditionRewardRequest = {
  shopId: string
  numbers: number[]
}

export type ShopReceiveConditionRewardResponse = {
  rewards: RewardResult[]
  commonResponse: CommonResponse
}

export type ShopTryOnRequest = {
  shopItemId: string
  costumeId: string
  hairId: string
}

export type ShopTryOnResponse = {
  commonResponse: CommonResponse
}

export type ShowcaseSaveRequest = {
  number: number
  frameId: string
  assetId: string
  layoutInfo: ShowcaseLayoutInfo
}

export type ShowcaseSaveResponse = {
  commonResponse: CommonResponse
}

export type ShowcaseSaveDetailRequest = {
  number: number
  name: string
  comment: string
  musicId: string
  isOpen: boolean
}

export type ShowcaseSaveDetailResponse = {
  commonResponse: CommonResponse
}

export type ShowcaseSaveMysetRequest = {
  number: number
  frameId: string
  layoutInfo: ShowcaseLayoutInfo
}

export type ShowcaseSaveMysetResponse = {
  commonResponse: CommonResponse
}

export type ShowcaseDeleteMysetRequest = {
  number: number
}

export type ShowcaseDeleteMysetResponse = {
  commonResponse: CommonResponse
}

export type ShowcaseApplyMysetRequest = {
  number: number
}

export type ShowcaseRenameMysetRequest = {
  number: number
  name: string
}

export type ShowcaseRenameMysetResponse = {
  commonResponse: CommonResponse
}

export type ShowcaseCheckThumbnailShootingRequest = {
  number: number
}

export type ShowcaseCheckThumbnailShootingResponse = {
  commonResponse: CommonResponse
}

export type ShowcaseLikeRequest = {
  userId: string
  number: number
}

export type ShowcaseLikeResponse = {
  rewards: Reward[]
  isAlreadyLike: boolean
  commonResponse: CommonResponse
}

export type ShowcaseGetRequest = {
  userId: string
}

export type ShowcaseGetResponse = {
  showcaseInfos: ShowcaseInfo[]
  commonResponse: CommonResponse
}

export type ShowcaseGalleryTopResponse = {
  showcaseInfos: ShowcaseInfo[]
  termInfo: ShowcaseTermInfo
  commonResponse: CommonResponse
}

export type ShowcaseSearchFriendRecommendListResponse = {
  showcaseInfos: ShowcaseInfo[]
  termInfo: ShowcaseTermInfo
  commonResponse: CommonResponse
}

export type ShowcaseSearchHashtagListRequest = {
  hashtagId: string
  isHead: boolean
}

export type ShowcaseSearchHashtagListResponse = {
  showcaseInfos: ShowcaseInfo[]
  termInfo: ShowcaseTermInfo
  isEndHashtagSearchList: boolean
  isAlwaysEmpty: boolean
  commonResponse: CommonResponse
}

export type ShowcaseDisplayRequest = {
  userId: string
  number: number
}

export type ShowcaseDisplayResponse = {
  showcaseInfo: ShowcaseInfo
  isViewable: boolean
  layoutInfo: ShowcaseLayoutInfo
  commonResponse: CommonResponse
}

export type ShowcaseCheckShootingRequest = {
  number: number
}

export type ShowcaseCheckShootingResponse = {
  commonResponse: CommonResponse
}

export type ShowcaseCreatePhotoRequest = {
  number: number
  createPhotoParams: ShowcaseCreatePhotoParam[]
  manualCount: number
}

export type ShowcaseCreatePhotoResponse = {
  photos: UserPhoto[]
  isGift: boolean
  commonResponse: CommonResponse
}

export type ShowcaseToyInfo = {
  id: string
  count: number
}

export type ShowcaseMysetInfo = {
  number: number
  defaultName: string
}

export type ShowcaseInfo = {
  showcase: UserShowcase
  profileInfo: ProfileInfo
  isFriend: boolean
  isLiked: boolean
}

export type ShowcaseTermInfo = {
  month: number
  day: number
  hour: number
}

export type ShowcaseCreatePhotoParam = {
  assetId: string
  itemId: string
  mainCharacterId: string
}

export type ShowcaseLayoutInfo = {
  showcaseToyAssetInfos: ShowcaseToyAssetInfo[]
  showcaseToyArrangementInfos: ShowcaseToyArrangementInfo[]
}

export type ShowcaseToyAssetInfo = {
  uniqueNumber: number
  showcaseToyId: string
  count: number
}

export type ShowcaseToyArrangementInfo = {
  uniqueNumber: number
  toyAssetInfoUniqueNumber: number
  positionX: number
  positionY: number
  rotation: number
  parentUniqueNumber: number
  showcaseFaceNumber: number
}

export type StaffTrainRequest = {
  parameterType: ParameterType
}

export type StaffTrainResponse = {
  commonResponse: CommonResponse
}

export type StaffLevelLimitBreakRequest = {
  parameterType: ParameterType
}

export type StaffLevelLimitBreakResponse = {
  commonResponse: CommonResponse
}

export type StoryReadRequest = {
  storyId: string
  isLast: boolean
}

export type StoryReadResponse = {
  rewards: RewardResult[]
  commonResponse: CommonResponse
}

export type StoryReleaseEpisodeRequest = {
  storyPartId: string
  chapter: number
  route: number
  episode: number
}

export type StoryReleaseEpisodeResponse = {
  commonResponse: CommonResponse
}

export type StoryListEventResponse = {
  infos: EventStoryInfo[]
  commonResponse: CommonResponse
}

export type StoryReadEventRequest = {
  eventStoryId: string
  episode: number
  isLast: boolean
}

export type StoryReadEventResponse = {
  rewards: RewardResult[]
  commonResponse: CommonResponse
}

export type StoryListExtraResponse = {
  infos: ExtraStoryPartInfo[]
  commonResponse: CommonResponse
}

export type StoryReadExtraRequest = {
  extraStoryId: string
  episode: number
  isLast: boolean
}

export type StoryReadExtraResponse = {
  rewards: RewardResult[]
  commonResponse: CommonResponse
}

export type StoryReadAnniversaryStoryRequest = {
  anniversaryId: string
  episode: number
}

export type StoryReadCharacterCompanyEnjoyStoryRequest = {
  characterId: string
  number: number
  isLast: boolean
}

export type StoryReadCharacterCompanyEnjoyStoryResponse = {
  rewards: RewardResult[]
  commonResponse: CommonResponse
}

export type SystemCheckRequest = {
  firebaseIDToken: string
}

export type SystemCheckResponse = {
  maintenanceInfo: MaintenanceInfo
  reviewInfo: ReviewInfo
  keepAliveTimeMilliseconds: number
  keepAliveTimeoutMilliseconds: number
  enableCrashlyticsCollection: boolean
  enableUnityLogErrorToLogException: boolean
  enableApiParallelExecutionSuppression: boolean
}

export type MaintenanceInfo = {
  inMaintenance: boolean
  topMessage: string
  bottomMessage: string
  startTime: string
  endTime: string
  isBeforeRelease: boolean
  twitterUrl: string
  mvUrl: string
  gamePvUrl: string
}

export type ReviewInfo = {
  inReview: boolean
  alternativeApiHost: string
}

export type TelephoneReceiveRequest = {
  telephoneIds: string[]
}

export type TelephoneReceiveResponse = {
  commonResponse: CommonResponse
}

export type TelephoneFinishesRequest = {
  telephoneIds: string[]
}

export type TelephoneFinishesResponse = {
  isReliabilityUp: boolean
  commonResponse: CommonResponse
}

export type TelephoneCallHistoryRequest = {
  telephoneId: string
}

export type TelephoneCallHistoryResponse = {
  commonResponse: CommonResponse
}

export type TourTopRequest = {
  tourId: string
}

export type TourTopResponse = {
  tourInfo: TourInfo
  userTourInfo: UserTourInfo
  dokanInfos: DokanInfo[]
  commonResponse: CommonResponse
}

export type TourRankingRequest = {
  tourId: string
}

export type TourRankingResponse = {
  rankingInfos: TourRankingInfo[]
  selfPoint: string
  selfRank: number
  commonResponse: CommonResponse
}

export type TourAreaTopRequest = {
  tourId: string
  isCurrentAreaRestart: boolean
  tourDifficultyNumber: number
}

export type TourAreaTopResponse = {
  areaInfo: TourAreaInfo
  commonResponse: CommonResponse
}

export type TourAreaActivityRequest = {
  tourId: string
  step: number
  position: number
}

export type TourAreaActivityResponse = {
  areaInfo: TourAreaInfo
  commonResponse: CommonResponse
}

export type TourAreaRefreshRequest = {
  tourId: string
  step: number
  position: number
}

export type TourAreaRefreshResponse = {
  areaInfo: TourAreaInfo
  commonResponse: CommonResponse
}

export type TourAreaScoutRequest = {
  tourId: string
  step: number
  position: number
  cardId: string
  evolutionLevel: number
}

export type TourAreaScoutResponse = {
  areaInfo: TourAreaInfo
  commonResponse: CommonResponse
}

export type TourAreaLiveRequest = {
  tourId: string
  step: number
  position: number
  isSkip: boolean
}

export type TourAreaLiveResponse = {
  areaInfo: TourAreaInfo
  liveInfo: TourLiveInfo
  resultInfo: TourResultInfo
  commonResponse: CommonResponse
}

export type TourAreaLiveBonusRequest = {
  tourId: string
  step: number
  position: number
  liveBonusId: string
}

export type TourAreaLiveBonusResponse = {
  areaInfo: TourAreaInfo
  commonResponse: CommonResponse
}

export type TourAreaPvpRequest = {
  tourId: string
  step: number
  position: number
  isSkip: boolean
}

export type TourAreaPvpResponse = {
  areaInfo: TourAreaInfo
  liveInfo: TourLiveInfo
  resultInfo: TourResultInfo
  commonResponse: CommonResponse
}

export type TourAreaClearRequest = {
  tourId: string
}

export type TourAreaClearResponse = {
  areaInfo: TourAreaInfo
  areaClearInfo: TourAreaClearInfo
  resultInfo: TourResultInfo
  commonResponse: CommonResponse
}

export type TourAreaNextRequest = {
  tourId: string
}

export type TourAreaNextResponse = {
  areaInfo: TourAreaInfo
  commonResponse: CommonResponse
}

export type TourAreaRetireRequest = {
  tourId: string
}

export type TourAreaRetireResponse = {
  areaInfo: TourAreaInfo
  resultInfo: TourResultInfo
  commonResponse: CommonResponse
}

export type TourDeckSaveRequest = {
  tourId: string
  deckInfos: TourDeckInfo[]
}

export type TourDeckSaveResponse = {
  commonResponse: CommonResponse
}

export type TourInfo = {
  id: string
  name: string
  type: TourType
  enemyType: TourEnemyType
  startTime: string
  endTime: string
  aggregateEndTime: string
  exchangeEndTime: string
  assetId: string
  bannerAssetId: string
  areaStaminaRecoveryMinutes: number
  initialAreaStamina: number
  initialLife: number
  eventStoryInfo: EventStoryInfo
  eventMissionInfo: EventMissionInfo
  eventExchangeBoothInfo: EventExchangeBoothInfo
  noticeInfo: NoticeInfo
  tourRankingRewardInfos: TourRankingRewardInfo[]
  tourDifficultyInfos: TourDifficultyInfo[]
}

export type UserTourInfo = {
  areaStamina: number
  staminaUpdatedTime: string
  highestScore: string
  highestScoreTime: string
  mostProgressArea: number
  mostProgressAreaName: string
  life: number
  currentScore: string
  currentArea: number
  currentAreaName: string
  rank: string
  isRetired: boolean
  isAreaCleared: boolean
  isLastArea: boolean
  clearedDifficultyNumber: number
  currentDifficultyNumber: number
}

export type TourDeckInfo = {
  position: number
  cardId: string
  scoutId: string
  evolutionLevel: number
}

export type TourAreaInfo = {
  areaStamina: number
  staminaUpdatedTime: string
  highestScore: string
  highestScoreTime: string
  mostProgressArea: number
  mostProgressAreaName: string
  life: number
  score: string
  area: number
  areaName: string
  step: number
  position: number
  areaScore: string
  isAreaCleared: boolean
  isRetired: boolean
  stepInfos: TourStepInfo[]
  areaRewards: Reward[]
  liveBonusInfos: TourLiveBonusInfo[]
  cardInfos: TourCardInfo[]
  scoutInfos: TourScoutInfo[]
  deckInfos: TourDeckInfo[]
  isLastArea: boolean
  tourType: TourType
  tourAreaType: TourAreaType
}

export type TourStepInfo = {
  step: number
  positionInfos: TourPositionInfo[]
}

export type TourPositionInfo = {
  position: number
  type: TourStepType
  activityInfo: TourEffectActivity
  refreshInfo: TourEffectRefresh
  scoutInfo: TourEffectScout
  liveInfo: TourEffectLive
  pvpInfo: TourEffectPvp
  liveBonusInfos: TourLiveBonusInfo[]
  isPassed: boolean
}

export type TourEffectScout = {
  scoutInfos: TourScoutInfo[]
}

export type TourOpponentInfo = {
  name: string
  managerLevel: number
  cardInfos: LiveBattleCardInfo[]
}

export type TourCardInfo = {
  cardId: string
  staminaPermil: number
  evolutionLevel: number
}

export type TourScoutInfo = {
  scoutId: string
  cardId: string
  staminaPermil: number
  isRival: boolean
  level: number
  rarity: number
  dance: string
  vocal: string
  visual: string
  stamina: string
  mental: string
  technique: string
  skillLevel1: number
  skillLevel2: number
  skillLevel3: number
  skillLevel4: number
  evolutionLevel: number
}

export type TourLiveInfo = {
  result: LiveResult
  rewards: Reward[]
  rankType: ResultRankType
  rankPlus: number
  rankPatterns: QuestRankPattern[]
}

export type TourAreaClearInfo = {
  areaRewards: Reward[]
  firstClearRewards: Reward[]
  score: string
  areaScore: string
  rank: string
  isBest: boolean
}

export type TourResultInfo = {
  score: string
  rank: string
  isBest: boolean
}

export type TutorialInitRequest = {
  name: string
}

export type TutorialInitResponse = {
  commonResponse: CommonResponse
}

export type TutorialProgressRequest = {
  type: TutorialType
  step: number
}

export type TutorialProgressResponse = {
  commonResponse: CommonResponse
}

export type TutorialStartQuestRequest = {
  questId: string
}

export type TutorialStartQuestResponse = {
  result: LiveResult
  rankPatterns: QuestRankPattern[]
  commonResponse: CommonResponse
}

export type TutorialActivityStartFanEventResponse = {
  progress: FanEventProgress
  commonResponse: CommonResponse
}

export type TutorialActivityReceivePromotionRewardResponse = {
  rewards: Reward[]
  activityLevelProgress: ActivityLevelProgress
  commonResponse: CommonResponse
}

export type TutorialActivityReceiveLessonRewardResponse = {
  rewards: Reward[]
  commonResponse: CommonResponse
}

export type TutorialPhotoCreateShootingRequest = {
  mainCharacterId: string
  photoImageId: string
}

export type TutorialPhotoCreateShootingResponse = {
  photo: UserPhoto
  isGift: boolean
  commonResponse: CommonResponse
}

export type TutorialSkipResponse = {
  commonResponse: CommonResponse
}

export type UserGetResponse = {
  user: User
  items: UserItem[]
  cards: UserCard[]
  characters: UserCharacter[]
  costumes: UserCostume[]
  accessories: UserAccessory[]
  photos: UserPhoto[]
  decks: UserDeck[]
  deckPositions: UserDeckPosition[]
  stories: UserStory[]
  points: UserPoint[]
  staffs: UserStaff[]
  messages: UserMessage[]
  telephones: UserTelephone[]
  missions: UserMission[]
  profile: UserProfile
  emblems: UserEmblem[]
  characterMusics: UserCharacterMusic[]
  balance: UserBalance
  totalCount: UserTotalCount
  areas: UserArea[]
  quests: UserQuest[]
  gachaButtons: UserGachaButton[]
  homeTalks: UserHomeTalk[]
  photoReport: UserPhotoReport
  cardSupports: UserCardSupport[]
  messageSchedules: UserMessageSchedule[]
  notifications: UserNotification[]
  hierarchy: UserHierarchy
  tutorials: UserTutorial[]
  homePositions: UserHomePosition[]
  musics: UserMusic[]
  decorations: UserDecoration[]
  photoRecipes: UserPhotoRecipe[]
  buddy: UserBuddy
  invite: UserInvite
  hairs: UserHair[]
  activityFanEventProgress: UserActivityFanEventProgress
  loves: UserLove[]
  leagueDeckPositions: UserLeagueDeckPosition[]
  duties: UserDuty[]
  dutyPoints: UserDutyPoint[]
  company: UserCompany
  showcases: UserShowcase[]
  showcaseLike: UserShowcaseLike
  showcaseMusics: UserShowcaseMusic[]
  showcaseToys: UserShowcaseToy[]
  showcaseMysets: UserShowcaseMyset[]
  tourAreas: UserTourArea[]
  photoPoses: UserPhotoPose[]
  userPublic: UserPublic
}

export type UserUpdateRequest = {
  name: string
}

export type UserUpdateResponse = {
  commonResponse: CommonResponse
}

export type UserProvideExternalRewardRequest = {
  externalRewardId: string
}

export type UserProvideExternalRewardResponse = {
  commonResponse: CommonResponse
}

export type Empty = {
}
