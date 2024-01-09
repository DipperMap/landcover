import { QuestionCircleOutlined } from "@ant-design/icons"
import { DataNode } from "rc-tree/lib/interface";

const newIcon = (url: string) => {
  return (
    <div style={{ display: "flex" }}>
      <a style={{ color: "#333" }} target="_blank" href={url}><QuestionCircleOutlined /></a>
    </div>
  )
}
export const mockTree: DataNode[] = [
  {
    title: "土地覆盖数据",
    key: 'TDFG',
    children: [
      {
        title: '低分辨率土地覆盖数据',
        key: 'DTDFG',
        children: [
          {
            title: 'MODIS土地覆盖',
            key: 'MODIS_Landcover',
            selectable: true,
            icon: newIcon("https://zhuanlan.zhihu.com/p/619527268"),
            children: [
              { title: "2001年", key: 'modis2001', },
              { title: "2002年", key: 'modis2002' },
              { title: '2003年', key: 'modis2003' },
              { title: '2004年', key: 'modis2004' },
              { title: '2005年', key: 'modis2005' },
              { title: '2006年', key: 'modis2006' },
              { title: '2007年', key: 'modis2007' },
              { title: '2008年', key: 'modis2008' },
              { title: '2009年', key: 'modis2009' },
              { title: '2010年', key: 'modis2010' },
              { title: '2011年', key: 'modis2011' },
              { title: '2012年', key: 'modis2012' },
              { title: '2013年', key: 'modis2013' },
              { title: '2014年', key: 'modis2014' },
              { title: '2015年', key: 'modis2015' },
              { title: '2016年', key: 'modis2016' },
              { title: '2017年', key: 'modis2017' },
              { title: '2018年', key: 'modis2018' },
              { title: '2019年', key: 'modis2019' },
              { title: '2020年', key: 'modis2020' },
            ]
          },
          {
            title: "ESA_CCI_300米土地覆盖",
            key: 'ESA_CCI',
            selectable: true,
            icon: newIcon("https://www.esa-landcover-cci.org/"),
            children: [
              { title: '1992年', key: 'ESA_CCI_1992' },
              { title: '1993年', key: 'ESA_CCI_1993' },
              { title: '1994年', key: 'ESA_CCI_1994' },
              { title: '1995年', key: 'ESA_CCI_1995' },
              { title: '1996年', key: 'ESA_CCI_1996' },
              { title: '1997年', key: 'ESA_CCI_1997' },
              { title: '1998年', key: 'ESA_CCI_1998' },
              { title: '1999年', key: 'ESA_CCI_1999' },
              { title: '2000年', key: 'ESA_CCI_2000' },
              { title: '2001年', key: 'ESA_CCI_2001' },
              { title: '2002年', key: 'ESA_CCI_2002' },
              { title: '2003年', key: 'ESA_CCI_2003' },
              { title: '2004年', key: 'ESA_CCI_2004' },
              { title: '2005年', key: 'ESA_CCI_2005' },
              { title: '2006年', key: 'ESA_CCI_2006' },
              { title: '2007年', key: 'ESA_CCI_2007' },
              { title: '2008年', key: 'ESA_CCI_2008' },
              { title: '2009年', key: 'ESA_CCI_2009' },
              { title: '2010年', key: 'ESA_CCI_2010' },
              { title: '2011年', key: 'ESA_CCI_2011' },
              { title: '2012年', key: 'ESA_CCI_2012' },
              { title: '2013年', key: 'ESA_CCI_2013' },
              { title: '2014年', key: 'ESA_CCI_2014' },
              { title: '2015年', key: 'ESA_CCI_2015' },
              { title: '2016年', key: 'ESA_CCI_2016' },
              { title: '2017年', key: 'ESA_CCI_2017' },
              { title: '2018年', key: 'ESA_CCI_2018' },
              { title: '2019年', key: 'ESA_CCI_2019' },
              { title: '2020年', key: 'ESA_CCI_2020' },
            ]
          },
          {
            title: 'GEZE_9km土地覆盖',
            key: 'GAZE_2010_tosee',
            icon: newIcon("https://gaez.fao.org/"),
            selectable: true,
            children: [
              { title: 'GAZE_v4_2010年', key: 'GAZE_2010' },
            ]
          },
          {
            title: 'GLCNMO土地覆盖',
            key: 'GLCNMO_tosee',
            selectable: true,
            icon: newIcon("https://globalmaps.github.io/glcnmo.html/"),
            children: [
              { title: 'GLCNMO_V3_2013年', key: 'GLCNMO' },
            ]
          },
        ],
      },
      {
        title: '中分辨率土地覆盖数据',
        key: 'ZTDFG',
        children: [
          {
            title: 'AGLC_30米土地覆盖_30m',
            key: 'AGLC',
            selectable: true,
            icon: newIcon("http://www.jors.cn/jrs/ch/reader/view_abstract.aspx?file_no=202109002&flag=1"),
            children: [
              { title: '2000年', key: 'AGLC_2000' },
              { title: '2001年', key: 'AGLC_2001' },
              { title: '2002年', key: 'AGLC_2002' },
              { title: '2003年', key: 'AGLC_2003' },
              { title: '2004年', key: 'AGLC_2004' },
              { title: '2005年', key: 'AGLC_2005' },
              { title: '2006年', key: 'AGLC_2006' },
              { title: '2007年', key: 'AGLC_2007' },
              { title: '2008年', key: 'AGLC_2008' },
              { title: '2009年', key: 'AGLC_2009' },
              { title: '2010年', key: 'AGLC_2010' },
              { title: '2011年', key: 'AGLC_2011' },
              { title: '2012年', key: 'AGLC_2012' },
              { title: '2013年', key: 'AGLC_2013' },
              { title: '2014年', key: 'AGLC_2014' },
            ]
          },
          {
            title: 'GLC30_30米土地覆盖',
            key: 'GLC30',
            selectable: true,
            icon: newIcon("https://csidotinfo.wordpress.com/2014/11/04/globeland30-glc30/"),
            children: [
              { title: '2000年', key: 'GLC30_2000' },
              { title: '2010年', key: 'GLC30_2010' },
              { title: '2020年', key: 'GLC30_2020' },
            ]
          },
          {
            title: 'CLCD_30米土地覆盖',
            key: 'CLCD',
            selectable: true,
            icon: newIcon("https://essd.copernicus.org/articles/13/3907/2021/"),
            children: [
              { title: '2000年', key: 'CLCD_2000' },
              { title: '2001年', key: 'CLCD_2001' },
              { title: '2002年', key: 'CLCD_2002' },
              { title: '2003年', key: 'CLCD_2003' },
              { title: '2004年', key: 'CLCD_2004' },
              { title: '2005年', key: 'CLCD_2005' },
              { title: '2006年', key: 'CLCD_2006' },
              { title: '2007年', key: 'CLCD_2007' },
              { title: '2008年', key: 'CLCD_2008' },
              { title: '2009年', key: 'CLCD_2009' },
              { title: '2010年', key: 'CLCD_2010' },
              { title: '2011年', key: 'CLCD_2011' },
              { title: '2012年', key: 'CLCD_2012' },
              { title: '2013年', key: 'CLCD_2013' },
              { title: '2014年', key: 'CLCD_2014' },
              { title: '2015年', key: 'CLCD_2015' },
              { title: '2016年', key: 'CLCD_2016' },
              { title: '2017年', key: 'CLCD_2017' },
              { title: '2018年', key: 'CLCD_2018' },
              { title: '2019年', key: 'CLCD_2019' },
              { title: '2020年', key: 'CLCD_2020' },
              { title: '2021年', key: 'CLCD_2021' },
              { title: '2022年', key: 'CLCD_2022' },
            ]
          },
          {
            title: 'GLC_FCS_30米土地覆盖',
            key: 'GLC_FCS',
            selectable: true,
            icon: newIcon("https://essd.copernicus.org/preprints/essd-2020-182/essd-2020-182-manuscript-version5.pdf"),
            children: [
              { title: '1985年', key: 'GLC_FCS_1985' },
              { title: '1990年', key: 'GLC_FCS_1990' },
              { title: '1995年', key: 'GLC_FCS_1995' },
              { title: '2000年', key: 'GLC_FCS_2000' },
              { title: '2005年', key: 'GLC_FCS_2005' },
              { title: '2010年', key: 'GLC_FCS_2010' },
              { title: '2015年', key: 'GLC_FCS_2015' },
              { title: '2020年', key: 'GLC_FCS_2020' },
            ]
          },
          {
            title: 'GLCLUC_30米土地覆盖',
            key: 'GLCLUC',
            selectable: true,
            icon: newIcon("https://glad.umd.edu/dataset/GLCLUC2020"),
            children: [
              { title: '2000年', key: 'GLCLUC_2000' },
              { title: '2010年', key: 'GLCLUC_2010' },
              { title: '2015年', key: 'GLCLUC_2015' },
              { title: '2020年', key: 'GLCLUC_2020' },
            ]
          },
        ],
      },
      {
        title: '高分辨率土地覆盖数据',
        key: 'GTDFG',
        children: [
          {
            title: 'ESA_WorldCover_10m',
            key: 'ESA',
            selectable: true,
            icon: newIcon("https://esa-worldcover.org/en"),
            children: [
              { title: '2020年', key: 'ESA_2020' },
              { title: '2021年', key: 'ESA_2021' },
            ]
          },
          {
            title: 'FROM_LC_10m',
            key: 'FROM_LC',
            selectable: true,
            icon: newIcon("https://data-starcloud.pcl.ac.cn/zh/resource/1"),
            children: [
              { title: '2017年', key: 'FROM_LC2017' },
            ]
          },
        ],
      },
    ],
  },
  {
    title: "DEM高程数据",
    key: 'DEM',
    children: [
      {
        title: '低分辨率DEM数据',
        key: 'DDEM',
        children: [
          {
            title: '250米DEM',
            key: 'DEM250',
            selectable: true,
            children: [
              { title: '250米DEM', key: 'DEM250#' },
            ]
          },
          {
            title: '1000米DEM',
            key: 'DEM1000',
            selectable: true,
            children: [
              { title: 'DEM1000', key: 'DEM1000#' },
            ]
          },
        ],
      },
      {
        title: '中分辨率DEM数据',
        key: 'ZDEM',
        children: [
          {
            title: 'DEM_TANX',
            key: 'DEMTANX',
            selectable: true,
            icon: newIcon("https://mp.weixin.qq.com/s/CFBYssYt7VIyrQTZRU2Mlw"),
            children: [
              { title: 'DEMTANX', key: 'DEMTANX#' },
            ]
          },
          {
            title: '哥白尼DEM',
            key: 'Copernicus_DEM',
            selectable: true,
            icon: newIcon("https://mp.weixin.qq.com/s/mShNKPcfbCh-SclSw52dXA"),
            children: [
              { title: '哥白尼DEM', key: 'Copernicus_DEM#' },
            ]
          },
          {
            title: 'SRTM_V3_DEM',
            key: 'SRTM_V3_DEM',
            selectable: true,
            icon: newIcon("https://www.earthdata.nasa.gov/news/nasa-shuttle-radar-topography-mission-srtm-version-3-0-global-1-arc-second-data-released-over-asia-and-australia"),
            children: [
              { title: 'SRTM_V3_DEM', key: 'SRTM_V3_DEM#' },
            ]
          },
          {
            title: 'ASTER_DEM_30m',
            key: 'ASTER_DEM',
            selectable: true,
            icon: newIcon("https://cmr.earthdata.nasa.gov/search/concepts/C1711961296-LPCLOUD.html"),
            children: [
              { title: 'ASTER_DEM_30m', key: 'ASTER_DEM#' },
            ]
          },
          {
            title: 'AW3D30_V4',
            key: 'AW3D30_V4',
            selectable: true,
            icon: newIcon("https://www.eorc.jaxa.jp/ALOS/en/dataset/aw3d30/data/aw3d30v4.0_product_e_1.0.pdf"),
            children: [
              { title: 'AW3D30_V4', key: 'AW3D30_V4#' },
            ]
          },
          {
            title: 'NASA_DEM_30m',
            key: 'NASA_DEM_30m',
            selectable: true,
            icon: newIcon("https://www.earthdata.nasa.gov/esds/competitive-programs/measures/nasadem"),
            children: [
              { title: 'NASA_DEM_30m', key: 'NASA_DEM_30m#' },
            ]
          }
        ],
      },
      {
        title: '高分辨率DEM数据',
        key: 'GDEM',
        children: [
          {
            title: 'ALOS_DEM_12.5m',
            key: 'DEM_ALOS_12m',
            selectable: true,
            icon: newIcon("https://search.asf.alaska.edu/#/"),
            children: [
              { title: '上海市', key: 'DEM_ALOS_12m_SH' },
              { title: '云南省', key: 'DEM_ALOS_12m_YN' },
              { title: '内蒙古', key: 'DEM_ALOS_12m_NMG' },
              { title: '北京', key: 'DEM_ALOS_12m_BJ' },
              { title: '台湾省', key: 'DEM_ALOS_12m_TW' },
              { title: '吉林省', key: 'DEM_ALOS_12m_JL' },
              { title: '四川省', key: 'DEM_ALOS_12m_SC' },
              { title: '天津市', key: 'DEM_ALOS_12m_TJ' },
              { title: '宁夏', key: 'DEM_ALOS_12m_NX' },
              { title: '安徽', key: 'DEM_ALOS_12m_AH' },
              { title: '山东', key: 'DEM_ALOS_12m_SD' },
              { title: '山西省', key: 'DEM_ALOS_12m_SX' },
              { title: '广东', key: 'DEM_ALOS_12m_GD' },
              { title: '广西', key: 'DEM_ALOS_12m_GX' },
              { title: '新疆', key: 'DEM_ALOS_12m_XJ' },
              { title: '江苏', key: 'DEM_ALOS_12m_JS' },
              { title: '江西', key: 'DEM_ALOS_12m_JX' },
              { title: '河北', key: 'DEM_ALOS_12m_HEB' },
              { title: '河南', key: 'DEM_ALOS_12m_HN' },
              { title: '浙江', key: 'DEM_ALOS_12m_ZJ' },
              { title: '海南', key: 'DEM_ALOS_12m_HAN' },
              { title: '湖北', key: 'DEM_ALOS_12m_HB' },
              { title: '湖南', key: 'DEM_ALOS_12m_HUN' },
              { title: '澳门', key: 'DEM_ALOS_12m_AM' },
              { title: '甘肃', key: 'DEM_ALOS_12m_GS' },
              { title: '福建', key: 'DEM_ALOS_12m_HJ' },
              { title: '西藏', key: 'DEM_ALOS_12m_XZ' },
              { title: '贵州', key: 'DEM_ALOS_12m_GZ' },
              { title: '辽宁', key: 'DEM_ALOS_12m_LN' },
              { title: '重庆', key: 'DEM_ALOS_12m_CQ' },
              { title: '陕西', key: 'DEM_ALOS_12m_SXS' },
              { title: '青海', key: 'DEM_ALOS_12m_QH' },
              { title: '香港', key: 'DEM_ALOS_12m_XG' },
              { title: '黑龙江', key: 'DEM_ALOS_12m_HLJ' },
            ]
          },
        ],
      },
    ],
  },
]
