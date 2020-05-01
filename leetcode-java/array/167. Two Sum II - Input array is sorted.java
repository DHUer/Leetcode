package array;

import javax.print.attribute.standard.NumberUpSupported;

class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int [] res = new int[2];
        for(int i = 0; i < numbers.length; i ++) {
            res[0] = i + 1;
            int tmp = target - numbers[i];
            int left = i + 1, right = numbers.length - 1;
            while(left < right) {
                int mid = (left + right) / 2;
                if(numbers[mid] == tmp) {
                    res[1] = mid + 1;
                    return res;
                } else if(numbers[mid] > tmp) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            if(left < numbers.length && numbers[left] == tmp) {
                res[1] = left + 1;
                return res;
            }
        }

        return res;
    }
    public int [] twoSum(int []num, int targets) {
        int [] indice = new int[2];
        if(num == null || num.length < 2) return indice;
        int left = 0, right = num.length - 1;
        while(left < right) {
            int v = num[left] + num[right];
            if(v == targets) {
                indice[0] = left + 1;
                indice[1] = right + 1;
            } else if(v > targets) {
                right --;
            } else {
                left ++;
            }
        }
        return indice;
    }
}