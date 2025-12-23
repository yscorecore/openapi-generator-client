/* tslint:disable */
/* eslint-disable */


// May contain unused imports in some cases
// @ts-ignore
import type { AreaConfiguration } from './area-configuration';
// May contain unused imports in some cases
// @ts-ignore
import type { DayOfWeek } from './day-of-week';
// May contain unused imports in some cases
// @ts-ignore
import type { MaterialTypeBiddingConfigDto } from './material-type-bidding-config-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { MealInfo } from './meal-info';
// May contain unused imports in some cases
// @ts-ignore
import type { OderTypeConfig } from './oder-type-config';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderType } from './order-type';
// May contain unused imports in some cases
// @ts-ignore
import type { PurchaseKind } from './purchase-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { SchoolConfig } from './school-config';
// May contain unused imports in some cases
// @ts-ignore
import type { SchoolNewFeature } from './school-new-feature';
// May contain unused imports in some cases
// @ts-ignore
import type { SchoolSessionConfiguration } from './school-session-configuration';
// May contain unused imports in some cases
// @ts-ignore
import type { SchoolToggle } from './school-toggle';
// May contain unused imports in some cases
// @ts-ignore
import type { StockReviewKind } from './stock-review-kind';
// May contain unused imports in some cases
// @ts-ignore
import type { TimeSpanRange } from './time-span-range';

export interface SchoolConfigForAreaSchoolDto {
    'name'?: string | null;
    'purchaseKind'?: PurchaseKind;
    'mealInfos'?: Array<MealInfo> | null;
    'hasNutritious'?: boolean;
    'hasNonNutritious'?: boolean;
    'autoApproveAccompanyUser'?: boolean;
    'disableCustomMaterial'?: boolean;
    'disableCustomSpec'?: boolean;
    'preStockOutDays'?: number;
    'disableFaceChecking'?: boolean;
    'enableStockEvaluate'?: boolean;
    'keepCurrentBeforeInput'?: boolean;
    'autoCalcGoodsCount'?: boolean;
    'showWebMenus'?: boolean;
    'enableDinningReport'?: boolean;
    'exitToMainFrameOnly'?: boolean;
    'localVideoCapture'?: boolean;
    'reversePeeling'?: boolean;
    'uploadImageAsync'?: boolean;
    'fastInheritDiningStudents'?: boolean;
    'disableDailyScore'?: boolean;
    'disableDailyException'?: boolean;
    'allowSplitStockOut'?: boolean;
    'disableChooseBiddingResult'?: boolean;
    'disableEarlyTerminationBidding'?: boolean;
    'enableElectronicReceipt'?: boolean;
    'enableSoftVersion'?: boolean;
    'enablePerspectiveTransformForSample'?: boolean;
    'allowStockOutMultiple'?: boolean;
    'supportAdditionalOrderSource'?: Array<number> | null;
    'enableDiscountBidding'?: boolean;
    'allowModifySupplierReplyPrice'?: boolean;
    'dailyChecks'?: { [key: string]: TimeSpanRange; } | null;
    'typeBiddingConfigs'?: Array<MaterialTypeBiddingConfigDto> | null;
    'canEditMyMainSuppliers'?: boolean;
    'forceCertificateBeforeStock'?: boolean;
    'negativePeeling'?: boolean;
    'enableNonNutritiousMaterialToNutritious'?: boolean;
    'enableBlackOutSuppliers'?: boolean;
    'enableRequirement'?: boolean;
    'stockReviewKind'?: StockReviewKind;
    'requireBuyerCount'?: number;
    'rememberBuyer'?: boolean;
    'rememberReceiver'?: boolean;
    'stockOverflowPercent'?: number;
    'enablePointPatrol'?: boolean;
    'shareMeal'?: boolean;
    'isFree'?: boolean;
    'purchaseByMenuMealKind'?: boolean;
    'configuration'?: SchoolConfig;
    'toggles'?: SchoolToggle;
    'newFeatures'?: SchoolNewFeature;
    'sessionConfig'?: SchoolSessionConfiguration;
    'weekStartDay'?: DayOfWeek;
    'enableReportRequirement'?: boolean;
    'supportOrderTypes'?: Array<OrderType> | null;
    'supportUseOrderPlanCount'?: boolean;
    'orderTypeConfigs'?: Array<OderTypeConfig> | null;
    'areaConfiguration'?: AreaConfiguration;
    'isSampleAmountModifiable'?: boolean;
    'allowRepeatedCheck'?: boolean;
}



