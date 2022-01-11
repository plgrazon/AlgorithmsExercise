/**
 * You are given an array coordinates, coordinates[i] = [x, y], where [x, y]
 * represents the coordinate of a point. Check if these points make a straight
 * line in the XY plane.
 *
 * Example 1:
 * Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
 * Output: true
 *
 *    x
 *  7 |             * (6,7)
 *    |            /
 *  6 |           * (5,6)
 *    |          /
 *  5 |         * (4,5)
 *    |        /
 *  4 |       * (3,4)
 *    |      /
 *  3 |     * (2,3)
 *    |    /
 *  2 |   * (1,2)
 *    |  /
 *  1 | /
 *    |/
 *    *______________________ y
 *       1  2  3  4  5  6  7
 * Example 2:
 * Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
 * Output: false
 *
 *    x
 *  7 |                   * (7,7)
 *    |
 *  6 |             * (5,6)
 *    |
 *  5 |         * (4,5)
 *    |
 *  4 |       * (3,4)
 *    |
 *  3 |
 *    |
 *  2 |     * (2,2)
 *    |
 *  1 |  * (1,1)
 *    |
 *    *______________________ y
 *       1  2  3  4  5  6  7
 *
 * Constraints:
 * 2 <= coordinates.length <= 1000
 * coordinates[i].length == 2
 * -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
 * coordinates contains no duplicate point.
 */

const checkStraightLine = function (coordinates) {};
