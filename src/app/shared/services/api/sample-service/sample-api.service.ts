import { Injectable, Inject } from '@angular/core';
import { RestClientProvider } from 'src/app/core/rest-client-provider/rest-client-provider';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SampleApiService extends RestClientProvider {
  constructor(@Inject(HttpClient) public httpClient) {
    super( httpClient,  'api-1');
  }
  /*
  downloadResults(fileId: string): Observable<HttpResponse<Blob>> {
    const params = new HttpParams().set('fileId', fileId);
    return <Observable<HttpResponse<Blob>>>
    this.get(`${this.apiEndpoints['api-1'].sampleSearch}`, { observe: 'response', responseType: 'blob', params: params });
  }
  uploadBatchFiles(fileList: File[], batchInfoModel: string): Observable<BatchInfoModel> {
    const formdata: FormData = new FormData();
    for (const file of fileList) {
      formdata.append('batchFiles', file);
    }
    formdata.append('metadata', batchInfoModel);
    return <Observable<BatchInfoModel>>this.post(`createBatch`, formdata);
  }
  getAllBatchFiles(batchRequest: BatchDataModel): Observable<CertFileTracker[]> { // getAll
    return <Observable<CertFileTracker[]>>this.post(`allocations/batchFileLobInfo/findBatchFiles`, batchRequest);
  }
  editCertFile(certFile: CertFileTracker): Observable<CertFileTracker> {
    return <Observable<CertFileTracker>>this.post(`allocations/batchFileEvaluationResultReviews`, certFile);
  }
  uploadClaimComboDataFile(metadata: ComboFileMetadata, aFile: File): any { // uploadFile
             const formdata: FormData = new FormData();
             formdata.append('file', aFile);
             formdata.append('metadata', JSON.stringify(metadata));
             formdata.append('allocationFileId', metadata.allocationFileId);
             formdata.append('isSkipPageLoad', metadata.isSkipPageLoad + '');
    return <Observable<any>>this.post(`allocations/uploadClaimComboData`, formdata);
  }
  fetchAllComboFiles(id: string): Observable<ClaimComboFile[]> {
    return <Observable<ClaimComboFile[]>>this.get(`allocations/fetchAllComboFiles/${id}`);
  }
  downloadComboFile(fileId: string): Observable<HttpResponse<Blob>> { // downloadFile
      const params = new HttpParams().set('fileId', fileId);
      return <Observable<HttpResponse<Blob>>>this.get(`allocations/downloadComboFile`,
      {observe: 'response', responseType: 'blob', params: params});
  }

  rejectFile(rejectFileModel: RejectFileModel): Observable<RejectFileModel> {
     return <Observable<RejectFileModel>> this.post(`allocations/batchFileEvaluationResultReviews/status`, rejectFileModel);
  }
  getFinancialFilterValues(): Observable<SearchOptionModel> {
    console.log('financial filter values');
    return <Observable<SearchOptionModel>> this.get(`transactions/search/attributes/findFinancialSearchAttributes`);
  }
  getFinancialDataByClaim(claimID: string): Observable<any[]> {
    console.log('by suji getFinancialDataByClaim');
    return <Observable<any[]>>this.get(`financial/financialAnalysis/claimNumber/${claimID}`);
  }
  getFinancialDataByFilter(searchOptions: PPSearchModel): Observable<any[]> {
    console.log('by suji getFinancialDataByFilter');
    return <Observable<any[]>> this.post(`financial/financialAnalysis/`, searchOptions);
  }
  downloadFinancialFile(searchOptions: PPDownloadReqModel): Observable<HttpResponse<Blob>> {
    return <Observable<HttpResponse<Blob>>> this.post(`financial/financialAnalysis/csv`,
     searchOptions, { observe: 'response', responseType: 'blob' });
  }
  getDetailTransactionFilterValues(): Observable<SearchOptionModel> {
    return <Observable<SearchOptionModel>> this.get(`transactions/search/attributes/findSearchAttributes`);
  }
  getBenefitDataByClaim(claimID: string): Observable<any[]> {
    return <Observable<any[]>>this.get(`transactions/detailedTransaction/claimNumber/${claimID}`);
  }
  getBenefitDataByMember(memberID: string): Observable<any[]> {
    return <Observable<any[]>>this.get(`transactions/detailedTransaction/memberId/${memberID}`);
  }
  getBenefitDataByFilter(searchOptions: PPSearchModel): Observable<any[]> {
    return <Observable<any[]>> this.post(`transactions/detailedTransaction/`, searchOptions);
  }
  detailTransactiondownloadFile(searchOptions: PPDownloadReqModel): Observable<HttpResponse<Blob>> {
    return <Observable<HttpResponse<Blob>>> this.post(`transactions/detailedTransaction/csv`,
     searchOptions, { observe: 'response', responseType: 'blob' });
  }
  defectSpinSummary(defectId: string, status: string): Observable<any> {
    return <Observable<any>>this.post(`allocations/defectSpinSummary`, { defectId: defectId, status: status});
  }
  findBatchList(): Observable<RuleBatch[]> {
    return <Observable<RuleBatch[]>> this.get(`files/batches`);
 }
 pushRuleFileToExecute(ruleBatchFileEvaluationDataModel: RuleBatchFileEvaluationDataModel):
  Observable<RuleBatchFileEvaluationDataModel> {
  return <Observable<RuleBatchFileEvaluationDataModel>> this.post(`files/batchFileEvaluation`, ruleBatchFileEvaluationDataModel);
}
fetchRuleSetList(): Observable<RuleSet[]> {
  return <Observable<RuleSet[]>>this.get(`rules/ruleSets`);
}
findFileList(batchId: string): Observable<RuleBatchLob[]> {
  const params = new HttpParams().set('batchId', batchId);
  return <Observable<RuleBatchLob[]>>this.get(`files/batchFileLobs`, { params: params });
}
fetchRuleStatus(): Observable<RuleExecuteStatusDataModel[]> {
  return <Observable<RuleExecuteStatusDataModel[]>>this.get(`files/batchFileEvaluation/onDemand`);
}*/
}
