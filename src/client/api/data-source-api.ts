/* tslint:disable */
/* eslint-disable */

import { send } from "../base"
import type { AppResourceInfoCodeResult } from "../models"
import type { AppResourceInfoListCodeResult } from "../models"
import type { AppResourceInfoPagedListCodeResult } from "../models"
import type { GoodsDtoCodeResult } from "../models"
import type { GoodsDtoListCodeResult } from "../models"
import type { GoodsDtoPagedListCodeResult } from "../models"
import type { GuidFileDtoCodeResult } from "../models"
import type { GuidFileDtoListCodeResult } from "../models"
import type { GuidFileDtoPagedListCodeResult } from "../models"
import type { Int64CodeResult } from "../models"
import type { ObjectCodeResult } from "../models"
import type { ShoppingCartDtoCodeResult } from "../models"
import type { ShoppingCartDtoListCodeResult } from "../models"
import type { ShoppingCartDtoPagedListCodeResult } from "../models"
import type { StockOutItemDtoV2CodeResult } from "../models"
import type { StockOutItemDtoV2ListCodeResult } from "../models"
import type { StockOutItemDtoV2PagedListCodeResult } from "../models"

/**
 * DataSourceApi - API class
 */
export class DataSourceApi {
    /**
     * 
     * @param string? filter 
     * @param string? agg 
     */
    public apiDataSourceAreaFilesAggGet(filter?: string | null, agg?: string | null): Promise<ObjectCodeResult> {
        return send({
            url: `/api/DataSource/area-files/agg`,
            method: 'GET',
            params: {
                Filter: filter,
                Agg: agg,
            },
        });
    }
    /**
     * 
     * @param string? filter 
     */
    public apiDataSourceAreaFilesCountGet(filter?: string | null): Promise<Int64CodeResult> {
        return send({
            url: `/api/DataSource/area-files/count`,
            method: 'GET',
            params: {
                filter: filter,
            },
        });
    }
    /**
     * 
     * @param string key 
     * @param string value 
     */
    public apiDataSourceAreaFilesFindByKeyValueGet(key: string | null, value: string | null): Promise<GuidFileDtoCodeResult> {
        return send({
            url: `/api/DataSource/area-files/find-by-{key}/{value}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)))
                .replace(`{${"value"}}`, encodeURIComponent(String(value))),
            method: 'GET',
        });
    }
    /**
     * 
     * @param string? filter 
     * @param string? orderBy 
     * @param string? select 
     * @param boolean? distinct 
     */
    public apiDataSourceAreaFilesListAllGet(filter?: string | null, orderBy?: string | null, select?: string | null, distinct?: boolean): Promise<GuidFileDtoListCodeResult> {
        return send({
            url: `/api/DataSource/area-files/list-all`,
            method: 'GET',
            params: {
                Filter: filter,
                OrderBy: orderBy,
                Select: select,
                Distinct: distinct,
            },
        });
    }
    /**
     * 
     * @param number? offset 
     * @param number? limit 
     * @param string? agg 
     * @param string? filter 
     * @param string? orderBy 
     * @param string? select 
     * @param boolean? distinct 
     */
    public apiDataSourceAreaFilesLoadDataGet(offset?: number, limit?: number, agg?: string | null, filter?: string | null, orderBy?: string | null, select?: string | null, distinct?: boolean): Promise<GuidFileDtoPagedListCodeResult> {
        return send({
            url: `/api/DataSource/area-files/load-data`,
            method: 'GET',
            params: {
                Offset: offset,
                Limit: limit,
                Agg: agg,
                Filter: filter,
                OrderBy: orderBy,
                Select: select,
                Distinct: distinct,
            },
        });
    }
    /**
     * 
     * @param string? filter 
     * @param string? agg 
     */
    public apiDataSourceCloudFilesAggGet(filter?: string | null, agg?: string | null): Promise<ObjectCodeResult> {
        return send({
            url: `/api/DataSource/cloud-files/agg`,
            method: 'GET',
            params: {
                Filter: filter,
                Agg: agg,
            },
        });
    }
    /**
     * 
     * @param string? filter 
     */
    public apiDataSourceCloudFilesCountGet(filter?: string | null): Promise<Int64CodeResult> {
        return send({
            url: `/api/DataSource/cloud-files/count`,
            method: 'GET',
            params: {
                filter: filter,
            },
        });
    }
    /**
     * 
     * @param string key 
     * @param string value 
     */
    public apiDataSourceCloudFilesFindByKeyValueGet(key: string | null, value: string | null): Promise<GuidFileDtoCodeResult> {
        return send({
            url: `/api/DataSource/cloud-files/find-by-{key}/{value}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)))
                .replace(`{${"value"}}`, encodeURIComponent(String(value))),
            method: 'GET',
        });
    }
    /**
     * 
     * @param string? filter 
     * @param string? orderBy 
     * @param string? select 
     * @param boolean? distinct 
     */
    public apiDataSourceCloudFilesListAllGet(filter?: string | null, orderBy?: string | null, select?: string | null, distinct?: boolean): Promise<GuidFileDtoListCodeResult> {
        return send({
            url: `/api/DataSource/cloud-files/list-all`,
            method: 'GET',
            params: {
                Filter: filter,
                OrderBy: orderBy,
                Select: select,
                Distinct: distinct,
            },
        });
    }
    /**
     * 
     * @param number? offset 
     * @param number? limit 
     * @param string? agg 
     * @param string? filter 
     * @param string? orderBy 
     * @param string? select 
     * @param boolean? distinct 
     */
    public apiDataSourceCloudFilesLoadDataGet(offset?: number, limit?: number, agg?: string | null, filter?: string | null, orderBy?: string | null, select?: string | null, distinct?: boolean): Promise<GuidFileDtoPagedListCodeResult> {
        return send({
            url: `/api/DataSource/cloud-files/load-data`,
            method: 'GET',
            params: {
                Offset: offset,
                Limit: limit,
                Agg: agg,
                Filter: filter,
                OrderBy: orderBy,
                Select: select,
                Distinct: distinct,
            },
        });
    }
    /**
     * 
     * @param string? filter 
     * @param string? agg 
     */
    public apiDataSourceDailyReportsAggGet(filter?: string | null, agg?: string | null): Promise<ObjectCodeResult> {
        return send({
            url: `/api/DataSource/DailyReports/agg`,
            method: 'GET',
            params: {
                Filter: filter,
                Agg: agg,
            },
        });
    }
    /**
     * 
     * @param string? filter 
     */
    public apiDataSourceDailyReportsCountGet(filter?: string | null): Promise<Int64CodeResult> {
        return send({
            url: `/api/DataSource/DailyReports/count`,
            method: 'GET',
            params: {
                filter: filter,
            },
        });
    }
    /**
     * 
     * @param string key 
     * @param string value 
     */
    public apiDataSourceDailyReportsFindByKeyValueGet(key: string | null, value: string | null): Promise<AppResourceInfoCodeResult> {
        return send({
            url: `/api/DataSource/DailyReports/find-by-{key}/{value}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)))
                .replace(`{${"value"}}`, encodeURIComponent(String(value))),
            method: 'GET',
        });
    }
    /**
     * 
     * @param string? filter 
     * @param string? orderBy 
     * @param string? select 
     * @param boolean? distinct 
     */
    public apiDataSourceDailyReportsListAllGet(filter?: string | null, orderBy?: string | null, select?: string | null, distinct?: boolean): Promise<AppResourceInfoListCodeResult> {
        return send({
            url: `/api/DataSource/DailyReports/list-all`,
            method: 'GET',
            params: {
                Filter: filter,
                OrderBy: orderBy,
                Select: select,
                Distinct: distinct,
            },
        });
    }
    /**
     * 
     * @param number? offset 
     * @param number? limit 
     * @param string? agg 
     * @param string? filter 
     * @param string? orderBy 
     * @param string? select 
     * @param boolean? distinct 
     */
    public apiDataSourceDailyReportsLoadDataGet(offset?: number, limit?: number, agg?: string | null, filter?: string | null, orderBy?: string | null, select?: string | null, distinct?: boolean): Promise<AppResourceInfoPagedListCodeResult> {
        return send({
            url: `/api/DataSource/DailyReports/load-data`,
            method: 'GET',
            params: {
                Offset: offset,
                Limit: limit,
                Agg: agg,
                Filter: filter,
                OrderBy: orderBy,
                Select: select,
                Distinct: distinct,
            },
        });
    }
    /**
     * 
     * @param string? filter 
     * @param string? agg 
     */
    public apiDataSourceManagerBigScreenAggGet(filter?: string | null, agg?: string | null): Promise<ObjectCodeResult> {
        return send({
            url: `/api/DataSource/ManagerBigScreen/agg`,
            method: 'GET',
            params: {
                Filter: filter,
                Agg: agg,
            },
        });
    }
    /**
     * 
     * @param string? filter 
     */
    public apiDataSourceManagerBigScreenCountGet(filter?: string | null): Promise<Int64CodeResult> {
        return send({
            url: `/api/DataSource/ManagerBigScreen/count`,
            method: 'GET',
            params: {
                filter: filter,
            },
        });
    }
    /**
     * 
     * @param string key 
     * @param string value 
     */
    public apiDataSourceManagerBigScreenFindByKeyValueGet(key: string | null, value: string | null): Promise<AppResourceInfoCodeResult> {
        return send({
            url: `/api/DataSource/ManagerBigScreen/find-by-{key}/{value}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)))
                .replace(`{${"value"}}`, encodeURIComponent(String(value))),
            method: 'GET',
        });
    }
    /**
     * 
     * @param string? filter 
     * @param string? orderBy 
     * @param string? select 
     * @param boolean? distinct 
     */
    public apiDataSourceManagerBigScreenListAllGet(filter?: string | null, orderBy?: string | null, select?: string | null, distinct?: boolean): Promise<AppResourceInfoListCodeResult> {
        return send({
            url: `/api/DataSource/ManagerBigScreen/list-all`,
            method: 'GET',
            params: {
                Filter: filter,
                OrderBy: orderBy,
                Select: select,
                Distinct: distinct,
            },
        });
    }
    /**
     * 
     * @param number? offset 
     * @param number? limit 
     * @param string? agg 
     * @param string? filter 
     * @param string? orderBy 
     * @param string? select 
     * @param boolean? distinct 
     */
    public apiDataSourceManagerBigScreenLoadDataGet(offset?: number, limit?: number, agg?: string | null, filter?: string | null, orderBy?: string | null, select?: string | null, distinct?: boolean): Promise<AppResourceInfoPagedListCodeResult> {
        return send({
            url: `/api/DataSource/ManagerBigScreen/load-data`,
            method: 'GET',
            params: {
                Offset: offset,
                Limit: limit,
                Agg: agg,
                Filter: filter,
                OrderBy: orderBy,
                Select: select,
                Distinct: distinct,
            },
        });
    }
    /**
     * 
     * @param string? filter 
     * @param string? agg 
     */
    public apiDataSourceManagerReportsAggGet(filter?: string | null, agg?: string | null): Promise<ObjectCodeResult> {
        return send({
            url: `/api/DataSource/ManagerReports/agg`,
            method: 'GET',
            params: {
                Filter: filter,
                Agg: agg,
            },
        });
    }
    /**
     * 
     * @param string? filter 
     */
    public apiDataSourceManagerReportsCountGet(filter?: string | null): Promise<Int64CodeResult> {
        return send({
            url: `/api/DataSource/ManagerReports/count`,
            method: 'GET',
            params: {
                filter: filter,
            },
        });
    }
    /**
     * 
     * @param string key 
     * @param string value 
     */
    public apiDataSourceManagerReportsFindByKeyValueGet(key: string | null, value: string | null): Promise<AppResourceInfoCodeResult> {
        return send({
            url: `/api/DataSource/ManagerReports/find-by-{key}/{value}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)))
                .replace(`{${"value"}}`, encodeURIComponent(String(value))),
            method: 'GET',
        });
    }
    /**
     * 
     * @param string? filter 
     * @param string? orderBy 
     * @param string? select 
     * @param boolean? distinct 
     */
    public apiDataSourceManagerReportsListAllGet(filter?: string | null, orderBy?: string | null, select?: string | null, distinct?: boolean): Promise<AppResourceInfoListCodeResult> {
        return send({
            url: `/api/DataSource/ManagerReports/list-all`,
            method: 'GET',
            params: {
                Filter: filter,
                OrderBy: orderBy,
                Select: select,
                Distinct: distinct,
            },
        });
    }
    /**
     * 
     * @param number? offset 
     * @param number? limit 
     * @param string? agg 
     * @param string? filter 
     * @param string? orderBy 
     * @param string? select 
     * @param boolean? distinct 
     */
    public apiDataSourceManagerReportsLoadDataGet(offset?: number, limit?: number, agg?: string | null, filter?: string | null, orderBy?: string | null, select?: string | null, distinct?: boolean): Promise<AppResourceInfoPagedListCodeResult> {
        return send({
            url: `/api/DataSource/ManagerReports/load-data`,
            method: 'GET',
            params: {
                Offset: offset,
                Limit: limit,
                Agg: agg,
                Filter: filter,
                OrderBy: orderBy,
                Select: select,
                Distinct: distinct,
            },
        });
    }
    /**
     * 
     * @param string? filter 
     * @param string? agg 
     */
    public apiDataSourceMonthReportsAggGet(filter?: string | null, agg?: string | null): Promise<ObjectCodeResult> {
        return send({
            url: `/api/DataSource/MonthReports/agg`,
            method: 'GET',
            params: {
                Filter: filter,
                Agg: agg,
            },
        });
    }
    /**
     * 
     * @param string? filter 
     */
    public apiDataSourceMonthReportsCountGet(filter?: string | null): Promise<Int64CodeResult> {
        return send({
            url: `/api/DataSource/MonthReports/count`,
            method: 'GET',
            params: {
                filter: filter,
            },
        });
    }
    /**
     * 
     * @param string key 
     * @param string value 
     */
    public apiDataSourceMonthReportsFindByKeyValueGet(key: string | null, value: string | null): Promise<AppResourceInfoCodeResult> {
        return send({
            url: `/api/DataSource/MonthReports/find-by-{key}/{value}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)))
                .replace(`{${"value"}}`, encodeURIComponent(String(value))),
            method: 'GET',
        });
    }
    /**
     * 
     * @param string? filter 
     * @param string? orderBy 
     * @param string? select 
     * @param boolean? distinct 
     */
    public apiDataSourceMonthReportsListAllGet(filter?: string | null, orderBy?: string | null, select?: string | null, distinct?: boolean): Promise<AppResourceInfoListCodeResult> {
        return send({
            url: `/api/DataSource/MonthReports/list-all`,
            method: 'GET',
            params: {
                Filter: filter,
                OrderBy: orderBy,
                Select: select,
                Distinct: distinct,
            },
        });
    }
    /**
     * 
     * @param number? offset 
     * @param number? limit 
     * @param string? agg 
     * @param string? filter 
     * @param string? orderBy 
     * @param string? select 
     * @param boolean? distinct 
     */
    public apiDataSourceMonthReportsLoadDataGet(offset?: number, limit?: number, agg?: string | null, filter?: string | null, orderBy?: string | null, select?: string | null, distinct?: boolean): Promise<AppResourceInfoPagedListCodeResult> {
        return send({
            url: `/api/DataSource/MonthReports/load-data`,
            method: 'GET',
            params: {
                Offset: offset,
                Limit: limit,
                Agg: agg,
                Filter: filter,
                OrderBy: orderBy,
                Select: select,
                Distinct: distinct,
            },
        });
    }
    /**
     * 
     * @param string? filter 
     * @param string? agg 
     */
    public apiDataSourceQuerySchoolShoppingCartAggGet(filter?: string | null, agg?: string | null): Promise<ObjectCodeResult> {
        return send({
            url: `/api/DataSource/QuerySchoolShoppingCart/agg`,
            method: 'GET',
            params: {
                Filter: filter,
                Agg: agg,
            },
        });
    }
    /**
     * 
     * @param string? filter 
     */
    public apiDataSourceQuerySchoolShoppingCartCountGet(filter?: string | null): Promise<Int64CodeResult> {
        return send({
            url: `/api/DataSource/QuerySchoolShoppingCart/count`,
            method: 'GET',
            params: {
                filter: filter,
            },
        });
    }
    /**
     * 
     * @param string key 
     * @param string value 
     */
    public apiDataSourceQuerySchoolShoppingCartFindByKeyValueGet(key: string | null, value: string | null): Promise<ShoppingCartDtoCodeResult> {
        return send({
            url: `/api/DataSource/QuerySchoolShoppingCart/find-by-{key}/{value}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)))
                .replace(`{${"value"}}`, encodeURIComponent(String(value))),
            method: 'GET',
        });
    }
    /**
     * 
     * @param string? filter 
     * @param string? orderBy 
     * @param string? select 
     * @param boolean? distinct 
     */
    public apiDataSourceQuerySchoolShoppingCartListAllGet(filter?: string | null, orderBy?: string | null, select?: string | null, distinct?: boolean): Promise<ShoppingCartDtoListCodeResult> {
        return send({
            url: `/api/DataSource/QuerySchoolShoppingCart/list-all`,
            method: 'GET',
            params: {
                Filter: filter,
                OrderBy: orderBy,
                Select: select,
                Distinct: distinct,
            },
        });
    }
    /**
     * 
     * @param number? offset 
     * @param number? limit 
     * @param string? agg 
     * @param string? filter 
     * @param string? orderBy 
     * @param string? select 
     * @param boolean? distinct 
     */
    public apiDataSourceQuerySchoolShoppingCartLoadDataGet(offset?: number, limit?: number, agg?: string | null, filter?: string | null, orderBy?: string | null, select?: string | null, distinct?: boolean): Promise<ShoppingCartDtoPagedListCodeResult> {
        return send({
            url: `/api/DataSource/QuerySchoolShoppingCart/load-data`,
            method: 'GET',
            params: {
                Offset: offset,
                Limit: limit,
                Agg: agg,
                Filter: filter,
                OrderBy: orderBy,
                Select: select,
                Distinct: distinct,
            },
        });
    }
    /**
     * 
     * @param string? filter 
     * @param string? agg 
     */
    public apiDataSourceQuerySupplierGoodsAggGet(filter?: string | null, agg?: string | null): Promise<ObjectCodeResult> {
        return send({
            url: `/api/DataSource/QuerySupplierGoods/agg`,
            method: 'GET',
            params: {
                Filter: filter,
                Agg: agg,
            },
        });
    }
    /**
     * 
     * @param string? filter 
     */
    public apiDataSourceQuerySupplierGoodsCountGet(filter?: string | null): Promise<Int64CodeResult> {
        return send({
            url: `/api/DataSource/QuerySupplierGoods/count`,
            method: 'GET',
            params: {
                filter: filter,
            },
        });
    }
    /**
     * 
     * @param string key 
     * @param string value 
     */
    public apiDataSourceQuerySupplierGoodsFindByKeyValueGet(key: string | null, value: string | null): Promise<GoodsDtoCodeResult> {
        return send({
            url: `/api/DataSource/QuerySupplierGoods/find-by-{key}/{value}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)))
                .replace(`{${"value"}}`, encodeURIComponent(String(value))),
            method: 'GET',
        });
    }
    /**
     * 
     * @param string? filter 
     * @param string? orderBy 
     * @param string? select 
     * @param boolean? distinct 
     */
    public apiDataSourceQuerySupplierGoodsListAllGet(filter?: string | null, orderBy?: string | null, select?: string | null, distinct?: boolean): Promise<GoodsDtoListCodeResult> {
        return send({
            url: `/api/DataSource/QuerySupplierGoods/list-all`,
            method: 'GET',
            params: {
                Filter: filter,
                OrderBy: orderBy,
                Select: select,
                Distinct: distinct,
            },
        });
    }
    /**
     * 
     * @param number? offset 
     * @param number? limit 
     * @param string? agg 
     * @param string? filter 
     * @param string? orderBy 
     * @param string? select 
     * @param boolean? distinct 
     */
    public apiDataSourceQuerySupplierGoodsLoadDataGet(offset?: number, limit?: number, agg?: string | null, filter?: string | null, orderBy?: string | null, select?: string | null, distinct?: boolean): Promise<GoodsDtoPagedListCodeResult> {
        return send({
            url: `/api/DataSource/QuerySupplierGoods/load-data`,
            method: 'GET',
            params: {
                Offset: offset,
                Limit: limit,
                Agg: agg,
                Filter: filter,
                OrderBy: orderBy,
                Select: select,
                Distinct: distinct,
            },
        });
    }
    /**
     * 
     * @param string? filter 
     * @param string? agg 
     */
    public apiDataSourceStockOutItemAggGet(filter?: string | null, agg?: string | null): Promise<ObjectCodeResult> {
        return send({
            url: `/api/DataSource/StockOutItem/agg`,
            method: 'GET',
            params: {
                Filter: filter,
                Agg: agg,
            },
        });
    }
    /**
     * 
     * @param string? filter 
     */
    public apiDataSourceStockOutItemCountGet(filter?: string | null): Promise<Int64CodeResult> {
        return send({
            url: `/api/DataSource/StockOutItem/count`,
            method: 'GET',
            params: {
                filter: filter,
            },
        });
    }
    /**
     * 
     * @param string key 
     * @param string value 
     */
    public apiDataSourceStockOutItemFindByKeyValueGet(key: string | null, value: string | null): Promise<StockOutItemDtoV2CodeResult> {
        return send({
            url: `/api/DataSource/StockOutItem/find-by-{key}/{value}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)))
                .replace(`{${"value"}}`, encodeURIComponent(String(value))),
            method: 'GET',
        });
    }
    /**
     * 
     * @param string? filter 
     * @param string? orderBy 
     * @param string? select 
     * @param boolean? distinct 
     */
    public apiDataSourceStockOutItemListAllGet(filter?: string | null, orderBy?: string | null, select?: string | null, distinct?: boolean): Promise<StockOutItemDtoV2ListCodeResult> {
        return send({
            url: `/api/DataSource/StockOutItem/list-all`,
            method: 'GET',
            params: {
                Filter: filter,
                OrderBy: orderBy,
                Select: select,
                Distinct: distinct,
            },
        });
    }
    /**
     * 
     * @param number? offset 
     * @param number? limit 
     * @param string? agg 
     * @param string? filter 
     * @param string? orderBy 
     * @param string? select 
     * @param boolean? distinct 
     */
    public apiDataSourceStockOutItemLoadDataGet(offset?: number, limit?: number, agg?: string | null, filter?: string | null, orderBy?: string | null, select?: string | null, distinct?: boolean): Promise<StockOutItemDtoV2PagedListCodeResult> {
        return send({
            url: `/api/DataSource/StockOutItem/load-data`,
            method: 'GET',
            params: {
                Offset: offset,
                Limit: limit,
                Agg: agg,
                Filter: filter,
                OrderBy: orderBy,
                Select: select,
                Distinct: distinct,
            },
        });
    }
}

/**
 * DataSourceApi - instance
 */
export const DataSourceApiInstance = new DataSourceApi();

